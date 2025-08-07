import Layout from "@/components/layout";
import { Users, Target, Award, Clock, CheckCircle, ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - NebulaHost",
  description: "Learn about NebulaHost's mission to transform businesses through innovative IT solutions. Meet our team of experts and discover our commitment to excellence.",
  keywords: "about NebulaHost, IT company, technology experts, business transformation, company mission",
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Professional Team Collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              <span className="gradient-text">About NebulaHost</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate technology experts dedicated to transforming businesses through 
              innovative IT solutions. Founded on the principles of excellence, innovation, and customer success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="#our-story" className="btn-primary pulse-on-hover flex items-center justify-center">
                Our Story
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link href="#team" className="btn-secondary">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Our Mission & Values</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driving digital transformation through innovative technology solutions and exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-purple mx-auto">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses worldwide, setting the standard 
                for innovation, reliability, and customer satisfaction.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-green mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Excellence in delivery, integrity in relationships, innovation in solutions, 
                and commitment to our clients&apos; long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Experience */}
      <section id="our-story" className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1626&q=80"
            alt="Modern Office Environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8 leading-tight">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                Founded in 2015, NebulaHost emerged from a simple belief: that technology should empower, 
                not complicate business operations. What started as a small team of passionate technologists 
                has grown into a trusted partner for businesses across industries.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Deep Technical Expertise</h4>
                    <p className="text-gray-300">Over 8 years of experience in cloud computing, cybersecurity, and digital transformation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Proven Track Record</h4>
                    <p className="text-gray-300">Successfully delivered 500+ projects, helping businesses save millions in IT costs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Industry Recognition</h4>
                    <p className="text-gray-300">Certified partners with major cloud providers and recognized for excellence in service delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-100 mb-2">Client-Centric Approach</h4>
                    <p className="text-gray-300">Every solution is tailored to meet specific business needs and long-term objectives.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slideInRight">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Company Achievements</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Years of Experience</span>
                    <span className="text-blue-400 font-bold text-xl">8+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-green-400 font-bold text-xl">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Happy Clients</span>
                    <span className="text-purple-400 font-bold text-xl">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Team Members</span>
                    <span className="text-orange-400 font-bold text-xl">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-teal-400 font-bold text-xl">99%</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-gray-100 mb-4">Ready to Join Our Success Stories?</h4>
                  <button className="w-full btn-primary pulse-on-hover">
                    Start Your Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Why Choose NebulaHost?</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence with business insight to deliver solutions that truly make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-blue mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">24/7 Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Round-the-clock technical support and monitoring to keep your systems running smoothly.
              </p>
            </div>

            <div className="service-card animate-fadeInUp text-center">
              <div className="icon-container-green mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Security First</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security measures and compliance standards to protect your business.
              </p>
            </div>

            <div className="service-card animate-slideInRight text-center">
              <div className="icon-container-purple mx-auto">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Future-proof technology solutions that grow and adapt with your business needs.
              </p>
            </div>

            <div className="service-card animate-slideInLeft text-center">
              <div className="icon-container-orange mx-auto">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Certified professionals with deep expertise across all major technology platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Leadership Team</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals leading NebulaHost to new heights of excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl animate-slideInLeft text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Sarah Mitchell</h3>
              <p className="text-blue-400 mb-3">Chief Executive Officer</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                15+ years in technology leadership, driving innovation and strategic growth across enterprise solutions.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-fadeInUp text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">DJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">David Johnson</h3>
              <p className="text-green-400 mb-3">Chief Technology Officer</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cloud architecture expert with extensive experience in enterprise infrastructure and security.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl animate-slideInRight text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">MR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">Maria Rodriguez</h3>
              <p className="text-orange-400 mb-3">VP of Client Success</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated to ensuring exceptional client experiences and successful project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who trust NebulaHost with their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 