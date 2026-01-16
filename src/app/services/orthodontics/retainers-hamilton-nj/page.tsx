import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import RetainersClient from "./retainers-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.retainers.title,
  pageMetadata.retainers.description,
  "/services/orthodontics/retainers-hamilton-nj",
  pageMetadata.retainers.keywords
);

export default function RetainersPage() {
  return <RetainersClient />;
}
