"use client"

import CTASection from "@/app/home/call-to-action";
import Image from "next/image";

export default function DoctorDetailsClient() {

    return (
        <div className="bg-[#E8DED3] min-h-screen py-12 px-2">
            {/* Paper Container */}
            <div className="mx-auto max-w-5xl bg-[#F8F1E6] rounded-[26px] px-6 py-12 mb-3 md:px-12 shadow-sm">


                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Images/Dr.ManmeetAroraDDS.webp"
                                alt="Dr. Manmeet Arora, DDS"
                                className="object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* Text Sections */}
                    <div className="flex-1 w-full space-y-8">
                        <h1
                            className="text-xl md:text-3xl font-bold mb-4 text-accent"
                            style={{ fontFamily: "'Eveleth', serif" }}
                        >
                            Dr. Manmeet Arora DDS
                        </h1>
                        {/* WHAT IT IS */}
                        <section className="space-y-6">
                            {/* Description */}
                            <p className="text-accent leading-relaxed text-sm md:text-base">
                                With a passion for helping children build confident, healthy smiles, Dr. Manmeet Arora is a <strong className="text-accent font-semibold">board-eligible pediatric dentist</strong> who has dedicated her career to caring for young patients. She earned her DDS from the Herman Ostrow School of Dentistry at USC in 2014 and completed a General Practice Residency in 2016. Dr. Arora spent seven years serving families in Bridgeport, CT before completing her Pediatric Dental Residency at BronxCare Health Systems in 2025.
                            </p>
                            <p className="text-accent leading-relaxed text-sm md:text-base">
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
            <CTASection />
        </div>
    );
}
