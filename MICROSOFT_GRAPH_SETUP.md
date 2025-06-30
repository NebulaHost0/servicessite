# Microsoft Graph Integration Setup Guide

## Prerequisites

Your contact form is now configured to send emails through Microsoft Graph API to your Office 365 email. To complete the setup, you need to configure Azure AD and environment variables.

## Step 1: Azure AD App Registration

1. **Go to Azure Portal**: Visit [https://portal.azure.com](https://portal.azure.com)

2. **Navigate to Azure Active Directory** → **App registrations** → **New registration**

3. **Configure the application**:
   - Name: `NebulaHost Contact Form`
   - Supported account types: `Accounts in this organizational directory only`
   - Redirect URI: Leave blank (not needed for server-to-server)

4. **Note the Application Details**:
   - Copy the **Application (client) ID**
   - Copy the **Directory (tenant) ID**

## Step 2: Create Client Secret

1. In your app registration, go to **Certificates & secrets**
2. Click **New client secret**
3. Add description: `NebulaHost Contact Form Secret`
4. Choose expiration (24 months recommended)
5. **Copy the secret value immediately** (it won't be shown again)

## Step 3: Configure API Permissions

1. Go to **API permissions** in your app registration
2. Click **Add a permission**
3. Select **Microsoft Graph** → **Application permissions**
4. Add these permissions:
   - `Mail.Send` (Send mail as any user)
   - `User.Read.All` (Read all users' full profiles)
5. Click **Grant admin consent** for your organization

## Step 4: Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Microsoft Graph / Azure AD Configuration
AZURE_CLIENT_ID=your_application_client_id_here
AZURE_CLIENT_SECRET=your_client_secret_here
AZURE_TENANT_ID=your_directory_tenant_id_here

# Email Configuration
CONTACT_EMAIL=your-email@yourdomain.com

# NextJS (generate a random string)
NEXTAUTH_SECRET=your_random_secret_string_here
```

### How to get each value:

- **AZURE_CLIENT_ID**: Application (client) ID from Step 1
- **AZURE_CLIENT_SECRET**: Client secret value from Step 2
- **AZURE_TENANT_ID**: Directory (tenant) ID from Step 1
- **CONTACT_EMAIL**: Your Office 365 email address where you want to receive contact form submissions
- **NEXTAUTH_SECRET**: Generate a random string (you can use: `openssl rand -base64 32`)

## Step 5: Test the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to your contact form** on the homepage

3. **Submit a test message** and check your Office 365 email

## Troubleshooting

### Common Issues:

1. **"Failed to acquire access token"**
   - Check that your client ID, secret, and tenant ID are correct
   - Ensure the client secret hasn't expired
   - Verify API permissions are granted

2. **"Property 'me' does not exist"**
   - This has been fixed in the code using `/me/sendMail` API endpoint

3. **"Insufficient privileges"**
   - Ensure `Mail.Send` permission is added and admin consent is granted
   - Check that the CONTACT_EMAIL user has a valid Office 365 license

4. **CORS errors**
   - The API route includes proper CORS headers for local development

### Email Features:

✅ **Professional HTML formatting**
✅ **Contact details in structured table**
✅ **Reply-to set to sender's email**
✅ **Company field (optional)**
✅ **Timestamp included**
✅ **NebulaHost branding**

### Form Features:

✅ **Real-time validation**
✅ **Loading states with spinner**
✅ **Success/error messages**
✅ **Form reset after successful submission**
✅ **Required field indicators**
✅ **Disabled state during submission**

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Client secrets should be rotated regularly
- Use the principle of least privilege for API permissions

## Production Deployment

For production deployment, set these environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables  
- Railway: Project → Variables
- Heroku: Settings → Config Vars

Make sure all variables are set before deploying to production.

---

Your contact form is now ready to send professional emails through Microsoft Graph API! 🚀 