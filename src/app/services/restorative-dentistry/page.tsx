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
    title: "Dental Fillings",
    description: "We restore cavities with tooth-colored materials that blend perfectly and let kids enjoy eating again.",
    image: "/Images/Dental Fillings.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 2,
    title: "Crowns",
    description: "Strong protective caps repair severely damaged or weakened teeth so smiles stay bright and functional.",
    image: "/Images/Crowns.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 3,
    title: "Root Canals",
    description: "Gentle tooth-saving treatment relieves pain from infected nerves and preserves the natural tooth.",
    image: "/Images/Root Canals.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 4,
    title: "Pulpotomies",
    description: "This baby tooth treatment removes infected pulp tissue while keeping the tooth strong and functional.",
    image: "/Images/Pulpotomies.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 5,
    title: "Bonded Restorations",
    description: "Tooth-colored composite repairs minor chips and cracks with a natural, seamless appearance.",
    image: "/Images/Bonded Restorations.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 6,
    title: "Bridges",
    description: "Replacement teeth bridge gaps left by missing teeth to restore chewing power and confident smiles.",
    image: "/Images/Bridges.webp",
    path: "/treatments/restorative-dentistry"
  },
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
