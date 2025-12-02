import React, { useState } from 'react';

const InsuranceSection = () => {
  const [showFullList, setShowFullList] = useState(false);

  const insuranceProviders = [
    "Aetna",
    "Ameritas / First Ameritas",
    "Assurant",
    "Benefits Admin",
    "BCBS of Illinois",
    "Blue Shield",
    "Blue Shield of Massachusetts",
    "CBA Blue",
    "CDPHP",
    "Delta Dental",
    "Fidelis",
    "Healthplex (Excellus, MVP, Wellcare)",
    "Medicaid",
    // Additional providers for full list
    "Cigna",
    "Guardian",
    "MetLife",
    "United Healthcare",
    "Humana",
    "Anthem"
  ];

  const displayedProviders = showFullList ? insuranceProviders : insuranceProviders.slice(0, 13);

  return (
    <section className="relative bg-[#dadada] py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg className="absolute top-10 left-20 w-64 h-64" viewBox="0 0 200 200" fill="none">
          <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z" fill="#8B6F47" />
        </svg>
        <svg className="absolute top-20 right-10 w-96 h-96" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="40" r="30" fill="#8B6F47" />
          <circle cx="140" cy="100" r="25" fill="#8B6F47" />
          <circle cx="100" cy="150" r="35" fill="#8B6F47" />
          <circle cx="60" cy="100" r="28" fill="#8B6F47" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="#4A3728" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            WE ACCEPT <span className="text-primary">YOUR INSURANCE</span>
          </h2>
          <p className="text-[#4A3728] text-base md:text-lg max-w-3xl leading-relaxed">
            At The Smile Lodge, we simplify dental care by accepting most insurance plans, ensuring your child gets the high-quality treatment they need without the stress of navigating complicated payment options.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Image with Mascot */}
          <div className="relative h-full">
            <div className="bg-[#D4C5A0] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=900&fit=crop"
                alt="Dental office interior"
                className="w-full h-full object-cover opacity-90"
              />
              
            </div>

            
          </div>

          {/* Right Side - Insurance List */}
          <div className="relative h-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4A3728] mb-2">
                WE ARE <span className="text-[#8B4513]">IN-NETWORK WITH:</span>
              </h3>

              <ul className="space-y-3 mb-8 mt-6">
                {displayedProviders.map((provider, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-[#4A3728] text-base"
                  >
                    <span className="inline-block w-2 h-2 bg-[#8B4513] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{provider}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setShowFullList(!showFullList)}
                className="bg-[#D4C5A0] hover:bg-[#C4B590] text-[#4A3728] font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {showFullList ? "Show Less" : "See Full List"}
              </button>
            </div>

            {/* Floating Mascot Character */}
            <div className="absolute -top-8 -right-8 w-48 h-48 hidden lg:block animate-float">
              <img src={'/Images/fox-8534422_1280.png'}/>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InsuranceSection;