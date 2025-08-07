import Layout from "@/components/layout";
import { Calendar, User, ArrowLeft, Clock, Share2, BookOpen, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { client, queries, urlFor, getSanityClient } from "@/lib/sanity";
import { draftMode } from "next/headers";
import { portableTextComponents } from "@/components/PortableTextComponents";

// Revalidate each post page every 2 minutes
export const revalidate = 120;

// Fetch blog post from Sanity
async function getBlogPost(slug: string) {
  try {
    const { isEnabled: isPreview } = await draftMode()
    const dataClient = isPreview ? getSanityClient(true) : client
    const post = await dataClient.fetch(queries.postBySlug, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch related posts
async function getRelatedPosts(categoryTitle: string, currentPostId: string) {
  try {
    const { isEnabled: isPreview } = await draftMode()
    const dataClient = isPreview ? getSanityClient(true) : client
    const relatedPosts = await dataClient.fetch(queries.relatedPosts, {
      categoryTitle,
      currentPostId
    });
    return relatedPosts || [];
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found - NebulaHost",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} - NebulaHost Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${post.slug.current}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "NebulaHost Team"],
      images: [
        {
          url: post.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <Layout>
        <section className="py-24 bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="icon-container-blue mx-auto mb-8">
              <BookOpen className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Post Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/blog" className="btn-primary pulse-on-hover flex items-center justify-center mx-auto max-w-xs">
              <ArrowLeft className="mr-3 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // Fetch related posts if category exists
  const relatedPosts = post.category?.title 
    ? await getRelatedPosts(post.category.title, post._id)
    : [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"}
            alt={post.title}
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fadeInUp">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </nav>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                {post.category?.title || "Tech Insights"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{post.author?.name || "NebulaHost Team"}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300" aria-label="Share this post">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 animate-fadeInUp">
              <div className="prose prose-lg prose-invert max-w-none">
                {post.content && (
                  <PortableText 
                    value={post.content} 
                    components={portableTextComponents}
                  />
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-100 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag: string) => (
                      <span 
                        key={tag}
                        className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                      >
                        <Tag className="h-4 w-4 inline mr-2" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 animate-slideInRight">
              <div className="sticky top-24 space-y-8">
                {/* Author Bio */}
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-100 mb-4">About the Author</h3>
                  <div className="flex items-center mb-4">
                    {post.author?.image ? (
                      <Image
                        src={urlFor(post.author.image).width(64).height(64).url()}
                        alt={post.author?.name || "Author"}
                        width={64}
                        height={64}
                        className="rounded-full mr-4"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {post.author?.name?.split(' ').map((n: string) => n[0]).join('') || "NT"}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-100">{post.author?.name || "NebulaHost Team"}</h4>
                      <p className="text-gray-400 text-sm">{post.author?.role || "Technology Expert"}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.author?.bio || "Expert in technology solutions and digital transformation with years of industry experience."}
                  </p>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Get the latest tech insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="w-full bg-white text-blue-800 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Related Articles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Continue exploring our latest insights and expert analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: { _id: string; title: string; slug: { current: string }; excerpt: string; category?: { title: string }; publishedAt: string; image?: string }) => (
                <Link 
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`} 
                  className="group animate-fadeInUp"
                >
                  <article className="service-card h-full flex flex-col hover:scale-105 transition-transform duration-300">
                    <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                      <Image
                        src={relatedPost.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedPost.category?.title || "Tech"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed flex-1 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                          Read More
                          <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
} 

// Generate static params to pre-render popular posts
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(queries.allPosts)
    return (posts || []).slice(0, 50).map((p: { slug: { current: string } }) => ({ slug: p.slug.current }))
  } catch {
    return []
  }
}