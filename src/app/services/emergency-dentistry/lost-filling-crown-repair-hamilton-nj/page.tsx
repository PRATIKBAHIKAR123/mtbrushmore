import { pageMetadata, createMetadata } from "@/lib/metadata";
import LostFillingClient from "./lost-filling-client";

export const metadata = createMetadata(
  pageMetadata.LostFilling.title,
  pageMetadata.LostFilling.description,
  "/services/emergency-dentistry/lost-filling-crown-repair-hamilton-nj",
  pageMetadata.LostFilling.keywords
);

export default function LostFillingPage() {
  return <LostFillingClient />;
}
