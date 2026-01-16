"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import LocationsSection from "@/app/home/our-locations";
import BookingModal from "@/app/booking/bookingScreen";
import "./../service-area.css";
import { contactDetails } from "@/lib/hooks/addressDetails";

export default function ServiceAreaPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div>
            {/* Header Section */}
            <div className="details-page-header-section ">
                <h1>Pediatric Dentist in East Windsor, NJ 08512 & 08520</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Growing Bright Smiles With Comfort & Care</p>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-8 md:gap-16">
                {/* Top Section: Image + Intro */}
                <div className="details-page-desc-section">
                    {/* Image Section */}
                    <div className="image_section">
                        <div className="image_section-cover">
                            <div className="main-image">
                                <Image
                                    src="/Images/service-page.webp"
                                    alt="Pediatric dentist near East Windsor NJ"
                                    className="rounded-xl w-full h-auto"
                                    width={1200}
                                    height={800}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section with Fade-in after delay */}
                    <div className="desc-text-section">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                            Local Pediatric Dental Care East Windsor Families Love
                        </h2>
                        <p>
                            At Mt. Brushmore Pediatric Dentistry, we turn dental visits into cheerful, confidence-building moments for every child. From toddlers stepping into their first appointment to older kids needing orthodontic care, we specialize in making smiles stronger - and helping children feel excited about taking care of their teeth.
                        </p>
                        <p>
                            Our team uses calm communication, gentle techniques, and a playful environment to help little ones feel proud of their smiles.
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        A Complete Home for Healthy, Confident Little Smiles
                    </h2>
                    <p>
                        Healthy smiles begin early - and we make every visit count. We protect growing teeth and encourage confident habits with:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                Regular cleanings, fluoride, and fun education help stop cavities early - protecting little smiles year after year.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                Kid-safe treatments restore strength and comfort when teeth need extra support, blending naturally for beautiful results.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                We guide developing smiles early to prevent crowding and create confident alignment - one step at a time.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                Perfect for anxious or high-energy kiddos - relaxation options keep visits smooth, calm, and stress-free.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                Dental injuries and tooth pain happen fast - we’re here with gentle same-day care and lots of reassurance.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                Every child deserves care made just for them. We adapt each visit with patience and sensory-friendly support.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Families searching for a “kids dentist near East Windsor” love our convenient location and child-centered approach to oral health.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why East Windsor Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Parents in East Windsor (08512, 08520), along with West Windsor (08550), Hamilton Square (08690), Mercerville (08619), Robbinsville (08691), and Lawrenceville (08648), love us because:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Gentle, supportive visits that build trust
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric-trained experts focused on comfort
                                </li>
                                <li>
                                    <CheckCircle />
                                    Immediate help for dental emergencies
                                </li>
                                <li>
                                    <CheckCircle />
                                    Accepted insurance & easy financing options
                                </li>
                                <li>
                                    <CheckCircle />
                                    Close to schools and community activities
                                </li>
                                <li>
                                    <CheckCircle />
                                    A warm, playful environment that encourages brave smiles
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="wcu-img-section">
                        <Image
                            src="/Images/service-page-1.webp"
                            alt="Family & Cosmetic Dentistry"
                            className="rounded-xl block"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>

                {/* Schedule Appointment Section */}
                <div className="features-section">
                    <h2 className="features-heading text-primary">
                        Book a Pediatric Dental Visit Near East Windsor Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is excited to welcome your child - with kindness, comfort, and lots of positivity at every step.
                    </p>
                    <section className="py-6 px-4 md:px-16 max-w-5xl mx-auto">
                        <div className="flex gap-3">
                            <a
                                href={`tel:${contactDetails.phone}`}
                                className="w-full flex flex-col border border-primary text-primary text-center rounded-lg px-2 md:px-4 py-3 md:py-6 hover:opacity-50 text-sm font-medium transition"
                            >
                                {/* <span className="text-[12px] md:text-base">Call Us Today</span> */}
                                {contactDetails.phone}
                            </a>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="w-full flex flex-col bg-secondary text-white rounded-lg px-1 md:px-4 py-3 md:py-6 hover:bg-primary text-sm font-medium transition"
                            >
                                Book Online
                                {/* <span className="text-[10px] md:text-base">
              Schedule Your Appointment Now
            </span> */}
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <LocationsSection />
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
}