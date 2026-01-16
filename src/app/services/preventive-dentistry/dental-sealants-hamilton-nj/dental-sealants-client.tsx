"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";
import Link from "next/link";

export default function DentalSealantsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Are dental sealants safe for children?",
            answer:
                "Yes - sealants are one of the safest and most trusted dental treatments available for children. They are made from a BPA-free resin that simply sits on top of the tooth’s surface without affecting the body. They act as a shield for the areas kids struggle to keep clean with brushing alone.",
        },
        {
            question: "How long do sealants last?",
            answer:
                "Sealants can last several years and provide long-term protection during the cavity-prone childhood years. At each checkup, our team monitors them and can easily repair or touch them up so the protection lasts as your child’s smile grows and changes.",
        },
        {
            question: "Will my child feel anything during the procedure?",
            answer:
                "No - applying sealants does not involve drilling, needles, or any discomfort. Kids simply open wide while the tooth surface is cleaned, dried, and painted with the protective coating. Many children say it feels just like having their teeth brushed.",
        },
        {
            question: "Do sealants replace brushing and flossing?",
            answer:
                "Sealants help protect the grooves of the back teeth - but daily brushing, flossing, and healthy snacks are still the best defense against cavities. Sealants act like a strong backup system to give your child extra protection where needed most.",
        },
        {
            question: "When is the best time for my child to get sealants?",
            answer:
                "We typically recommend placing sealants as soon as the first permanent molars come in (around age 6) and again when second molars arrive (around age 12). This timing protects teeth right as they erupt - when they are most vulnerable to decay.",
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
                        Dental Sealants in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Protect your child’s teeth from cavities with long-lasting pediatric dental sealants in Hamilton, NJ, designed to safeguard hard-to-reach areas in growing smiles.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/dental Sealants.webp"  // ✅ replace with your image
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
                                Dental sealants are <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj">thin, protective coatings</Link> applied to the chewing surfaces of molars - where cavities like to hide. This quick and painless treatment creates a smooth barrier that helps kids avoid decay, especially as their back teeth come in. Many parents searching for a
                                {" "}<Link href="/" className="text-accent font-semibold hover:underline">pediatric dentist near me</Link> choose sealants as an extra layer of protection for active, snack-loving little ones.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                After a gentle cleaning, we carefully paint a safe, tooth-colored resin onto the grooves of your child’s molars. The material is hardened with a special light so it bonds instantly - no numbing, no discomfort, and no downtime. Our team ensures every sealant is perfectly placed so cavities have a much harder time sneaking in, especially for children in
                                {" "}<Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                and surrounding communities.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Sealants can reduce the risk of cavities on back teeth by
                                {" "}<Link href="/services/preventive-dentistry/dental-sealants-hamilton-nj" className="text-accent font-semibold hover:underline">up to 80%</Link>, making them one of the most effective preventive treatments available for kids. They last for years, protect teeth during cavity-prone stages, and keep little smiles healthier between checkups. With sealants, you’re giving your child a simpler, stronger defense against tooth decay - and fewer trips for dental treatment later on!
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
