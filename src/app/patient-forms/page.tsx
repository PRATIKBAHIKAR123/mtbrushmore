import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "../home/call-to-action";
import { pageMetadata, createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  pageMetadata.patientForms.title,
  pageMetadata.patientForms.description,
  "/patient-forms",
  pageMetadata.patientForms.keywords
);

export default function Page() {


  return (
    <div className="bg-muted min-h-screen py-12">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-white rounded-[26px] px-6 py-12 md:px-12 shadow-sm">
        
        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary eveleth"
          >
           Patient<span className="text-accent"> Forms</span>
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Complete your child’s dental forms easily online. Save time before your visit to The Smile Lodge.
          </p>
        </div>

        {/* Content Grid */}
        <div className=" items-start">
          
          

          {/* Text Sections */}
          <div className="space-y-8">
            
            {/* WHAT IT IS */}
            <div className="flex items-center gap-3">
                
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                A Warm Welcome Awaits
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                From the moment you step into The Smile Lodge, you’ll be greeted by a cheerful team and a playful, kid-friendly environment designed to make your child’s first dental visit stress-free and enjoyable. Our goal is to make every child feel special and every parent feel at ease, creating a positive foundation for lifelong dental care.
              </p>
              <div className="pt-4">
              <button
                className="inline-flex items-center justify-center gap-2
                bg-accent hover:bg-secondary
                text-white font-semibold
                px-8 py-3 rounded-full
                transition-all duration-300 shadow-md"
              >
                Book Consultation
              </button>
            </div>
            </section>
            </div>

           <div className="flex items-center gap-3">
                
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                A Warm Welcome Awaits
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                From the moment you step into The Smile Lodge, you’ll be greeted by a cheerful team and a playful, kid-friendly environment designed to make your child’s first dental visit stress-free and enjoyable. Our goal is to make every child feel special and every parent feel at ease, creating a positive foundation for lifelong dental care.
              </p>
              <div className="pt-4">
              <button
                className="inline-flex items-center justify-center gap-2
                bg-accent hover:bg-secondary
                text-white font-semibold
                px-8 py-3 rounded-full
                transition-all duration-300 shadow-md"
              >
                Book Consultation
              </button>
            </div>
            </section>
            </div>

            <div className="flex items-center gap-3">
                
            <section>
              <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
               Parent-Friendly Guidance
              </h3>
              <p className=" leading-relaxed text-sm md:text-base">
                Our experienced pediatric team takes extra care to make your child feel safe and comfortable, explaining each step in a fun and friendly way, so their first visit is filled with confidence and joy. We tailor each interaction to your child’s unique personality, ensuring their experience is as individualized as their smile.
              </p>
              <div className="pt-4">
              <button
                className="inline-flex items-center justify-center gap-2
                bg-accent hover:bg-secondary
                text-white font-semibold
                px-8 py-3 rounded-full
                transition-all duration-300 shadow-md"
              >
                Book Consultation
              </button>
            </div>
            </section>
            </div>


          </div>
        </div>
      </div>
      <CTASection/>
    </div>
  );
}
