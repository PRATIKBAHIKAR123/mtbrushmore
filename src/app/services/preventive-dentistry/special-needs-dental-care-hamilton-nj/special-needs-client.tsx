"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function SpecialNeedsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "How do you make dental visits more comfortable for children with different needs?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">We take time to understand each child’s personality</strong>, communication style, and any sensory preferences before beginning. Whether your child benefits from a quieter room, step-by-step guidance, breaks during care, or a slower pace, we adjust the experience so they feel safe and respected throughout the visit.
                </>
            ),
        },
        {
            question: "Can I stay with my child during the appointment?",
            answer: (
                <>
                    Absolutely. We believe <strong className="text-accent font-semibold">parents and caregivers are an essential source</strong> of comfort and support. You are always welcome to stay close, participate, and help guide what helps your child feel relaxed and confident.
                </>
            ),
        },
        {
            question: "What if my child has anxiety or difficulty sitting still?",
            answer: (
                <>
                    That’s completely okay - <strong className="text-accent font-semibold">many children feel more comfortable</strong> when they can move, explore, or take breaks. Our team uses visual tools, positive reinforcement, and calming techniques to help children feel in control. We can also schedule longer appointments so there is no pressure or rush.
                </>
            ),
        },
        {
            question: "Do you offer options to help children with sensory sensitivities?",
            answer: (
                <>
                    Yes - we can <strong className="text-accent font-semibold">dim lights, reduce noise</strong>, use weighted blankets, show tools before use, or incorporate visual storytelling. We listen carefully to what your child responds to best and make the environment as comfortable as possible.
                </>
            ),
        },
        {
            question: "How do you prepare a child for a new dental experience?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">We introduce each step slowly and clearly</strong>, letting children touch or see instruments before use if that helps them feel assured. Small wins are always celebrated - even just sitting in the chair - because confidence grows one success at a time.
                </>
            ),
        },
    ];

    return (
        <div className="bg-primary/10 min-h-screen py-12">
            {/* Paper Container */}
            <div className="mx-auto max-w-7xl bg-white rounded-[26px] px-6 py-12 md:px-12 shadow-sm">

                {/* Header */}
                <div className="mb-10">
                    <h1
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-accent eveleth"
                    >
                        Special Needs Dental Care in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Personalized care that supports comfort, confidence, and positive experiences for every child.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Space Maintainers.webp"  // ✅ replace with your image
                            alt="Dental Cleaning"
                            width={600}
                            height={450}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Text Sections */}
                    <div className="space-y-8">

                        {/* WHAT IT IS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                WHAT IT IS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Special needs dental care provides thoughtful, individualized support for children who benefit from a more customized approach during dental visits. This may include adapting the environment, communication, pace, or techniques to match each child’s comfort level and needs. Our goal is to ensure every child feels respected, understood, and fully supported during their time with us.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our team takes time to learn about your child’s preferences, sensitivities, and any challenges they may face. We adjust the appointment in ways that help them feel secure - whether that means a quieter space, visual explanations, step-by-step guidance, or extra time to settle in. For children who need additional support, we offer comfort-focused options to make the experience as smooth and reassuring as possible.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                This personalized approach helps children build trust, reduces anxiety, and allows them to receive high-quality dental care in a way that feels safe and manageable. By creating positive early experiences, we help families establish a foundation for ongoing oral health and encourage confidence that grows with every visit.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="pt-4">
                            <button onClick={() => setIsBookingOpen(true)}
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
            <section className="bg-white mx-auto max-w-7xl rounded-[26px] px-6 py-12 md:px-12 mt-4 md:mt-6">

                {/* Heading */}
                <h2
                    className="text-2xl md:text-4xl font-bold mb-8 text-accent eveleth"
                    style={{ fontFamily: "'Eveleth', serif" }}
                >
                    Frequently Asked Questions
                </h2>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-[#D4C5A0]"
                        >
                            <AccordionTrigger
                                className="
                text-left
                text-sm md:text-base
                font-semibold
                uppercase
                tracking-wide
                text-accent
                hover:no-underline
                py-4
              "
                            >
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-accent text-sm md:text-base leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            <CTASection />
            <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
        </div>
    );
}
