"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import RocketLogo from "./rocket-logo";
import Footer from "./footer";

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
                <Link href="/" className="flex items-center space-x-3 cursor-pointer">
                  <RocketLogo size={48} />
                  <h1 className="text-2xl font-bold gradient-text">NebulaHost</h1>
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
      <Footer />
    </div>
  );
} 