import Layout from "@/components/layout";
import { Globe, CheckCircle, ArrowRight, Zap, Shield, Server, Headphones } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Hosting & Management - NebulaHost",
  description: "Professional web hosting, domain management, and webmaster services. Managed hosting solutions with 99.9% uptime guarantee and expert support.",
  keywords: "web hosting, managed hosting, domain management, SSL certificates, website maintenance, webmaster services",
};

export default function WebHostingPage() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-teal-900/20 to-green-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Web Hosting Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-teal-900/40 to-green-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-teal mx-auto mb-8">
              <Globe className="h-16 w-16 text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Web Hosting & Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Power your online presence with enterprise-grade hosting solutions. From domain management to 
              complete website maintenance, we keep your digital assets running smoothly 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Start Hosting Plan
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                View Hosting Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Features */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Why Choose NebulaHost?</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience blazing-fast performance, rock-solid reliability, and expert support for your website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-green mx-auto">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Lightning Speed</h3>
              <p className="text-gray-300 leading-relaxed">
                SSD storage and CDN delivery for lightning-fast website performance worldwide.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-blue mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Security First</h3>
              <p className="text-gray-300 leading-relaxed">
                Free SSL certificates, DDoS protection, and malware scanning included.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-orange mx-auto">
                <Server className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">99.9% Uptime</h3>
              <p className="text-gray-300 leading-relaxed">
                Guaranteed uptime with redundant infrastructure and proactive monitoring.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-purple mx-auto">
                <Headphones className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Expert Support</h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 technical support from hosting experts who know your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Server Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Complete Web Services</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From hosting to maintenance, we handle all aspects of your web presence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="glass-card p-8 rounded-3xl animate-slideInLeft flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Starter</h3>
                <div className="text-4xl font-bold gradient-text mb-2">$19<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-300">Perfect for small websites</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">5GB SSD Storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">100GB Bandwidth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Free SSL Certificate</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Email Support</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-outline block text-center mt-auto">Choose Plan</Link>
            </div>

            {/* Professional Plan */}
            <div className="glass-card p-8 rounded-3xl animate-fadeInUp border-2 border-blue-500/50 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Professional</h3>
                <div className="text-4xl font-bold gradient-text mb-2">$49<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-300">Ideal for growing businesses</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">25GB SSD Storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">500GB Bandwidth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Free SSL & CDN</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">24/7 Phone Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Weekly Backups</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center mt-auto">Choose Plan</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card p-8 rounded-3xl animate-slideInRight flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold gradient-text mb-2">$99<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-300">For high-traffic websites</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">100GB SSD Storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Unlimited Bandwidth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Premium Security Suite</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Dedicated Support Manager</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Daily Backups</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-outline block text-center mt-auto">Choose Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-700 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Website?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get started with professional hosting and let us handle the technical details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-teal-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Start Free Trial
              </Link>
              <Link href="/#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-800 transition-all duration-300 transform hover:scale-105 block text-center">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 