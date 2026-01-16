import { pageMetadata, createMetadata } from "@/lib/metadata";
import ServiceAreaClient from "./service-area-client";

export const metadata = createMetadata(
    pageMetadata.hamiltonSquare.title,
    pageMetadata.hamiltonSquare.description,
    "/service-areas/hamilton-square-nj-dentist-near-you",
    pageMetadata.hamiltonSquare.keywords
);

export default function ServiceAreaPage() {
    return <ServiceAreaClient />;
}