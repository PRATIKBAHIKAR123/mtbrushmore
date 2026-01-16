"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

import { blogPostsData } from "./blogData";

// Blog post data from the centralized blog data file
const blogPosts = blogPostsData.map((post, index) => ({
  id: index + 1,
  title: post.title,
  date: post.datetime,
  description: post.shortDescription,
  image: post.image,
  slug: post.slug,
}));

// Mock API function - replace with your actual API call
const fetchBlogPosts = async (page: number, itemsPerPage: number) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalItems: blogPosts.length,
    currentPage: page,
    totalPages: Math.ceil(blogPosts.length / itemsPerPage),
    itemsPerPage,
  };
};

export default function DentalBlogClient() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        // const data = await fetchBlogPosts(currentPage, itemsPerPage);
        // setPosts(data.posts);
        // setTotalItems(data.totalItems);
        // setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div>
        <div className="max-w-7xl mx-auto text-center py-4 md:py-16">
            <h1 className="text-lg md:text-4xl text-accent mb-2">
              Smile Smart with Mt. Brushmore - Kids’ Dental Tips & Parent Resources
            </h1>
            <h2 className="text-md md:text-xl text-primary">
              Fun, Helpful Articles to Support Bright, Healthy Smiles at Every Stage of Growing Up
            </h2>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Blog Post Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Blog Post Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-accent mb-3 line-clamp-2 hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-4">{post.date}</p>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Continue Reading Button */}
                    <Link href={`/dental-blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        Continue Reading
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16">
                <Pagination
                  // currentPage={currentPage}
                  // totalPages={totalPages}
                  // totalItems={totalItems}
                  // itemsPerPage={itemsPerPage}
                  // onPageChange={handlePageChange}
                  // onItemsPerPageChange={handleItemsPerPageChange}
                  // itemsPerPageOptions={[3, 6, 9, 12]}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

