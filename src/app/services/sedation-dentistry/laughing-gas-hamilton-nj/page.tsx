import { pageMetadata, createMetadata } from "@/lib/metadata";
import LaughingGasClient from "./laughing-gas-client";

export const metadata = createMetadata(
  pageMetadata.laughingGas.title,
  pageMetadata.laughingGas.description,
  "/services/sedation-dentistry/laughing-gas-hamilton-nj",
  pageMetadata.laughingGas.keywords
);

export default function LaughingGasPage() {
  return <LaughingGasClient />;
}
