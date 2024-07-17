"use client";

import { useState, useEffect } from "react";
import { BlogItem } from "@/interfaces/blog";
import { BLOGS, DUMMY_BLOG } from "@/constants/data";
import BlogContent from "@/components/blog/BlogContent";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import NewsLetter from "@/components/blog/NewsLetter";
import Link from "next/link";
import BlogShare from "@/components/blog/BlogShare";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const [blogDetails, setBlogDetails] = useState<BlogItem>();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    setBlogs([BLOGS[0], BLOGS[1]]);
  }, []);

  useEffect(() => {
    setBlogDetails(BLOGS.find((blog) => blog.id === params.blogId));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="w-full">
          <div className="h-[600px] relative group justify-center items-center bg-pink-50/20 mb-8">
            <div className="relative w-full h-full">
              <Image
                src={blogDetails?.img || ""}
                alt={blogDetails?.title || ""}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-[42px] font-extrabold leading-none mb-6">
            {blogDetails?.title}
          </h2>
          <BlogContent data={DUMMY_BLOG} />
          <hr className="my-10 border-accent border-[1px]" />
          <div className="flex flex-col gap-6 items-center my-10">
            <h2 className="text-4xl">Share</h2>
            <BlogShare
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
            />
          </div>
          <NewsLetter />
          <div className="flex flex-row justify-between my-10">
            <p className="text-2xl">Related Articles</p>
            <Link href={"/blog"}>
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogs.map((blog, index) => {
              return <BlogCard key={index} data={blog} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
