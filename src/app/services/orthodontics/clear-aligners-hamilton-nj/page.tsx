import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ClearAlignersClient from "./clear-aligners-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.clearAligners.title,
  pageMetadata.clearAligners.description,
  "/services/orthodontics/clear-aligners-hamilton-nj",
  pageMetadata.clearAligners.keywords
);

export default function ClearAlignersPage() {
  return <ClearAlignersClient />;
}
