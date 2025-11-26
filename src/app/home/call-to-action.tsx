import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#E8DED3] to-[#D8CEC3] py-20 px-4 md:py-32 overflow-hidden">
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
            <svg viewBox="0 0 180 180" fill="none" className="w-full h-full drop-shadow-2xl">
              <g>
                {/* Body */}
                <ellipse cx="90" cy="130" rx="45" ry="35" fill="#B8B8B8" />
                
                {/* Legs */}
                <ellipse cx="70" cy="155" rx="18" ry="12" fill="#A0A0A0" />
                <ellipse cx="110" cy="155" rx="18" ry="12" fill="#A0A0A0" />
                
                {/* Head */}
                <ellipse cx="90" cy="100" rx="35" ry="32" fill="#C0C0C0" />
                
                {/* Ears */}
                <ellipse cx="75" cy="60" rx="12" ry="35" fill="#C0C0C0" transform="rotate(-15 75 60)" />
                <ellipse cx="105" cy="60" rx="12" ry="35" fill="#C0C0C0" transform="rotate(15 105 60)" />
                <ellipse cx="75" cy="60" rx="7" ry="25" fill="#FFB6C1" transform="rotate(-15 75 60)" />
                <ellipse cx="105" cy="60" rx="7" ry="25" fill="#FFB6C1" transform="rotate(15 105 60)" />
                
                {/* Face */}
                <circle cx="80" cy="100" r="4" fill="#4A3728" />
                <circle cx="100" cy="100" r="4" fill="#4A3728" />
                <circle cx="90" cy="110" r="3" fill="#FFB6C1" />
                <path d="M85 113 Q90 116, 95 113" stroke="#4A3728" strokeWidth="2" fill="none" />
                
                {/* Whiskers */}
                <line x1="60" y1="105" x2="75" y2="103" stroke="#4A3728" strokeWidth="1.5" />
                <line x1="60" y1="110" x2="75" y2="110" stroke="#4A3728" strokeWidth="1.5" />
                <line x1="105" y1="103" x2="120" y2="105" stroke="#4A3728" strokeWidth="1.5" />
                <line x1="105" y1="110" x2="120" y2="110" stroke="#4A3728" strokeWidth="1.5" />
                
                {/* Arms */}
                <ellipse cx="60" cy="120" rx="12" ry="20" fill="#B8B8B8" transform="rotate(-30 60 120)" />
                <ellipse cx="120" cy="120" rx="12" ry="20" fill="#B8B8B8" transform="rotate(30 120 120)" />
              </g>
            </svg>
          </div>

          {/* Main CTA Content */}
          <div className="text-center relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[#4A3728]">GET STARTED.</span>
              <br />
              <span className="text-[#8B4513]">REQUEST YOUR VISIT TODAY!</span>
            </h2>

            {/* Decorative ants walking */}
            <div className="flex justify-center items-center gap-3 my-8">
              <svg className="w-6 h-6 text-[#4A3728] animate-walk" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="3" />
                <ellipse cx="12" cy="16" rx="4" ry="6" />
                <line x1="8" y1="14" x2="4" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg className="w-6 h-6 text-[#4A3728] animate-walk" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '0.2s' }}>
                <circle cx="12" cy="8" r="3" />
                <ellipse cx="12" cy="16" rx="4" ry="6" />
                <line x1="8" y1="14" x2="4" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg className="w-6 h-6 text-[#4A3728] animate-walk" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '0.4s' }}>
                <circle cx="12" cy="8" r="3" />
                <ellipse cx="12" cy="16" rx="4" ry="6" />
                <line x1="8" y1="14" x2="4" y2="18" stroke="currentColor" strokeWidth="2" />
                <line x1="16" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <button className="bg-[#8B4513] hover:bg-[#7A3A0F] text-white font-bold py-4 px-12 rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sway {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes walk {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-walk {
          animation: walk 0.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;