import Layout from "@/components/layout";
import { BookOpen, Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { client, queries, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog - NebulaHost",
  description: "Stay updated with the latest insights on IT consulting, cloud solutions, cybersecurity, and digital transformation from NebulaHost experts.",
  keywords: "IT blog, technology insights, cloud computing, cybersecurity, digital transformation, tech tutorials",
};

// Fetch data from Sanity
async function getBlogData() {
  try {
    const [blogPosts, featuredPost, categories] = await Promise.all([
      client.fetch(queries.allPosts),
      client.fetch(queries.featuredPost),
      client.fetch(queries.categories)
    ]);

    return {
      blogPosts: blogPosts || [],
      featuredPost: featuredPost || null,
      categories: categories || []
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      blogPosts: [],
      featuredPost: null,
      categories: []
    };
  }
}

export default async function BlogPage() {
  const { blogPosts, featuredPost, categories } = await getBlogData();

  // Prepare categories for display
  const allCategories = ["All Posts", ...categories.map((cat: any) => cat.title)];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Technology and Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-blue mx-auto mb-8">
              <BookOpen className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Tech Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights on cloud computing, cybersecurity, 
              digital transformation, and the latest technology trends shaping business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#featured" className="btn-primary pulse-on-hover flex items-center justify-center">
                Read Latest Posts
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary flex items-center justify-center">
                <Search className="mr-3 h-5 w-5" />
                Search Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section id="featured" className="py-24 bg-gray-900 section-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Featured Article</h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our latest insights on technology trends and best practices
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto animate-fadeInUp">
              <Link href={`/blog/${featuredPost.slug.current}`} className="group">
                <div className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <Image
                      src={featuredPost.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12">
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full mr-4">
                        {featuredPost.category?.title || "Tech Insights"}
                      </span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author?.name || "NebulaHost Team"}</span>
                      <span className="text-gray-500">•</span>
                      <span className="ml-4">{featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6 group-hover:text-blue-400 transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Latest Articles</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert insights and practical guides to help you navigate the technology landscape
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  category === "All Posts" 
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600"
                }`}
              >
                <Tag className="h-4 w-4 inline mr-2" />
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: any, index: number) => (
              <Link 
                key={post._id || post.slug?.current} 
                href={`/blog/${post.slug.current}`}
                className={`group ${
                  index === 0 ? "animate-slideInLeft" :
                  index === 1 ? "animate-fadeInUp" :
                  index === 2 ? "animate-slideInRight" :
                  "animate-fadeInUp"
                }`}
              >
                <article className="service-card h-full flex flex-col hover:scale-105 transition-transform duration-300">
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                    <Image
                      src={post.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category?.title || "Tech"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className="text-gray-500">•</span>
                      <span className="ml-4">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-100 mb-4 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author?.name || "NebulaHost Team"}</span>
                      </div>
                      
                      <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors duration-300">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16 animate-fadeInUp">
            <button className="btn-primary pulse-on-hover">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Tech Insights</h3>
            <p className="text-xl mb-8 opacity-90">
              Get the latest technology insights, best practices, and industry trends delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-70 mt-4">
              Join 5,000+ professionals who trust our insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 