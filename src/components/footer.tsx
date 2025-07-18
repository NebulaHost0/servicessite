import { Users } from "lucide-react";
import Link from "next/link";
import RocketLogo from "./rocket-logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 to-blue-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <RocketLogo size={28} />
              <h3 className="text-3xl font-bold gradient-text">NebulaHost</h3>
            </div>
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
          <p>&copy; {new Date().getFullYear()} NebulaHost LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 