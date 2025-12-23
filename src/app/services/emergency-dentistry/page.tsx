import type { Metadata } from "next";
import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServicesClient from "../services-client";

export const metadata: Metadata = createMetadata(
  pageMetadata.emergencyDentistry.title,
  pageMetadata.emergencyDentistry.description,
  "/services/emergency-dentistry",
  pageMetadata.emergencyDentistry.keywords
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
    title: "Chipped or Broken Teeth",
    description: "Quick and comforting care repairs cracks or breaks so kids can smile and chew again - without worry.",
    image: "/Images/Chipped or Broken Teeth.webp",
    path: "/treatments/dental-cleanings-and-exams"
  },
  {
    id: 2,
    title: "Dental Abscesses",
    description: "Immediate relief for painful infections keeps children comfortable and prevents serious complications.",
    image: "/Images/Dental Abscesses.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 3,
    title: "Knocked-Out Teeth",
    description: "Rapid care gives the best chance to save a permanent tooth and restore the smile after an accident.",
    image: "/Images/Knocked-Out Teeth.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 4,
    title: "Lost Fillings or Crowns",
    description: "Swift restoration protects the tooth underneath and keeps everything stable until fully repaired. ",
    image: "/Images/Lost Fillings or Crowns.webp",
    path: "/treatments/restorative-dentistry"
  },
  {
    id: 5,
    title: "Orthodontic Emergencies",
    description: "Broken braces or poking wires are fixed fast to keep treatment on track and smiles growing strong.",
    image: "/Images/Orthodontic Emergencies.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 6,
    title: "Soft Tissue Injuries",
    description: "Gentle treatment quickly soothes cuts, bites, or gum injuries so kids can heal comfortably.",
    image: "/Images/Soft Tissue Injuries.webp",
    path: "/treatments/restorative-dentistry"
  },
];

export default function EmergencyDentistryPage() {
  return (
    <ServicesClient
      title="Emergency Dentistry"
      subtitle="in Hamilton, NJ"
      description="A knocked-out tooth or sudden toothache can feel scary, but families can count on gentle, fast emergency dental care in Hamilton, NJ that helps little smiles bounce back with confidence."
      services={services}
      decorativeImage="/Images/animals/deer.png"
    />
  );
}
