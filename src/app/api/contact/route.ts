import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import { ConfidentialClientApplication } from '@azure/msal-node';

// Basic sanitization helpers
function sanitize(input: string): string {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Very simple per-IP rate limiter (replace with a durable store in production)
const rateLimitWindowMs = 60_000; // 1 minute
const maxRequestsPerWindow = 5;
const ipHits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string | undefined): boolean {
  if (!ip) return false;
  const now = Date.now();
  const record = ipHits.get(ip);
  if (!record || now - record.windowStart > rateLimitWindowMs) {
    ipHits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  record.count += 1;
  return record.count > maxRequestsPerWindow;
}

// Azure AD configuration
const clientConfig = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID!,
    clientSecret: process.env.AZURE_CLIENT_SECRET!,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
  },
};

// Initialize the MSAL instance
const cca = new ConfidentialClientApplication(clientConfig);

// Create Microsoft Graph client
async function getGraphClient() {
  try {
    const clientCredentialRequest = {
      scopes: ['https://graph.microsoft.com/.default'],
    };

    const response = await cca.acquireTokenByClientCredential(clientCredentialRequest);
    
    if (!response?.accessToken) {
      throw new Error('Failed to acquire access token');
    }

    const graphClient = Client.init({
      authProvider: async (done) => {
        done(null, response.accessToken);
      },
    });

    return graphClient;
  } catch (error) {
    console.error('Error creating Graph client:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Note: tighten CORS as needed; keeping origin reading for future use if required

    // Rate limit
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, company, message, website } = body;

    // Honeypot field: if filled, silently succeed
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Microsoft Graph client
    const graphClient = await getGraphClient();

    // Create email content
    const safeFirst = sanitize(firstName)
    const safeLast = sanitize(lastName)
    const safeEmail = sanitize(email)
    const safeCompany = company ? sanitize(company) : ''
    const safeMessage = sanitize(message)

    const emailSubject = `New Contact Form Submission from ${safeFirst} ${safeLast}`;
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #333; margin-bottom: 20px;">Contact Details:</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057; width: 120px;">Name:</td>
              <td style="padding: 12px 0; color: #6c757d;">${safeFirst} ${safeLast}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Email:</td>
              <td style="padding: 12px 0; color: #6c757d;"><a href="mailto:${safeEmail}" style="color: #007bff; text-decoration: none;">${safeEmail}</a></td>
            </tr>
            ${safeCompany ? `
            <tr style="border-bottom: 1px solid #dee2e6;">
              <td style="padding: 12px 0; font-weight: bold; color: #495057;">Company:</td>
              <td style="padding: 12px 0; color: #6c757d;">${safeCompany}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #495057; vertical-align: top;">Message:</td>
              <td style="padding: 12px 0; color: #6c757d; line-height: 1.6;">${safeMessage.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: #e9ecef; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #495057; font-style: italic;">
              This message was sent through the NebulaHost website contact form.
            </p>
            <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Prepare email message
    const mailOptions = {
      message: {
        subject: emailSubject,
        body: {
          contentType: 'HTML',
          content: emailContent,
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.CONTACT_EMAIL!,
            },
          },
        ],
        from: {
          emailAddress: {
            address: process.env.CONTACT_EMAIL!,
          },
        },
        replyTo: [
          {
            emailAddress: {
              address: safeEmail,
              name: `${safeFirst} ${safeLast}`,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    // Send email via Microsoft Graph
    await graphClient.api(`/users/${process.env.CONTACT_EMAIL}/sendMail`).post(mailOptions);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Handle preflight OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
} 