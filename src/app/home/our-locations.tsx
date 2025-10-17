import React from 'react';

interface Location {
  id: number;
  name: string;
  image: string;
  link: string;
}

const LocationsSection = () => {
  const locations: Location[] = [
    {
      id: 1,
      name: "CLIFTON PARK, NY",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
      link: "/locations/clifton-park"
    },
    {
      id: 2,
      name: "EAST GREENBUSH, NY",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
      link: "/locations/east-greenbush"
    }
  ];

  return (
    <section className="relative bg-[#E8DED3] py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        {/* Top left decorative shapes */}
        <svg className="absolute top-20 left-10 w-96 h-96" viewBox="0 0 400 400" fill="none">
          <path d="M50 200 Q100 150, 150 200 T250 200 T350 200" stroke="#8B6F47" strokeWidth="3" fill="none" />
          <circle cx="100" cy="100" r="60" fill="#8B6F47" opacity="0.3" />
          <circle cx="300" cy="150" r="80" fill="#8B6F47" opacity="0.2" />
        </svg>
        
        {/* Top right decorative shapes */}
        <svg className="absolute top-10 right-10 w-[500px] h-[400px]" viewBox="0 0 500 400" fill="none">
          <path d="M50 100 Q150 50, 250 100 T450 100" stroke="#8B6F47" strokeWidth="4" fill="none" />
          <path d="M100 200 L150 150 L200 200 L250 150 L300 200 L350 150 L400 200" stroke="#8B6F47" strokeWidth="3" fill="none" />
          <ellipse cx="250" cy="250" rx="120" ry="80" fill="#8B6F47" opacity="0.2" />
        </svg>

        {/* Bottom decorative elements */}
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 256" fill="none">
          <path d="M0 128 Q360 80, 720 128 T1440 128" stroke="#8B6F47" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="#4A3728" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A3728]">
            OUR <span className="text-[#8B4513]">LOCATIONS</span>
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#4A3728] mb-6">
                  {location.name}
                </h3>

                <button 
                  onClick={() => window.location.href = location.link}
                  className="bg-[#D4C5A0] hover:bg-[#C4B590] text-[#4A3728] font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 group/button"
                >
                  See Location
                  <svg 
                    className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" 
                    viewBox="0 0 16 16" 
                    fill="none"
                  >
                    <path 
                      d="M6 3 L11 8 L6 13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationsSection;