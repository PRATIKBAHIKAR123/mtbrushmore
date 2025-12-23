import type { Metadata } from 'next';
import { pageMetadata, createMetadata } from '@/lib/metadata';
import HomePageClient from './home-page-client';

export const metadata: Metadata = createMetadata(
  pageMetadata.home.title,
  pageMetadata.home.description,
  "/",
  pageMetadata.home.keywords
);

export default function HomePage() {
  return <HomePageClient />;
}
