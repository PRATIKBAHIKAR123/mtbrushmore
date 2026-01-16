"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function XraysClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Are dental X-rays safe for children?",
            answer:
                "Yes - digital X-rays are very safe for children because they use extremely low levels of radiation, much lower than traditional film X-rays or even the exposure received during everyday outdoor activities. We follow strict safety guidelines, provide protective shielding, and only recommend X-rays when they play an important role in protecting your child’s oral health.",
        },
        {
            question: "Why would my child need an X-ray if their teeth look fine?",
            answer:
                "Some dental concerns can develop beneath the gums before any symptoms appear, especially in growing smiles. X-rays help us find early cavities between teeth, check how adult teeth are forming, and make sure the jaw and bite are developing correctly - so we can address issues early, when treatment is easier and more comfortable.",
        },
        {
            question: "How often should children get dental X-rays?",
            answer:
                "The frequency depends on your child’s age, cavity risk, and stage of development. Many children only need X-rays once a year, while those more prone to cavities may benefit from more frequent monitoring. Our team recommends X-rays only when they truly support your child’s oral health.",
        },
        {
            question: "Will getting X-rays hurt or feel scary?",
            answer:
                "Not at all - taking X-rays is quick, gentle, and doesn’t involve any discomfort. We use kid-sized sensors and simple, reassuring instructions. Most children find the process surprisingly easy, and some even think it’s fun to see pictures of their own teeth afterward.",
        },
        {
            question: "Can I stay with my child during the X-ray?",
            answer:
                "Absolutely! We encourage parents to stay with their children during X-rays for comfort and reassurance. Our team is always here to support you and your child through the process.",
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
                        X-rays and Imaging in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        See your child’s smile growing strong with safe, comfortable <Link href="/" className="text-accent font-semibold hover:underline">pediatric dental X-rays and imaging in Hamilton, NJ</Link> designed to catch changes early and protect growing teeth.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/X-Rays Imaging.webp"  // ✅ replace with your image
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
                                X-rays and imaging allow us to see what the eyes can’t: developing teeth below the gums, early signs of cavities, jaw growth, and how adult teeth are forming. These advanced tools help ensure your child’s smile stays on track as they grow. Every scan is performed using
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj"> ultra-low-radiation technology</Link> made specifically for children.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                During your child’s visit, our pediatric team guides them through a quick and easy imaging process. We use digital X-rays that take clear pictures in seconds, so there’s no waiting or discomfort. We explain each step in kid-friendly language to help children feel relaxed and confident - whether you’re visiting us from
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline"> fixed</Link> device that stays in place or a <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline"> removable</Link>  one. Each visit, we monitor the appliance and your child’s development to make sure their permanent teeth have the perfect path to come in - especially for kids in
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}or nearby Hamilton communities.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                By showing us what’s happening beneath the surface, X-rays allow us to detect cavities early, monitor tooth eruption, support orthodontic planning, and ensure healthy jaw development. Early detection means fewer surprises, less complex treatment later, and happier, healthier smiles through every stage of childhood.
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
