import { pageMetadata, createMetadata } from "@/lib/metadata";
import DentalSealantsClient from "./dental-sealants-client";

export const metadata = createMetadata(
  pageMetadata.dentalSealants.title,
  pageMetadata.dentalSealants.description,
  "/services/preventive-dentistry/dental-sealants-hamilton-nj",
  pageMetadata.dentalSealants.keywords
);

export default function DentalSealantsPage() {
  return <DentalSealantsClient />;
}
