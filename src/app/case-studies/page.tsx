import Layout from "@/components/layout";
import { FileText, Users, TrendingUp, Clock, CheckCircle, ArrowRight, Star, BarChart, Shield, Cloud, Database, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - NebulaHost",
  description: "Explore real-world success stories and transformative IT solutions delivered by NebulaHost. See how we've helped businesses achieve their digital transformation goals.",
  keywords: "case studies, success stories, IT solutions, digital transformation, cloud migration, cybersecurity, client results",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Global Retail Chain Cloud Migration",
      client: "RetailMax International",
      industry: "Retail",
      challenge: "Legacy infrastructure limitations and 300% traffic growth",
      solution: "Complete AWS cloud migration with auto-scaling and CDN implementation",
      results: [
        "99.9% uptime improvement",
        "60% reduction in infrastructure costs",
        "80% faster page load times",
        "Seamless Black Friday traffic handling"
      ],
      timeline: "4 months",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      category: "Cloud Solutions",
      icon: Cloud,
      color: "blue"
    },
    {
      title: "Healthcare Data Security Overhaul",
      client: "MedSecure Networks",
      industry: "Healthcare",
      challenge: "HIPAA compliance gaps and vulnerability to cyber threats",
      solution: "End-to-end cybersecurity implementation with 24/7 monitoring",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents in 18 months",
        "Advanced threat detection deployed",
        "Staff security training completed"
      ],
      timeline: "6 months",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      category: "Cybersecurity",
      icon: Shield,
      color: "green"
    },
    {
      title: "Manufacturing Digital Transformation",
      client: "TechForge Industries",
      industry: "Manufacturing",
      challenge: "Disconnected systems and manual data processes",
      solution: "Integrated ERP system with IoT sensors and real-time analytics",
      results: [
        "40% increase in operational efficiency",
        "Real-time production monitoring",
        "Predictive maintenance implementation",
        "$2M annual cost savings"
      ],
      timeline: "8 months",
      image: "https://images.unsplash.com/photo-1565514158740-22b1bf9a7a81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      category: "Digital Transformation",
      icon: Database,
      color: "purple"
    },
    {
      title: "Financial Services Office 365 Migration",
      client: "Capital Growth Partners",
      industry: "Financial Services",
      challenge: "Outdated email systems and collaboration inefficiencies",
      solution: "Complete Office 365 migration with SharePoint and Teams integration",
      results: [
        "50% improvement in team collaboration",
        "Advanced compliance features enabled",
        "Mobile workforce capability",
        "Disaster recovery implementation"
      ],
      timeline: "3 months",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2326&q=80",
      category: "Office 365",
      icon: Users,
      color: "orange"
    },
    {
      title: "E-commerce Platform Optimization",
      client: "ElectroMart Online",
      industry: "E-commerce",
      challenge: "High latency, poor mobile performance, and scaling issues",
      solution: "Performance optimization with CDN, caching, and mobile-first design",
      results: [
        "75% faster mobile load times",
        "35% increase in conversion rates",
        "99.95% uptime during peak seasons",
        "Global content delivery optimization"
      ],
      timeline: "5 months",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      category: "Web Performance",
      icon: Zap,
      color: "teal"
    },
    {
      title: "Educational Institution Infrastructure Modernization",
      client: "Riverside University",
      industry: "Education",
      challenge: "Aging infrastructure and remote learning demands",
      solution: "Hybrid cloud infrastructure with enhanced security and scalability",
      results: [
        "100% remote learning capability",
        "Enhanced data security and privacy",
        "Improved student portal performance",
        "Cost-effective infrastructure scaling"
      ],
      timeline: "7 months",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      category: "Infrastructure",
      icon: BarChart,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-600", icon: "text-blue-600", border: "border-blue-500" },
      green: { bg: "bg-green-600", icon: "text-green-600", border: "border-green-500" },
      purple: { bg: "bg-purple-600", icon: "text-purple-600", border: "border-purple-500" },
      orange: { bg: "bg-orange-600", icon: "text-orange-600", border: "border-orange-500" },
      teal: { bg: "bg-teal-600", icon: "text-teal-600", border: "border-teal-500" },
      indigo: { bg: "bg-indigo-600", icon: "text-indigo-600", border: "border-indigo-500" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
            alt="Business Success Analytics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-blue mx-auto mb-8">
              <FileText className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover how we&apos;ve transformed businesses across industries with innovative IT solutions. 
              Real challenges, practical solutions, measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Discuss Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                Download Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Our Impact in Numbers</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Measurable results that speak for themselves across all our client engagements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">95%</h3>
              <p className="text-gray-300 leading-relaxed">
                Average performance improvement across all implementations
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-green mx-auto">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">$50M+</h3>
              <p className="text-gray-300 leading-relaxed">
                Total cost savings delivered to our clients across all projects
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-purple mx-auto">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">3.2 Months</h3>
              <p className="text-gray-300 leading-relaxed">
                Average project timeline from initiation to successful deployment
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-orange mx-auto">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-100 mb-2">99.2%</h3>
              <p className="text-gray-300 leading-relaxed">
                Client satisfaction rate with post-implementation support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Business Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Success Stories</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From startups to enterprise organizations, see how we&apos;ve delivered transformative results.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => {
              const colors = getColorClasses(study.color);
              const IconComponent = study.icon;
              
              return (
                <div 
                  key={index} 
                  className={`glass-card p-8 rounded-3xl animate-fadeInUp grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className={`icon-container-${study.color} mr-4`}>
                        <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} text-white`}>
                        {study.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-100 mb-4">{study.title}</h3>
                    <div className="mb-6">
                      <p className="text-gray-400 mb-2"><strong>Client:</strong> {study.client}</p>
                      <p className="text-gray-400 mb-2"><strong>Industry:</strong> {study.industry}</p>
                      <p className="text-gray-400 mb-4"><strong>Timeline:</strong> {study.timeline}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-100 mb-3">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed mb-4">{study.challenge}</p>
                      
                      <h4 className="text-xl font-semibold text-gray-100 mb-3">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-100 mb-4">Key Results</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/#contact" className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${colors.bg} text-white hover:opacity-90 transform hover:scale-105`}>
                      Start Similar Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Industries We Serve</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our expertise spans across diverse industries, delivering tailored solutions for unique business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Healthcare", projects: "45+ Projects", icon: "🏥" },
              { name: "Financial Services", projects: "38+ Projects", icon: "🏦" },
              { name: "Retail & E-commerce", projects: "62+ Projects", icon: "🛒" },
              { name: "Manufacturing", projects: "29+ Projects", icon: "🏭" },
              { name: "Education", projects: "33+ Projects", icon: "🎓" },
              { name: "Technology", projects: "41+ Projects", icon: "💻" }
            ].map((industry, index) => (
              <div key={index} className="service-card animate-fadeInUp text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{industry.name}</h3>
                <p className="text-gray-300">{industry.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become Our Next Success Story?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with our proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Start Your Transformation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 