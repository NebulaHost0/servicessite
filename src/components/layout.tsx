"use client";

import { Users, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <h1 className="text-2xl font-bold gradient-text cursor-pointer">NebulaHost</h1>
                </Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/#services" className="text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                <Link href="/about" className="text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link href="/#contact" className="text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
                <button className="btn-primary pulse-on-hover">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-100 hover:text-blue-400 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t glass-card">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/#services" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link href="/about" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/#contact" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <button className="w-full text-left btn-primary mt-2">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-950 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-6">NebulaHost</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for IT services and digital transformation.
              </p>
              <div className="flex space-x-4">
                <Users className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                <span className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">LinkedIn</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/services/cloud-solutions" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                <li><Link href="/services/on-premises-solutions" className="hover:text-white transition-colors">On-Premises Solutions</Link></li>
                <li><Link href="/services/web-hosting" className="hover:text-white transition-colors">Web Hosting</Link></li>
                <li><Link href="/services/office-365-google-workspace" className="hover:text-white transition-colors">Office 365 & Google Workspace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
                <li className="hover:text-white transition-colors cursor-pointer">Whitepapers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NebulaHost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 