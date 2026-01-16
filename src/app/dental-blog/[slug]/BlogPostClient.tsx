"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogPostsData } from "../blogData";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const post = blogPostsData.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <Link href="/dental-blog">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              ← Back to Dental Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-16">
        {/* Featured Image - Only show for posts other than the first 3 blogs and the 3 newly added blogs */}
        {post.slug !== "how-urban-dental-transforms-kids-smiles-bayonne-nj" &&
          post.slug !==
            "why-urban-dental-bayonne-nj-top-choice-tooth-extractions" &&
          post.slug !== "same-day-dentistry-levittown-pa-urban-dental" &&
          post.slug !== "how-urban-dental-uses-modern-dental-fillings-prevent-tooth-decay-bayonne-nj" &&
          post.slug !== "dentures-or-implants-urban-dental-bayonne-informed-choice" &&
          post.slug !== "what-problems-can-cosmetic-dentistry-fix-urban-dental-bayonne" && (
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 md:h-125 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

        {/* Article Meta */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <span>{post.datetime}</span>
        </div>

        {/* Article Title */}
        <h1 className="text-xl md:text-4xl font-bold text-center text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Details Description (HTML) */}
        <div
          className="blog prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.detailsDescription }}
        />

        {/* Back to Blog Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
          <Link href="/dental-blog">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              ← Back to Dental Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

