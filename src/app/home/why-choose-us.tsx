import React from 'react';
import Image from 'next/image';

interface WhyUsProps {
  heroImage?: string;
  cardImage1?: string;
  cardImage2?: string;
}

const WhyUsSection: React.FC<WhyUsProps> = ({
  heroImage = '/Images/animals/deer-1.png',
  cardImage1 = '/Images/Moose.png',
  cardImage2 = '/Images/Copy of Fox.png',
}) => {
  return (
    <section className="relative bg-[#dadada] pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Floating + Marquee Boat — put this inside the hero/main container (parent should be relative) */}
      <div className="boat-marquee-wrapper" aria-hidden>
        <div className="boat-marquee">
          {/* You can duplicate the <img> if you want more than one boat in the stream */}
          <img src="/Images/animals/2.png" alt="Boat" className="boat" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-[calc(100%+1.3px)] h-[120px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,40 C120,80 240,0 360,20 480,40 600,100 720,90 840,80 960,20 1080,10 1200,0 1320,40 1440,30 L1440,0 L0,0 Z"
      fill="#F5EFE7"
    />
  </svg>
</div>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C4A789] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4B896] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            
            <div className='flex items-center justify-start'>
            <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6">
              {/* Decorative wave line */}
            <div className="mb-4">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10" stroke="#6B5744" strokeWidth="2" fill="none"/>
              </svg>
            </div>
              WHY US?
            </h2>
            <div className="flex justify-end">
            <div className="relative w-32 h-32 md:w-42 md:h-42 animate-float">
              <Image
                src={heroImage}
                alt="Decorative leaf"
                fill
                className="object-contain"
              />
            </div>
          </div>
          </div>
            
            <p className="text-lg text-[#5A4A3A] leading-relaxed max-w-xl">
              We provide gentle, expert pediatric dental care in a warm, kid-friendly environment. Our office is designed to spark curiosity and help children feel at ease from the moment they arrive. With advanced techniques and clear communication, we keep parents informed and kids confident - making every visit positive and stress-free.
            </p>
          </div>

          {/* Hero Image */}
          
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 - Expert Pediatric Care */}
          <div className="bg-[#b5650d] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-bold text-white/30 mb-4">01</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
                Expert Pediatric Care
              </h4>
              <p className="text-gray-200 leading-relaxed mb-8 max-w-md">
                With advanced pediatric dental training and a personalized approach, we ensure every child receives high-quality care in a soothing, child-centered space designed for comfort.
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
          <div className="bg-[#f59142] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-bold text-[#4A3728]/20 mb-4">02</h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[#4A3728] uppercase">
                Kid Friendly Environment
              </h4>
              <p className="text-[#5A4A3A] leading-relaxed max-w-md">
                Our mountain-themed office is designed with kids in mind - bright, engaging, and full of fun touches that turn every visit into a mini adventure. From the moment they walk in, children feel excited, curious, and completely at ease.
              </p>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/30 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(8deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
<style jsx>{`
  /* wrapper sits at bottom, full width, hides overflow */
  .boat-marquee-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: -20px; /* adjust so boat sits visually on the water edge */
    pointer-events: none; /* doesn't block clicks */
    overflow: hidden;
    height: 160px; /* area reserved for boat motion; adjust for image size */
    z-index: 40;
  }

  /* marquee container moves horizontally across screen */
  .boat-marquee {
    display: flex;
    align-items: flex-end; /* keep boat sitting near bottom of wrapper */
    /* start off-screen right and move to off-screen left */
    animation: marqueeBoat 18s linear infinite;
    /* optionally pause on hover (won't be reached because pointer-events:none) */
  }

  /* Actual boat image: bob up/down (floating) + small rotation for realism */
  .boat {
    width: 200px; /* adjust size */
    max-width: 30vw;
    transform-origin: center bottom;
    animation: float 2.6s ease-in-out infinite;
    will-change: transform;
    display: block;
    margin-right: 40px; /* spacing if you duplicate boats */
  }

  /* vertical bob + tiny rotation */
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(-6deg);
    }
    50% {
      transform: translateY(-80px) rotate(4deg);
    }
    100% {
      transform: translateY(0px) rotate(-6deg);
    }
  }

  /* horizontal marquee: from right (100%) to left (-100%) so boat fully passes screen */
  @keyframes marqueeBoat {
    0% {
      transform: translateX(-120%);
    }
    100% {
      transform: translateX(120%);
    }
  }

  /* Optional - slower on small screens */
  @media (max-width: 640px) {
    .boat {
      width: 140px;
    }
    .boat-marquee-wrapper {
      height: 120px;
      bottom: -10px;
    }
    /* make marquee slightly slower on mobile */
    .boat-marquee {
      animation-duration: 22s;
    }
  }
`}</style>
    </section>
  );
};

export default WhyUsSection;