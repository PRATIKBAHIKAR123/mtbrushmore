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
    question: "What should I do first if my child suddenly has a toothache?",
    answer:
      "Begin by helping them rinse gently with warm water  -  sometimes discomfort comes from food stuck between the teeth. Then, carefully floss the area to clear anything that might be causing pressure. If pain continues, avoid hot, cold, or sugary foods and give us a call right away. We’ll ask a few questions, help relieve discomfort quickly, and guide you on whether your child needs same-day emergency care.",
  },
  {
    question: "How do I know if a toothache is something serious?",
    answer:
      "If your child has swelling in the gums or face, sensitivity to biting, trouble sleeping due to pain, fever, or pain that lasts longer than a few hours  -  the issue needs urgent attention. These symptoms can indicate infection or deeper tooth concerns that should be treated immediately to protect your child’s health and comfort.",
  },
  {
    question: "How do you help relieve my child’s pain during the visit?",
    answer:
      "Relief is always the first step. We use gentle techniques, numbing options, and calming communication to help kids relax quickly. Once your child feels better, we carefully diagnose and treat the underlying problem so the pain doesn’t return.",
  },
  {
    question: "Can I give my child pain medication before the appointment?",
    answer:
      "You may use an over-the-counter children’s pain reliever  -  but only if recommended by your pediatrician or healthcare provider. Avoid placing aspirin directly on the tooth or gums, as it can cause irritation. Since pain medication is temporary, we’ll still need to see your child to fix what’s causing the pain.",
  },
  {
    question: "Are toothaches preventable?",
    answer:
     
`Absolutely. Regular checkups, good brushing and flossing habits, fluoride protection, healthy snacks, and sealants all lower the risk of cavities and gum issues. We work closely with families to build strong routines that protect smiles and confidence as children grow.`,
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
            Toothaches & Pain Relief for Kids in Hamilton, NJ
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Tooth pain can stop a busy kid in their tracks  -  but with fast, gentle care in Hamilton, NJ, we help children feel better quickly while protecting their growing smiles.
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
                A toothache is your child’s way of signaling that something isn’t quite right  -  whether it’s a cavity, gum irritation, a loose tooth, or something stuck between the teeth. Some toothaches come on suddenly, while others get worse over time. Parents searching for a pediatric emergency dentist near me rely on our team to find the cause and provide soothing relief right away.
                
              </p>
            </section>

            {/* HOW IT WORKS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT WORKS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                During your child’s emergency visit, we gently examine the area, take any necessary X-rays, and determine what’s causing the discomfort. Once we know the problem  -  whether it’s decay, an abscess, a damaged tooth, or teething-related soreness  -  we provide the appropriate treatment to help your child feel comfortable again. Families throughout 
                <Link href="/locations/hamilton-nj-pediatric-dentist" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/locations/mercerville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/locations/robbinsville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/locations/lawrenceville-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/locations/west-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/locations/east-windsor-nj-pediatric-dentist" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>,
                and nearby communities depend on our calm, reassuring care when tooth pain disrupts their day.
              </p>
            </section>

            {/* HOW IT HELPS */}
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase">
                HOW IT HELPS
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Addressing toothaches early prevents bigger dental problems later and helps ease fears before they grow. With fast relief, easy-to-understand explanations, and lots of encouragement, kids regain comfort, confidence, and their cheerful smiles.
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
