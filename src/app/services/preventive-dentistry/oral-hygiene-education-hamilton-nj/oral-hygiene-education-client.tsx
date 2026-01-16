"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function OralHygieneEducationClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "How can I get my child excited about brushing?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">Kids love routines that feel playful</strong> - not pressured. Using a 2-minute brushing song, a fun timer, character toothbrushes, or sticker reward charts can turn daily brushing into a positive challenge they want to complete. When brushing feels like an achievement, children become more motivated to take care of their smiles all on their own.
                </>
            ),
        },
        {
            question: "What kind of toothbrush and toothpaste should my child use?",
            answer: (
                <>
                    We recommend a <strong className="text-accent font-semibold">soft-bristle, child-sized toothbrush</strong> that comfortably fits in small hands and mouths. For toothpaste, kids should use a fluoride-based formula (pea-sized amount for ages 3+ and a tiny smear for toddlers) to help strengthen enamel and prevent decay. Our team offers personalized suggestions if your child has sensitivity, gag concerns, or sensory challenges.
                </>
            ),
        },
        {
            question: "How often should my child brush and floss?",
            answer: (
                <>
                    Children should <strong className="text-accent font-semibold">brush twice a day for two minutes</strong>, especially before bedtime, to remove sugars that sit on teeth overnight. Flossing should begin as soon as two teeth touch, since cavities love to hide between the teeth - a place brushes can’t reach. Starting early helps make these habits feel easy and automatic as children grow.
                </>
            ),
        },
        {
            question: "Can oral hygiene education help prevent cavities?",
            answer: (
                <>
                    Yes - <strong className="text-accent font-semibold">when children understand why brushing and flossing matter</strong>, they are more motivated to follow through at home. Learning proper technique helps remove plaque effectively, reducing the risk of cavities, gum irritation, and enamel damage. Education builds a strong foundation for long-term oral health and fewer dental visits for treatment.
                </>
            ),
        },
        {
            question: "What if my child struggles with brushing at home?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">It’s very common for kids to resist brushing</strong> at different stages. Our team provides tips tailored to your child’s personality - whether they respond better to visuals, games, positive reinforcement, or gradual independence. We support parents with strategies that make brushing smoother and help kids feel capable and proud when they succeed.
                </>
            ),
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
                        Oral Hygiene Education in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Give your child the tools to care for their smile with fun, hands-on <strong className="text-accent font-semibold">oral hygiene education in Hamilton, NJ</strong> designed to build confident brushing habits for life.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Oral Hygiene Education.webp"
                            alt="Oral hygiene education for children at Mt. Brushmore Pediatric Dentistry in Hamilton NJ"
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
                                Oral hygiene education teaches children how to take care of their teeth every day - and why it matters. Our team uses kid-friendly demonstrations, playful language, and positive encouragement to help little ones understand the best ways to brush, floss, and fight off “sugar bugs.” It’s all about making healthy routines feel empowering instead of stressful.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                During your child’s visit, our pediatric dental team explains brushing and flossing step-by-step using fun visuals and real tools. We show them how long to brush, how much toothpaste to use, and how to clean tricky areas like molars. We also talk about snack choices, brushing timers, and how parents can support habits at home - whether your family lives in
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}or surrounding Hamilton, NJ neighborhoods.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Good habits build strong smiles - and starting early makes all the difference. When children learn to care for their teeth, they are less likely to develop cavities and gum problems, and more likely to feel confident about visiting the dentist. With fun learning and positive reinforcement, we help your child feel proud of keeping their smile healthy every day.
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
