const Header = () => {
  return (
    <>
    {/* Top Banner */}
          <div className="bg-[#8B5A3C] text-white py-3 text-center">
            <a href="#locations" className="hover:underline">
              Find a Location Near You →
            </a>
          </div>
    
          {/* Navigation */}
          <nav className="bg-[#F5EFE7] shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <img src={'/Images/mt-brushmore-main-logo-trsnprnt.png'} alt="Brushmore Logo" className='h-12 md:h-24 w-auto' />
                </div>
    
                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                  <a href="/about-us" className="text-gray-800 hover:text-[#8B5A3C] font-medium">
                    About Us
                  </a>
                <div className="relative group">
                    <button
                        className="text-gray-800 hover:text-[#8B5A3C] font-medium inline-flex items-center"
                        aria-haspopup="true"
                        aria-expanded="false"
                        type="button"
                    >
                        Services
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown - visible on hover (desktop) */}
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-50">
                        <ul className="py-1">
                            <li>
                                <a href="/treatments" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                                    Preventive Dentistry
                                </a>
                            </li>
                            <li>
                                <a href="/treatments/orthodontics" className="block px-4 py-2 text-gray-700 hover:bg-[#F5EFE7]">
                                    Orthodontics
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                  <a href="#parents" className="text-gray-800 hover:text-[#8B5A3C] font-medium">
                    For Parents
                  </a>
                  <a href="#locations" className="text-gray-800 hover:text-[#8B5A3C] font-medium">
                    Locations
                  </a>
                  <a href="#review" className="text-gray-800 hover:text-[#8B5A3C] font-medium">
                    Review Us
                  </a>
                  <a href="#pay" className="text-gray-800 hover:text-[#8B5A3C] font-medium">
                    Pay Online
                  </a>
                  <button className="bg-[#8B5A3C] text-white px-6 py-2 rounded-full hover:bg-[#6D4830] transition-colors">
                    Book Now
                  </button>
                  <a href="tel:5183731181" className="border-2 border-[#8B5A3C] text-[#8B5A3C] px-6 py-2 rounded-full hover:bg-[#8B5A3C] hover:text-white transition-colors">
                    (518) 373-1181
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
  )
}
export default Header;