import { pageMetadata, createMetadata } from "@/lib/metadata";
import OralHygieneEducationClient from "./oral-hygiene-education-client";

export const metadata = createMetadata(
  pageMetadata.oralHygieneEducation.title,
  pageMetadata.oralHygieneEducation.description,
  "/services/preventive-dentistry/oral-hygiene-education-hamilton-nj",
  pageMetadata.oralHygieneEducation.keywords
);

export default function OralHygieneEducationPage() {
  return <OralHygieneEducationClient />;
}
