import { pageMetadata, createMetadata } from "@/lib/metadata";
import ToothExtractionClient from "./tooth-extraction-client";

export const metadata = createMetadata(
  pageMetadata.toothExtraction.title,
  pageMetadata.toothExtraction.description,
  "/services/restorative-dentistry/tooth-extractions-hamilton-nj",
  pageMetadata.toothExtraction.keywords
);

export default function ToothExtractionPage() {
  return <ToothExtractionClient />;
}
