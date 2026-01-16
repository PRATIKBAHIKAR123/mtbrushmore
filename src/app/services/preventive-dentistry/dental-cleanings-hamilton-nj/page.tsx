import { pageMetadata, createMetadata } from "@/lib/metadata";
import DentalCleaningsClient from "./dental-cleanings-client";

export const metadata = createMetadata(
  pageMetadata.dentalCleanings.title,
  pageMetadata.dentalCleanings.description,
  "/treatments/dental-cleanings-and-exams",
  pageMetadata.dentalCleanings.keywords
);

export default function DentalCleaningsPage() {
  return <DentalCleaningsClient />;
}
