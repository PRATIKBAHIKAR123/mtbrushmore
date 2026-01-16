"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function NutritionalCounselingClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Does what my child eats really affect their teeth that much?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">Yes - what children eat plays a huge role</strong> in their oral health because cavity-causing bacteria thrive on sugars and starches left behind after meals. Frequent snacking, sugary drinks, and sticky treats keep sugar on the teeth longer, increasing the chance of enamel weakening and decay. By choosing a nutrition plan that supports healthy teeth, you are also protecting your child’s overall health and confidence as they grow.
                </>
            ),
        },
        {
            question: "How do you help picky eaters make better choices?",
            answer: (
                <>
                    We understand that <strong className="text-accent font-semibold">many kids go through phases</strong> of selective eating, so our team offers solutions that are realistic, flexible, and fun. We suggest small changes - like swapping sugary treats for crunchy fruits, yogurt, or cheese - and teach kids how to spot “smile-friendly” snacks they actually enjoy. Our goal is to help families create positive food habits without stress or battles at mealtime.
                </>
            ),
        },
        {
            question: "Should my child completely avoid sweets or snacks?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">Not at all</strong> - kids can still enjoy their favorite treats! <strong className="text-accent font-semibold">The key is balance</strong> and timing: pairing sweets with meals instead of grazing throughout the day, rinsing with water after sticky snacks, and practicing great tooth-brushing habits. We help parents build a healthy balance where children get to enjoy life while keeping their teeth strong and cavity-free.
                </>
            ),
        },
        {
            question: "What drinks are best for growing smiles?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">Water is always the #1 choice</strong>, especially fluoridated tap water, which helps protect enamel. Milk is also a great option for growing teeth because it contains calcium and vitamin D. Drinks like fruit juice, soda, flavored milk, and sports beverages should be limited - even when they seem “healthy” - because their sugars and acids can cause cavities over time.
                </>
            ),
        },
        {
            question: "Will nutritional counseling be personalized for my child?",
            answer: (
                <>
                    <strong className="text-accent font-semibold">Yes - every child has different preferences</strong>, routines, and nutritional needs, so we tailor all recommendations to fit your family’s lifestyle. Whether your child has allergies, sensory sensitivities, food aversions, or simply loves sugary snacks, our team works with you to create a realistic plan that motivates healthy habits and sets your child up for long-term success.
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
                        Nutritional Counseling in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Support healthy teeth from the inside out with <strong className="text-accent font-semibold">pediatric nutritional counseling in Hamilton, NJ</strong>  helping kids learn smart choices for strong smiles and healthy growth.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Nutritional Counseling.webp"
                            alt="Nutritional counseling for kids’ healthy teeth in Hamilton NJ"
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
                                Nutritional counseling is a personalized, kid-friendly conversation about the foods and drinks that help protect your child’s teeth - and the ones that can increase cavity risk. Our pediatric dental team gives practical guidance tailored to real family life, so making smile-friendly choices becomes easy at home, school, and everywhere in between.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                During your visit, we chat with you and your child about favorite snacks, drinks, and daily habits. We offer simple swaps for sugary foods, tips for packing healthier lunches, and strategies to reduce snacking that feeds cavity-causing bacteria. We also share ways to make water, fruits, veggies, and dairy more exciting and accessible for picky eaters - especially for families in
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
                                Good nutrition supports strong enamel, fresh breath, and healthier gums - and helps prevent cavities long before they can form. Kids who learn what’s good for their teeth early are more likely to build lifelong habits that protect their overall health. Together, we help your child feel proud of the food choices that help their smile grow!
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
