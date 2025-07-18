import Layout from "@/components/layout";
import { Zap, CheckCircle, ArrowRight, Lightbulb, TrendingUp, Workflow, Brain } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation - NebulaHost",
  description: "Modernize your business with comprehensive digital transformation services. Strategic technology consulting and implementation.",
  keywords: "digital transformation, business modernization, technology strategy, digital innovation",
};

export default function DigitalTransformationPage() {

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Digital Transformation Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/40 to-pink-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <div className="icon-container-purple mx-auto mb-8">
              <Zap className="h-16 w-16 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions. From legacy system modernization 
              to AI integration, we help organizations thrive in the digital age and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="btn-primary pulse-on-hover flex items-center justify-center">
                Start Transformation Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="btn-secondary">
                View Digital Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Innovation Features */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Accelerate Your Digital Journey</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge technologies to revolutionize your business operations and customer experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-purple mx-auto">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Integrate intelligent automation and predictive analytics to enhance decision-making.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-blue mx-auto">
                <Workflow className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Process Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Streamline operations with intelligent workflow automation and digital processes.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-green mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Data Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Transform raw data into actionable insights with advanced analytics platforms.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-orange mx-auto">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Innovation Strategy</h3>
              <p className="text-gray-300 leading-relaxed">
                Develop comprehensive digital strategies aligned with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80"
            alt="Modern Digital Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Complete Digital Makeover
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                From strategy to implementation, we guide your organization through every phase of digital transformation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Legacy System Modernization</h4>
                    <p className="text-gray-300">Upgrade outdated systems with modern, scalable technology platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Digital Customer Experience</h4>
                    <p className="text-gray-300">Create seamless, personalized customer journeys across all digital touchpoints.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Cloud-First Architecture</h4>
                    <p className="text-gray-300">Design and implement scalable, cloud-native solutions for maximum flexibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Change Management</h4>
                    <p className="text-gray-300">Ensure smooth adoption with comprehensive training and change management.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Transformation Impact</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Operational Efficiency</span>
                    <span className="text-green-400 font-bold text-xl">+65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-blue-400 font-bold text-xl">-40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Time to Market</span>
                    <span className="text-purple-400 font-bold text-xl">-50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Satisfaction</span>
                    <span className="text-orange-400 font-bold text-xl">+80%</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Transform Your Business?</h4>
                  <Link href="/#contact" className="w-full btn-primary pulse-on-hover block text-center">
                    Get Digital Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tailored digital transformation strategies for your industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl animate-slideInLeft">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">Digital health platforms, telemedicine, and patient data analytics.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Electronic Health Records</li>
                <li>• Patient Portal Systems</li>
                <li>• HIPAA Compliance</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-fadeInUp">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Financial Services</h3>
              <p className="text-gray-300 mb-4">Fintech solutions, mobile banking, and regulatory compliance.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Digital Banking Platforms</li>
                <li>• Fraud Detection Systems</li>
                <li>• Regulatory Reporting</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-slideInRight">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Manufacturing</h3>
              <p className="text-gray-300 mb-4">IoT integration, predictive maintenance, and supply chain optimization.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart Factory Solutions</li>
                <li>• Predictive Analytics</li>
                <li>• Supply Chain Visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Lead Your Industry?</h3>
            <p className="text-xl mb-8 opacity-90">
              Begin your digital transformation journey with a comprehensive assessment and strategic roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-white text-purple-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg block text-center">
                Start Digital Assessment
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300 transform hover:scale-105">
                Download Transformation Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 