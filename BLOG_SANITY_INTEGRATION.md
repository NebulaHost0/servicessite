# Blog with Sanity Integration Guide

This guide explains how to integrate Sanity CMS with your NebulaHost blog pages. The blog structure is already set up with the proper design patterns matching your site.

## Blog Structure Created

```
src/app/blog/
├── page.tsx              # Main blog listing page
└── [slug]/
    └── page.tsx          # Dynamic blog post pages
```

## Current Features

### Blog Listing Page (`/blog`)
- Hero section with search functionality
- Featured post highlight
- Category filtering
- Blog posts grid with pagination
- Newsletter subscription
- Responsive design with animations

### Individual Blog Posts (`/blog/[slug]`)
- Dynamic routing based on post slug
- SEO metadata generation
- Article content with proper typography
- Sidebar with table of contents
- Author bio section
- Related posts
- Social sharing buttons
- Breadcrumb navigation

## Sanity Integration Steps

### 1. Install Sanity Dependencies

```bash
npm install @sanity/client @sanity/image-url
npm install -D @sanity/types
```

### 2. Create Sanity Schemas

Create the following schemas in your Sanity Studio:

**Blog Post Schema (`schemas/post.js`):**
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

**Author Schema (`schemas/author.js`):**
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

**Category Schema (`schemas/category.js`):**
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

### 3. Create Sanity Client

Create `lib/sanity.js`:
```javascript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
```

### 4. Environment Variables

Add to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 5. Update Blog Pages

**Update `src/app/blog/page.tsx`:**

Replace the mock data section with:
```javascript
import { client } from '@/lib/sanity'

async function getBlogPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "author": author->name,
      "category": category->title,
      publishedAt,
      readTime,
      featured,
      "image": image.asset->url,
      tags
    }
  `)
  return posts
}

async function getFeaturedPost() {
  const post = await client.fetch(`
    *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      excerpt,
      "author": author->name,
      "category": category->title,
      publishedAt,
      readTime,
      "image": image.asset->url
    }
  `)
  return post
}

export default async function BlogPage() {
  const [blogPosts, featuredPost] = await Promise.all([
    getBlogPosts(),
    getFeaturedPost()
  ])
  
  // Rest of component...
}
```

**Update `src/app/blog/[slug]/page.tsx`:**

Replace the `getBlogPost` function with:
```javascript
import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getBlogPost(slug: string) {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      excerpt,
      "author": author->{name, bio, role, "image": image.asset->url},
      "category": category->title,
      publishedAt,
      readTime,
      "image": image.asset->url,
      tags
    }
  `, { slug })
  
  return post
}

// In the component, replace dangerouslySetInnerHTML with:
<PortableText value={post.content} />
```

### 6. Portable Text Components

Create `components/PortableTextComponents.tsx`:
```javascript
export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <img
          src={urlFor(value).url()}
          alt={value.alt || ''}
          className="w-full rounded-xl"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-100 mt-8 mb-4 border-b-2 border-blue-600/30 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-100 mt-6 mb-3">
        {children}
      </h3>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}
```

## Features Ready for Sanity

- ✅ Dynamic routing with slug-based URLs
- ✅ SEO metadata generation
- ✅ Image optimization ready
- ✅ Category filtering
- ✅ Author management
- ✅ Featured posts
- ✅ Tags system
- ✅ Rich text content with PortableText
- ✅ Related posts queries
- ✅ Search functionality (ready for implementation)

## Next Steps

1. Set up your Sanity Studio with the provided schemas
2. Add the environment variables
3. Install the required dependencies
4. Replace the mock data with actual Sanity queries
5. Configure PortableText for rich content rendering
6. Test the blog functionality
7. Add content through Sanity Studio

## Additional Features to Consider

- **Search**: Implement full-text search with Sanity's search capabilities
- **Comments**: Add comment system integration
- **Newsletter**: Connect newsletter signup to your email service
- **Analytics**: Add reading time calculation and view tracking
- **RSS Feed**: Generate RSS feed from Sanity content
- **Preview Mode**: Implement Sanity preview mode for drafts

The blog structure follows your site's design patterns and is fully responsive with smooth animations and professional styling. 