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
import BookingModal from '../booking/bookingScreen';

export default function HomePageClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

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
                <span className="text-accent font-bold">Mt. Brushmore Pediatric Dentistry </span>
              </h1>

              <p className="text-accent text-base md:text-lg leading-relaxed mb-8">
                We make dental visits fun, positive, and full of confidence-boosting moments for every child. From first checkups to growing-up smiles, we're here to help little ones feel their best.
              </p>

              {/* Star Rating */}
              {/* <div className="flex items-center space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div> */}
              {/* <p className="text-accent font-semibold text-lg mb-3">Over 6,000 5-star reviews</p> */}
              <div className='flex gap-2 md:gap-3 mb-2'>
                <Button onClick={() => setIsBookingOpen(true)} variant={'secondary'} className='rounded-full text-md md:text-lg font-bold' size={'lg'}>Book Now</Button>
                <Button onClick={() => { location.href = '/insurance-hamilton-nj' }} variant={'accent'} className='rounded-full text-md md:text-lg font-bold' size={'lg'}>Insurance</Button>
              </div>
            </div>

            <div className='h-24 md:h-48 w-auto absolute z-9 bottom-0 right-0'>
              <img src={'/Images/animals/bear-baby-bear.png'} className='h-full w-full' />
            </div>

            {/* Decorative Bear */}
            <div className="absolute inset-0">
              <img src={"/Images/banner.png"} className='w-full h-full object-cover opacity-20' />
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
                    src="/videos/header video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0">
                <img src={"/Images/Mountains.png"} className='w-full h-full object-cover opacity-10' />
              </div>
            </div>

            {/* Awards Section */}
            <div className="">
              {/* Smile Lodge Logo */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg md:text-4xl font-bold text-accent eveleth mb-2">
                    <h1 className="block text-lg md:text-3xl">Your Trusted Pediatric Dentistry in Hamilton, NJ</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhyUsSection />
      {/* <TestimonialsSection/> */}
      <ServicesSection />
      <InsuranceSection />
      <LocationsSection />
      <CTASection />

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 left-6 bg-teal-500 text-white rounded-full p-4 shadow-lg hover:bg-teal-600 transition-colors z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
      </button>
      <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
