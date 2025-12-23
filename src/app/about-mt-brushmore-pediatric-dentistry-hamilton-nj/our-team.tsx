"use client"

import React from 'react';

interface Team {
  id: number;
  title: string;
  description: string;
  image: string;
  decorativeIcon?: string;
}

const TeamSection = () => {
  const team: Team[] = [
    {
      id: 1,
      title: "Dr. Manmeet Arora DDS",
      description: "Protect your child's smile with cleanings, fluoride, and sealants.",
      image: "/Images/Dr. Manmeet Arora, DDS.webp",
      decorativeIcon: "tooth"
    },
  ];

  return (
    <section className="relative bg-[#F5EFE7] py-16 px-4 md:py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <path d="M200 50 L250 150 L350 150 L270 220 L300 320 L200 260 L100 320 L130 220 L50 150 L150 150 Z" 
                fill="var(--accent)" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            <span className="text-accent">The Pediatric Dentistry Team Kids Love</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="flex items-center justify-center">
          {team.map((service, index) => (
            <div 
              key={service.id}
            >
              {/* Image Container */}
              <div className='relative z-10 h-64 rounded-3xl overflow-hidden shadow-lg transition-all duration-300'>
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
                
              </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                {/* Buttons */}
                <div className="flex">
                  <button className="flex-1 bg-primary hover:bg-accent text-white font-semibold py-2.5 px-4 rounded-full transition-colors duration-300 text-sm"
                  onClick={()=>{window.location.href='/team/dr-manmeet-arora' }}>
                    View Profile
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

export default TeamSection;