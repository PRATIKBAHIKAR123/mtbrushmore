import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "../home/call-to-action";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
  pageMetadata.financingHamiltonNJ.title,
  pageMetadata.financingHamiltonNJ.description,
  "/dental-financing",
  pageMetadata.financingHamiltonNJ.keywords
);

export default function Page() {


  return (
    <div className="bg-primary/10 min-h-screen py-12">
      {/* Paper Container */}
      <div className="mx-auto max-w-7xl bg-white rounded-[26px] px-6 py-12 md:px-12 shadow-sm mb-4">

        {/* Header */}
        <div className="mb-10">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary eveleth"
          >
            Stress-Free Pediatric Dental <span className="text-accent">   Financing in Hamilton, NJ</span>
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            Every child deserves a healthy, happy smile - and at Mt. Brushmore Pediatric Dentistry, we make that possible with simple, flexible financing designed to support families throughout Hamilton, NJ and nearby communities. With us, caring for your child’s teeth always feels comforting and stress-free, no matter your budget.
          </p>
        </div>
        <section className=" py-12 px-4">
          <div className="max-w-6xl mx-auto bg-primary/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 eveleth">
              Flexible Payment Options for Every Little Smile
            </h2>

            <p className="text-accent mb-8 max-w-3xl">
              We believe cost should never come between a child and the care they deserve. By working with your dental insurance and offering flexible payment choices, we help families plan confidently and move forward with care that keeps smiles growing strong.
            </p>
            <p className="text-accent mb-8 max-w-3xl">
              Families across <strong><Link href="/service-areas/hamilton-square-nj-dentist-near-you" className="text-accent font-semibold hover:underline"> Hamilton Square (08690)</Link>, <Link href="/service-areas/mercerville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Mercerville (08619)</Link>, <Link href="/service-areas/robbinsville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Robbinsville (08691)</Link>, <Link href="/service-areas/lawrenceville-nj-dentist-near-you" className="text-accent font-semibold hover:underline">Lawrenceville (08648)</Link>, <Link href="/service-areas/west-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">West Windsor (08550)</Link>, <Link href="/service-areas/east-windsor-nj-dentist-near-you" className="text-accent font-semibold hover:underline">East Windsor (08512, 08520)</Link>, and nearby communities</strong> rely on us to help them understand and maximize their benefits. Our friendly team assists with claim submissions, coverage questions, and payment arrangements so everything feels clear and stress-free from the start.
            </p>
            <p className="text-accent mb-8 max-w-3xl">
              No surprises. No pressure. Just supportive guidance and care that keeps your child smiling bright - now and in the future.
            </p>
          </div>
        </section>

      </div>

      <CTASection />
    </div>
  );
}
