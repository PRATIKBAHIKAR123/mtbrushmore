"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function BracesClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "What age should my child start braces?",
            answer:
                "While every child grows differently, braces typically begin once most permanent teeth have arrived - often between ages 10–14. However, the American Association of Orthodontists recommends an initial evaluation around age 7. Early monitoring allows us to catch bite concerns before they become bigger, giving your child the best timing and making treatment easier and faster when the time comes.",
        },
        {
            question: "Do braces hurt or bother kids?",
            answer:
                "Braces do not hurt during placement, and children usually adapt quickly. There may be a short period of mild soreness after each adjustment as teeth begin moving, but it usually lasts only a day or two. We share helpful tips like soft foods and orthodontic wax to keep your child completely comfortable while they adjust to their new smile journey.",
        },
        {
            question: "How long does treatment with braces usually take?",
            answer:
                "Most children complete treatment within 18–24 months, but the exact timing depends on the complexity of their case and how their teeth respond to movement. Attending checkups, following care instructions, and avoiding brace-damaging foods can all help keep treatment running smoothly and on schedule.",
        },
        {
            question: "Will braces affect my child’s ability to eat and speak?",
            answer:
                "Speaking remains almost exactly the same, especially after the first few days as kids get used to the brackets. Eating continues to be easy too - we’ll simply recommend avoiding sticky, crunchy, and very chewy foods to protect the braces. Kids usually discover braces don’t limit their fun or favorite meals very much at all.",
        },
        {
            question: "How do we keep teeth clean while wearing braces?",
            answer:
                "Good brushing and flossing habits are extra important during orthodontic treatment. We’ll show your child simple techniques and tools - such as floss threaders and special orthodontic brushes - to make cleaning easier. Keeping teeth and gums healthy throughout braces helps ensure their final smile looks amazing.",
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
                        Braces for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Reliable metal braces gently guide teeth into beautiful alignment for a healthier, more confident smile - all with support from our friendly pediatric orthodontic team in Hamilton, NJ.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/braces.webp"  // ✅ replace with your image
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
                                Traditional braces use small brackets and a thin wire to slowly move teeth into their best positions over time. They are one of the most effective orthodontic options for children and teens, especially when multiple alignment changes are needed. Many families searching for
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline">kids’ braces near me</Link>{" "}love how braces help create a strong bite and a confident smile that lasts a lifetime.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Braces are gently bonded to each tooth and adjusted during regular check-ins to guide growth step-by-step. Our pediatric orthodontic team uses kid-friendly communication to explain each visit so children feel in control and excited about their progress. Whether your child lives in
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                braces keep treatment consistent, predictable, and highly effective for growing smiles.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Straight teeth are healthier teeth - braces help reduce cavities, improve speech, support face and jaw development, and make brushing easier. They also boost confidence and encourage kids to love their smile. By treating alignment early, we create a strong foundation that benefits your child for life.
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
