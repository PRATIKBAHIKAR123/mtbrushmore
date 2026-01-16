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
                <h1>Pediatric Dentist in Robbinsville, NJ 08691</h1>
                <p className="text-white">Mt. Brushmore Pediatric Dentistry - Brightening Smiles, Building Confidence</p>
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
                            Compassionate Pediatric Dental Care Near Robbinsville
                        </h2>
                        <p>
                            Families in Robbinsville trust Mt. Brushmore Pediatric Dentistry for a warm, playful approach that helps children feel calm and happy at every visit. From toddlers experiencing their first appointment to teens navigating orthodontic care, we deliver gentle treatments tailored to each child’s personality and comfort level.
                        </p>
                        <p>
                            With friendly guidance and kid-approved communication, we turn dental care into an adventure kids feel proud to be part of.
                        </p>
                    </div>
                </div>

                {/* Comprehensive Dental Care Section */}
                <div className="flex flex-col gap-4 p-4 md:p-0">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold">
                        All the Pediatric Dental Services Your Child Needs
                    </h2>
                    <p>
                        As children grow, their dental needs grow too. We make every stage easier and healthier with:
                    </p>
                    <ul className="list-disc text-accent pl-6 space-y-2 text-sm md:text-lg">
                        <li>
                            <h3 className="text-lg font-semibold">Preventive Dentistry</h3>
                            <p>
                                We build strong, lifelong habits with cleanings and cavity prevention - keeping smiles healthy from the start. Kids feel excited knowing they’re caring for their own teeth.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Restorative Dentistry</h3>
                            <p>
                                If a tooth needs help, we fix it gently and naturally, protecting comfort and confidence. Little smiles stay bright and pain-free.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Pediatric Orthodontics</h3>
                            <p>
                                We guide developing jaws and teeth with early monitoring and treatment. A straighter, stronger smile begins right now.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Sedation Dentistry</h3>
                            <p>
                                Wiggly, anxious, or sensory-sensitive children relax with carefully chosen calming options. Dental visits become peaceful and manageable.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Emergency Dentistry</h3>
                            <p>
                                Toothaches, injuries, or sudden concerns are met with fast relief and reassurance. We’re here when your child needs help most.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-lg font-semibold">Special Needs Dental Care</h3>
                            <p>
                                Our supportive approach adapts to every child’s needs - helping them feel secure, understood, and celebrated at every step.
                            </p>
                        </li>
                    </ul>
                    <p>
                        Robbinsville parents searching for a “kids dentist near me” love having expert, child-first dental care so conveniently close to home.
                    </p>
                </div>

                {/* Why Choose Us Section */}
                <div className="wcu-section">
                    <div className="wcu-text-section">
                        <div className="wcu-title">
                            <h2>Why Robbinsville Parents Choose Mt. Brushmore</h2>
                        </div>
                        <div className="wcu-desc">
                            Families in Robbinsville (08691), along with Hamilton Square (08690), Mercerville (08619), Lawrenceville (08648), West Windsor (08550), and East Windsor (08512, 08520), choose us for:
                        </div>
                        <div className="wcu-points-section">
                            <ul className="wcu-points">
                                <li>
                                    <CheckCircle />
                                    Gentle, patient care focused on confidence & emotional comfort
                                </li>
                                <li>
                                    <CheckCircle />
                                    Pediatric specialists trained to work with all kids - all personalities
                                </li>
                                <li>
                                    <CheckCircle />
                                    Rapid support for dental emergencies
                                </li>
                                <li>
                                    <CheckCircle />
                                    We accept many major dental insurance plans
                                </li>
                                <li>
                                    <CheckCircle />
                                    Close to home, school, sports, and daily routines
                                </li>
                                <li>
                                    <CheckCircle />
                                    A playful atmosphere that turns checkups into happy experiences
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
                        Book a Pediatric Dental Visit Near Robbinsville Today
                    </h2>
                    <p className="features-description">
                        Mt. Brushmore Pediatric Dentistry is excited to welcome Robbinsville families into our smile-loving community - where children feel safe, supported, and proud of taking care of their teeth.
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