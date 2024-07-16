import { BlogCardImageData } from "@/interfaces/blog";
import Image from "next/image";
import React from "react";

const BlogCardImage = ({ data }: { data: BlogCardImageData }) => {
  return (
    <div className="w-full">
      <div className="h-[350px] relative group justify-center items-center bg-pink-50/20">
        <div className="relative w-full h-full">
          <Image src={data.src} alt={data.alt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardImage;
