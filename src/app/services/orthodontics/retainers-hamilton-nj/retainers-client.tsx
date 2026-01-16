"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function RetainersClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "How long will my child need to wear a retainer?",
            answer:
                "Retainer wear depends on how much the teeth moved during orthodontic treatment and how quickly they stabilize afterward. Most children start by wearing their retainer full-time for several months, then transition to nighttime wear as their smile becomes more secure. Because teeth can shift over time due to natural growth, long-term retainer use - especially while sleeping - helps ensure the results last for years.",
        },
        {
            question: "Why is wearing a retainer so important after braces or aligners",
            answer:
                "Once the braces or aligners come off, the jawbone and gums need time to adapt to the new tooth positions. Without a retainer, teeth can slowly shift back toward their original spots. Consistent retainer use protects all the hard work and investment that went into creating a beautiful smile, helping your child maintain their confidence and comfort as they grow.",
        },
        {
            question: "Are retainers comfortable for kids to wear?",
            answer:
                "Yes - retainers are custom-designed to feel smooth and comfortable in your child’s mouth. There may be a short adjustment period, but kids typically adapt within a few days and hardly notice it’s there. If anything ever feels uncomfortable, we make quick adjustments to ensure the perfect fit.",
        },
        {
            question: "If the retainer is removable, when should my child take it out?",
            answer:
                " Removable retainers should be taken out during meals, during tooth brushing and flossing, and when playing sports that require a mouthguard. This keeps both the retainer and teeth clean and protected from damage. We provide a protective case so the retainer stays safe whenever it’s not being worn.",
        },
        {
            question: "How do we clean a retainer properly?",
            answer:
                "Daily cleaning is essential - just like brushing teeth. Removable retainers can be gently brushed with a soft toothbrush and non-abrasive soap to prevent plaque buildup. We also share helpful tips for deep cleaning and storage so the retainer stays clear, fresh, and hygienic.",
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
                        Retainers for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        After braces or aligners, retainers keep teeth beautifully in place - helping kids in Hamilton, NJ enjoy confident, long-lasting results from their orthodontic journey.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Retainers.webp"
                            alt="Pediatric retainers for straight teeth in Hamilton NJ"
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
                                Retainers are custom-made orthodontic devices worn after treatment to keep teeth from shifting back into old positions. Once a smile is straight and the bite is aligned, retainers protect those amazing results by giving teeth the support they need while the jaw continues to grow. They are an essential step for families searching for
                                {" "}<strong className="text-accent font-semibold">kids’ retainers near me</strong>{" "}
                                to maintain a healthy, confident smile.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Once braces or aligners come off, we create a retainer that fits your child’s newly aligned teeth perfectly. Depending on their needs, it may be removable or fixed in place. We guide your family on how and when to wear it - and schedule follow-ups to ensure a great fit. Kids and parents in
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                appreciate how simple this step is in keeping results strong.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Retainers prevent teeth from shifting, protect all the hard work put into orthodontic care, and help children enjoy a smile they’ll love for years to come. When kids feel good about their smile, they feel more confident in every part of life - retainers help that confidence last.
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
