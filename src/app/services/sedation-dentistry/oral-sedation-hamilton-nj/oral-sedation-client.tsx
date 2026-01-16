"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OralSedationClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Is oral sedation safe for children?",
            answer:
                "Yes - oral sedation is a very safe and widely used option in pediatric dentistry. Every dosage is carefully selected based on your child’s age, weight, and medical background. Throughout the visit, our team continuously monitors your child’s breathing, heart rate, and comfort using hospital-grade safety equipment. We only use medications that are proven safe for children and recommended by pediatric dental guidelines.",
        },
        {
            question: "Will my child be awake during oral sedation?",
            answer:
                "Your child will stay awake and able to respond but feel very relaxed - almost like they are in a cozy daydream. They may be less aware of sounds or sensations and may not remember the details of treatment, which helps prevent fear and builds confidence for future visits.",
        },
        {
            question: "How do we prepare for an oral sedation appointment?",
            answer:
                "We will give you specific instructions based on your child’s unique needs. Typically, this includes not eating or drinking for a short time beforehand to ensure comfort and safety. We also suggest bringing a favorite blanket, stuffed animal, or comfort item to help your child feel secure and calm as the medication begins to work.",
        },
        {
            question: "How long do the calming effects last?",
            answer:
                "The relaxing feeling will gradually fade over several hours. Most children feel sleepy afterward and benefit from spending a quiet afternoon at home. By the next day, they are usually completely back to their normal routine with no lingering effects.",
        },
        {
            question: "Who is oral sedation recommended for?",
            answer:
                "Oral sedation works well for children who experience strong anxiety, have difficulty sitting still, have a sensitive gag reflex, or need longer or more complex dental treatment. It’s also a helpful option for kids who had a stressful dental experience in the past and need extra guidance to feel safe again.",
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
                        Oral Sedation for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        A soft boost of relaxation that helps little ones feel safe and supported, turning dental treatments into smooth and stress-free moments.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Oral Sedation.webp"  // ✅ replace with your image
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
                                Oral sedation is a safe, child-friendly medication that helps reduce fear, anxiety, and sensory overwhelm during dental visits. It allows children to stay awake but deeply relaxed, making care easier for kids who feel especially nervous or need longer procedures. Families searching for
                                <Link href="/services/sedation-dentistry/iv-sedation-hamilton-nj" className="text-accent font-semibold hover:underline"> sedation dentistry for kids near me</Link> often choose this option to help little ones feel brave and comfortable with dental care.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Before treatment begins, your child takes a small dose of a doctor-prescribed liquid or pill that encourages calmness and relaxation. The effects begin gradually, allowing care to feel smooth and stress-free. Throughout the appointment, we carefully monitor comfort, body response, and breathing while parents stay close for reassurance. Kids from
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link> <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link> <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link> <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link> <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link> <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>{" "}
                                benefit from the peaceful experience and often leave feeling proud and confident.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Oral sedation prevents anxiety from becoming overwhelming, improves cooperation, and makes treatment easier and more pleasant for both children and parents. It also helps create
                                <strong className="text-accent font-semibold hover:underline"> positive memories</strong>{" "}
                                about dental care, supporting lifelong comfort and healthier habits as kids grow.
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
