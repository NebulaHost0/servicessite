import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // You'll need to add this to your .env.local
})

// Verify configuration
if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
  process.exit(1)
}

if (!process.env.SANITY_API_TOKEN) {
  console.error('❌ SANITY_API_TOKEN is not set in .env.local')
  console.log('📝 Please add your Sanity API token to .env.local')
  console.log('   You can get it from: https://sanity.io/manage')
  process.exit(1)
}

console.log('✅ Environment variables loaded successfully')
console.log(`📁 Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
console.log(`📊 Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}`)

// Sample authors
const authors = [
  {
    _type: 'author',
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio: 'Technology leader with over 15 years of experience in cloud computing, digital transformation, and enterprise solutions.'
  },
  {
    _type: 'author',
    name: 'David Johnson',
    role: 'Chief Technology Officer',
    bio: 'Cloud architecture expert with extensive experience in enterprise infrastructure and security.'
  },
  {
    _type: 'author',
    name: 'Maria Rodriguez',
    role: 'VP of Client Success',
    bio: 'Dedicated to ensuring exceptional client experiences and successful project outcomes.'
  },
  {
    _type: 'author',
    name: 'Michael Chen',
    role: 'Senior Cloud Engineer',
    bio: 'Specializes in cloud migrations and infrastructure optimization with focus on Office 365 and Azure.'
  },
  {
    _type: 'author',
    name: 'Jennifer Park',
    role: 'Cloud Solutions Architect',
    bio: 'Expert in multi-cloud strategies and cost optimization across AWS, Azure, and Google Cloud platforms.'
  },
  {
    _type: 'author',
    name: 'Robert Singh',
    role: 'Cybersecurity Specialist',
    bio: 'Focused on enterprise security, threat detection, and compliance frameworks for modern businesses.'
  }
]

// Sample categories
const categories = [
  {
    _type: 'category',
    title: 'Cloud Solutions',
    slug: { current: 'cloud-solutions' },
    description: 'Articles about cloud computing, migration strategies, and infrastructure optimization.'
  },
  {
    _type: 'category',
    title: 'Cybersecurity',
    slug: { current: 'cybersecurity' },
    description: 'Security best practices, threat protection, and compliance guidance.'
  },
  {
    _type: 'category',
    title: 'Digital Transformation',
    slug: { current: 'digital-transformation' },
    description: 'Modern business strategies and technology adoption insights.'
  },
  {
    _type: 'category',
    title: 'Office 365',
    slug: { current: 'office-365' },
    description: 'Microsoft 365 and Google Workspace tips, migration guides, and best practices.'
  },
  {
    _type: 'category',
    title: 'Web Hosting',
    slug: { current: 'web-hosting' },
    description: 'Web hosting solutions, domain management, and website optimization.'
  }
]

// Sample blog posts
const blogPosts = [
  {
    _type: 'post',
    title: 'The Future of Cloud Computing in 2024: Trends Every Business Should Know',
    slug: { current: 'future-of-cloud-computing-2024' },
    excerpt: 'Discover the emerging cloud technologies and trends that will shape business operations in 2024 and beyond.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cloud computing continues to evolve at a rapid pace, and 2024 promises to bring even more transformative changes to how businesses operate and scale. As we look ahead, several key trends are emerging that will shape the future of cloud technology and business operations.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '1. Multi-Cloud and Hybrid Cloud Adoption'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and leverage the best features from different cloud providers. This approach offers greater flexibility, improved disaster recovery capabilities, and enhanced performance optimization.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '2. Edge Computing Integration'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Edge computing is becoming more tightly integrated with cloud services, bringing computation closer to data sources. This reduces latency, improves performance, and enables real-time processing for IoT devices and applications.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: '5 min read',
    featured: true,
    tags: ['Cloud Computing', 'Technology Trends', 'Business Strategy', 'Digital Transformation']
  },
  {
    _type: 'post',
    title: 'Essential Cybersecurity Best Practices for Small Businesses',
    slug: { current: 'cybersecurity-best-practices-2024' },
    excerpt: 'Protect your business from cyber threats with these essential security measures every small business should implement.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'In today\'s digital landscape, cybersecurity is not just a concern for large enterprises. Small and medium-sized businesses are increasingly becoming targets for cybercriminals, making robust security measures essential for survival and growth.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Password Management and Multi-Factor Authentication'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implementing strong password policies and multi-factor authentication (MFA) is your first line of defense against unauthorized access. Use password managers to generate and store complex passwords, and enable MFA on all business accounts.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-10T09:00:00Z',
    readTime: '4 min read',
    featured: false,
    tags: ['Cybersecurity', 'Small Business', 'Security Best Practices', 'Data Protection']
  },
  {
    _type: 'post',
    title: 'Complete Guide to Digital Transformation for Modern Businesses',
    slug: { current: 'digital-transformation-guide' },
    excerpt: 'Learn how to successfully navigate digital transformation and modernize your business operations for competitive advantage.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Digital transformation is no longer optional for businesses that want to remain competitive. It\'s about fundamentally changing how your organization operates and delivers value to customers through technology adoption and process optimization.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Understanding Digital Transformation'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Digital transformation involves integrating digital technology into all areas of business, resulting in fundamental changes to how businesses operate and deliver value to customers.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-08T11:00:00Z',
    readTime: '6 min read',
    featured: false,
    tags: ['Digital Transformation', 'Business Strategy', 'Technology Adoption', 'Process Optimization']
  },
  {
    _type: 'post',
    title: '5 Critical Steps for a Smooth Office 365 Migration',
    slug: { current: 'office-365-migration-tips' },
    excerpt: 'Ensure your Office 365 migration goes smoothly with these expert tips and best practices from our implementation team.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Migrating to Office 365 can seem daunting, but with proper planning and execution, it can be a smooth transition that significantly improves your team\'s productivity and collaboration capabilities.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Step 1: Assessment and Planning'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Before beginning your migration, conduct a thorough assessment of your current email system, user accounts, and data volumes. This helps determine the best migration approach and timeline.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-05T14:00:00Z',
    readTime: '3 min read',
    featured: false,
    tags: ['Office 365', 'Email Migration', 'Microsoft 365', 'Business Productivity']
  },
  {
    _type: 'post',
    title: '10 Proven Strategies to Optimize Your Cloud Costs',
    slug: { current: 'cloud-cost-optimization-strategies' },
    excerpt: 'Reduce your cloud spending by up to 40% with these proven cost optimization strategies and best practices.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Cloud cost optimization is crucial for maximizing the ROI of your cloud investments. With the right strategies, businesses can significantly reduce their cloud spending while maintaining or even improving performance.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Right-Sizing Your Resources'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'One of the most effective ways to reduce cloud costs is to ensure your resources are properly sized for your actual needs. Regular monitoring and adjustment of instance sizes can lead to significant savings.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-03T08:00:00Z',
    readTime: '7 min read',
    featured: false,
    tags: ['Cloud Computing', 'Cost Optimization', 'AWS', 'Azure', 'Resource Management']
  },
  {
    _type: 'post',
    title: 'Securing Remote Work: A Complete IT Security Checklist',
    slug: { current: 'remote-work-security-guide' },
    excerpt: 'Everything you need to know about securing remote work environments and protecting your business data.',
    content: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The shift to remote work has created new security challenges that businesses must address to protect their data and systems. This comprehensive guide covers essential security measures for remote work environments.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'Secure Network Connections'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Implementing VPN connections and ensuring secure Wi-Fi practices are fundamental to remote work security. All remote connections should be encrypted and monitored.'
          }
        ]
      }
    ],
    publishedAt: '2024-01-01T12:00:00Z',
    readTime: '5 min read',
    featured: false,
    tags: ['Cybersecurity', 'Remote Work', 'VPN', 'Data Protection', 'IT Security']
  }
]

async function populateSanity() {
  try {
    console.log('🚀 Starting Sanity population...')

    // Create authors first
    console.log('📝 Creating authors...')
    const createdAuthors = []
    for (const author of authors) {
      const result = await client.create(author)
      createdAuthors.push(result)
      console.log(`✅ Created author: ${author.name}`)
    }

    // Create categories
    console.log('📂 Creating categories...')
    const createdCategories = []
    for (const category of categories) {
      const result = await client.create(category)
      createdCategories.push(result)
      console.log(`✅ Created category: ${category.title}`)
    }

    // Create blog posts with references
    console.log('📄 Creating blog posts...')
    const categoryMap: { [key: string]: string } = {
      'Cloud Solutions': createdCategories.find(c => c.title === 'Cloud Solutions')?._id || '',
      'Cybersecurity': createdCategories.find(c => c.title === 'Cybersecurity')?._id || '',
      'Digital Transformation': createdCategories.find(c => c.title === 'Digital Transformation')?._id || '',
      'Office 365': createdCategories.find(c => c.title === 'Office 365')?._id || ''
    }

    const authorMap: { [key: string]: string } = {
      'Sarah Mitchell': createdAuthors.find(a => a.name === 'Sarah Mitchell')?._id || '',
      'Robert Singh': createdAuthors.find(a => a.name === 'Robert Singh')?._id || '',
      'Maria Rodriguez': createdAuthors.find(a => a.name === 'Maria Rodriguez')?._id || '',
      'Michael Chen': createdAuthors.find(a => a.name === 'Michael Chen')?._id || '',
      'Jennifer Park': createdAuthors.find(a => a.name === 'Jennifer Park')?._id || ''
    }

    const postAssignments = [
      { post: blogPosts[0], author: 'Sarah Mitchell', category: 'Cloud Solutions' },
      { post: blogPosts[1], author: 'Robert Singh', category: 'Cybersecurity' },
      { post: blogPosts[2], author: 'Maria Rodriguez', category: 'Digital Transformation' },
      { post: blogPosts[3], author: 'Michael Chen', category: 'Office 365' },
      { post: blogPosts[4], author: 'Jennifer Park', category: 'Cloud Solutions' },
      { post: blogPosts[5], author: 'Robert Singh', category: 'Cybersecurity' }
    ]

    for (const assignment of postAssignments) {
      const postData = {
        ...assignment.post,
        author: {
          _type: 'reference',
          _ref: authorMap[assignment.author]
        },
        category: {
          _type: 'reference',
          _ref: categoryMap[assignment.category]
        }
      }

      const result = await client.create(postData)
      console.log(`✅ Created blog post: ${assignment.post.title}`)
    }

    console.log('🎉 Successfully populated Sanity with mock data!')
    console.log(`📊 Created: ${createdAuthors.length} authors, ${createdCategories.length} categories, ${postAssignments.length} blog posts`)
    
  } catch (error) {
    console.error('❌ Error populating Sanity:', error)
  }
}

// Run the script
populateSanity() 