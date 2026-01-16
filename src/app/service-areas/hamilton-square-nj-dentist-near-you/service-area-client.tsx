"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import LocationsSection from "@/app/home/our-locations";
import BookingModal from "@/app/booking/bookingScreen";
import "./../service-area.css";
import { contactDetails } from "@/lib/hooks/addressDetails";

export default function ServiceAreaClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div>
            {/* Header Section */}
            <div className="details-page-header-section ">
                <h1>Pediatric Dentist in Hamilton Square, NJ 08690</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Close to Home for Growing Smiles</p>
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
                                    alt="Pediatric dentist near Hamilton Square NJ"
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
                            Complete Pediatric Dental Care Near Hamilton Square
                        </h2>
                        <p>
                            Mt. Brushmore Pediatric Dentistry proudly provides fun, gentle, and high-quality dental care for families in Hamilton Square, NJ. Whether your child is due for a first dental checkup, needs orthodontic guidance, or has a sudden dental emergency, we make every visit a positive, confidence-boosting experience from start to finish.
                        </p>
                        <p>
                            Our kid-friendly team explains each step in simple terms, helping little ones feel safe and excited about taking care of their teeth.
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        Smiles Grow Here: Comprehensive Kids’ Dental Care
                    </h2>
                    <p>
                        Little smiles change fast - and we’re here for every moment. We support healthy growth and confident teeth with:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                Early checkups keep tiny teeth sparkling clean while checking that every smile is developing just right. We focus on building strong lifelong habits while protecting smiles from cavities.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                When a tooth needs a little help, we repair it gently using kid-friendly techniques. Comfort comes first so children leave smiling proudly.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                We keep an eye on how growing teeth and jaws are developing. Early guidance helps prevent crowding and supports a confident future smile.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                For children who need extra comfort, we offer calming sedation options that make visits feel easy. Worries stay low while courage grows high.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                For children who need extra comfort, we offer calming sedation options that make visits feel easy. Worries stay low while courage grows high.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                Every child deserves personalized compassion and understanding. We adapt the environment and pace to help them feel safe and supported.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why Hamilton Square Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Parents in Hamilton Square (08690) and nearby Mercerville (08619), Robbinsville (08691), Lawrenceville (08648), West Windsor (08550), and East Windsor (08512, 08520) trust us because:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Gentle, comforting dental experiences designed for kids
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric-trained experts who understand children’s needs
                                </li>
                                <li>
                                    <CheckCircle />
                                    Same-day emergency care available
                                </li>
                                <li>
                                    <CheckCircle />
                                    Insurance-friendly office with flexible financing
                                </li>
                                <li>
                                    <CheckCircle />
                                    Convenient location only minutes from home
                                </li>
                                <li>
                                    <CheckCircle />
                                    A warm, playful atmosphere that builds lifelong confidence
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
                        Book a Pediatric Dental Visit Near Hamilton Square Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is proud to support healthy beginnings and confident smiles for Mercerville kids - every step of the way.
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
