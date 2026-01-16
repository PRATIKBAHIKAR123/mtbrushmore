import { pageMetadata, createMetadata } from "@/lib/metadata";
import IVSedationClient from "./iv-sedation-client";

export const metadata = createMetadata(
  pageMetadata.ivsedation.title,
  pageMetadata.ivsedation.description,
  "/services/sedation-dentistry/iv-sedation-hamilton-nj",
  pageMetadata.ivsedation.keywords
);

export default function IVSedationPage() {
  return <IVSedationClient />;
}
