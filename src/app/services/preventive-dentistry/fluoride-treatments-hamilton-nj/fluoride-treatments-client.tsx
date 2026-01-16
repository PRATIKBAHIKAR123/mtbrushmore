"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function FluorideTreatmentsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Are fluoride treatments safe for kids?",
            answer:
                " Yes - fluoride has been thoroughly studied and safely used in pediatric dentistry for decades. The small amount applied during treatment is perfectly safe for children and works directly on the enamel to strengthen teeth without affecting the rest of the body. It’s one of the most trusted and effective ways to help protect growing smiles from cavities.",
        },
        {
            question: "How often should my child get fluoride?",
            answer:
                "Most children benefit from a fluoride treatment every six months, typically during their routine checkups. However, our team may recommend more frequent applications if your child has a higher risk of cavities, braces, a sugary diet, or enamel that needs extra support as teeth grow.",
        },
        {
            question: "Does fluoride taste bad for kids?",
            answer:
                "Not anymore! We use fun, kid-approved flavors so the experience feels just like a treat. The varnish or gel is applied quickly and comfortably, so even young children who are new to dental visits find it easy and pleasant.",
        },
        {
            question: "Will my child need to avoid food or drinks afterward?",
            answer:
                "After a fluoride varnish, we may ask your child to wait about 30 minutes before eating or drinking to allow the fluoride to fully absorb into the enamel. There are no restrictions after that - kids can return to their regular meals, snacks, and activities right away.",
        },
        {
            question: "Is fluoride only for children who get cavities?",
            answer:
                "Not at all! Fluoride is a preventive treatment, which means it helps stop cavities before they form. It’s recommended for all children as their enamel is still strengthening and can use a little extra protection - especially during the cavity-prone years.",
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
                        Fluoride Treatments in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Protect your child’s teeth from cavities with long-lasting dental <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline">pediatric dental sealants in Hamilton, NJ</Link> designed to safeguard hard-to-reach areas in growing smiles.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Fluoride treatment.webp"  // ✅ replace with your image
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
                                Fluoride treatments are simple preventive applications that boost the strength of your child’s enamel - the protective outer layer of teeth. This safe mineral helps fight off sugar, acid, and bacteria, which makes it especially helpful for little ones who are still mastering their brushing skills. Families searching for a
                                {" "}<Link href="/" className="text-accent font-semibold hover:underline">pediatric dentist near me</Link> often choose fluoride as an easy way to support long-term dental health.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                After a cleaning, we apply a flavored fluoride gel or varnish to your child’s teeth. It quickly absorbs and starts reinforcing enamel right away - no pain, no waiting, and no hassle.
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline">Our team</Link> will recommend how often fluoride should be used based on your child’s cavity risk, especially for families in
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}and nearby communities.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Fluoride treatments make enamel tougher, reducing the chance of cavities and decay as kids grow. They’re a smart, affordable way to give teeth extra protection - especially for children who love snacks or still need help with brushing. By boosting their natural defenses, fluoride keeps little smiles bright, strong, and shine-ready for every adventure.
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
