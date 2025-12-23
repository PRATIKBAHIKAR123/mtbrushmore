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
    title: "Nitrous Oxide (Laughing Gas)",
    description: "Light sedation keeps kids relaxed and comfortable while staying awake and responsive during treatment.",
    image: "/Images/Nitrous Oxide.webp",
    path: "/treatments/sedation-dentistry"
  },
  {
    id: 2,
    title: "Oral Sedation",
    description: "A safe, gentle medication given before treatment helps anxious children relax into a calm, sleepy state.",
    image: "/Images/Oral Sedation.webp",
    path: "/treatments/sedation-dentistry"
  },
  {
    id: 3,
    title: "IV Sedation",
    description: "Deeper sedation delivered through a vein provides maximum comfort for longer or more complex procedures.",
    image: "/Images/IV Sedation.webp",
    path: "/treatments/sedation-dentistry"
  },
  {
    id: 4,
    title: "General Anesthesia",
    description: "Complete sleep ensures the safest, most comfortable care for children with high anxiety or special needs.",
    image: "/Images/General Anesthesia.webp",
    path: "/treatments/sedation-dentistry"
  },
  {
    id: 5,
    title: "Special Needs Care",
    description: "Customized sedation support for children with developmental differences helps them receive optimal dental care.",
    image: "/Images/Special Needs Care.webp",
    path: "/treatments/sedation-dentistry"
  },
  {
    id: 6,
    title: "Post-Operative Care",
    description: "Careful monitoring after sedation ensures safe recovery with detailed take-home instructions for parents.",
    image: "/Images/Post-Operative Care.webp",
    path: "/treatments/sedation-dentistry"
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
