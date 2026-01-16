import { pageMetadata, createMetadata } from "@/lib/metadata";
import SoftTissueInjuryClient from "./soft-tissue-injury-client";

export const metadata = createMetadata(
  pageMetadata.softTissueInjury.title,
  pageMetadata.softTissueInjury.description,
  "/services/emergency-dentistry/soft-tissue-injury-care-hamilton-nj",
  pageMetadata.softTissueInjury.keywords
);

export default function SoftTissueInjuryPage() {
  return <SoftTissueInjuryClient />;
}
