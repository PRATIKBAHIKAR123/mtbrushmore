import { pageMetadata, createMetadata } from "@/lib/metadata";
import OralSedationClient from "./oral-sedation-client";

export const metadata = createMetadata(
  pageMetadata.oralSedation.title,
  pageMetadata.oralSedation.description,
  "/services/sedation-dentistry/oral-sedation-hamilton-nj",
  pageMetadata.oralSedation.keywords
);

export default function OralSedationPage() {
  return <OralSedationClient />;
}
