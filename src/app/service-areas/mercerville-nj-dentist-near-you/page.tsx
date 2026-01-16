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
                <h1>Pediatric Dentist in Mercerville, NJ 08619</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Where Every Smile Feels Right at Home</p>
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
                            Friendly, Local Pediatric Dental Care for Mercerville Families
                        </h2>
                        <p>
                            Mt. Brushmore Pediatric Dentistry is thrilled to care for kids right here in the Mercerville community. We focus on turning every appointment into a moment of laughter, learning, and growing confidence. Whether your child is arriving for a routine checkup or needs extra support during treatment, we make each visit comforting, playful, and tailored to their pace.
                        </p>
                        <p>
                            With a warm environment and compassionate pediatric experts, children leave feeling proud of their smiles - and excited to come back!
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        Protecting & Guiding Growing Smiles With Expert Care
                    </h2>
                    <p>
                        Kids deserve dental care that grows right along with them. We support strong teeth and happy smiles through:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                From teeth cleanings to education, we help keep smiles strong before problems start. Little ones stay excited about caring for their teeth.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                If a cavity appears, our gentle repairs protect the tooth and restore comfort. Treatments blend naturally so smiles look and feel amazing.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                We monitor growth early to make sure teeth come in with plenty of room. With thoughtful planning, alignment becomes easier as kids grow.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                Nervous or sensory-sensitive children can relax with soothing sedation options. It turns dental visits into calm, positive experiences.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                Unexpected dental problems are handled with fast support and reassurance. We help kids feel safe again while relieving pain quickly.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                We tailor every detail to your child’s unique needs and personality. Gentle communication and patience help build confidence at their own pace.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Parents searching for a fun and trustworthy “kids dentist near Mercerville” love how simple and supportive care feels with us.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why Mercerville Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Families in Mercerville (08619), along with Hamilton Square (08690), Robbinsville (08691), Lawrenceville (08648), West Windsor (08550), and East Windsor (08512, 08520), appreciate our:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Kind, patient approach that helps kids feel brave
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric-trained team focused on positive emotional experiences
                                </li>
                                <li>
                                    <CheckCircle />
                                    Quick relief and same-day help during emergencies
                                </li>
                                <li>
                                    <CheckCircle />
                                    Insurance-friendly office and easy payment support
                                </li>
                                <li>
                                    <CheckCircle />
                                    Convenient location close to home, school, and activities
                                </li>
                                <li>
                                    <CheckCircle />
                                    Colorful, playful setting that keeps children smiling throughout their visit
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
                        Book a Pediatric Dental Visit Near Mercerville Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is your trusted local pediatric dental home - ready to welcome your child with calming care and big smiles.
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