"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function IVSedationClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Is IV sedation safe for children?",
            answer:
                "Yes. IV sedation is very safe when administered by trained pediatric anesthesia professionals who focus solely on your child’s comfort and safety. We thoroughly review medical history beforehand and monitor breathing, heart rate, and oxygen levels throughout the entire visit. Our equipment and protocols are specifically designed for children - making safety the top priority at every moment.",
        },
        {
            question: "Will my child be asleep during IV sedation?",
            answer:
                "They won’t be fully asleep like in a hospital setting, but they will be in a very deep and peaceful state of relaxation - often referred to as “twilight sleep.” Children are unaware of the procedure, do not feel discomfort, and typically remember little or nothing from the visit, which protects their emotional wellbeing.",
        },
        {
            question: "Why would IV sedation be recommended for my child?",
            answer:
                "IV sedation is an excellent option for children who have severe dental anxiety, special healthcare needs, a strong gag reflex, trouble sitting still for long periods, or who require multiple treatments in one visit. It allows us to complete necessary care smoothly while keeping the experience calm and trauma-free.",
        },
        {
            question: "How should we prepare before the sedation appointment?",
            answer:
                "You’ll receive a simple set of instructions that may include limiting food and drinks beforehand and adjusting daily medications if needed. We take time to answer all parent questions in advance so everyone feels fully prepared and comfortable on the day of the visit.",
        },
        {
            question: "What is recovery like after IV sedation?",
            answer:
                "Children may feel sleepy or need extra cuddles for the next few hours - that’s completely normal. After a restful afternoon at home, most kids return to their usual energy by the next day. We’ll give parents clear after-care guidance and remain available if any concerns arise once you’re home.",
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
                        IV Sedation for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        A restful and fully monitored sedation option that helps children stay completely comfortable while their dental care is completed safely and smoothly.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/IV Sedation.webp"  // ✅ replace with your image
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
                                IV sedation is a deeper form of relaxation used for children who need extensive dental treatment, have high anxiety, or require extra support for comfort and safety. Medication is given through a tiny IV line that helps kids drift into a peaceful, nap-like state so they’re unaware of the procedure while still breathing independently. Parents searching for
                                <Link href="/services/sedation-dentistry/iv-sedation-hamilton-nj" className="text-accent font-semibold hover:underline"> IV sedation dentistry for kids near me</Link> and surrounding areas including
                                appreciate how it turns a challenging experience into a calm and stress-free one.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our trained anesthesia provider gently administers medication through a small IV while your child rests comfortably in the dental chair. Throughout the entire visit, we closely monitor breathing, heart rate, and comfort with specialized equipment and dedicated team oversight. Families in
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>{" "}
                                value how IV sedation allows all needed treatment to be completed in one smooth, worry-free visit.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                IV sedation removes fear, prevents discomfort, and is especially helpful for children with extensive dental needs, strong gag reflexes, special healthcare needs, or previous traumatic experiences. It supports a positive relationship with dental care and helps preserve your child’s emotional comfort - not just their teeth.
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
