"use client"

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import TeamSection from "./our-team";
import WhyUsSection from "../home/why-choose-us";
import TestimonialsSection from "../home/testimonials";
import LocationsSection from "../home/our-locations";
import CTASection from "../home/call-to-action";

export default function AboutUs() {
  
  return (
   <>
      <main className="container mx-auto px-6 py-12">
        <div>
          {/* Left Column - Welcome Text */}
          <div className="bg-white rounded-3xl shadow-lg p-12 relative overflow-hidden flex-1 justify-center ">
            {/* Background Pattern */}

            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-6" style={{fontFamily: "'Eveleth', sans-serif"}}>
                <span className="text-primary">WELCOME TO</span>
                <br />
                <span className="text-primary">THE </span>
                <span className="text-accent">MT BRUSHMORE</span>
              </h1>

              <p className="text-gray-700 text-lg w-[50%] leading-relaxed mb-8">
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
              <p className="text-gray-800 font-semibold text-lg mb-3">Over 6,000 5-star reviews</p>
              <div className='flex gap-2 md:gap-3 mb-2'>
                              <Button variant={'secondary'} className='rounded-full' size={'lg'}>Book Now</Button>
                              <Button variant={'accent'} className='rounded-full' size={'lg'}>Insurance</Button>
                            </div>

            </div>

            <div className='h-48 w-auto absolute z-9 bottom-0 right-0'>
                <img src={'/Images/animals/bear-baby-bear.png'} className='h-full w-full'/>
              </div>

            {/* Decorative Bear */}
            <div className="absolute inset-0">
              <img src={"/Images/Mountains.png"} className='w-full h-full object-cover opacity-40'/>
            </div>
          </div>

        </div>
      </main>
      <TeamSection/>
      <WhyUsSection/>
      <TestimonialsSection/>
      <LocationsSection/>
      <CTASection/>
      </>
  )
}