import type { Metadata } from "next";
import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import MapSection from "./components/MapSection";
import { pageMetadata, createMetadata } from "@/lib/metadata";
// import PartnerLogos from './components/PartnerLogos'
// import NewsletterSection from './components/NewsletterSection'

export const metadata: Metadata = createMetadata(
  pageMetadata.location.title,
  pageMetadata.location.description,
  "/location",
  pageMetadata.location.keywords
);


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary/10 p-4 md:p-12">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div>
          <div className="mb-4">
            <svg className="w-20 h-3" viewBox="0 0 80 12" fill="none">
              <path d="M0 6 Q20 2, 40 6 T80 6" stroke="#4A3728" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Reach Out to the <span className="text-accent">Mt. Brushmore Smile Team!</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            We're Always Here to Support Your Child’s Best Smile
          </h2>
        </div>
      </div>

      {/* Contact Us Section */}
      <div>
        <section className="max-w-7xl mx-auto px-2 md:px-4 py-6 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>

      {/* Map Section */}
      <div>
        <MapSection />
      </div>

      {/* Partner Logos */}
      {/* <Slide direction="up" triggerOnce>
        <PartnerLogos />
      </Slide> */}

      {/* Newsletter Section */}
      <div >
        {/* <NewsletterSection /> */}
      </div>

      {/* Floating Scroll to Top Button */}
    </div>
  );
}
