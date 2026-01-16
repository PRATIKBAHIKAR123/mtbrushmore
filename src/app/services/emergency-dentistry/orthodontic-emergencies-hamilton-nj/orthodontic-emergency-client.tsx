"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OrthodonticEmergencyClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "What should I do right away if my child has an orthodontic emergency?",
            answer:
                "Stay calm and give us a call so we can guide you step-by-step. If a wire is poking, covering it temporarily with orthodontic wax can help. If a piece comes loose, keep it in a safe container to bring to the appointment. Our team will let you know whether your child needs to come in right away or if there are safe ways to manage the issue until the next day.",
        },
        {
            question: "What is considered a true orthodontic emergency?",
            answer:
                "Anything that causes pain, cuts the lips or cheeks, or stops braces from working properly - such as a broken bracket, loose wire, missing band, or damaged expander. Even small issues can become bigger problems if not handled quickly, so it’s always better to reach out for guidance.",
        },
        {
            question: "Can my child still eat normally if something breaks?",
            answer:
                "Soft foods are best until the appliance is repaired. Crunchy, sticky, and hard foods can make the damage worse or cause more discomfort. Once everything is fixed, your child can return to their normal orthodontic-friendly eating routine.",
        },
        {
            question: "Will repairs be painful or scary for my child?",
            answer:
                "We make the visit as smooth and comfortable as possible. Most repairs are quick and involve gentle adjustments. We always explain each step in kid-friendly ways so children feel safe and know exactly what to expect - building confidence over fear.",
        },
        {
            question: "What if my child swallows a piece of their braces?",
            answer:
                "It sounds frightening, but most swallowed pieces are small and pass through the digestive system without causing harm. We will still talk through the situation with you and recommend a medical evaluation if needed to ensure your child’s safety.",
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
                        Orthodontic Emergency Care for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        When braces break or wires poke, we provide fast, gentle orthodontic emergency care in Hamilton, NJ to keep treatment on track and smiles feeling comfortable again.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Orthodontic Emergencies.webp"  // ✅ replace with your image
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
                                Orthodontic emergencies can happen anytime - a broken bracket, a poking wire, or a loose appliance may cause irritation or discomfort. While most orthodontic issues aren’t dangerous, they do need attention to prevent pain and keep teeth moving properly. Parents searching for a pediatric orthodontic emergency dentist near me trust our caring team to provide quick fixes and supportive guidance that help kids feel better right away.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We will examine the braces or appliance, gently relieve any irritation, and make repairs or adjustments needed to protect your child’s teeth and gums. If the issue requires a follow-up orthodontic visit, we’ll help coordinate the care. Families in
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                and nearby communities count on us for fast solutions that keep treatment effective and stress-free.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Quick orthodontic repair prevents injury to the lips, cheeks, or gums and keeps teeth moving exactly as planned - all while helping kids feel comfortable and confident again. Fast care also reduces unnecessary delays in treatment progress.
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
