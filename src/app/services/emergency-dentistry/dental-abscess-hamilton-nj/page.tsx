import { pageMetadata, createMetadata } from "@/lib/metadata";
import DentalAbscessClient from "./dental-abscess-client";

export const metadata = createMetadata(
  pageMetadata.dentalAbscess.title,
  pageMetadata.dentalAbscess.description,
  "/services/emergency-dentistry/dental-abscess-hamilton-nj",
  pageMetadata.dentalAbscess.keywords
);

export default function DentalAbscessPage() {
  return <DentalAbscessClient />;
}
