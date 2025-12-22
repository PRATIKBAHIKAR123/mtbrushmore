"use client"

import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white py-3 text-center">
        <a href="#locations" className="hover:underline">
          Get Direction →
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-accent shadow-sm sticky top-0 z-40 relative py-4">
        
        {/* Absolute Logo (Centered Left Area) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
          <img
            src="/Images/mt-brushmore-main-logo-trsnprnt.png"
            alt="Brushmore Logo"
            className={`
              transition-all duration-300 ease-in-out
              ${isScrolled ? "h-12 md:h-16" : "h-20 md:h-42"}
            `}
            onClick={()=>window.location.href="/"}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex items-end justify-end lg:justify-center">
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8 ml-40">
              <a href="/about-us" className="text-white hover:text-primary ">
                About Us
              </a>

              <div className="relative group">
                <button className="text-white hover:text-primary  inline-flex items-center">
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                  <ul className="py-1">
                    <li>
                      <a href="/services/preventive-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Preventive Dentistry
                      </a>
                    </li>
                    <li>
                      <a href="/services/restorative-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Restorative Dentistry
                      </a>
                    </li>
                    <li>
                      <a href="/services/orthodontics" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Orthodontics
                      </a>
                    </li>
                    <li>
                      <a href="/services/sedation-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Sedation Dentistry
                      </a>
                    </li>
                    <li>
                      <a href="/services/emergency-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Emergency Dentistry
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <button className="text-white hover:text-primary  inline-flex items-center">
                  For Parents
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                  <ul className="py-1">
                    <li>
                      <a href="/first-visit" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        First Visit
                      </a>
                    </li>
                    <li>
                      <a href="/dental-insurance" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Insurance
                      </a>
                    </li>
                    <li>
                      <a href="/dental-financing" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                        Financing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/location" className="text-white hover:text-primary ">Contact Us</a>
              {/* <a href="#review" className="text-white hover:text-primary ">Review Us</a>
              <a href="#pay" className="text-white hover:text-primary ">Pay Online</a> */}

              <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-primary transition-colors">
                Book Now
              </button>

              <a href="tel:609-422-4700" className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                609-422-4700
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
