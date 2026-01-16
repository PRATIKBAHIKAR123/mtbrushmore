"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function KnockedOutToothClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "What should I do right away if my child’s tooth is knocked out?",
            answer:
                "Stay calm - fast action helps! Pick up the tooth gently by the crown (the chewing surface), never the root. If it looks dirty, briefly rinse it with milk or saline - not soap, alcohol, or water. Try to place it back into the socket and have your child bite gently on a clean cloth to hold it in place. If that’s not possible, store the tooth in a container of milk, saline, or your child’s saliva. Then call us immediately for instructions as you head to our office. Timing is key - the sooner we see your child, the better the chance of saving the tooth.",
        },
        {
            question: "Can a knocked-out baby tooth be saved or reinserted?",
            answer:
                "No - baby teeth should not be replanted. Reinserting them can damage the developing permanent tooth underneath the gums. Instead, we will protect the empty space and ensure the area heals properly to support future growth and alignment. ",
        },
        {
            question: "Is my child in danger if their tooth is knocked out from trauma?",
            answer:
                "Knocked-out teeth are common in childhood, but they should be treated right away to prevent infection, nerve damage, or injury to surrounding teeth. We also check for lip or gum injuries, and ensure the jaw and other teeth are safe. Acting quickly keeps children comfortable and protects their long-term health.",
        },
        {
            question: "Will the appointment be painful for my child?",
            answer:
                "We work gently and use child-friendly pain management techniques to keep your child comfortable and reassured throughout the visit. Our team focuses on reducing fear and helping kids feel in control - because a calm experience now means easier visits later.",
        },
        {
            question: "What if we can’t find the tooth or it can’t be saved?",
            answer:
                "We’ll make sure your child still has a healthy smile and a strong path for future tooth development. If it's a baby tooth, we may recommend a space maintainer to keep nearby teeth from shifting. If it’s a permanent tooth, we’ll discuss longer-term solutions once your child is older - such as a natural-looking replacement.",
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
                        Knocked-Out Tooth Treatment for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        When a tooth gets knocked out, quick action and gentle care can make all the difference - and our pediatric emergency dentist in Hamilton, NJ is here to help your child’s smile recover fast and comfortably.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Knocked-Out Teeth.webp"  // ✅ replace with your image
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
                                A knocked-out tooth (also called an avulsed tooth) often happens during play, sports, or a fall. It may look and feel alarming, but acting quickly can help save the tooth - especially if it’s a permanent one. Parents searching for a kids’ emergency dentist near me can rely on our calm guidance and fast action to protect their child’s dental health and comfort.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We quickly assess the injury, check for any other trauma, and determine the best way to restore the tooth or protect the area. If it’s a permanent tooth, we’ll evaluate whether it can be reattached. For baby teeth, we focus on comfort and preventing damage to the developing permanent tooth. Families in
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                and surrounding communities count on our immediate support to ensure the very best outcome.
                            </p>
                        </section>
                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Prompt care relieves pain, reduces anxiety, and increases the chance of saving a permanent tooth. It also helps your child return to smiling, speaking, and chewing confidently - while protecting long-term dental development.
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
