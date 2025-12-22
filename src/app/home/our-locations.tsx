import React from 'react';

interface Location {
  id: number;
  name: string;
  image: string;
  link: string;
  description?: string;
}

const LocationsSection = () => {
  const locations: Location[] = [
    {
      id: 1,
      name: "Hamilton, NJ 08690",
      description:"2115 Rt 33, Hamilton, NJ 08690",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
      link: "/locations/clifton-park"
    }
    // {
    //   id: 2,
    //   name: "EAST GREENBUSH, NY",
    //   image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
    //   link: "/locations/east-greenbush"
    // }
  ];

  return (
    <section className="relative bg-[#dadada] py-12 md:py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80 pointer-events-none">
        {/* Top left decorative shapes */}
        
        
        {/* Top right decorative shapes */}
        <img src={'/Images/animals/trees-1.png'} alt="Decorative bird" className="absolute bottom-0 md:top-10 right-20 w-60 md:w-180 h-60 md:h-180 object-contain"/>

        {/* Bottom decorative elements */}
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 256" fill="none">
          <path d="M0 128 Q360 80, 720 128 T1440 128" stroke="var(--accent)" strokeWidth="2" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="var(--accent)" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold eveleth text-accent">
            Our <span className="text-primary">  Location</span>
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location) => (
            <div 
              key={location.id}
              className="relative group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                <h3 className="text-2xl md:text-3xl font-bold text-accent eveleth">
                  {location.name}
                </h3>
                <p className="text-primary text-lg md:text-xl leading-relaxed mb-6">
                  {location.description}
                </p>

                <button 
                  onClick={() => window.location.href = location.link}
                  className="bg-secondary hover:bg-[#C4B590] text-[#4A3728] font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 group/button"
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
              <img src={'/Images/animals/owl.png'} alt="Decorative bird" className="absolute bottom-0 right-10 w-24 md:w-48 h-24 md:h-48 object-contain"/>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LocationsSection;