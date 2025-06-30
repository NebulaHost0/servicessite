import Layout from "@/components/layout";
import { Server, CheckCircle, ArrowRight, HardDrive, Network, Shield, Settings } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Premises Solutions - NebulaHost",
  description: "Enterprise on-premises infrastructure solutions. Server setup, network management, and hardware maintenance services.",
  keywords: "on-premises solutions, server infrastructure, network management, hardware maintenance, enterprise IT",
};

export default function OnPremisesSolutionsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-orange-900/20 to-red-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Data Center Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-orange-900/40 to-red-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-orange mx-auto mb-8">
              <Server className="h-16 w-16 text-orange-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">On-Premises Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Build and maintain robust on-premises infrastructure tailored to your business needs. 
              Expert server setup, network management, and ongoing hardware maintenance with maximum control and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary pulse-on-hover flex items-center justify-center">
                Plan Your Infrastructure
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="btn-secondary">
                View Infrastructure Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Enterprise Infrastructure Excellence</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete on-premises solutions from design to maintenance, ensuring optimal performance and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-orange mx-auto">
                <Server className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Server Infrastructure</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade servers with redundancy, virtualization, and high-availability configurations.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-blue mx-auto">
                <Network className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Network Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Scalable network architecture with switches, routers, and wireless infrastructure.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-green mx-auto">
                <HardDrive className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Storage Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                High-performance storage arrays, backup systems, and disaster recovery solutions.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-purple mx-auto">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">24/7 Maintenance</h3>
              <p className="text-gray-300 leading-relaxed">
                Proactive monitoring, preventive maintenance, and rapid response support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Server Room Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Complete Infrastructure Management
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                From initial planning to ongoing operations, we handle every aspect of your on-premises infrastructure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Infrastructure Design & Planning</h4>
                    <p className="text-gray-300">Custom infrastructure architecture tailored to your specific requirements and growth plans.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Server Deployment & Configuration</h4>
                    <p className="text-gray-300">Professional installation, configuration, and optimization of server hardware and software.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Network Infrastructure Setup</h4>
                    <p className="text-gray-300">Complete network design, installation, and configuration including security appliances.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Ongoing Support & Maintenance</h4>
                    <p className="text-gray-300">Proactive monitoring, regular maintenance, and rapid issue resolution to minimize downtime.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Infrastructure Benefits</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Data Security Control</span>
                    <span className="text-green-400 font-bold text-xl">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Network Performance</span>
                    <span className="text-blue-400 font-bold text-xl">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customization Level</span>
                    <span className="text-purple-400 font-bold text-xl">Complete</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Compliance Ready</span>
                    <span className="text-orange-400 font-bold text-xl">✓</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Build Your Infrastructure?</h4>
                  <button className="w-full btn-primary pulse-on-hover">
                    Schedule Infrastructure Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Infrastructure Service Tiers</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the level of support that matches your business requirements and technical expertise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential Tier */}
            <div className="glass-card p-8 rounded-3xl animate-slideInLeft">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Essential</h3>
                <div className="text-4xl font-bold gradient-text mb-2">Custom<span className="text-lg text-gray-400"> Quote</span></div>
                <p className="text-gray-300">Basic infrastructure setup</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Hardware Procurement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Basic Server Setup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Network Configuration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Documentation & Training</span>
                </div>
              </div>
              
              <button className="w-full btn-outline">Get Quote</button>
            </div>

            {/* Professional Tier */}
            <div className="glass-card p-8 rounded-3xl animate-fadeInUp border-2 border-orange-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Recommended</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Professional</h3>
                <div className="text-4xl font-bold gradient-text mb-2">Custom<span className="text-lg text-gray-400"> Quote</span></div>
                <p className="text-gray-300">Complete managed infrastructure</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Everything in Essential</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">24/7 Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Proactive Maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Security Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Backup & Recovery</span>
                </div>
              </div>
              
              <button className="w-full btn-primary pulse-on-hover">Get Quote</button>
            </div>

            {/* Enterprise Tier */}
            <div className="glass-card p-8 rounded-3xl animate-slideInRight">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold gradient-text mb-2">Custom<span className="text-lg text-gray-400"> Quote</span></div>
                <p className="text-gray-300">Full-service infrastructure management</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Everything in Professional</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Dedicated Support Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Custom SLAs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Compliance Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Strategic IT Planning</span>
                </div>
              </div>
              
              <button className="w-full btn-outline">Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-700 to-red-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Infrastructure?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get a custom infrastructure assessment and design proposal tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Infrastructure Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-800 transition-all duration-300 transform hover:scale-105">
                Download Infrastructure Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 