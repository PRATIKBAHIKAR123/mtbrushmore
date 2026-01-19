import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import PatientFormsClient from "./patient-forms-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.patientForms?.title || "Patient Forms",
  pageMetadata.patientForms?.description || "Patient Forms",
  "/patient-forms"
);

export default function Page() {
  return <PatientFormsClient />;
}
