import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#dadada] to-[#D8CEC3] py-20 px-4 md:py-24 overflow-hidden">
      <img src={'/Images/Mountains.png'} alt="Decorative mountains" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
      {/* Decorative torn paper edge at top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[#F5F0E8]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 32" fill="none">
          <path d="M0 0 L0 32 Q20 20, 40 32 T80 32 T120 32 T160 32 T200 32 T240 32 T280 32 T320 32 T360 32 T400 32 T440 32 T480 32 T520 32 T560 32 T600 32 T640 32 T680 32 T720 32 T760 32 T800 32 T840 32 T880 32 T920 32 T960 32 T1000 32 T1040 32 T1080 32 T1120 32 T1160 32 T1200 32 T1240 32 T1280 32 T1320 32 T1360 32 T1400 32 T1440 32 L1440 0 Z" 
                fill="#F5F0E8" />
        </svg>
      </div>

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content Container */}
        <div className="relative bg-white/40 backdrop-blur-sm rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl">
          
          {/* Decorative animal characters */}
          

          {/* Rabbit - Bottom Right */}
          <div className="absolute -bottom-4 right-8 md:right-20 w-36 h-36 md:w-44 md:h-44 animate-bounce-slow">
            <img src={'/Images/animals/moose-1.png'} alt="Decorative rabbit" className="w-full h-full object-contain"/>
          </div>

          {/* Main CTA Content */}
          <div className="text-center relative z-20">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-4">
              <span className="text-primary">GET STARTED.</span>
              <br />
              <span className="text-accent">REQUEST YOUR VISIT TODAY!</span>
            </h2>

            {/* Decorative ants walking */}
            <div className="flex flex-col justify-center items-center">
              
            
<img src={'/Images/animals/raccoon-baby-raccoon.png'} alt="Decorative ant" className="w-12 h-12 md:w-16 md:h-16"/>
            <button className="bg-secondary hover:bg-primary text-white font-bold py-4 px-12 rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Now
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;