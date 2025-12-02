import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  decorativeIcon?: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "PREVENTIVE",
      description: "Protect your child's smile with cleanings, fluoride, and sealants.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      decorativeIcon: "tooth"
    },
    {
      id: 2,
      title: "RESTORATIVE",
      description: "Restore your child's smile with gentle fillings and crowns.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "ORTHODONTICS",
      description: "Straighten teeth and boost confidence with braces and aligners.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "EMERGENCIES",
      description: "Get fast, compassionate emergency dental care for your child.",
      image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&h=600&fit=crop",
      decorativeIcon: "flower"
    }
  ];

  return (
    <section className="relative bg-[#dadada] py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-50">
        <img src={'/Images/animals/bird.png'} alt="Decorative bird" className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="#0a73b1" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-[#4A3728] text-base md:text-lg max-w-2xl leading-relaxed">
            From routine check-ups and cleanings to specialized treatments, The Smile Lodge offers comprehensive pediatric dental care, ensuring every child's smile stays healthy, bright, and full of confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Decorative Icons */}
                {service.decorativeIcon === "tooth" && (
                  <div className="absolute top-4 left-4">
                    <svg className="w-16 h-16 text-[#C8B88A] opacity-80" viewBox="0 0 64 64" fill="currentColor">
                      <path d="M32 8 C24 8 18 14 18 22 C18 26 18 42 20 50 C21 54 24 58 28 58 C30 58 31 56 32 54 C33 56 34 58 36 58 C40 58 43 54 44 50 C46 42 46 26 46 22 C46 14 40 8 32 8 Z" />
                    </svg>
                  </div>
                )}
                
                {service.decorativeIcon === "flower" && (
                  <div className="absolute bottom-4 left-4">
                    <svg className="w-20 h-20 text-[#E89B7E] opacity-70" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="8" fill="currentColor" />
                      <ellipse cx="50" cy="25" rx="10" ry="18" fill="currentColor" />
                      <ellipse cx="75" cy="50" rx="18" ry="10" fill="currentColor" />
                      <ellipse cx="50" cy="75" rx="10" ry="18" fill="currentColor" />
                      <ellipse cx="25" cy="50" rx="18" ry="10" fill="currentColor" />
                      <ellipse cx="65" cy="35" rx="12" ry="15" fill="currentColor" transform="rotate(45 65 35)" />
                      <ellipse cx="65" cy="65" rx="15" ry="12" fill="currentColor" transform="rotate(45 65 65)" />
                      <ellipse cx="35" cy="65" rx="12" ry="15" fill="currentColor" transform="rotate(45 35 65)" />
                      <ellipse cx="35" cy="35" rx="15" ry="12" fill="currentColor" transform="rotate(45 35 35)" />
                    </svg>
                  </div>
                )}

                {index === 3 && !service.decorativeIcon && (
                  <div className="absolute bottom-4 right-4">
                    <svg className="w-16 h-16 text-[#E89B7E] opacity-70" viewBox="0 0 64 64" fill="none">
                      <path d="M32 8 L38 28 L58 28 L42 40 L48 60 L32 48 L16 60 L22 40 L6 28 L26 28 Z" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#4A3728] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B5D52] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary hover:bg-[#C4B590] text-[#4A3728] font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm">
                    Book Now
                  </button>
                  <button className="flex-1 bg-transparent border-2 border-primary hover:border-[#C4B590] text-[#4A3728] font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm hover:bg-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;