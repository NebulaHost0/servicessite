"use client";

import { Shield, Cloud, Cog, Phone, Mail, MapPin, ArrowRight, CheckCircle, Server, Globe, UserPlus } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import ContactForm from "@/components/contact-form";

export default function Home() {
  
  // Typewriter effect state
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = useMemo(() => [
    "Expert IT Solutions",
    "Cloud Infrastructure",
    "Cybersecurity Excellence", 
    "Smart Technology",
    "24/7 Tech Support",
    "Modern Web Solutions",
    "Enterprise IT Services"
  ], []);

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Continue typing or deleting
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting, phrases]);

  // Handle navigation to contact section from other pages
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        scrollToContact();
      }, 100);
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-pattern floating-shapes bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-8 leading-tight">
              Transform Your Business with
              <span className="gradient-text block">
                {displayText}
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive IT services and consulting to help your business thrive in the digital age. 
              From cloud migration to cybersecurity, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary pulse-on-hover flex items-center justify-center" onClick={scrollToContact}>
                Schedule Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <button className="btn-secondary" onClick={scrollToServices}>
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Our Services</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link href="/services/cloud-solutions" className="service-card animate-slideInLeft hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-blue">
              <Cloud className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Cloud Solutions</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Migrate to the cloud with confidence. We provide end-to-end cloud migration, 
              optimization, and management services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                AWS, Azure, Google Cloud
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Migration Planning & Execution
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                24/7 Monitoring & Support
              </li>
            </ul>
          </Link>

          <Link href="/services/cybersecurity" className="service-card animate-fadeInUp hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-green">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Protect your business from cyber threats with our comprehensive security solutions 
              and risk assessment services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Security Audits & Assessments
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Advanced Threat Detection
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Compliance & Regulatory Support
              </li>
            </ul>
          </Link>

          <Link href="/services/digital-transformation" className="service-card animate-slideInRight hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-purple">
              <Cog className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Digital Transformation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Modernize your business processes and technology infrastructure to stay 
              competitive in today&apos;s digital landscape.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Process Automation & Optimization
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Legacy System Migration
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Strategic Technology Planning
              </li>
            </ul>
          </Link>

          <Link href="/services/on-premises-solutions" className="service-card animate-slideInLeft hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-orange">
              <Server className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">On-Premises Solutions</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete on-site IT infrastructure setup, maintenance, and optimization 
              for businesses that need local control and compliance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Server Setup & Configuration
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Network Infrastructure Design
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Hardware Maintenance & Support
              </li>
            </ul>
          </Link>

          <Link href="/services/web-hosting" className="service-card animate-fadeInUp hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-teal">
              <Globe className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Web Hosting & Management</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional web hosting, domain management, and complete webmaster services 
              to keep your online presence running smoothly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Managed Web Hosting
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Domain & SSL Management
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Website Maintenance & Updates
              </li>
            </ul>
          </Link>

          <Link href="/services/office-365-google-workspace" className="service-card animate-slideInRight hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="icon-container-red">
              <UserPlus className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">Office 365 & Google Workspace</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete setup, migration, and management of Microsoft 365 and Google Workspace. 
              We help you seamlessly transition between platforms.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Office 365 & Google Setup
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Cross-Platform Migration
        </li>
              <li className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                User Training & Support
        </li>
            </ul>
          </Link>
        </div>

        {/* Additional Services Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white text-center animate-fadeInUp">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Need Something Else?</h3>
          <p className="text-xl mb-8 opacity-90">
            We offer custom IT solutions tailored to your specific business needs. 
            Let&apos;s discuss how we can help transform your technology infrastructure.
          </p>
          <button className="bg-gray-200 text-blue-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg" onClick={scrollToContact}>
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 floating-shapes relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Why Choose NebulaHost?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in IT consulting, we&apos;ve helped hundreds of businesses 
            transform their technology infrastructure and achieve their digital goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Stats */}
          <div className="lg:col-span-1 animate-slideInLeft">
            <div className="glass-card p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Our Track Record</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700/50">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-300 font-medium text-sm">Projects Completed</div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700/50">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</div>
                  <div className="text-gray-300 font-medium text-sm">Uptime Guarantee</div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700/50">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-300 font-medium text-sm">Support Available</div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-2xl text-center border border-gray-700/50">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300 font-medium text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
                     {/* Process */}
          <div className="lg:col-span-1 animate-fadeInUp">
            <div className="glass-card p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Assessment</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Analyze current infrastructure and identify opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Strategy</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Develop customized technology roadmap aligned with goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Implementation</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Execute plan with minimal disruption to operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-lg">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-100 mb-1">Support</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Provide ongoing maintenance and optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Image */}
           <div className="lg:col-span-1 animate-slideInRight">
             <div className="glass-card p-8 rounded-3xl h-full">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                   alt="Professional IT Team"
                   className="w-full h-full object-cover responsive-image"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl mb-2">Our Expert Team</h3>
                  <p className="text-gray-200 text-sm">Dedicated professionals committed to your success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-24 bg-gray-900 section-pattern relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Tech Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-900/75 to-blue-900/70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Get In Touch</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your business? Contact us today for a free consultation.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="animate-slideInLeft">
          <h3 className="text-3xl font-semibold text-gray-100 mb-10">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="icon-container-blue">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-gray-100 text-lg">Phone</h4>
                <p className="text-gray-300 text-lg">+1 (818) 564-7021</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="icon-container-green">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
                              <div className="ml-6">
                  <h4 className="font-bold text-gray-100 text-lg">Email</h4>
                  <p className="text-gray-300 text-lg">info@nebulahost.io</p>
                </div>
            </div>
            
            <div className="flex items-center">
              <div className="icon-container-purple">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-6">
                <h4 className="font-bold text-gray-100 text-lg">Address</h4>
                <p className="text-gray-300 text-lg">2520 Venture Oaks Way Suite 120<br />Sacramento, CA 95833</p>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
    </div>
  </div>
</section>
</Layout>
);
}
