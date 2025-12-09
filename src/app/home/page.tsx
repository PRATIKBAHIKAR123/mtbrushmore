"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import WhyUsSection from './why-choose-us';
import TestimonialsSection from './testimonials';
import ServicesSection from './our-services';
import InsuranceSection from './insurance-provider';
import LocationsSection from './our-locations';
import CTASection from './call-to-action';
import { Star } from 'lucide-react';

export default function HomePage() {
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      

      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-6 py-4 md:py-12 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Welcome Text */}
          <div className="bg-white rounded-3xl shadow-lg p-4 md:p-12 relative overflow-hidden flex flex-col justify-center ">
            {/* Background Pattern */}

            <div className="relative z-10">
              <h1 className="text-2xl md:text-5xl font-bold eveleth mb-6" >
                <span className="text-primary">WELCOME TO</span>
                <br />
                <span className="text-primary">THE </span>
                <span className="text-accent font-bold">MT BRUSHMORE</span>
              </h1>

              <p className="text-accent text-base md:text-lg leading-relaxed mb-8">
                At <span className="font-semibold">Mt. Brushmore</span>, we're dedicated to creating joyful dental 
                experiences for your little ones, combining expert care with a warm, 
                family-friendly atmosphere designed to make every visit stress-free 
                and fun!
              </p>

              

              {/* Star Rating */}
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-accent font-semibold text-lg mb-3">Over 6,000 5-star reviews</p>
              <div className='flex gap-2 md:gap-3 mb-2'>
                <Button variant={'secondary'} className='rounded-full' size={'lg'}>Book Now</Button>
                <Button variant={'accent'} className='rounded-full' size={'lg'}>Insurance</Button>
              </div>

            </div>

            <div className='h-24 md:h-48 w-auto absolute z-9 bottom-0 right-0'>
                <img src={'/Images/animals/bear-baby-bear.png'} className='h-full w-full'/>
              </div>

            {/* Decorative Bear */}
            <div className="absolute inset-0">
              <img src={"/Images/banner.png"} className='w-full h-full object-cover opacity-20'/>
            </div>
          </div>

          {/* Right Column - Video and Awards */}
          <div className="bg-white rounded-lg md:rounded-3xl shadow-lg p-4 md:p-12 relative overflow-hidden space-y-8">
            {/* Video Section */}
            <div>
              <div className="aspect-video">
                {/* Placeholder for video - replace with actual video */}
                <div className="relative w-full h-[380px] overflow-hidden rounded-xl md:rounded-3xl shadow-lg">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/251262_small.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full p-5 hover:bg-gray-800 transition-colors z-10"
      >
        {isPlaying ? (
          // Pause icon
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4h2v12H6zM12 4h2v12h-2z" />
          </svg>
        ) : (
          // Play icon
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        )}
      </button>
    </div>

                
              </div>
              <div className="absolute inset-0">
              <img src={"/Images/Mountains.png"} className='w-full h-full object-cover opacity-10'/>
            </div>
            </div>

            {/* Awards Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Smile Lodge Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg md:text-4xl font-bold text-accent eveleth mb-2">
                    <span className="block text-lg md:text-3xl">MT</span>
                    <span className="block text-xl md:text-4xl">BRUSHMORE</span>
                  </div>
                </div>
              </div>

              {/* Times Union Award */}
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <div className="text-lg md:text-2xl font-bold text-accent mb-1">TIMES UNION</div>
                </div>
                <div className="border-4 border-accent rounded-lg px-4 py-2 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-6 h-6 text-yellow-400 mr-1" />
                  </div>
                  <div className="text-accent font-bold text-sm">WINNER</div>
                  <div className="text-primary text-xs font-semibold">BEST OF CAPITAL REGION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


      </main>

      <WhyUsSection/>
      <TestimonialsSection/>
      <ServicesSection/>
      <InsuranceSection/>
      <LocationsSection/>
      <CTASection/>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 left-6 bg-teal-500 text-white rounded-full p-4 shadow-lg hover:bg-teal-600 transition-colors z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
      </button>
    </div>
  );
}