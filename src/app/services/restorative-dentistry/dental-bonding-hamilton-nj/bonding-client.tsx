"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function BondingClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Is dental bonding safe for children?",
            answer:
                "Yes - dental bonding is a very safe treatment for kids. The material we use is a biocompatible resin that sits on the outside of the tooth and bonds securely without affecting the tooth structure underneath. Because the process is gentle and requires little to no enamel removal, bonding is considered one of the safest ways to repair growing teeth and protect their natural strength.",
        },
        {
            question: "Will my child feel pain or discomfort during bonding?",
            answer:
                "Bonding can last several years depending on your child’s brushing habits, diet, and how their teeth come together when chewing. As kids grow and become more active, the bonded area may experience normal wear - but our team checks the repair at every dental visit and can refresh it whenever needed to keep their smile looking and feeling its best.",
        },
        {
            question: "Will my child feel pain or discomfort during bonding?",
            answer:
                "No - most children feel absolutely nothing during bonding. There are no shots, drilling, or loud tools involved. Kids usually describe it as feeling like someone is brushing or painting their tooth, followed by a little light that helps the material harden in place. It’s a stress-free experience from start to finish.",
        },
        {
            question: "What types of dental problems can bonding fix?",
            answer:
                "Bonding is ideal for small chips from playtime accidents, tiny cracks, mild spacing between teeth, or areas where enamel has worn away. It can also smooth sharp edges or reshape a baby or permanent tooth to improve its appearance and comfort. It’s perfect for those common childhood dental surprises.",
        },
        {
            question: "How should we take care of a bonded tooth at home?",
            answer:
                "Regular brushing and flossing are key to keeping bonded teeth healthy. We may suggest avoiding very hard treats (like ice or jawbreaker candy) and habits such as chewing fingernails or pencils, since these can put extra pressure on the repair. With good care, bonding stays strong and smiles stay shining.",
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
                        Dental Bonding in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Fix tiny chips and gaps with <strong className="text-accent font-semibold">pediatric dental bonding in Hamilton, NJ</strong>- a fast, gentle way to keep little smiles looking their very best.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/bonding.webp"  // ✅ replace with your image
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
                                Dental bonding is a gentle way to repair small chips, cracks, or gaps using a smooth, tooth-colored resin that looks just like natural enamel. It’s a popular service for families searching for
                                <strong className="text-accent font-semibold"> kids’ cosmetic dental care near me</strong> especially when everyday play leads to tiny tooth surprises. Bonding helps protect growing smiles while keeping teeth looking strong, healthy, and picture-perfect.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our pediatric dental team prepares the tooth with a light cleaning, then brushes on a strong, enamel-colored material that is shaped perfectly to match your child’s natural tooth. A special curing light hardens it within seconds
                                -<strong className="text-accent font-semibold"> no drilling, no shots, and no discomfort</strong> Kids can head right back to school or play, with smiles that look as good as new. Families from
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}love how quick and easy this visit can be.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Bonding protects sensitive areas from further damage while restoring the tooth’s natural appearance - so kids can chew, talk, and grin without worry. It boosts confidence, prevents enamel wear, and gives little smiles a stronger start as they grow. Best of all, bonding allows your child to keep more of their natural tooth - a gentle fix made just for developing smiles.
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
