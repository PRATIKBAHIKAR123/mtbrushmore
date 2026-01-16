import { pageMetadata, createMetadata } from "@/lib/metadata";
import ToothacheClient from "./toothaches-client";

export const metadata = createMetadata(
  pageMetadata.Toothache.title,
  pageMetadata.Toothache.description,
  "/services/emergency-dentistry/toothaches-pain-relief-hamilton-nj",
  pageMetadata.Toothache.keywords
);

export default function ToothachePage() {
  return <ToothacheClient />;
}
