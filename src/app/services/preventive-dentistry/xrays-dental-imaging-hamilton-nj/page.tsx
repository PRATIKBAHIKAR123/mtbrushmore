import { pageMetadata, createMetadata } from "@/lib/metadata";
import XraysClient from "./xrays-client";

export const metadata = createMetadata(
  pageMetadata.xraysDentalImaging.title,
  pageMetadata.xraysDentalImaging.description,
  "/services/preventive-dentistry/xrays-dental-imaging-hamilton-nj",
  pageMetadata.xraysDentalImaging.keywords
);

export default function XraysPage() {
  return <XraysClient />;
}
