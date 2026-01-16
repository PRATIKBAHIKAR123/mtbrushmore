"use client";

import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";

 const metadata: Metadata = createMetadata(
  pageMetadata.dentalCleanings.title,
  pageMetadata.dentalCleanings.description,
  "/treatments/dental-cleanings-and-exams",
  pageMetadata.dentalCleanings.keywords
);

export default function TreatmentDetailsPage() {
        const [isBookingOpen, setIsBookingOpen] = useState(false);
  const faqs = [
  {
    question: "Are clear aligners safe and effective for kids?",
    answer:
      "Yes - when used at the right stage of dental development, aligners can safely and effectively improve alignment and bite issues. We evaluate each child carefully to make sure aligners will achieve the desired results for their unique smile.",
  },
  {
    question: "How often do aligners need to be worn?",
    answer:
      "Aligners work best when worn 20–22 hours a day. They should only be removed for eating, brushing, flossing, and sports with a mouthguard. Consistent wear is key to making progress on schedule - and we help kids stay motivated with simple, encouraging guidance.",
  },
  {
    question: "Will wearing aligners hurt?",
    answer:
      "Your child may feel mild pressure for a day or two each time they switch to a new set - that means their teeth are moving! Most kids find clear aligners very comfortable because there are no brackets or wires to irritate their cheeks and lips.",
  },
  {
    question: "How do we keep track of aligners at school or activities?",
    answer:
      "We provide cases for safe storage whenever aligners are taken out. With a routine in place - like always putting them in the case before eating - kids quickly learn to keep their aligners safe and secure.",
  },
  {
    question: "What happens if my child loses an aligner?",
    answer:
      "Don’t worry - it’s common for kids to misplace items. We’ll review the situation and either replace the aligner or move ahead to the next set, depending on the progress. We’re flexible and always here to support your family.",
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
            Clear Aligners for Kids in Hamilton, N
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Nearly invisible aligners straighten teeth comfortably while letting kids eat, brush, and smile freely - with gentle orthodontic care right here in Hamilton, NJ.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/clear Aligners.webp"  // ✅ replace with your image
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
                Clear aligners are smooth, removable trays that help straighten teeth without brackets or wires. They are a great option for families looking for a
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">more comfortable and discreet orthodontic treatment for kids and teens near me.</Link>{" "}Each set of aligners shifts teeth step-by-step, making it easier for children to clean their teeth and enjoy mealtime without restrictions - all while building a confident, aligned smile.
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                We begin with a digital scan to design aligners that fit your child’s unique smile perfectly. Your child will switch to a new set every few weeks as their teeth gradually move into better alignment. Since the aligners are removable, brushing, flossing, and eating stay simple. Kids in
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                love that clear aligners feel comfortable and offer a more flexible orthodontic experience.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Clear aligners straighten teeth in a way that supports healthy bites, easier brushing, and long-term oral health - without the appearance of traditional braces. They boost confidence, especially for older children and teens who want a low-profile approach. With fewer food restrictions and easier hygiene, aligners help make orthodontic care feel more empowering and fun.
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
    <CTASection/>
    <BookingModal open={isBookingOpen} setOpen={setIsBookingOpen} />
    </div>
  );
}
