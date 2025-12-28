"use client";

import { BlogCardImageData } from "@/interfaces/blog";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BlogCardImage = ({ data }: { data: BlogCardImageData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full"
    >
      <div className="h-[350px] relative group justify-center items-center bg-pink-50/20">
        <div className="relative w-full h-full">
          <Image src={data.src} alt={data.alt} fill className="object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCardImage;
