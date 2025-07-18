import Layout from "@/components/layout";
import { Mail, CheckCircle, ArrowRight, Users, FileText, Video, Calendar } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office 365 & Google Workspace - NebulaHost",
  description: "Complete Office 365 and Google Workspace setup, migration, and management services. Expert cloud productivity solutions.",
  keywords: "Office 365, Google Workspace, cloud productivity, email migration, collaboration tools, workspace setup",
};

export default function Office365GoogleWorkspacePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Modern Collaboration Workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-teal-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-blue mx-auto mb-8">
              <Mail className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Office 365 & Google Workspace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Empower your team with cloud-based productivity suites. Expert setup, seamless migration, 
              and comprehensive training for Office 365 and Google Workspace environments that boost productivity and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Start Your Migration
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                Compare Platform Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Cloud Productivity Excellence</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Seamless migration and setup of modern collaboration tools to boost your team&apos;s productivity and efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Email & Communication</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional email with advanced security, spam protection, and unlimited storage.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-green mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Team Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                Real-time document editing, file sharing, and team collaboration tools.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-purple mx-auto">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Video Conferencing</h3>
              <p className="text-gray-300 leading-relaxed">
                HD video meetings, screen sharing, and virtual collaboration spaces.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-teal mx-auto">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Scheduling & Planning</h3>
              <p className="text-gray-300 leading-relaxed">
                Integrated calendars, task management, and project planning tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Platform Comparison</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose the right productivity suite for your organization&apos;s needs and workflow.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Office 365 */}
            <div className="glass-card p-8 rounded-3xl animate-slideInLeft">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O365</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Microsoft Office 365</h3>
                <p className="text-gray-300">Complete Microsoft ecosystem integration</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Full Office Suite (Word, Excel, PowerPoint)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Microsoft Teams Integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">SharePoint & OneDrive</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Advanced Security Features</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Enterprise Compliance Tools</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Best for: Windows-centric organizations, enterprise security requirements</p>
                <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center">Choose Office 365</Link>
              </div>
            </div>

            {/* Google Workspace */}
            <div className="glass-card p-8 rounded-3xl animate-slideInRight">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GWS</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Google Workspace</h3>
                <p className="text-gray-300">Simple, intuitive collaboration platform</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Google Docs, Sheets, Slides</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Google Meet & Chat</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Google Drive Storage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Real-time Collaboration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Seamless Mobile Experience</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-4">Best for: Startups, remote teams, simplified collaboration</p>
                <Link href="/#contact" className="w-full btn-outline block text-center">Choose Google Workspace</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Services */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Seamless Migration Services
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Expert migration from legacy email systems or between platforms with zero data loss and minimal downtime.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Complete Data Migration</h4>
                    <p className="text-gray-300">Transfer emails, contacts, calendars, and files with complete integrity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">User Training & Support</h4>
                    <p className="text-gray-300">Comprehensive training programs to ensure smooth adoption and productivity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Security Configuration</h4>
                    <p className="text-gray-300">Advanced security settings, multi-factor authentication, and compliance setup.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Ongoing Management</h4>
                    <p className="text-gray-300">Continuous support, updates, and optimization for peak performance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Migration Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100">Assessment & Planning</h4>
                      <p className="text-gray-300 text-sm">2-3 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100">Environment Setup</h4>
                      <p className="text-gray-300 text-sm">1-2 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100">Data Migration</h4>
                      <p className="text-gray-300 text-sm">1-3 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-100">Training & Go-Live</h4>
                      <p className="text-gray-300 text-sm">1-2 days</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Get Started?</h4>
                  <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center">
                    Schedule Migration Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Productivity Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Service Packages</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive packages that include everything you need for a successful productivity platform deployment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="glass-card p-8 rounded-3xl animate-slideInLeft flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Starter</h3>
                <div className="text-4xl font-bold gradient-text mb-2">$2,500<span className="text-lg text-gray-400"> one-time</span></div>
                <p className="text-gray-300">Basic migration and setup</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Up to 25 users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Email migration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Basic training session</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">30 days support</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-outline block text-center mt-auto">Get Started</Link>
            </div>

            {/* Professional Package */}
            <div className="glass-card p-8 rounded-3xl animate-fadeInUp border-2 border-blue-500/50 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Professional</h3>
                <div className="text-4xl font-bold gradient-text mb-2">$5,000<span className="text-lg text-gray-400"> one-time</span></div>
                <p className="text-gray-300">Complete migration and management</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Up to 100 users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Complete data migration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Security configuration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Comprehensive training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">90 days support</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center mt-auto">Get Started</Link>
            </div>

            {/* Enterprise Package */}
            <div className="glass-card p-8 rounded-3xl animate-slideInRight flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold gradient-text mb-2">Custom<span className="text-lg text-gray-400"> quote</span></div>
                <p className="text-gray-300">Full-service enterprise solution</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Unlimited users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Complex migrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Advanced security & compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Custom integrations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-300">Ongoing management</span>
                </div>
              </div>
              
              <Link href="/#contact" className="w-full btn-outline block text-center mt-auto">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-teal-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Productivity?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and migration assessment for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Schedule Free Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105">
                Download Migration Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 