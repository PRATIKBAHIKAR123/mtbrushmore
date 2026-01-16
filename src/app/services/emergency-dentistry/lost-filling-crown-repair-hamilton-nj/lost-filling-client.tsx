"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function LostFillingClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Is a lost filling or crown considered a dental emergency?",
            answer:
                "Yes - when a filling or crown comes off, the tooth underneath is left unprotected. Even if your child isn’t in pain yet, the tooth can become sensitive or infected very quickly. Seeing us right away ensures the tooth stays healthy and prevents more complicated treatment later.",
        },
        {
            question: "Why do fillings or crowns fall out in kids?",
            answer:
                `There are several reasons this can happen:
 • A new cavity may have formed underneath the restoration
 • The tooth structure may have weakened over time
 • Kids may bite something too hard or sticky
 • Grinding or clenching at night can loosen the restoration
 During your visit, we’ll determine the cause so we can fix the tooth and prevent repeat issues.`,
        },
        {
            question: "What should I do if the restoration is lost at home?",
            answer:
                "Keep your child calm and comfortable. If you have the crown, place it somewhere safe and bring it to the appointment - sometimes it can be reused. Avoid trying to stick it back in place with glue, toothpaste, or store-bought products, as they can damage the tooth or surrounding tissue.",
        },
        {
            question: "Will my child feel pain before we come in?",
            answer:
                "Some children feel a small shock-like sensation with cold drinks or when chewing. Others may feel no pain initially. Either way, the exposed tooth is vulnerable, so quick dental care is always the best choice to prevent discomfort or infection",
        },
        {
            question: "Can my child eat normally before seeing the dentist?",
            answer:
                "They can eat soft foods on the opposite side of the mouth. Avoid anything hard, sticky, or overly hot or cold until the tooth is repaired. These simple precautions help protect the exposed area and keep your child comfortable.",
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
                        Lost Filling or Crown Treatment for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        If a filling or crown comes loose, falls out, or feels wiggly, our pediatric emergency dentist in Hamilton, NJ is here to protect your child’s tooth and provide fast, gentle relief.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Lost Fillings or Crowns.webp"  // ✅ replace with your image
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
                                Fillings and crowns help protect teeth that have been treated for decay or damage - but sometimes they can loosen or pop off due to chewing, grinding, or new cavity activity underneath. While it may not always be painful at first, a missing restoration can leave the tooth exposed and sensitive. Parents searching for a kids’ emergency dentist near me choose us for calm guidance and timely care that keeps smiles healthy and comfortable.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We will examine your child’s tooth to determine why the filling or crown came out and whether it can be securely replaced or needs a new restoration. Our gentle, kid-friendly approach helps children stay relaxed while we protect the tooth from sensitivity, bacteria, or further damage. Families from
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                and nearby neighborhoods appreciate our quick support to keep little smiles safe.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Restoring the tooth right away prevents pain, infection, and future complications - while allowing your child to chew, speak, and smile without discomfort. Fast care keeps treatment simple and protects the progress of your child’s growing smile.
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

                            <AccordionContent className="text-accent text-sm md:text-base leading-relaxed pb-4 whitespace-pre-line">
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
