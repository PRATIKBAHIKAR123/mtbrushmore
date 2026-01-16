import { pageMetadata, createMetadata } from "@/lib/metadata";
import ChippedToothClient from "./chipped-tooth-client";

export const metadata = createMetadata(
  pageMetadata.chippedTooth.title,
  pageMetadata.chippedTooth.description,
  "/services/emergency-dentistry/chipped-broken-tooth-hamilton-nj",
  pageMetadata.chippedTooth.keywords
);

export default function ChippedToothPage() {
  return <ChippedToothClient />;
}
