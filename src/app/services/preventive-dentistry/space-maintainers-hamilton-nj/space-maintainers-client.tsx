"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function SpaceMaintainersClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Why would my child need a space maintainer?",
            answer:
                "When a baby tooth is lost too soon - whether from a cavity, injury, or natural early loss - the surrounding teeth may drift into the empty space. This can block the permanent tooth trying to come in later and lead to crowding or crooked alignment. A space maintainer keeps that spot open so the adult tooth can erupt in the right position, helping your child avoid more complex orthodontic treatment in the future.",
        },
        {
            question: "Will a space maintainer feel uncomfortable or affect speech?",
            answer:
                "There may be a brief adjustment period as your child gets used to something new in their mouth. However, space maintainers are small, low-profile appliances that children typically adapt to very quickly - most forget they even have one after a few days. Speech changes are rare and usually temporary as the tongue adjusts to the new device.",
        },
        {
            question: "How long does my child need to wear a space maintainer?",
            answer:
                "The appliance stays in place only until the permanent tooth is ready to come in - this timeline varies from child to child. Our team monitors the tooth’s development at each visit so we can remove the device as soon as it has served its purpose. This ensures teeth grow properly with minimal disruption to your child’s daily routine.",
        },
        {
            question: "How do we properly care for a space maintainer at home?",
            answer:
                "Good brushing and flossing around the appliance are important to keep the area clean and free of trapped food. We also recommend avoiding sticky foods like gum, caramel, or chewy candy since they can loosen or damage the device. Encouraging your child not to push on the appliance with fingers or tongue will help keep it securely in place.",
        },
        {
            question: "Will my child still need braces later?",
            answer:
                "A space maintainer doesn’t replace orthodontic treatment, but it does help reduce the risk or severity of alignment problems later on. By guiding teeth into proper positions early, it supports healthy jaw development and can make future orthodontic care simpler, shorter, and more effective if needed.",
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
                        Space Maintainers in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Keep growing smiles on the right track with <Link href="/" className="text-accent font-semibold hover:underline">pediatric space maintainers in Hamilton, NJ</Link> preventing future alignment issues when baby teeth are lost too early.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Space Maintainers.webp"  // ✅ replace with your image
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
                                Space maintainers are small dental appliances that gently
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj"> hold open the space</Link> where a baby tooth has fallen out too soon. Because baby teeth help guide adult teeth into the correct position, losing one early can cause teeth to shift and crowd. Space maintainers protect that space and ensure the smile continues to develop properly.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our pediatric dental team custom-fits a tiny appliance to the area where the tooth is missing. Depending on your child’s needs, it may be a
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline"> fixed</Link> device that stays in place or a <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline"> removable</Link>  one. Each visit, we monitor the appliance and your child’s development to make sure their permanent teeth have the perfect path to come in - especially for kids in
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}and surrounding Hamilton, NJ communities.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                By preventing teeth from drifting or twisting, space maintainers help avoid bite problems, crowding, and the need for more complex orthodontic treatment later on. They support
                                <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline"> proper spacing, healthy alignment, and confident smiles</Link> during the most important years of oral development.
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
