import Layout from "@/components/layout";
import { Cloud, CheckCircle, ArrowRight, Zap, Shield, BarChart, Globe } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions - NebulaHost",
  description: "Transform your business with scalable, secure cloud infrastructure. Expert cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.",
  keywords: "cloud solutions, cloud migration, AWS, Azure, Google Cloud, cloud optimization, cloud security",
};

export default function CloudSolutionsPage() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Cloud Computing Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-blue mx-auto mb-8">
              <Cloud className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Cloud Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure. 
              From migration to optimization, we&apos;ll guide you through every step of your cloud journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Get Cloud Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Why Choose Our Cloud Solutions?</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the power of cloud computing with enterprise-grade security, reliability, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploy applications and scale resources instantly with our optimized cloud infrastructure.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-green mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level security with encryption, compliance, and continuous monitoring.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-purple mx-auto">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Cost Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Reduce IT costs by up to 40% with our intelligent resource management.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-teal mx-auto">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Global Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploy applications worldwide with our global network of data centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80"
            alt="Modern Data Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Complete Cloud Services
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                From planning to implementation, we provide end-to-end cloud solutions tailored to your business needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Cloud Migration</h4>
                    <p className="text-gray-300">Seamless migration of your existing infrastructure to the cloud with zero downtime.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Multi-Cloud Strategy</h4>
                    <p className="text-gray-300">AWS, Azure, and Google Cloud expertise to optimize your multi-cloud environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Cloud Optimization</h4>
                    <p className="text-gray-300">Continuous monitoring and optimization to ensure peak performance and cost efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Disaster Recovery</h4>
                    <p className="text-gray-300">Robust backup and disaster recovery solutions to protect your critical data.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Cloud Platforms We Support</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-800 rounded-xl">
                    <div className="text-orange-500 font-bold text-lg mb-2">AWS</div>
                    <p className="text-gray-300 text-sm">Amazon Web Services</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-xl">
                    <div className="text-blue-500 font-bold text-lg mb-2">Azure</div>
                    <p className="text-gray-300 text-sm">Microsoft Azure</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-xl">
                    <div className="text-green-500 font-bold text-lg mb-2">GCP</div>
                    <p className="text-gray-300 text-sm">Google Cloud Platform</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-xl">
                    <div className="text-purple-500 font-bold text-lg mb-2">Hybrid</div>
                    <p className="text-gray-300 text-sm">On-Premises + Cloud</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Start Your Cloud Journey?</h4>
                  <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center">
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move to the Cloud?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a free cloud assessment and migration strategy tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Get Free Assessment
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105">
                Download Cloud Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 