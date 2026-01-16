import { pageMetadata, createMetadata } from "@/lib/metadata";
import NutritionalCounselingClient from "./nutritional-counseling-client";

export const metadata = createMetadata(
  pageMetadata.nutritionalCounseling.title,
  pageMetadata.nutritionalCounseling.description,
  "/services/preventive-dentistry/nutritional-counseling-hamilton-nj",
  pageMetadata.nutritionalCounseling.keywords
);

export default function NutritionalCounselingPage() {
  return <NutritionalCounselingClient />;
}
