"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import RocketLogo from "./rocket-logo";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  let servicesCloseTimer: number | undefined;

  const openServicesMenu = () => {
    if (servicesCloseTimer) {
      window.clearTimeout(servicesCloseTimer);
      servicesCloseTimer = undefined;
    }
    setServicesMenuOpen(true);
  };

  const scheduleCloseServicesMenu = (delay = 200) => {
    if (servicesCloseTimer) window.clearTimeout(servicesCloseTimer);
    servicesCloseTimer = window.setTimeout(() => {
      setServicesMenuOpen(false);
      servicesCloseTimer = undefined;
    }, delay);
  };

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
                <div
                  className="relative"
                  onMouseEnter={() => {
                    openServicesMenu();
                  }}
                  onMouseLeave={() => {
                    scheduleCloseServicesMenu(220);
                  }}
                  onFocus={() => openServicesMenu()}
                  onBlur={() => scheduleCloseServicesMenu(220)}
                >
                  <button
                    className="flex items-center text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    aria-haspopup="true"
                    aria-expanded={servicesMenuOpen}
                    aria-controls="services-menu"
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {servicesMenuOpen && (
                    <div
                      id="services-menu"
                      className="absolute left-0 mt-2 w-72 glass-card border border-gray-700/50 rounded-xl shadow-xl p-2"
                      role="menu"
                      onMouseEnter={() => openServicesMenu()}
                      onMouseLeave={() => scheduleCloseServicesMenu(220)}
                    >
                      <Link href="/services/cloud-solutions" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>Cloud Solutions</Link>
                      <Link href="/services/cybersecurity" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>Cybersecurity</Link>
                      <Link href="/services/digital-transformation" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>Digital Transformation</Link>
                      <Link href="/services/on-premises-solutions" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>On-Premises Solutions</Link>
                      <Link href="/services/web-hosting" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>Web Hosting & Management</Link>
                      <Link href="/services/office-365-google-workspace" className="block px-4 py-2 rounded-md text-gray-100 hover:text-blue-400 hover:bg-gray-800 transition-colors" role="menuitem" onClick={() => setServicesMenuOpen(false)}>Office 365 & Google Workspace</Link>
                    </div>
                  )}
                </div>
                <Link href="/about" className="text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                <Link href="/blog" className="text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
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
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden border-t glass-card">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  className="w-full flex items-center justify-between text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div id="mobile-services" className="ml-2 space-y-1">
                    <Link href="/services/cloud-solutions" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>Cloud Solutions</Link>
                    <Link href="/services/cybersecurity" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>Cybersecurity</Link>
                    <Link href="/services/digital-transformation" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>Digital Transformation</Link>
                    <Link href="/services/on-premises-solutions" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>On-Premises Solutions</Link>
                    <Link href="/services/web-hosting" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>Web Hosting & Management</Link>
                    <Link href="/services/office-365-google-workspace" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base" onClick={() => setMobileMenuOpen(false)}>Office 365 & Google Workspace</Link>
                  </div>
                )}

                <Link href="/about" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link href="/blog" className="block text-gray-100 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
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
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
} 