import { pageMetadata, createMetadata } from "@/lib/metadata";
import FillingsClient from "./fillings-client";

export const metadata = createMetadata(
  pageMetadata.fillings.title,
  pageMetadata.fillings.description,
  "/services/restorative-dentistry/dental-fillings-hamilton-nj",
  pageMetadata.fillings.keywords
);

export default function FillingsPage() {
  return <FillingsClient />;
}
