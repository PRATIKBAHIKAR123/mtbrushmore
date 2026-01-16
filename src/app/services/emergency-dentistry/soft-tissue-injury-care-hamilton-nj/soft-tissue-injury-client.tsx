"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function SoftTissueInjuryClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "How do I know if my child’s mouth injury is serious?",
            answer:
                "If bleeding continues after 10 minutes of gentle pressure, the cut is deep or gaping, your child is having trouble speaking or eating, or the injury occurred during a hard impact or fall - it’s best to be seen right away. We evaluate not only the wound but also the teeth, jaw, and surrounding tissues to ensure everything is healing safely and correctly.",
        },
        {
            question: "Can mouth injuries get infected?",
            answer:
                "Yes - because the mouth naturally contains bacteria, injuries inside the mouth can become infected if left untreated. We clean the area thoroughly and may provide instructions or medication to support proper healing and prevent infection from developing.",
        },
        {
            question: "Why do mouth injuries bleed so much?",
            answer:
                "The mouth has many small blood vessels close to the surface, which help injuries heal quickly but can also make them look more intense than they are. Even minor cuts can bleed a lot - something that can feel scary, but is very common in children.",
        },
        {
            question: "What should I avoid doing before coming in?",
            answer:
                "Do not apply home glue or antiseptic creams inside the mouth - these can be harmful and delay healing. Avoid spicy, citrus, or crunchy foods until a dentist evaluates the injury. Keeping the area clean and applying light pressure is the safest care until we see your child.",
        },
        {
            question: "Could this injury affect my child’s speech or eating?",
            answer:
                "If untreated, deep injuries can impact how the tongue or lips move, affecting both eating and speech development. Prompt care ensures everything heals properly so your child can continue speaking and chewing without difficulty.",
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
                        Soft Tissue Injury Care for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Cuts, bites, or bumps inside the mouth can be painful and scary - but with gentle emergency care in Hamilton, NJ, your child can feel better fast and heal comfortably.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Soft Tissue Injuries.webp"  // ✅ replace with your image
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
                                Soft tissue injuries include cuts, tears, or bruises to the lips, cheeks, gums, or tongue. These often happen from falls, sports injuries, cheek biting, or accidents with toys. While mouth injuries tend to look dramatic due to extra blood flow, many are easily treated with expert care. Parents searching for a kids’ emergency dentist near me trust our pediatric team for calm reassurance and fast help when their child needs it most.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We gently evaluate the injury, clean the area, and determine whether stitches or additional treatment are needed. If bleeding is present, we apply soothing pressure and ensure your child remains calm and comfortable throughout their visit. Families across
                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                and nearby communities appreciate our supportive approach, helping kids feel safe and cared for while we protect their healing smile.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Prompt care reduces pain, controls bleeding, lowers infection risk, and helps injuries heal properly. It also prevents chewing difficulties or speech concerns that can arise from untreated wounds - all while reassuring children and parents through a stressful moment.
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
