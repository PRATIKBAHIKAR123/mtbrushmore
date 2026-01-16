"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";
import Link from "next/link";

export default function DentalCleaningsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "What makes pediatric dental cleanings different from adult cleanings?",
            answer:
                "Pediatric cleanings are designed for comfort and education - not just polishing teeth. They focus on cavity prevention, growth monitoring, and helping children build strong brushing habits early. Our team uses gentle, kid-friendly tools and language so children feel relaxed and proud of taking care of their own smile.",
        },
        {
            question: "Will my child need X-rays during every checkup?",
            answer:
                "Not every time. Our team only recommends X-rays when they provide valuable information - such as tracking tooth development, checking for hidden decay, or ensuring adult teeth are erupting correctly. We always use low-radiation digital imaging specifically designed for kids’ safety.",
        },
        {
            question: "How can I help my child feel confident about dental visits?",
            answer:
                "Confidence starts with familiarity. You can read books about the dentist, encourage role-play toothbrush games at home, or talk about the visit as something exciting. Our friendly team celebrates bravery at every step, which helps children build trust and look forward to coming back.",
        },
        {
            question: "What age should my child start dental cleanings and exams?",
            answer:
                "We recommend the first pediatric dental visit by age 1 - or when the first tooth appears. Early checkups help us prevent dental issues from the start and give you helpful guidance to support healthy habits at home.",
        },
        {
            question: "Can routine cleanings really prevent bigger problems?",
            answer:
                "Absolutely - preventive care catches concerns before they become painful or costly. Cleanings remove bacteria that cause cavities and gum irritation, while exams help us spot early changes in growth so treatments are easier and more effective.",
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
                        Dental Cleanings & Exams in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Keep your child’s smile fresh, strong, and cavity-free with gentle pediatric dental cleanings and exams in Hamilton, NJ designed just for kids.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Dental Cleanings  Exams.webp"  // ✅ replace with your image
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
                                Dental cleanings and exams are essential preventive pediatric dental visits in Hamilton, NJ that ensure your child’s smile is developing just the way it should. We gently remove plaque, polish teeth for a healthy shine, and look for early signs of cavities or alignment concerns - all in a fun, encouraging space that helps kids feel great about caring for their teeth. Families searching for a kid’s dentist near me love how simple and positive these visits feel.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                During a cleaning, our pediatric dental team carefully counts, cleans, and polishes every tooth using child-friendly tools and techniques. Our team checks the teeth, gums, and bite to ensure healthy growth and development. If needed, we may recommend protective treatments like fluoride or sealants to help prevent cavities and strengthen growing smiles - especially for children in <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>, and nearby areas.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Regular cleanings and exams help prevent cavities, gum problems, and bigger dental concerns later on - keeping little smiles bright and healthy. They also encourage lifelong brushing habits and boost confidence during every visit. By choosing preventive pediatric dentistry near you, you’re giving your child a strong foundation for a lifetime of healthy, happy smiles.
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
