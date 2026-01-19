import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { contactDetails } from '@/lib/hooks/addressDetails';

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
              {/* <li>
                <a href="#" className="text-white transition-colors">
                  Offers
                </a>
              </li> */}
              <li>
                <a href="/team/dr-manmeet-arora" className="text-white transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services/preventive-dentistry" className="text-white transition-colors">
                  Preventive Dentistry
                </a>
              </li>
              <li>
                <a href="/services/restorative-dentistry" className="text-white transition-colors">
                  Restorative Dentistry
                </a>
              </li>
              <li>
                <a href="/services/orthodontics" className="text-white transition-colors">
                  Orthodontics
                </a>
              </li>
              <li>
                <a href="/services/sedation-dentistry" className="text-white transition-colors">
                  Sedation Dentistry
                </a>
              </li>
              <li>
                <a href="/services/emergency-dentistry" className="text-white transition-colors">
                  Emergency Dentistry
                </a>
              </li>
              <li>
                <a href="/services/preventive-dentistry/special-needs-dental-care-hamilton-nj" className="text-white transition-colors">
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
                <a href="/first-visit-hamilton-nj" className="text-white transition-colors">
                  First Visit
                </a>
              </li>
              <li>
                <a href="/insurance-hamilton-nj" className="text-white transition-colors">
                  Insurance
                </a>
              </li>
              <li>
                <a href="/financing-hamilton-nj" className="text-white transition-colors">
                  Financing
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Address</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="https://www.google.com/maps/place/2115+NJ-33,+Hamilton+Township,+NJ+08690,+USA/@40.2225767,-74.6484335,17z/data=!3m1!4b1!4m6!3m5!1s0x89c15f08cb1732f7:0xeddd0750c9f8b12d!8m2!3d40.2225726!4d-74.6458586!16s%2Fg%2F11ymj_v2kc?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-white transition-colors">
                  2115 Rt 33, Hamilton, NJ 08690
                </a>
              </li>
              <li>
                <a href={`mailto:${contactDetails.email}`} className="text-white transition-colors">
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-accent">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-white text-sm">
            Copyright © 2026 <a
              href="https://clearconceptsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Clear Concept Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;