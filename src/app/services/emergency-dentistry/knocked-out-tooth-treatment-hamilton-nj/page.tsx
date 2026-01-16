import { pageMetadata, createMetadata } from "@/lib/metadata";
import KnockedOutToothClient from "./knocked-out-tooth-client";

export const metadata = createMetadata(
  pageMetadata.knockedOutTooth.title,
  pageMetadata.knockedOutTooth.description,
  "/services/emergency-dentistry/knocked-out-tooth-treatment-hamilton-nj",
  pageMetadata.knockedOutTooth.keywords
);

export default function KnockedOutToothPage() {
  return <KnockedOutToothClient />;
}
