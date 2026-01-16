import { pageMetadata, createMetadata } from "@/lib/metadata";
import DoctorDetailsClient from "./doctor-details-client";

export const metadata = createMetadata(
  pageMetadata.doctorProfile.title,
  pageMetadata.doctorProfile.description,
  "/team/dr-manmeet-arora",
  pageMetadata.doctorProfile.keywords
);

export default function DoctorDetailsPage() {
  return <DoctorDetailsClient />;
}
