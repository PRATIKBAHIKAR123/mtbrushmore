import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import BracesClient from "./braces-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.braces.title,
  pageMetadata.braces.description,
  "/services/orthodontics/braces-hamilton-nj",
  pageMetadata.braces.keywords
);

export default function BracesPage() {
  return <BracesClient />;
}
