import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "../home/call-to-action";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
  pageMetadata.firstVisit.title,
  pageMetadata.firstVisit.description,
  "/first-visit",
  pageMetadata.firstVisit.keywords
);

export default function Page() {


  return (
    <div className="bg-primary/10 min-h-screen py-12">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-white rounded-[26px] px-6 py-12 md:px-12 shadow-sm">

        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary eveleth"
          >
            Your Child’s First Dental Visit at <br />
            <span className="text-accent"> Mt. Brushmore Pediatric Dentistry</span>
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Every adventure has a first step - and we’re here to make this one exciting, calm, and full of smiles! From the moment you arrive, our team helps your child feel comfortable, curious, and proud to be taking care of their teeth. This visit sets the foundation for lifelong healthy habits - and we love being part of that milestone for families in Hamilton, NJ and nearby communities like <Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>.
          </p>
        </div>

        {/* Content Grid */}
        <div className=" items-start">



          {/* Text Sections */}
          <div className="space-y-8">

            {/* WHAT IT IS */}
            <div className="flex items-center gap-3">
              <div className="border border-sm border-accent bg-primary/10 rounded-full p-10 w-12 h-12 flex items-center justify-center">
                <span className="text-3xl">1</span>
              </div>
              <section>
                <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                  A Friendly, Stress-Free Welcome
                </h3>
                <p className=" leading-relaxed text-sm md:text-base">
                  Walking into Mt. Brushmore feels like entering a warm, playful space built just for kids! Our friendly team greets your family right away, making sure little explorers feel safe, seen, and celebrated. We explain everything step-by-step so your child knows exactly what to expect - no surprises, only smiles!
                </p>
              </section>
            </div>

            <div className="flex items-center gap-3">
              <div className="border border-sm border-accent bg-primary/10 rounded-full p-10 w-12 h-12 flex items-center justify-center">
                <span className="text-3xl">2</span>
              </div>
              <section>
                <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                  Gentle Care Designed for Kids
                </h3>
                <p className=" leading-relaxed text-sm md:text-base">
                  Every child is unique, and so is their smile. Our pediatric dental team uses kid-friendly tools, upbeat encouragement, and lots of patience to help your child feel brave and confident. We’ll count their teeth, take a peek at how everything’s growing, and make the experience fun from start to finish.
                </p>
              </section>
            </div>

            <div className="flex items-center gap-3">
              <div className="border border-sm border-accent bg-primary/10 rounded-full p-10 w-12 h-12 flex items-center justify-center">
                <span className="text-3xl">3</span>
              </div>
              <section>
                <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                  Parent Support Every Step of the Way
                </h3>
                <p className=" leading-relaxed text-sm md:text-base">
                  Your comfort matters too! We take time to answer all your questions, review your child’s oral health, and offer tips to help with brushing, snacks, and developing strong habits at home. You’ll leave feeling informed, empowered, and proud of your child’s progress.
                </p>
              </section>
            </div>
            <div className="flex items-center gap-3">
              <div className="border border-sm border-accent bg-primary/10 rounded-full p-10 w-12 h-12 flex items-center justify-center">
                <span className="text-3xl">4</span>
              </div>
              <section>
                <h3 className="text-lg md:text-xl font-bold text-accent mb-2 uppercase eveleth">
                  Healthy Habits Start Here
                </h3>
                <p className=" leading-relaxed text-sm md:text-base">
                  This visit is more than a quick check - it’s a positive memory in the making. We celebrate every milestone, cheer on every brave moment, and help build a strong foundation for fearless, happy dental visits in the future. Together, we’ll help your child grow up loving their smile!
                </p>
              </section>
            </div>


          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
