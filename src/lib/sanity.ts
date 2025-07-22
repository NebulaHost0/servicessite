import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Set to true in production for better performance
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: any[]
  author: {
    name: string
    bio?: string
    role?: string
    image?: any
  }
  category: {
    title: string
    slug: {
      current: string
    }
  }
  tags?: string[]
  image: any
  featured?: boolean
  publishedAt: string
  readTime: string
}

// Sanity queries
export const queries = {
  // Get all blog posts
  allPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "author": author->{name, role},
      "category": category->{title, slug},
      publishedAt,
      readTime,
      featured,
      "image": image.asset->url,
      tags
    }
  `,

  // Get featured post
  featuredPost: `
    *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
      _id,
      title,
      slug,
      excerpt,
      "author": author->{name, role},
      "category": category->{title, slug},
      publishedAt,
      readTime,
      "image": image.asset->url
    }
  `,

  // Get single post by slug
  postBySlug: `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      excerpt,
      "author": author->{name, bio, role, "image": image.asset->url},
      "category": category->{title, slug},
      publishedAt,
      readTime,
      "image": image.asset->url,
      tags
    }
  `,

  // Get related posts (same category, excluding current post)
  relatedPosts: `
    *[_type == "post" && category->title == $categoryTitle && _id != $currentPostId] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      "author": author->{name},
      "category": category->{title},
      publishedAt,
      readTime,
      "image": image.asset->url
    }
  `,

  // Get all categories
  categories: `
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug
    }
  `,

  // Get posts by category
  postsByCategory: `
    *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "author": author->{name, role},
      "category": category->{title, slug},
      publishedAt,
      readTime,
      "image": image.asset->url,
      tags
    }
  `
} 