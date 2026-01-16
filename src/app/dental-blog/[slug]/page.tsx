import type { Metadata } from "next";
import { blogPostsData } from "../blogData";
import BlogPostClient from "./BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}



export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Mt. Brushmore Pediatric Dentistry",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.shortDescription,
  };
}

export default async function DentalBlogDetailsPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
