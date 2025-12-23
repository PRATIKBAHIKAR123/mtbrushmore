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
    title: "Traditional Braces",
    description: "Time-tested metal brackets guide teeth into perfect alignment with steady, gentle pressure.",
    image: "/Images/Traditional Braces.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 2,
    title: "Ceramic Braces",
    description: "Tooth-colored brackets blend in beautifully while delivering the same reliable results as traditional braces.",
    image: "/Images/Ceramic Braces.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 3,
    title: "Aligners",
    description: "Clear, removable trays gradually straighten teeth without visible wires or brackets.",
    image: "/Images/Aligners.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 4,
    title: "Palatal Expanders",
    description: "Gentle widening of the upper jaw creates space for teeth to erupt straight and naturally.",
    image: "/Images/Palatal Expanders.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 5,
    title: "Retainers",
    description: "Custom-fit devices lock in beautiful results and keep smiles perfectly aligned for life.",
    image: "/Images/Retainers.webp",
    path: "/treatments/orthodontics"
  },
  {
    id: 6,
    title: "Early Intervention",
    description: "Starting treatment at the right time prevents major problems and creates optimal bite and smile.",
    image: "/Images/Early Intervention.webp",
    path: "/treatments/orthodontics"
  },
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
