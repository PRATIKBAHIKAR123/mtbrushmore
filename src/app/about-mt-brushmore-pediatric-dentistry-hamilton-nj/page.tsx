import type { Metadata } from "next";
import TeamSection from "./our-team";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import WhyUsSection from "../home/why-choose-us";
import TestimonialsSection from "../home/testimonials";
import LocationsSection from "../home/our-locations";
import CTASection from "../home/call-to-action";
import AboutUsClient from "./about-us-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.aboutUs.title,
  pageMetadata.aboutUs.description,
  "/about-mt-brushmore-pediatric-dentistry-hamilton-nj",
  pageMetadata.aboutUs.keywords
);

export default function AboutUs() {
  return (
   <>
      <AboutUsClient/>
      <TeamSection/>
      <WhyUsSection/>
      {/* <TestimonialsSection/> */}
      <LocationsSection/>
      <CTASection/>
      </>
  )
}
