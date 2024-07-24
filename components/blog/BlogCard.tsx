import { BlogItem } from "@/interfaces/blog";
import React from "react";
import BlogCardImage from "./BlogCardImage";
import Link from "next/link";

const BlogCard = ({ data }: { data: BlogItem }) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <BlogCardImage
        data={{
          src: data.img,
          alt: data.title,
        }}
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-white capitalize">
            {data.title}
          </h3>
          <p className="text-white/60">{data.desc}</p>
          <Link href={`/blog/${data.id}`} id={data.id}>
            <span className="text-accent">Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
