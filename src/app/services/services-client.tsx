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

interface ServicesClientProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  decorativeImage: string;
}

export default function ServicesClient({
  title,
  subtitle,
  description,
  services,
  decorativeImage,
}: ServicesClientProps) {
  return (
    <section className="relative bg-[#dadada] py-16 px-2 md:px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-2 md:top-0 right-0 w-28 md:w-84 h-28 md:h-84 opacity-60">
        <img src={decorativeImage} alt="Decorative Pattern" className="w-full h-full object-cover" />
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
            {title} <span className="text-accent">{subtitle}</span>
          </h2>
          <p className="text-accent text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-primary/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-6 rounded-lg md:rounded-3xl">
          {services.map((service) => (
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
                  <button 
                    className="flex-1 bg-transparent border-2 border-secondary hover:border-[#C4B590] text-secondary font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm hover:bg-[#D4C5A0]"
                    onClick={() => {
                      if (service.path) {
                        window.location.href = service.path;
                      }
                    }}
                  >
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
}
