import Layout from "@/components/layout";
import { BookOpen, Download, Eye, Clock, ArrowRight, CheckCircle, Star, TrendingUp, Shield, Cloud, Database, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepapers - NebulaHost",
  description: "Access our comprehensive collection of technology whitepapers, research reports, and industry insights. Download expert knowledge on cloud computing, cybersecurity, and digital transformation.",
  keywords: "whitepapers, research reports, technology insights, cloud computing, cybersecurity, digital transformation, IT strategy",
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Complete Guide to Cloud Migration Strategy",
      description: "A comprehensive 45-page guide covering planning, execution, and optimization of enterprise cloud migrations.",
      author: "David Chen, Cloud Solutions Architect",
      publishDate: "March 2024",
      pages: 45,
      downloads: 2847,
      category: "Cloud Computing",
      level: "Intermediate",
      readTime: "25 min",
      icon: Cloud,
      color: "blue",
      highlights: [
        "Step-by-step migration methodology",
        "Cost optimization strategies",
        "Risk mitigation frameworks",
        "Real-world case studies"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Zero Trust Security Architecture: Implementation Blueprint",
      description: "Detailed technical guide for implementing Zero Trust security principles in modern enterprise environments.",
      author: "Sarah Martinez, Cybersecurity Director",
      publishDate: "February 2024", 
      pages: 38,
      downloads: 1923,
      category: "Cybersecurity",
      level: "Advanced",
      readTime: "20 min",
      icon: Shield,
      color: "green",
      highlights: [
        "Zero Trust principles and frameworks",
        "Identity and access management",
        "Network segmentation strategies",
        "Compliance and governance"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Digital Transformation ROI: Measuring Success in the Digital Age",
      description: "Learn how to quantify and maximize the return on investment for your digital transformation initiatives.",
      author: "Michael Rodriguez, Digital Strategy Lead",
      publishDate: "January 2024",
      pages: 32,
      downloads: 3156,
      category: "Digital Strategy",
      level: "Beginner",
      readTime: "18 min",
      icon: TrendingUp,
      color: "purple",
      highlights: [
        "ROI measurement frameworks",
        "Key performance indicators",
        "Business value assessment",
        "Transformation roadmaps"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
    },
    {
      title: "Modern Data Architecture: Building Scalable Analytics Platforms",
      description: "Comprehensive guide to designing and implementing modern data architectures for enterprise analytics.",
      author: "Jennifer Liu, Data Architect",
      publishDate: "December 2023",
      pages: 52,
      downloads: 1745,
      category: "Data & Analytics",
      level: "Advanced",
      readTime: "30 min",
      icon: Database,
      color: "teal",
      highlights: [
        "Data lake and warehouse design",
        "Real-time analytics platforms",
        "Data governance frameworks",
        "ML/AI integration strategies"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Performance Optimization for Modern Web Applications",
      description: "Technical deep-dive into optimizing web application performance, scalability, and user experience.",
      author: "Alex Thompson, Performance Engineer",
      publishDate: "November 2023",
      pages: 41,
      downloads: 2234,
      category: "Web Performance",
      level: "Intermediate",
      readTime: "22 min",
      icon: Zap,
      color: "orange",
      highlights: [
        "Performance monitoring strategies",
        "Caching and CDN optimization",
        "Database query optimization",
        "Frontend performance tuning"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
    },
    {
      title: "The Future of Hybrid Work: IT Infrastructure Requirements",
      description: "Essential guide for IT leaders planning infrastructure to support permanent hybrid work environments.",
      author: "Robert Kim, Infrastructure Architect",
      publishDate: "October 2023",
      pages: 36,
      downloads: 2891,
      category: "Infrastructure",
      level: "Beginner",
      readTime: "19 min",
      icon: Star,
      color: "indigo",
      highlights: [
        "Hybrid work technology stack",
        "Security considerations",
        "Collaboration tools evaluation",
        "Cost-benefit analysis"
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-600", icon: "text-blue-600", border: "border-blue-500", gradient: "from-blue-600 to-blue-700" },
      green: { bg: "bg-green-600", icon: "text-green-600", border: "border-green-500", gradient: "from-green-600 to-green-700" },
      purple: { bg: "bg-purple-600", icon: "text-purple-600", border: "border-purple-500", gradient: "from-purple-600 to-purple-700" },
      orange: { bg: "bg-orange-600", icon: "text-orange-600", border: "border-orange-500", gradient: "from-orange-600 to-orange-700" },
      teal: { bg: "bg-teal-600", icon: "text-teal-600", border: "border-teal-500", gradient: "from-teal-600 to-teal-700" },
      indigo: { bg: "bg-indigo-600", icon: "text-indigo-600", border: "border-indigo-500", gradient: "from-indigo-600 to-indigo-700" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2128&q=80" 
            alt="Research and Documentation"
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
              <span className="gradient-text">Whitepapers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Access cutting-edge research, industry insights, and expert knowledge to stay ahead of technology trends. 
              Download our comprehensive collection of technical guides and strategic frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary pulse-on-hover flex items-center justify-center">
                Browse Collection
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="btn-secondary">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Knowledge at Your Fingertips</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by thousands of IT professionals and business leaders worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">50+</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive whitepapers and research reports available
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-green mx-auto">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">100K+</h3>
              <p className="text-gray-300 leading-relaxed">
                Total downloads by technology professionals worldwide
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-purple mx-auto">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">4.8/5</h3>
              <p className="text-gray-300 leading-relaxed">
                Average rating from readers who found our content valuable
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-orange mx-auto">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">Monthly</h3>
              <p className="text-gray-300 leading-relaxed">
                Fresh content published by our team of industry experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Research Documents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Featured Research</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dive deep into the latest technology trends and best practices with our expert-authored content.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => {
              const colors = getColorClasses(paper.color);
              const IconComponent = paper.icon;
              
              return (
                <div key={index} className="glass-card p-8 rounded-3xl animate-fadeInUp hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className={`icon-container-${paper.color} mr-4 flex-shrink-0`}>
                      <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} text-white`}>
                          {paper.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(paper.level)}`}>
                          {paper.level}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">{paper.title}</h3>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <img 
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center text-white text-sm space-x-4">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {paper.readTime}
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {paper.pages} pages
                        </div>
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {paper.downloads.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{paper.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-100 mb-3">What You'll Learn</h4>
                    <div className="space-y-2">
                      {paper.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">By {paper.author}</p>
                        <p className="text-gray-500 text-xs">{paper.publishDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${colors.gradient} text-white hover:opacity-90 transform hover:scale-105 flex items-center justify-center`}>
                        <Download className="h-5 w-5 mr-2" />
                        Download PDF
                      </button>
                      <button className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-all duration-300">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Browse by Category</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find the exact content you need organized by technology domain and expertise area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cloud Computing", count: "12 Papers", icon: "☁️", description: "Migration strategies, optimization, and best practices" },
              { name: "Cybersecurity", count: "8 Papers", icon: "🔒", description: "Security frameworks, threat analysis, and compliance" },
              { name: "Digital Transformation", count: "10 Papers", icon: "🚀", description: "Strategy, implementation, and change management" },
              { name: "Data & Analytics", count: "7 Papers", icon: "📊", description: "Modern architectures and analytics platforms" },
              { name: "Infrastructure", count: "9 Papers", icon: "🏗️", description: "Modern infrastructure and hybrid environments" },
              { name: "Web Performance", count: "6 Papers", icon: "⚡", description: "Optimization techniques and monitoring strategies" }
            ].map((category, index) => (
              <div key={index} className="service-card animate-fadeInUp text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{category.name}</h3>
                <p className="text-blue-400 mb-3 font-medium">{category.count}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Stay Updated</h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Be the first to receive our latest research, insights, and whitepapers. 
              Join thousands of technology professionals in our community.
            </p>
            
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                No spam, unsubscribe at any time. New content monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Research?</h3>
            <p className="text-xl mb-8 opacity-90">
              Our experts can create custom whitepapers and research reports tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Request Custom Research
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105">
                Speak with Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 