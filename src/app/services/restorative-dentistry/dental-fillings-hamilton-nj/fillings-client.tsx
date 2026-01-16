"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

export default function FillingsClient() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const faqs = [
        {
            question: "Why does my child need a filling if it’s just a baby tooth?",
            answer:
                "Baby teeth play a big role in your child’s development - helping them chew, speak clearly, and guide permanent teeth into the correct position. Treating cavities early prevents infection, discomfort, and damage to the adult tooth developing underneath.",
        },
        {
            question: "Are tooth-colored fillings safe for children?",
            answer:
                "Yes - we use high-quality, BPA-free materials specifically made for pediatric dentistry. They bond securely to the tooth and provide strong, reliable protection while your child’s smile continues to develop.",
        },
        {
            question: "Will my child feel any pain during the filling procedure?",
            answer:
                "We use gentle techniques and comfort-focused care to help children feel relaxed throughout the visit. Many kids tell us they felt nothing more than a little tickle while their tooth was being cleaned and filled.",
        },
        {
            question: "How long do fillings last on kids’ teeth?",
            answer:
                "With good brushing habits and regular dental checkups, tooth-colored fillings can last several years - often until the tooth naturally falls out. We keep an eye on the repair at every visit to make sure it stays strong.",
        },
        {
            question: "How can we avoid future cavities?",
            answer:
                "Healthy habits help: brushing twice a day with fluoride toothpaste, eating less sticky sugar, flossing daily, and scheduling regular checkups. Preventive treatments like sealants and fluoride add extra protection for growing smiles.",
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
                        Dental Fillings in Hamilton, NJ
                    </h1>
                    <p className=" max-w-2xl text-base md:text-lg">
                        Fix cavities gently and beautifully with <Link href="/" className="text-accent font-semibold hover:underline">tooth-colored pediatric fillings in Hamilton, NJ</Link>{" "}designed to keep little smiles healthy, strong, and confidently bright.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Image Section */}
                    <div className="relative rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/fillings.webp"  // ✅ replace with your image
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
                                Tooth-colored fillings are a safe, smooth, and natural-looking way to repair cavities in baby and permanent teeth. Instead of using silver metal, we use a tooth-colored material that blends perfectly with your child’s smile - so most people won’t even notice the filling. Parents love this option because it protects growing teeth while preserving a bright, confident grin.
                            </p>
                        </section>

                        {/* HOW IT WORKS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT WORKS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Our pediatric dental team carefully removes the tiny area of decay, then places a durable filling that bonds directly to the tooth. The material is shaped to match the natural tooth and then hardened with a gentle curing light
                                - <Link href="/services/preventive-dentistry/fluoride-treatments-hamilton-nj" className="text-accent font-semibold hover:underline">no discomfort and no long recovery.</Link>  Children from

                                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                                {" "}often return right to their favorite foods and activities with a healthier, happier smile.
                            </p>
                        </section>

                        {/* HOW IT HELPS */}
                        <section>
                            <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                                HOW IT HELPS
                            </h3>
                            <p className=" leading-relaxed text-sm md:text-base">
                                Fillings stop cavities from spreading, relieve sensitivity, and allow your child to chew without pain. Because the repair blends in so beautifully, kids feel confident about showing off their smile. Getting cavities treated early also protects the tooth’s structure and supports long-term oral health as your child grows.
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
