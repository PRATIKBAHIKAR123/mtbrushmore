import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import CTASection from "../home/call-to-action";
import { pageMetadata, createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  pageMetadata.dentalInsurance.title,
  pageMetadata.dentalInsurance.description,
  "/dental-insurance",
  pageMetadata.dentalInsurance.keywords
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
           Dental Insurance That Works for Every Little Smile in <span className="text-accent">  Hamilton, NJ</span>
          </h1>
          <p className=" max-w-2xl text-base md:text-lg">
            We know how much your child’s smile means to you  -  and we’re here to make caring for it simple, affordable, and full of joy. That’s why Mt. Brushmore Pediatric Dentistry accepts a wide range of children’s dental insurance plans for families in Hamilton, NJ, Hamilton Square (08690), Mercerville (08619), Robbinsville (08691), Lawrenceville (08648), West Windsor (08550), East Windsor (08512, 08520), and nearby communities. With friendly guidance and clear explanations, we help you understand your benefits and feel confident that your little one is receiving the best care possible  -  without the stress or surprise costs. Healthy smiles should be easy, and together, we’ll make sure your child’s dental visits stay happy from the very first appointment.
          </p>
        </div>
        <section className=" py-12 px-4">
      <div className="max-w-6xl mx-auto bg-primary/10 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 eveleth">
           <span className="text-accent">Accepted In-Network Dental Partners</span>
        </h2>

        <p className="text-[#4A2C1D] mb-8 max-w-3xl">
          Managed Care Insurance: Medicaid, Healthplex (Excellus, MVP,
          Wellcare), Fidelis, CDPHP, Delta Dental
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[#4A2C1D]">
          <ul className="space-y-2">
            <li>• Aetna</li>
            <li>• Assurant</li>
            <li>• Ameritas / First Ameritas</li>
            <li>• Benefits Admin</li>
            <li>• Blue Shield</li>
            <li>• Blue Cross Blue Shield of Illinois</li>
            <li>• Blue Shield of Massachusetts</li>
            <li>• CBA Blue</li>
          </ul>

          <ul className="space-y-2">
            <li>• CDPHP</li>
            <li>• CSEA</li>
            <li>• Cigna</li>
            <li>• Delta Dental</li>
            <li>• GEHA</li>
            <li>• GHI/Emblem</li>
            <li>• Guardian</li>
            <li>• Humana</li>
          </ul>

          <ul className="space-y-2">
            <li>• Health Partners</li>
            <li>• iDental</li>
            <li>• Lifetime Benefits</li>
            <li>• Lincoln Financial</li>
            <li>• MetLife</li>
            <li>• MVP</li>
            <li>• Nippon Life Insurance</li>
            <li>• Nova Healthcare</li>
          </ul>

          <ul className="space-y-2">
            <li>• POMCO</li>
            <li>• Principal</li>
            <li>• Solstice</li>
            <li>• SunLife</li>
            <li>• United Concordia</li>
            <li>• United Health Care</li>
            <li>• United Health Care – Medicaid</li>
            <li>• UMR</li>
          </ul>
        </div>
      </div>
    </section>

      </div>
      <CTASection/>
    </div>
  );
}
