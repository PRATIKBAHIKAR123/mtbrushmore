import { pageMetadata, createMetadata } from "@/lib/metadata";
import CrownsClient from "./crowns-client";

export const metadata = createMetadata(
  pageMetadata.crowns.title,
  pageMetadata.crowns.description,
  "/services/restorative-dentistry/dental-crowns-hamilton-nj",
  pageMetadata.crowns.keywords
);

export default function CrownsPage() {
  return <CrownsClient />;
}
