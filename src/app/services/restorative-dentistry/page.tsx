"use client";

import CTASection from "@/app/home/call-to-action";


interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  decorativeIcon?: string;
  path?: string;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Bonding",
      description: "A quick and seamless fix for small chips or gaps, restoring your child’s smile with natural-looking results.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      path: "/treatments/dental-cleanings-and-exams"
    },
    {
      id: 2,
      title: "Crowns",
      description: "Durable protection for damaged or weakened teeth, keeping little smiles strong for years to come.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
      path: "/treatments/restorative-dentistry"
    },
    {
      id: 3,
      title: "Fillings",
      description: "Tooth-colored repairs stop cavities early and blend perfectly with your child’s natural smile.",
      image: "/Images/Oral Surgery.webp",
      path: "/treatments/orthodontics"
    },
    {
      id: 4,
      title: "Restoration of Decayed Teeth",
      description: "Gentle, effective solutions repair damaged teeth and help children chew, smile, and grow confidently.",
      image: "/Images/enthodontics.webp",
      path: "/treatments/dental-emergencies",
    },
    {
      id: 5,
      title: "Tooth Extractions",
      description: "When a tooth can’t be saved, our team removes it gently to protect future growth and comfort.",
      image: "/Images/Tooth Extraction.webp",
      path: "/treatments/dental-emergencies",
    }
  ];

  return (
    <section className="relative bg-[#dadada] py-16 px-2 md:px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-2 md:top-0 right-0 w-28 md:w-84 h-28 md:h-84 opacity-60">
        <img src="/Images/animals/deer.png" alt="Decorative Pattern" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="var(--accent)" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
           Restorative Dentistry  <span className="text-accent">
 in Hamilton, NJ</span>
          </h2>
          <p className="text-accent text-base md:text-lg max-w-2xl leading-relaxed">
            From tiny repairs to durable protection, our
            <strong>pediatric restorative dentistry in Hamilton, NJ</strong>
            helps kids maintain strong, confident smiles as they grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-primary/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-6 rounded-lg md:rounded-3xl">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-lg md:rounded-3xl overflow-hidden p-2 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-lg md:rounded-3xl overflow-hidden">
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
              <div className='mt-2'>
                <h3 className="text-xl font-bold text-accent mb-3">
                  {service.title}
                </h3>
                <p className="text-accent text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-accent hover:bg-secondary text-white font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm">
                    Book Now
                  </button>
                  <button className="flex-1 bg-transparent border-2 border-secondary hover:border-[#C4B590] text-secondary font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm hover:bg-[#D4C5A0]" onClick={() => {
                    if (service.path) {
                      window.location.href = service.path;
                    }}}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTASection/>
    </section>
  );
};

export default ServicesSection;