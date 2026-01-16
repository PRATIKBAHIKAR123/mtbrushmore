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
    question: "Why is age 7 the best time for the first orthodontic visit?",
    answer:
      "At age 7, children have a mix of baby and adult teeth, making it the ideal stage to spot concerns like crowding, bite problems, or jaw growth issues. Early evaluation helps us plan ahead and keep treatment simple when the time is right.",
  },
  {
    question: "What signs might mean my child needs early orthodontic support?",
    answer:
      "Trouble chewing, thumb-sucking beyond toddler years, early or late loss of baby teeth, mouth breathing, jaw clicking, or teeth that are crooked, spaced, or shifted can all be indicators. Even without visible concerns, early monitoring is still highly beneficial.",
  },
  {
    question: "Will early orthodontic visits mean braces right away?",
    answer:
      "Not usually - most early evaluations simply involve watching growth. If treatment is needed early, it’s often brief and focused on guiding development, which can make future orthodontic care easier and more comfortable.",
  },
  {
    question: "Are these visits uncomfortable for children?",
    answer:
      "Not at all! Early orthodontic checks are gentle and easy. We keep the experience playful and encouraging, so kids feel proud of taking care of their smile.",
  },
  {
    question: "How often should my child be evaluated after the first checkup?",
    answer:
      "It depends on their unique development. Some children only need yearly check-ins, while others benefit from more frequent monitoring. We customize the schedule to your child’s needs.",
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
            Early Orthodontic Assessments in Hamilton, NJ
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Smart, early checkups help us guide little smiles as they grow - making orthodontic care easier, faster, and more comfortable for kids in Hamilton, NJ.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/Early Orthodontic Assessments.webp"  // ✅ replace with your image
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
                Early orthodontic assessments are growth-focused checkups where we evaluate how your child’s teeth, bite, and jaw are developing. The American Association of Orthodontists recommends the first orthodontic exam by <strong className="font-semibold text-accent">age 7</strong>{" "} because baby teeth and permanent teeth work together to shape the future smile. Parents searching for 
                {" "}<Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">early orthodontic care near me</Link>{" "}trust these visits to give their child the very best start.
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                During the appointment, our pediatric orthodontic team checks spacing, bite alignment, jaw growth, and how permanent teeth are forming under the gums. If needed, we take quick, comfortable digital images to see what’s happening behind the scenes. We explain every step in fun, kid-friendly ways so children feel confident - and families in
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                feel fully supported as their child grows
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                By identifying concerns early, we can guide growth at the perfect time - which may help reduce overcrowding, shorten time in braces, and prevent more complex treatment later. Early checks support clear speech, easier chewing, and straighter smiles with less stress. Taking action early often leads to healthier, happier smiles for life.
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
