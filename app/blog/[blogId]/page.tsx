"use client";

import { useState, useEffect } from "react";
import { BlogItem } from "@/interfaces/blog";
import { BLOGS, DUMMY_BLOG } from "@/constants/data";
import BlogContent from "@/components/blog/BlogContent";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const [blogDetails, setBlogDetails] = useState<BlogItem>();

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
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
