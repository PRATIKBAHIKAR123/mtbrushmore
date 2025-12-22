import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-muted py-20 px-4 md:py-24 overflow-hidden">
      <img src={'/Images/Mountains.png'} alt="Decorative mountains" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
     

      {/* Background decorative silhouettes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Bear silhouette - left */}
        <svg className="absolute left-10 top-1/2 -translate-y-1/2 w-64 h-64" viewBox="0 0 200 200" fill="#8B6F47">
          <circle cx="60" cy="50" r="25" />
          <circle cx="140" cy="50" r="25" />
          <circle cx="100" cy="70" r="45" />
          <ellipse cx="100" cy="140" rx="50" ry="60" />
        </svg>

        {/* Forest/trees silhouette - bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 128" fill="#8B6F47" preserveAspectRatio="none">
          <path d="M0 128 L0 80 Q100 60, 200 80 T400 80 T600 80 T800 80 T1000 80 T1200 80 T1400 80 L1440 128 Z" />
          <circle cx="200" cy="70" r="30" opacity="0.6" />
          <circle cx="400" cy="60" r="35" opacity="0.5" />
          <circle cx="600" cy="75" r="25" opacity="0.7" />
          <circle cx="800" cy="65" r="32" opacity="0.6" />
          <circle cx="1000" cy="70" r="28" opacity="0.5" />
          <circle cx="1200" cy="68" r="30" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Container */}
        <div className="relative bg-white/40 backdrop-blur-sm rounded-lg md:rounded-[3rem] p-6 md:p-12 lg:p-20 shadow-2xl">
          
          {/* Decorative animal characters */}
          

          {/* Rabbit - Bottom Right */}
          <div className="hidden md:block absolute -bottom-4 right-8 md:right-20 w-24 h-24 md:w-44 md:h-44 animate-bounce-slow">
            <img src={'/Images/animals/moose-1.png'} alt="Decorative rabbit" className="w-full h-full object-contain"/>
          </div>

          {/* Main CTA Content */}
          <div className="text-center relative z-20">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4 eveleth">
              <span className="text-primary">Join Our Mt. Brushmore Family!</span>
              <br />
              
            </h2>
            <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-24 eveleth">
              <span className="text-accent">Book Your Child’s Visit Today</span>
            </h3>

            

            {/* Decorative ants walking */}
            <div className='flex items-end justify-center gap-3 relative'>
              
            
<img src={'/Images/animals/raccoon-baby-raccoon.png'} alt="Decorative ant" className="w-26 h-26 md:w-38 md:h-32 absolute left-[48%] -translate-x-1/2 -bottom-4 md:bottom-0 -translate-y-1/2 animate-bounce-slow"/>

            <button className="bg-secondary hover:bg-primary text-white font-bold py-2 md:py-4 px-8 md:px-12 rounded-full text-sm md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Now
            </button>
            <a href="tel:609-422-4700" className="border-2 border-secondary text-secondary font-bold py-2 md:py-4 px-6 md:px-12 text-sm md:text-xl rounded-full hover:bg-primary hover:text-white transition-colors">
                609-422-4700
              </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;