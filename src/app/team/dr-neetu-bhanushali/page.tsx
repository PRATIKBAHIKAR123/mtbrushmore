import { pageMetadata, createMetadata } from "@/lib/metadata";
import DoctorDetailsClient from "./doctor-details-client";

export const metadata = createMetadata(
  pageMetadata.doctorProfile2.title,
  pageMetadata.doctorProfile2.description,
  "/team/dr-neetu-bhanushali",
  pageMetadata.doctorProfile2.keywords
);

export default function DoctorDetailsPage() {
  return <DoctorDetailsClient />;
}
