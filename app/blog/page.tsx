"use client";

import BlogCard from "@/components/blog/BlogCard";
import { BLOGS } from "@/constants/data";
import { BlogItem } from "@/interfaces/blog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    setBlogs(BLOGS);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => {
            return <BlogCard key={index} data={blog} />;
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
