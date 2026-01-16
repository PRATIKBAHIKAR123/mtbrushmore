import { pageMetadata, createMetadata } from "@/lib/metadata";
import OrthodonticEmergencyClient from "./orthodontic-emergency-client";

export const metadata = createMetadata(
  pageMetadata.orthodonticEmergency.title,
  pageMetadata.orthodonticEmergency.description,
  "/services/emergency-dentistry/orthodontic-emergencies-hamilton-nj",
  pageMetadata.orthodonticEmergency.keywords
);

export default function OrthodonticEmergencyPage() {
  return <OrthodonticEmergencyClient />;
}
