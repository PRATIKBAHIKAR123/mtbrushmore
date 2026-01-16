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
    question: "Why would my child need a palate expander?",
    answer:
      "An expander is recommended when a child’s upper jaw is too narrow, causing crowding or a crossbite. By widening the arch while the bones are still developing, permanent teeth have room to come in correctly - making orthodontic care faster and more comfortable later.",
  },
  {
    question: "Is wearing an expander uncomfortable for kids?",
    answer:
      "There may be a brief adjustment period, but discomfort is usually very mild. Most children adapt quickly and continue to eat, talk, and play as normal. We offer tips to help them feel confident from day one.",
  },
  {
    question: "How do habit appliances help stop thumb-sucking or other habits?",
    answer:
      "Habit appliances serve as a soft reminder that helps kids naturally stop the habit without stress or shame. Breaking these habits early protects the bite, reduces speech concerns, and helps teeth grow into healthier positions.",
  },
  {
    question: "How long will my child need to wear the appliance?",
    answer:
      "Treatment length depends on your child’s needs - expanders may be worn for several months, while habit appliances stay in place until the habit has been fully replaced with healthier patterns. We monitor progress closely to ensure the best results.",
  },
  {
    question: "Will my child have trouble eating or speaking?",
    answer:
      "There may be a short adjustment period, but children usually adapt quickly. We provide fun tips and encouragement to help your child feel proud of their progress as their smile becomes stronger and healthier.",
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
            Palate Expanders & Habit Appliances in Hamilton, NJ
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Gentle orthodontic appliances help guide healthy jaw growth and support better alignment - giving growing smiles in Hamilton, NJ the best foundation for the future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/Palate Expanders and Habit Appliances.webp"  // ✅ replace with your image
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
                Palate expanders and habit appliances are special orthodontic tools that support healthy development in growing children. Expanders gently widen the upper jaw to make room for permanent teeth, while habit appliances help children stop habits like thumb-sucking or tongue thrusting that can affect tooth alignment. These early treatments keep smiles on the right track and make future orthodontic care easier.
                
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Our pediatric orthodontic team custom-fits each appliance to match your child’s needs. Expanders apply light pressure over time to help the jaw grow properly, while habit appliances give gentle reminders that help break habits without stress. We explain everything step-by-step so kids feel comfortable - and families in
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                know exactly how to support their child’s progress at home.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                These appliances guide the smile while it’s still developing - creating space for teeth to come in straight, preventing crowding, improving breathing and bite function, and reducing the need for more complex treatment later. Stopping harmful oral habits early also protects the shape of the smile and boosts confidence as kids grow.
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
