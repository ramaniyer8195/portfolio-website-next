import { BlogItem } from "@/interfaces/blog";
import React from "react";
import BlogCardImage from "./BlogCardImage";
import Link from "next/link";

const BlogCard = ({ data }: { data: BlogItem }) => {
  return (
    <Link href={`/blog/${data.slug}`} id={data.id}>
      <div className="flex flex-col gap-[5px]">
        <div>
          <BlogCardImage
            data={{
              src: data.img,
              alt: data.title,
            }}
          />
          <div className="text-accent capitalize border-[1px] border-accent text-xs w-auto inline-block py-0.5 px-2.5">
            {data.series || "Misc"}
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white capitalize">
              {data.title}
            </h3>
            <p className="text-white/60 line-clamp-3">{data.desc}</p>

            <span className="text-accent">Read More</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
