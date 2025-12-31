import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "../services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.preventiveDentistry.title,
  pageMetadata.preventiveDentistry.description,
  "/services/preventive-dentistry",
  pageMetadata.preventiveDentistry.keywords
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
    title: "Dental Cleanings & Exams",
    description: "We keep tiny teeth sparkling clean while checking that every smile is developing just right.",
    image: "/Images/Dental Cleanings  Exams.webp",
    path: "/services/preventive-dentistry/dental-cleanings-hamilton-nj"
  },
  {
    id: 2,
    title: "Dental Sealants",
    description: "A smooth, invisible shield protects cavity-prone areas so kids can enjoy snacks without worry.",
    image: "/Images/dental Sealants.webp",
    path: "/services/preventive-dentistry/dental-sealants-hamilton-nj"
  },
  {
    id: 3,
    title: "Fluoride Treatments",
    description: "This quick strengthening boost gives enamel extra power to fight off sugar bugs and decay.",
    image: "/Images/Fluoride treatment.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 4,
    title: "Nutritional Counseling",
    description: "Simple guidance for parents and kids to support mouth-healthy choices at home and school.",
    image: "/Images/Nutritional Counseling.webp",
    path: "/treatments/dental-emergencies",
  },
  {
    id: 5,
    title: "Oral Hygiene Education",
    description: "Interactive lessons make brushing and flossing exciting - turning good habits into daily routines.",
    image: "/Images/Oral Hygiene Education.webp",
    path: "/treatments/dental-emergencies"
  },
  {
    id: 6,
    title: "Space Maintainers",
    description: "Gentle support keeps perfect room for future grown-up teeth to come in straight and happy.",
    image: "/Images/Space Maintainers.webp",
    path: "/treatments/dental-emergencies"
  },
  {
    id: 7,
    title: "X-Rays & Imaging",
    description: "Kid-safe technology helps us spot early changes below the gumline for better growth planning.",
    image: "/Images/X-Rays Imaging.webp",
    path: "/treatments/dental-emergencies"
  }
];

export default function PreventiveDentistryPage() {
  return (
    <ServicesClient
      title="Preventive Dentistry"
      subtitle="in Hamilton, NJ"
      description="Helping little teeth stay strong and healthy with gentle pediatric dental care in Hamilton, NJ that prevents cavities early and supports confident, growing smiles."
      services={services}
      decorativeImage="/Images/animals/deer.png"
    />
  );
}
