"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function DentalAbscessClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Is a dental abscess a dental emergency?",
            answer:
                "Yes - a dental abscess is considered an urgent situation because infection can spread quickly to other areas of the mouth and even to the face or body. Fast treatment prevents serious complications and helps your child feel better right away.",
        },
        {
            question: "How do I know if my child has a dental abscess?",
            answer:
                "Common signs include swelling in the gums or cheek, a pimple-like bump on the gums, sensitivity to chewing, foul taste in the mouth, or a fever. If your child is pointing to a tooth and saying it hurts “inside,” that’s a strong indicator that infection might be present - and you should call us right away. ",
        },
        {
            question: "What should I do before we arrive for treatment?",
            answer:
                "Keep the area clean by having your child gently rinse with water. A cold compress can help reduce swelling. Do not try to pop or drain the bump - this can worsen the infection. Calling us quickly ensures we’re fully prepared to help the moment you arrive.",
        },
        {
            question: "How will you treat my child’s abscess?",
            answer:
                "Treatment focuses on removing the source of infection and protecting the affected tooth. Depending on your child’s needs, this may include draining the infection, cleaning the tooth, placing a restoration, or prescribing medication to help the body heal. We tailor every step to keep your child calm and comfortable.",
        },
        {
            question: "Will my child be in pain during the procedure?",
            answer:
                "No - relieving pain is our first priority. We use gentle techniques and child-friendly anesthesia options to help your child feel relaxed and supported. Many children feel relief almost immediately once the pressure from the abscess is reduced.",
        },
        {
            question: "Will my child be safe during the procedure?",
            answer:
                "Our team is highly trained in providing safe, effective care for children. We use the latest technology and techniques to ensure your child’s safety throughout the procedure. We also offer sedation options to help your child feel more comfortable and relaxed.",
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
                        Dental Abscess Treatment for Kids in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Dental abscesses can be painful and worrisome - but fast, gentle emergency care in Hamilton, NJ helps relieve discomfort, stop infection, and protect your child’s healthy smile.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/Dental Abscesses.webp"  // ✅ replace with your image
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
                                A dental abscess is an infection that forms around a tooth or in the gums, often caused by untreated cavities, dental trauma, or bacteria trapped beneath the surface. It may show up as swelling, redness, or a pimple-like bump on the gums - sometimes paired with throbbing pain or fever. Because infections can spread quickly, abscesses always need urgent care. Parents searching for a kids’ emergency dentist near me trust our calm, compassionate team to relieve pain fast and keep children safe while we restore their oral health.

                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                We begin by assessing the source of the infection and easing your child’s discomfort right away. Treatment may include removing trapped bacteria, stabilizing the affected tooth, or prescribing medication to support healing. Families across
                                <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                                and nearby areas rely on our emergency pediatric dentist to stop infection fast and keep growing smiles strong.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Treating a dental abscess quickly prevents serious complications, protects surrounding teeth, and relieves painful pressure and swelling. Early care helps children return to eating, sleeping, and playing comfortably - while preventing the infection from impacting their overall health or long-term development.
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
