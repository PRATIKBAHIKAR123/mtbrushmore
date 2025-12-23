import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "@/app/services/services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.treatments.title,
  pageMetadata.treatments.description,
  "/treatments",
  pageMetadata.treatments.keywords
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
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
    path: "/treatments/dental-cleanings-and-exams"
  },
  {
    id: 2,
    title: "Dental Sealants",
    description: "A smooth, invisible shield protects cavity-prone areas so kids can enjoy snacks without worry.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=600&fit=crop",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 3,
    title: "Fluoride Treatments",
    description: "This quick strengthening boost gives enamel extra power to fight off sugar bugs and decay.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
    path: "/treatments/orthodontics"
  },
  {
    id: 4,
    title: "Nutritional Counseling",
    description: "Simple guidance for parents and kids to support mouth-healthy choices at home and school.",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&h=600&fit=crop",
    path: "/treatments/dental-emergencies",
  }
];

export default function TreatmentsPage() {
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
