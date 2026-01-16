import { pageMetadata, createMetadata } from "@/lib/metadata";
import SpecialNeedsClient from "./special-needs-client";

export const metadata = createMetadata(
  pageMetadata.specialNeedsDentistry.title,
  pageMetadata.specialNeedsDentistry.description,
  "/services/preventive-dentistry/special-needs-dental-care-hamilton-nj",
  pageMetadata.specialNeedsDentistry.keywords
);

export default function SpecialNeedsPage() {
  return <SpecialNeedsClient />;
}
