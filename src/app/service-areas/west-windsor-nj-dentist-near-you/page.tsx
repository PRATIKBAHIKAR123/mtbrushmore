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
                <h1>Pediatric Dentist in West Windsor, NJ 08550</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Brightening Smiles One Happy Visit at a Time</p>
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
                                    alt="Pediatric dentist near West Windsor NJ"
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
                            Caring Pediatric Dental Visits for West Windsor Families
                        </h2>
                        <p>
                            At Mt. Brushmore Pediatric Dentistry, we believe every child deserves a dental experience that feels calm, positive, and tailored just for them. From tiny first teeth to teen aligners, we create a playful atmosphere that encourages comfort, curiosity, and growing confidence at every age.
                        </p>
                        <p>
                            Parents love how our gentle team helps children feel proud of taking care of their smiles - one joyful visit at a time!
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        Caring for Little Teeth From Baby Steps to Braces
                    </h2>
                    <p>
                        Every child’s smile is unique, and so is their care. We help protect and guide developing teeth with:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                Routine cleanings, sealants, and fun education help children protect their teeth early - creating strong, healthy habits that stick.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                When a cavity or chip happens, we fix it gently using natural-looking solutions that restore function and keep kids smiling comfortably.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                We monitor jaw and tooth growth early to prevent future alignment issues - setting the stage for beautifully straight, confident smiles.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                Our calming sedation options help anxious or energetic little ones relax - making visits smooth and stress-free.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                Toothaches and accidents don’t wait - and neither do we. We provide quick relief and reassurance when your child needs help most.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                We adapt every detail - communication, pace, and environment - to ensure children with unique needs feel fully supported.
                            </p>
                        </li>
                    </ul>
                    <p>
                        West Windsor parents searching for a “pediatric dentist near me” love our friendly approach and complete kids’ dental care just minutes away.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why West Windsor Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Families in West Windsor (08550), along with Hamilton Square (08690), Mercerville (08619), Robbinsville (08691), Lawrenceville (08648), and East Windsor (08512, 08520), rely on us because:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Gentle treatments that reduce fear and build confidence
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric-trained dental experts who truly understand kids
                                </li>
                                <li>
                                    <CheckCircle />
                                    Fast help when emergencies strike unexpectedly
                                </li>
                                <li>
                                    <CheckCircle />
                                    Insurance-friendly practice with easy financing support
                                </li>
                                <li>
                                    <CheckCircle />
                                    Convenient, close-to-home location for busy families
                                </li>
                                <li>
                                    <CheckCircle />
                                    A fun and cheerful space where children feel happy and relaxed
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
                        Book a Pediatric Dental Visit Near West Windsor Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is here to celebrate every stage of your child’s dental journey - with comfort, kindness, and big bright smiles.
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