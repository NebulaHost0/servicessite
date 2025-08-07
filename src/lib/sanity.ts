import { createClient, type ClientConfig } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const baseConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
}

/**
 * Returns a configured Sanity client. When `withToken` is true and a token is
 * available, the client can read drafts (for preview mode).
 */
export function getSanityClient(withToken: boolean = false) {
  const token = withToken ? process.env.SANITY_READ_TOKEN : undefined
  return createClient({ ...baseConfig, token })
}

export const client = getSanityClient(false)

const builder = imageUrlBuilder(getSanityClient(false))

export const urlFor = (source: SanityImageSource) => builder.image(source)

// Sanity image type
export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
  _type: 'image'
}

// Portable Text content type
export interface PortableTextBlock {
  _type: string
  children?: Array<{
    _type: string
    text: string
    marks?: string[]
  }>
  style?: string
  listItem?: string
  level?: number
}

// Blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  author: {
    name: string
    bio?: string
    role?: string
    image?: SanityImage
  }
  category: {
    title: string
    slug: {
      current: string
    }
  }
  tags?: string[]
  image: SanityImage
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