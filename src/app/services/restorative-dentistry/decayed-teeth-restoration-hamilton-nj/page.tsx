import { pageMetadata, createMetadata } from "@/lib/metadata";
import DecayedTeethClient from "./decayed-teeth-client";

export const metadata = createMetadata(
  pageMetadata.decayedToothExtraction.title,
  pageMetadata.decayedToothExtraction.description,
  "/services/restorative-dentistry/decayed-teeth-restoration-hamilton-nj",
  pageMetadata.decayedToothExtraction.keywords
);

export default function DecayedTeethPage() {
  return <DecayedTeethClient />;
}
