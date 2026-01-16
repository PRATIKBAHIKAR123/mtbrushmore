import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import PalateExpandersClient from "./palate-expanders-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.palateExpanders.title,
  pageMetadata.palateExpanders.description,
  "/services/orthodontics/palate-expanders-hamilton-nj",
  pageMetadata.palateExpanders.keywords
);

export default function PalateExpandersPage() {
  return <PalateExpandersClient />;
}
