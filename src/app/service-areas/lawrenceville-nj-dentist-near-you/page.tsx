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
                <h1>Pediatric Dentist in Lawrenceville, NJ 08648</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Where Healthy Smiles Begin with Comfort</p>
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
                                    alt="Main Banner"
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
                            Trusted Pediatric Dental Care Near Lawrenceville
                        </h2>
                        <p>
                            Mt. Brushmore Pediatric Dentistry is proud to support growing smiles in the Lawrenceville community with a caring, child-friendly approach. Every visit is designed to make kids feel relaxed, understood, and excited about caring for their teeth - whether it’s a first checkup or a more advanced treatment.
                        </p>
                        <p>
                            Our warm, encouraging team explains everything in simple, playful ways so children feel confident from the moment they walk in.
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        From First Teeth to Teen Smiles - We’re With You Every Step
                    </h2>
                    <p>
                        From first teeth to teen years, we keep smiles on track. We support lifelong oral health early with:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                Regular cleanings, nutrition guidance, and education help children stay cavity-free and proud of their healthy habits - right from the start.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                If a tooth needs extra care, we provide gentle repairs that restore strength and comfort. Smiles shine bright again with no fear attached.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                Early evaluations help guide proper alignment and jaw growth - giving every child space for a confident, well-balanced smile.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                Soothing sedation options help ease nerves for children who feel anxious, sensory-sensitive, or need multiple treatments in one visit.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                From toothaches to injuries, we provide quick relief and reassurance - helping kids feel safe and comfortable again fast.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                We personalize every appointment to match your child’s comfort level. Extra patience and thoughtful communication help build trust that lasts.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Lawrenceville families searching for a “pediatric dentist near me” love having such devoted, kid-focused care so close to home.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why Lawrenceville Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Families in Lawrenceville (08648), along with Hamilton Square (08690), Mercerville (08619), Robbinsville (08691), West Windsor (08550), and East Windsor (08512, 08520), appreciate our:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Gentle care that reduces fear and builds confidence
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric-trained team experienced with all ages and personalities
                                </li>
                                <li>
                                    <CheckCircle />
                                    Same-day support for urgent dental needs
                                </li>
                                <li>
                                    <CheckCircle />
                                    Insurance-friendly office with flexible payment options
                                </li>
                                <li>
                                    <CheckCircle />
                                    Convenient location near home, school, and activities
                                </li>
                                <li>
                                    <CheckCircle />
                                    A bright, cheerful atmosphere that makes visits feel fun
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
                        Book a Pediatric Dental Visit Near Lawrenceville Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is ready to welcome Lawrenceville families with comfort, care, and big smiles every step of the way.
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