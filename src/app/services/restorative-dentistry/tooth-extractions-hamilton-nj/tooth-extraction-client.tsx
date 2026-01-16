"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function ToothExtractionClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Why would my child need a tooth extracted?",
            answer:
                "Extractions are typically recommended when a tooth is too damaged to save or when it’s affecting the growth of other teeth. Removing a severely decayed or injured tooth protects the adult tooth underneath and keeps your child comfortable as their smile develops.",
        },
        {
            question: "Will the procedure be painful for my child?",
            answer:
                "We take every step to ensure your child feels no pain during the extraction. Our gentle techniques, calming communication, and comfort options help kids feel secure - and many children are surprised by how fast the visit is.",
        },
        {
            question: "How long does it take to recover after a tooth extraction?",
            answer:
                "Most children bounce back quickly - often within a day. We provide easy after-care instructions, recommend soft foods for comfort, and offer tips to help healing stay on track. Before they know it, they’re back to smiling and laughing like normal.",
        },
        {
            question: "Will my child need a space maintainer afterward?",
            answer:
                "Sometimes - especially if the removed tooth was a baby molar that came out early. A space maintainer keeps room open for the adult tooth to grow in correctly. Our team will evaluate your child’s needs and recommend what supports the healthiest development.",
        },
        {
            question: "How do we care for the area where the tooth was removed?",
            answer:
                "We’ll give you clear, easy steps to follow at home - including how to keep the area clean, what foods to avoid, and when to resume normal brushing. We’re always available if you have questions during recovery.",
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
                        Tooth Extractions in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        When a tooth needs to be removed to protect your child’s health, our <strong className="text-accent font-semibold">gentle pediatric tooth extractions in Hamilton, NJ</strong>{" "}keep the process calm, comfortable, and stress-free for both kids and parents.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/toothextraction.webp"  // ✅ replace with your image
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
                                Tooth extractions are sometimes necessary when a tooth is too damaged to repair, is causing pain, or is blocking proper growth. Our pediatric dental team uses a comforting, kid-friendly approach to help children feel safe and relaxed throughout the visit. Many families searching for
                                <strong className="text-accent font-semibold"> child tooth removal near me</strong>{" "}choose our supportive care to protect their child’s growing smile.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We gently loosen and remove the tooth using careful techniques designed for little mouths. Comfort is always our top priority - we explain every step in simple language and offer options to help kids feel at ease. Whether the tooth is decayed, injured, or preventing others from growing correctly, children from

                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}can count on a smooth visit with a quick, easy recovery.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Removing a problem tooth prevents pain, infection, and future dental issues - while making space for healthy teeth to grow the right way. By addressing concerns early, we reduce the need for more complex treatment later and keep your child smiling comfortably and confidently.
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
