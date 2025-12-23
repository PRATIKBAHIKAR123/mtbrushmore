import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "../services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.sedationDentistry.title,
  pageMetadata.sedationDentistry.description,
  "/services/sedation-dentistry",
  pageMetadata.sedationDentistry.keywords
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
    title: "IV Sedation",
    description: "A fully monitored, restful solution for children who need extensive treatment or extra comfort during their visit.",
    image: "/Images/IV Sedation.webp",
    
    path: "/treatments/dental-cleanings-and-exams"
  },
  {
    id: 2,
    title: "Laughing Gas",
    description: "A light and calming option that helps kids stay relaxed and giggly while remaining awake and in control.",
    image: "/Images/Laughing Gas.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 3,
    title: "Oral Sedation",
    description: "A gentle, deeper relaxation choice that helps reduce worries so children can feel peaceful throughout care.",
    image: "/Images/Oral Sedation.webp",
    path: "/treatments/orthodontics"
  },
];

export default function SedationDentistryPage() {
  return (
    <ServicesClient
      title="Sedation Dentistry"
      subtitle="in Hamilton, NJ"
      description="Comfortable dental care for anxious children. Sedation dentistry options in Hamilton, NJ help kids with dental fear receive the care they need in a calm, safe environment."
      services={services}
      decorativeImage="/Images/animals/deer.png"
    />
  );
}
