import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary">
      {/* Logo Section */}
      {/* <div className="py-8">
        <div className=" px-4">
          <div className="flex items-center gap-2">
              <img src={'/Images/mt-brushmore-main-logo-trsnprnt.png'} alt="Brushmore Logo" className="w-24 h-24 object-contain" />
            
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-amber-100">
          
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">ABOUT US</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Giving Back
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fun Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Follow Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preventive Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Restorative Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Orthodontics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sedation Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Emergency Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Special Needs Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* For Parents Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">FOR PARENTS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  First Visit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Financing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">LOCATIONS</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Clifton Park, NY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  East Greenbush, NY
                </a>
              </li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-amber-900" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-amber-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-amber-900" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-amber-200 text-sm">
            Copyright © 2025 Patiently.com | Site Monitored & Protected by DMCA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;