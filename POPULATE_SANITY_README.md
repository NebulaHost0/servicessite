# Populate Sanity with Mock Data

This guide will help you automatically populate your Sanity dataset with sample blog content.

## 📋 Prerequisites

Before running the population script, you need:

1. **Sanity Project Set Up**: Your Sanity project should be created and configured
2. **Environment Variables**: Your `.env.local` should have the Sanity project details
3. **API Token**: You'll need a Sanity API token with write permissions

## 🔑 Step 1: Get Your Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it something like "Blog Population Script"
6. Set permissions to **Editor** (or higher)
7. Copy the token

## 📝 Step 2: Update Environment Variables

Add your API token to `.env.local`:

```env
# Your existing variables
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Add this new token
SANITY_API_TOKEN=your_api_token_here
```

## 🛠️ Step 3: Set Up Sanity Schemas

Before populating data, make sure you have the correct schemas in your Sanity Studio. Create these files in your Sanity project:

### `schemas/author.js`
```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
```

### `schemas/category.js`
```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

### `schemas/post.js`
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      initialValue: '5 min read'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
```

### Update `schemas/index.js`
```javascript
import author from './author'
import category from './category'
import post from './post'

export const schemaTypes = [author, category, post]
```

## 🚀 Step 4: Install Dependencies and Run Script

1. **Install the required dependency:**
   ```bash
   npm install tsx
   ```

2. **Run the population script:**
   ```bash
   npm run populate-sanity
   ```

## 📊 What Gets Created

The script will create:

### **6 Authors:**
- Sarah Mitchell (CEO)
- David Johnson (CTO)
- Maria Rodriguez (VP Client Success)
- Michael Chen (Senior Cloud Engineer)
- Jennifer Park (Cloud Solutions Architect)
- Robert Singh (Cybersecurity Specialist)

### **5 Categories:**
- Cloud Solutions
- Cybersecurity
- Digital Transformation
- Office 365
- Web Hosting

### **6 Blog Posts:**
1. **The Future of Cloud Computing in 2024** (Featured)
2. **Essential Cybersecurity Best Practices for Small Businesses**
3. **Complete Guide to Digital Transformation for Modern Businesses**
4. **5 Critical Steps for a Smooth Office 365 Migration**
5. **10 Proven Strategies to Optimize Your Cloud Costs**
6. **Securing Remote Work: A Complete IT Security Checklist**

## ✅ Verification

After running the script:

1. **Check Sanity Studio**: Go to your Sanity Studio and verify the content was created
2. **Test Your Blog**: Visit `/blog` on your website to see the populated content
3. **Check Individual Posts**: Click on posts to test the individual blog pages

## 🔧 Troubleshooting

### "API token not found" Error
- Make sure `SANITY_API_TOKEN` is correctly set in `.env.local`
- Verify the token has Editor permissions in Sanity

### "Schema validation failed" Error
- Ensure all schemas are properly set up in your Sanity Studio
- Deploy your schema changes to Sanity

### "Project not found" Error
- Double-check your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` values

## 🧹 Clean Up (Optional)

If you want to remove all the sample data later:

1. Go to your Sanity Studio
2. Use the bulk actions to delete the sample content
3. Or reset your dataset from the Sanity management console

## 🎉 Success!

Once the script completes successfully, you'll have a fully populated blog with realistic content that matches your site's design and categories. You can now:

- Test all blog functionality
- Use the sample content as templates for real posts
- Show clients or stakeholders a working blog with content 