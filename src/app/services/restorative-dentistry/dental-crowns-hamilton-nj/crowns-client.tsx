"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function CrownsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Why does my child need a dental crown instead of a filling?",
            answer:
                "Fillings are great for small cavities, but when damage is deeper or affects a large portion of the tooth, a crown provides full coverage and protection. It acts like a strong little helmet that holds everything together, prevents cracks, and keeps the tooth functional for chewing. Choosing a crown now can save your child from discomfort and avoid more extensive treatments - like extractions - later on.",
        },
        {
            question: "Are dental crowns safe and comfortable for kids?",
            answer:
                "Yes - pediatric crowns are specially designed for children’s teeth and are completely safe. They fit securely and comfortably over the tooth, helping restore strength without affecting surrounding teeth. Once placed, most children forget they even have a crown because it feels so natural.",
        },
        {
            question: "How long will a dental crown last on a baby tooth?",
            answer:
                "A well-cared-for crown typically lasts until the baby tooth falls out naturally. Because children are active and still developing their bite, a crown gives that tooth the strength it needs to keep doing its job - guiding proper spacing for adult teeth and supporting your child’s bite as they grow.",
        },
        {
            question: "Will the crown look noticeable when my child smiles?",
            answer:
                "Our priority is protecting the tooth, but we also understand how important confidence is for kids. Depending on the tooth’s location and needs, we may recommend a stainless-steel crown for durability or a tooth-colored crown for a more natural look - especially on front teeth. We’ll help you choose the option that’s best for your child.",
        },
        {
            question: "Is the crown procedure painful or scary for children ?",
            answer:
                "Not at all - our team takes time to explain everything in a gentle, kid-friendly way. We ensure your child is comfortable throughout the entire appointment. Once the crown is in place, children typically resume normal eating and playing the same day with no soreness or stress.",
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
                        Dental Crowns in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Some teeth need extra strength as they grow - that’s where <strong className="text-accent font-semibold">pediatric dental crowns in Hamilton, NJ</strong>- come in, giving little smiles, long-lasting protection and a confident, healthy bite.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Crowns.webp"  // ✅ replace with your image
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
                                Dental crowns are strong, kid-friendly coverings that protect a tooth when a simple filling isn’t enough. They act like a little helmet for the tooth - keeping it safe from further damage and restoring its ability to chew, talk, and smile comfortably. Parents looking for
                                <strong className="text-accent font-semibold"> children’s restorative dental care near me</strong> choose crowns to help save and strengthen a tooth that has been weakened by decay or injury.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our pediatric team gently removes the damaged part of the tooth and places a custom-fit crown over the top. The crown shields the tooth and allows it to function normally again. For children, crowns often provide the most durable protection - especially for back teeth that do lots of chewing. Families in

                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}love how this treatment helps keep their child’s smile healthy for years to come.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Crowns rebuild a tooth’s strength, restore comfort, and prevent future problems that could lead to extra dental work. They help kids continue eating, laughing, and growing with confidence. By protecting the natural tooth, crowns support proper development - ensuring the smile stays functional and beautiful as permanent teeth come in.
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
