"use client"

import CTASection from "@/app/home/call-to-action";
import Image from "next/image";

export default function DoctorDetailsPage() {

  return (
    <div className="bg-[#E8DED3] min-h-screen py-12 px-2">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-[#F8F1E6] rounded-[26px] px-6 py-12 mb-3 md:px-12 shadow-sm">
        

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-96 w-full md:w-auto">
            <img
              src="/Images/Dr. Manmeet Arora, DDS.webp"  // ✅ replace with your image
              alt="Dental Cleaning"
              className="object-contain w-full h-full"
            /> 
          </div>

          {/* Text Sections */}
          <div className="space-y-8">
            <h1
            className="text-xl md:text-3xl font-bold mb-4 text-[#2F241C]"
            style={{ fontFamily: "'Eveleth', serif" }}
          >
            Dr. Manmeet Arora DDS
          </h1>
            {/* WHAT IT IS */}
            <section className="space-y-6">
  {/* Description */}
  <p className="text-[#4A3A2A] leading-relaxed text-sm md:text-base">
    With a passion for helping children build confident, healthy smiles, Dr. Manmeet Arora is a board-eligible pediatric dentist who has dedicated her career to caring for young patients. She earned her DDS from the Herman Ostrow School of Dentistry at USC in 2014 and completed a General Practice Residency in 2016. Dr. Arora spent seven years serving families in Bridgeport, CT before completing her Pediatric Dental Residency at BronxCare Health Systems in 2025.
  </p>
  <p className="text-[#4A3A2A] leading-relaxed text-sm md:text-base">
    Beyond dentistry, she enjoys creating memories with her family, contributing to her community, and experimenting with new recipes in the kitchen.
  </p>

</section>

{/* CTA */}
<div className="pt-6">
  <button
    className="inline-flex items-center justify-center gap-2
      bg-accent hover:bg-secondary
      text-white font-semibold
      px-8 py-3 rounded-full
      transition-all duration-300 shadow-md"
  >
    Book Consultation
  </button>
</div>


          </div>
        </div>
      </div>
      <CTASection/>
    </div>
  );
}
