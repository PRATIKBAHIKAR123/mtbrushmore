import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "../services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.restorativeDentistry.title,
  pageMetadata.restorativeDentistry.description,
  "/services/restorative-dentistry",
  pageMetadata.restorativeDentistry.keywords
);

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  path?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Bonding",
    description: "A quick and seamless fix for small chips or gaps, restoring your child's smile with natural-looking results.",
    image: "/Images/bonding.webp",
    path: "/services/restorative-dentistry/dental-bonding-hamilton-nj"
  },
  {
    id: 2,
    title: "Crowns",
    description: "Durable protection for damaged or weakened teeth, keeping little smiles strong for years to come.",
    image: "/Images/Crowns.webp",
    path: "/services/restorative-dentistry/dental-crowns-hamilton-nj"
  },
  {
    id: 3,
    title: "Fillings",
    description: "Tooth-colored repairs stop cavities early and blend perfectly with your child's natural smile.",
    image: "/Images/fillings.webp",
    path: "/services/restorative-dentistry/dental-fillings-hamilton-nj"
  },
  {
    id: 4,
    title: "Restoration of Decayed Teeth",
    description: "Gentle, effective solutions repair damaged teeth and help children chew, smile, and grow confidently.",
    image: "/Images/Restoration of Decayed Teeth.webp",
    path: "/services/restorative-dentistry/decayed-teeth-restoration-hamilton-nj"
  },
  {
    id: 5,
    title: "Tooth Extractions",
    description: "When a tooth can't be saved, our team removes it gently to protect future growth and comfort.",
    image: "/Images/toothextraction.webp",
    path: "/services/restorative-dentistry/tooth-extractions-hamilton-nj"
  }
];

export default function RestorativeDentistryPage() {
  return (
    <ServicesClient
      title="Restorative Dentistry"
      subtitle="in Hamilton, NJ"
      description="Repairing and restoring teeth with fillings, crowns, and other restorative treatments. Expert restorative dental care in Hamilton, NJ that brings back healthy, confident smiles."
      services={services}
      decorativeImage="/Images/animals/deer.png"
    />
  );
}
