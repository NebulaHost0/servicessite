import Layout from "@/components/layout";
import { Shield, CheckCircle, ArrowRight, Lock, Eye, FileCheck, AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity - NebulaHost",
  description: "Protect your business from cyber threats with comprehensive security solutions, risk assessments, compliance management, and 24/7 monitoring.",
  keywords: "cybersecurity, security audits, threat detection, compliance, risk assessment, security monitoring",
};

export default function CybersecurityPage() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-red-900/20 to-orange-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Cybersecurity Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-red-900/40 to-orange-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-green mx-auto mb-8">
              <Shield className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Cybersecurity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Protect your business from evolving cyber threats with enterprise-grade security solutions. 
              From risk assessments to 24/7 monitoring, we&apos;ll safeguard your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Get Security Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                View Security Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Advanced Threat Protection</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of cybercriminals with our comprehensive security framework and proactive monitoring.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-red mx-auto">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Zero Trust Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Never trust, always verify. Implement zero-trust architecture for maximum protection.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-orange mx-auto">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">
                Continuous threat detection and response with our Security Operations Center.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-blue mx-auto">
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Compliance</h3>
              <p className="text-gray-300 leading-relaxed">
                Meet regulatory requirements with GDPR, HIPAA, SOX, and industry-specific compliance.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-purple mx-auto">
                <AlertTriangle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Incident Response</h3>
              <p className="text-gray-300 leading-relaxed">
                Rapid response and recovery with our expert incident response team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Security Operations Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Complete Security Suite
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                From vulnerability assessments to security training, we provide comprehensive protection for your organization.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Security Audits & Penetration Testing</h4>
                    <p className="text-gray-300">Comprehensive security assessments to identify vulnerabilities before attackers do.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Advanced Threat Detection</h4>
                    <p className="text-gray-300">AI-powered threat detection with machine learning and behavioral analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Security Awareness Training</h4>
                    <p className="text-gray-300">Educate your team on security best practices and threat recognition.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Endpoint Protection</h4>
                    <p className="text-gray-300">Secure all devices with advanced endpoint detection and response.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Security Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Threat Detection Rate</span>
                    <span className="text-green-400 font-bold text-xl">99.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-blue-400 font-bold text-xl">&lt; 15 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Zero-Day Protection</span>
                    <span className="text-purple-400 font-bold text-xl">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance Score</span>
                    <span className="text-orange-400 font-bold text-xl">100%</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Secure Your Business?</h4>
                  <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center">
                    Start Security Assessment
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
          <div className="bg-gradient-to-r from-red-700 to-orange-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Don&apos;t Wait for a Cyber Attack</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a comprehensive security assessment and strengthen your defenses today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-red-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Get Security Audit
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-800 transition-all duration-300 transform hover:scale-105">
                Download Security Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 