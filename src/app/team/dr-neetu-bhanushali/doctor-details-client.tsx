"use client"

import { useState } from "react";
import CTASection from "@/app/home/call-to-action";
import Image from "next/image";
import BookingModal from "@/app/booking/bookingScreen";

export default function DoctorDetailsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="bg-[#E8DED3] min-h-screen py-12 px-2">
            {/* Paper Container */}
            <div className="mx-auto max-w-5xl bg-[#F8F1E6] rounded-[26px] px-6 py-12 mb-3 md:px-12 shadow-sm">


                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">

                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/Images/Neetu Bhanushali.webp"
                                alt="Pediatric dentist at Mt. Brushmore Pediatric Dentistry in Hamilton NJ"
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
                            Dr. Neetu Bhanushali, DDS
                        </h1>
                        {/* WHAT IT IS */}
                        <section className="space-y-6">
                            {/* Description */}
                            <p className="text-accent leading-relaxed text-sm md:text-base">
                                Dr. Neetu Bhanushali is a compassionate and caring dentist who would go great lengths to make their patients comfortable and relaxed during the procedure. She brings in a wealth of knowledge and would explain the process and options to help patients make educated decisions. She received her D.D.S. (Doctor of Dental Surgery) from the University of California San Francisco.
                            </p>
                            <p className="text-accent leading-relaxed text-sm md:text-base">
                                In her pursuit of constant learning and development, Dr. Bhanushali is also doing her MAGD ("Master in the Academy of General Dentistry"). Only three percent of the dentists in the United States and Canada have received this honorary degree.
                            </p>
                            <p className="text-accent leading-relaxed text-sm md:text-base">
                                Dr. Bhanushali volunteers for multiple organizations where she provides free services. She also has multi-year experience in India as a dentist. When not practicing dentistry or attending professional obligations, she enjoys spending time with her family and friends or hiking
                            </p>

                        </section>

                        {/* CTA */}
                        <div className="pt-6">
                            <button
                                onClick={() => setIsBookingOpen(true)}
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
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
}
