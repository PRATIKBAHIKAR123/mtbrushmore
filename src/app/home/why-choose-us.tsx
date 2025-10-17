import React from 'react';
import Image from 'next/image';

interface WhyUsProps {
  heroImage?: string;
  cardImage1?: string;
  cardImage2?: string;
}

const WhyUsSection: React.FC<WhyUsProps> = ({
  heroImage = '/Images/fox-8534422_1280.png',
  cardImage1 = '/Images/Moose.png',
  cardImage2 = '/Images/Copy of Fox.png',
}) => {
  return (
    <section className="relative bg-[#E8DDD3] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C4A789] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4B896] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Decorative wave line */}
            <div className="mb-4">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10" stroke="#6B5744" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#4A3728] mb-6">
              WHY US?
            </h2>
            
            <p className="text-lg text-[#5A4A3A] leading-relaxed max-w-xl">
              We blend expert pediatric dental care with a compassionate approach, 
              offering a welcoming environment, personalized treatments, and a 
              commitment to keeping your child's smile healthy and bright.
            </p>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={heroImage}
                alt="Decorative leaf"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 - Expert Pediatric Care */}
          <div className="bg-[#6B5744] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-bold text-white/30 mb-4">01</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
                Expert Pediatric Care
              </h4>
              <p className="text-gray-200 leading-relaxed mb-8 max-w-md">
                Our skilled team specializes in pediatric dentistry, 
                offering advanced treatments tailored to every child's 
                unique needs, ensuring they receive top-notch care in 
                a safe, comforting, and kid-friendly environment.
              </p>
              <button className="bg-[#D4B896] text-[#4A3728] px-8 py-3 rounded-full font-semibold hover:bg-[#C4A789] transition-colors">
                Our Team
              </button>
            </div>
            
            {/* Background decorative shape */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          </div>

          {/* Card 2 - Image Card */}
          <div className="rounded-3xl overflow-hidden h-full min-h-[400px] relative">
            <Image
              src={cardImage1}
              alt="Pediatric dental care"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 3 - Image Card */}
          <div className="rounded-3xl overflow-hidden h-full min-h-[400px] relative">
            <Image
              src={cardImage2}
              alt="Dental supplies"
              fill
              className="object-cover"
            />
          </div>

          {/* Card 4 - Can be customized for additional content */}
          <div className="bg-[#D4B896] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-bold text-[#4A3728]/20 mb-4">02</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#4A3728] uppercase">
                Kid-Friendly Environment
              </h4>
              <p className="text-[#5A4A3A] leading-relaxed max-w-md">
                We create a warm, inviting space where children feel 
                comfortable and safe, making dental visits a positive 
                experience that builds lasting healthy habits.
              </p>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/30 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;