import { pageMetadata, createMetadata } from "@/lib/metadata";
import FluorideTreatmentsClient from "./fluoride-treatments-client";

export const metadata = createMetadata(
  pageMetadata.fluorideTreatments.title,
  pageMetadata.fluorideTreatments.description,
  "/services/preventive-dentistry/fluoride-treatments-hamilton-nj",
  pageMetadata.fluorideTreatments.keywords
);

export default function FluorideTreatmentsPage() {
  return <FluorideTreatmentsClient />;
}
