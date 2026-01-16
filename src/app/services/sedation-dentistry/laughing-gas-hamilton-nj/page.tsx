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
    question: "Is laughing gas safe for children?",
    answer:
      "Yes - laughing gas is one of the safest pediatric sedation methods available and has been used in children’s dentistry for generations. The gas is carefully mixed with oxygen, and your child’s breathing, comfort, and response are continuously monitored. Because it works gently and wears off quickly, it is especially trusted for young patients who are new to dental care.",
  },
  {
    question: "Will my child be awake while using laughing gas?",
    answer:
      "Your child will remain awake, able to talk, and fully aware of what’s happening. Laughing gas simply helps them feel calmer and more confident during care - like having a soft “brave boost” that keeps worries from getting in the way.",
  },
  {
    question: "How does laughing gas help reduce fear or sensory overload?",
    answer:
      "The cozy, floaty feeling helps quiet anxious thoughts and makes sights, sounds, and sensations at the dentist feel less intense. This can be especially helpful for children with fear of dental care, gag reflex sensitivity, or sensory differences that make the dental environment overwhelming.",
  },
  {
    question: "How will my child feel afterward?",
    answer:
      "Once the gas is stopped, your child breathes pure oxygen for a few minutes to clear the effects. They return to their normal self quickly - alert, steady, and ready to continue their day. There’s no need for rest or recovery time.",
  },
  {
    question: "Does laughing gas have side effects or risks?",
    answer:
      "Side effects are very uncommon. If they happen, they may include slight lightheadedness or a temporary tickle in the stomach - which pass within minutes. Because the gas clears so quickly, it does not stay in the body, and children typically leave the office feeling completely fine.",
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
            Laughing Gas for Kids in Hamilton, NJ
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            A light and happy form of relaxation, laughing gas helps children stay calm, confident, and comfortable during dental visits - keeping appointments easy for both kids and parents.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Image Section */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/Images/Laughing Gas.webp"  // ✅ replace with your image
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
                Laughing gas (nitrous oxide) is a gentle and trusted sedation option used to help children feel relaxed and worry-free during dental care. It’s delivered through a soft nose mask and creates a warm, floaty, sometimes giggly feeling that makes the dental experience much easier. Parents searching for
                <Link href="/services/sedation-dentistry/iv-sedation-hamilton-nj" className="text-accent font-semibold hover:underline"> pediatric sedation near me</Link> often choose laughing gas because it helps kids feel brave and supported while staying awake and interactive.
                
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Your child breathes in a safe blend of nitrous oxide and oxygen that begins working within minutes. It keeps them calm throughout treatment, and the effects disappear quickly once the gas is turned off. Kids in
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link> <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link> <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link> <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link> <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link> <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>{" "}
                love that there’s no lingering grogginess - they can return to school or play right after their visit with a smile.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Laughing gas makes dental care more comfortable by reducing nervousness, easing sensory overwhelm, and helping children focus on staying relaxed. It also encourages positive experiences and confidence for future appointments, making oral health easier as they grow.
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
