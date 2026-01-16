"use client";

import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import CTASection from "@/app/home/call-to-action";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/app/booking/bookingScreen";



export default function TreatmentDetailsPage() {
        const [isBookingOpen, setIsBookingOpen] = useState(false);
  const faqs = [
  {
    question: "Why should we fix cavities in baby teeth if they fall out anyway?",
    answer:
      "Baby teeth do much more than help kids chew - they save space for adult teeth, support clear speech, and guide proper jaw growth. Treating decay early prevents infection, pain, and long-term impact on the permanent smile forming beneath them.",
  },
  {
    question: "How do I know if my child needs a tooth restored?",
    answer:
      "Early cavities often don’t show symptoms, which is why regular checkups are so important. Our team looks for soft spots, tiny chips, color changes, or discomfort while eating - and explains every treatment clearly so you know exactly what your child needs.",
  },
  {
    question: "Is the restoration process painful?",
    answer:
      "Not at all - we make sure children feel relaxed and supported throughout their visit. With gentle techniques and kid-friendly guidance, most children finish the appointment smiling and ready for their next adventure.",
  },
  {
    question: "What type of restoration will my child receive?",
    answer:
      "It depends on how much of the tooth is affected. Small areas may be repaired with a bonded filling, while deeper decay sometimes needs a crown for extra protection. Our recommendations always focus on long-term strength and comfort.",
  },
  {
    question: "How long does a restored tooth last?",
    answer:
      "With daily brushing, healthy snacking, and regular dental visits, restored teeth stay strong for years - often until the baby tooth naturally falls out. We monitor each restored tooth at every appointment to make sure it continues to do its job.",
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
            Restoration of Decayed Teeth in Hamilton, NJ 
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            When cavities or damage affect your child’s teeth, our <Link href="/" className="text-accent font-semibold hover:underline">gentle pediatric tooth restoration in Hamilton, NJ</Link>{" "}brings smiles back to full health - safely, comfortably, and with results that look completely natural.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/Restoration of Decayed Teeth.webp"  // ✅ replace with your image
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
                Restoring decayed teeth means repairing areas affected by cavities to keep them healthy, functional, and pain-free. Our pediatric team uses
                <Link href="/services/restorative-dentistry/dental-fillings-hamilton-nj" className="text-accent font-semibold hover:underline"> tooth-colored, durable materials</Link>{" "}that blend beautifully and protect the tooth as it grows. This treatment is especially helpful for families seeking
                <Link href="/" className="text-accent font-semibold hover:underline"> children’s cavity repair near me</Link>{" "}and wanting to prevent bigger dental issues later on.
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                We gently remove the decayed portion of the tooth and rebuild the area with a safe, strong material that restores the tooth’s shape and comfort. Depending on how much of the tooth is affected, restoration may involve a bonded filling or additional protection like a crown. Kids across
                
                
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>
                {" "}appreciate how simple and stress-free the appointment feels.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Restoring decayed teeth prevents the spread of cavities, protects the adult tooth developing below, and ensures your child can eat, speak, and smile comfortably. It supports proper oral growth and gives children the confidence to enjoy everyday activities without worry or pain. Early treatment sets the stage for a lifetime of healthy dental habits and bright smiles.
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
