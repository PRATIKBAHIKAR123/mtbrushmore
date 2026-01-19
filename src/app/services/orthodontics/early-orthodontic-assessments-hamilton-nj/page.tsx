"use client";

import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import EarlyOrthodonticAssessmentsClient from "./early-orthodontic-assessments-client";

const metadata: Metadata = createMetadata(
  pageMetadata.dentalCleanings.title,
  pageMetadata.dentalCleanings.description,
  "/treatments/dental-cleanings-and-exams",
  pageMetadata.dentalCleanings.keywords
);

export default function TreatmentDetailsPage() {

  return <EarlyOrthodonticAssessmentsClient />
}
