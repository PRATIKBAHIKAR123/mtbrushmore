import { pageMetadata, createMetadata } from "@/lib/metadata";
import BondingClient from "./bonding-client"; // Fixed import name

export const metadata = createMetadata(
  pageMetadata.bonding.title,
  pageMetadata.bonding.description,
  "/services/restorative-dentistry/dental-bonding-hamilton-nj",
  pageMetadata.bonding.keywords
);

export default function BondingPage() {
  return <BondingClient />; // Fixed component name
}
