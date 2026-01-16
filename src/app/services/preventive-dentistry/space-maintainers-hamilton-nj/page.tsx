import { pageMetadata, createMetadata } from "@/lib/metadata";
import SpaceMaintainersClient from "./space-maintainers-client";

export const metadata = createMetadata(
  pageMetadata.spaceMaintainers.title,
  pageMetadata.spaceMaintainers.description,
  "/services/preventive-dentistry/space-maintainers-hamilton-nj",
  pageMetadata.spaceMaintainers.keywords
);

export default function SpaceMaintainersPage() {
  return <SpaceMaintainersClient />;
}
