"use client";

import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isParentsOpen, setIsParentsOpen] = useState(false);
  const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-white py-3 text-center">
        <a href="#locations" className="hover:underline">
          OPENING SOON
        </a>
      </div>

      {/* Navigation */}
      <nav className="bg-accent shadow-sm sticky top-0 z-40 relative py-4">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
          <img
            src="/Images/mt-brushmore-main-logo-trsnprnt.png"
            alt="Brushmore Logo"
            className={`transition-all duration-300 ${isScrolled ? "h-12 md:h-16" : "h-20 md:h-42"
              }`}
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end lg:justify-center">
            {/* Desktop Navigation (UNCHANGED) */}
            <div className="hidden lg:flex items-center space-x-8 ml-40">
              <a href="/about-mt-brushmore-pediatric-dentistry-hamilton-nj" className="text-white hover:text-primary">
                About Us
              </a>

              {/* Services Desktop */}
              <div className="relative group">
                <button className="text-white hover:text-primary inline-flex items-center">
                  Services
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                  <ul className="py-1">
                    <li><a href="/services/preventive-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Preventive Dentistry</a></li>
                    <li><a href="/services/restorative-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Restorative Dentistry</a></li>
                    <li><a href="/services/orthodontics" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Orthodontics</a></li>
                    <li><a href="/services/sedation-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Sedation Dentistry</a></li>
                    <li><a href="/services/emergency-dentistry" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Emergency Dentistry</a></li>
                  </ul>
                </div>
              </div>

              {/* Parents Desktop */}
              <div className="relative group">
                <button className="text-white hover:text-primary inline-flex items-center">
                  For Parents
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                  <ul className="py-1">
                    <li><a href="/first-visit-hamilton-nj" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">First Visit</a></li>
                    <li><a href="/insurance-hamilton-nj" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Insurance</a></li>
                    <li><a href="/financing-hamilton-nj" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Financing</a></li>
                  </ul>
                </div>
              </div>
              <a href="/dental-blog" className="text-white hover:text-primary">Blogs</a>

              <a href="/contact-mt-brushmore-hamilton-nj" className="text-white hover:text-primary">Contact Us</a>
              {/* Services Desktop */}
              <div className="relative group">
                <button className="text-white hover:text-primary inline-flex items-center">
                  Service Areas
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                  <ul className="py-1">
                    <li><a href="/service-areas/hamilton-square-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Hamilton Square, NJ</a></li>
                    <li><a href="/service-areas/mercerville-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Mercerville, NJ</a></li>
                    <li><a href="/service-areas/robbinsville-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Robbinsville, NJ</a></li>
                    <li><a href="/service-areas/lawrenceville-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">Lawrenceville, NJ</a></li>
                    <li><a href="/service-areas/east-windsor-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">East Windsor, NJ</a></li>
                    <li><a href="/service-areas/west-windsor-nj-dentist-near-you" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">West Windsor, NJ</a></li>
                  </ul>
                </div>
              </div>
              <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-primary">Book Now</button>
              <a href="tel:609-422-4700" className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-primary">609-422-4700</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU (UI IMPROVED) ================= */}
        <div className={`fixed inset-0 bg-accent z-99 transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl text-center">

            <a href="/about-mt-brushmore-pediatric-dentistry-hamilton-nj" className="text-white hover:text-primary">About Us</a>

            {/* Services Mobile */}
            <div className="w-full">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-white inline-flex items-center justify-center gap-2"
              >
                Services
                <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`mx-6 mt-3 rounded-2xl bg-white/10 backdrop-blur overflow-hidden transition-all duration-500 ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="py-2">
                  {[
                    ["Preventive Dentistry", "/services/preventive-dentistry"],
                    ["Restorative Dentistry", "/services/restorative-dentistry"],
                    ["Orthodontics", "/services/orthodontics"],
                    ["Sedation Dentistry", "/services/sedation-dentistry"],
                    ["Emergency Dentistry", "/services/emergency-dentistry"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="block py-3 text-white hover:bg-primary/30 transition">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Parents Mobile */}
            <div className="w-full">
              <button
                onClick={() => setIsParentsOpen(!isParentsOpen)}
                className="text-white inline-flex items-center justify-center gap-2"
              >
                For Parents
                <svg className={`w-5 h-5 transition-transform ${isParentsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`mx-6 mt-3 rounded-2xl bg-white/10 backdrop-blur overflow-hidden transition-all duration-500 ${isParentsOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="py-2">
                  {[
                    ["First Visit", "/first-visit-hamilton-nj"],
                    ["Insurance", "/insurance-hamilton-nj"],
                    ["Financing", "/financing-hamilton-nj"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="block py-3 text-white hover:bg-primary/30 transition">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="/contact-mt-brushmore-hamilton-nj" className="text-white hover:text-primary">Contact Us</a>
            <a href="/dental-blog" className="text-white hover:text-primary">Blogs</a>

            {/* Services Mobile */}
            <div className="w-full">
              <button
                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                className="text-white inline-flex items-center justify-center gap-2"
              >
                Service Areas
                <svg className={`w-5 h-5 transition-transform ${isServiceAreasOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`mx-6 mt-3 rounded-2xl bg-white/10 backdrop-blur overflow-hidden transition-all duration-500 ${isServiceAreasOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="py-2">
                  {[
                    ["Hamilton Square, NJ", "/service-areas/hamilton-square-nj-dentist-near-you"],
                    ["Mercerville, NJ", "/service-areas/mercerville-nj-dentist-near-you"],
                    ["Robbinsville, NJ", "/service-areas/robbinsville-nj-dentist-near-you"],
                    ["Lawrenceville, NJ", "/service-areas/lawrenceville-nj-dentist-near-you"],
                    ["West Windsor, NJ", "/service-areas/west-windsor-nj-dentist-near-you"],
                    ["East Windsor, NJ", "/service-areas/east-windsor-nj-dentist-near-you"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a href={href} className="block py-3 text-white hover:bg-primary/30 transition">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-6">
              <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary">Book Now</button>
              <a href="tel:609-422-4700" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-primary">
                609-422-4700
              </a>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
