import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "../services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.orthodontics.title,
  pageMetadata.orthodontics.description,
  "/services/orthodontics",
  pageMetadata.orthodontics.keywords
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
    title: "Braces (Traditional)",
    description: "Reliable metal braces gently guide teeth into beautiful alignment for a healthier, more confident smile.",
    image: "/Images/braces.webp",
    path: "/services/orthodontics/braces-hamilton-nj"
  },
  {
    id: 2,
    title: "Clear Aligners",
    description: "Nearly invisible aligners straighten teeth comfortably while letting kids eat, brush, and smile freely.",
    image: "/Images/clear Aligners.webp",
    path: "/services/orthodontics/clear-aligners-hamilton-nj"
  },
  {
    id: 3,
    title: "Early Orthodontic Assessments",
    description: "Early checkups help us spot alignment changes sooner so treatment stays simpler and smiles grow strong from the start.",
    image: "/Images/Early Orthodontic Assessments.webp",
    path: "/services/orthodontics/early-orthodontic-assessments-hamilton-nj"
  },
  {
    id: 4,
    title: "Palate Expanders and Habit Appliances",
    description: "Special appliances support healthy jaw growth and help end habits like thumb-sucking to protect future smiles.",
    image: "/Images/Palate Expanders and Habit Appliances.webp",
    path: "/services/orthodontics/palate-expanders-hamilton-nj",
  },
  {
    id: 5,
    title: "Retainers",
    description: "Custom retainers keep teeth perfectly in place after treatment so confident results last as your child grows.",
    image: "/Images/Retainers.webp",
    path: "/services/orthodontics/retainers-hamilton-nj",
  }
];

export default function OrthodonticsPage() {
  return (
    <ServicesClient
      title="Orthodontics"
      subtitle="in Hamilton, NJ"
      description="Building confident smiles with braces and aligners for children and teens. Modern orthodontics in Hamilton, NJ helps young patients achieve straight teeth and a healthy bite."
      services={services}
      decorativeImage="/Images/animals/deer.png"
    />
  );
}
