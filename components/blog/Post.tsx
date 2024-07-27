"use client";

import Image from "next/image";
import React from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaBookOpen, FaUser } from "react-icons/fa";
import BlogContent from "./BlogContent";
import BlogShare from "./BlogShare";
import NewsLetter from "./NewsLetter";
import Link from "next/link";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import {
  getPostBySlug,
  getReadMorePosts,
  getReadMoreSeriesPosts,
} from "@/lib/requests";
import { motion } from "framer-motion";

const Post = ({ slug }: { slug: string }) => {
  const { data } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getPostBySlug(slug),
  });

  const series = data?.seriesSlug || "";

  const { data: readMoreSeriesData } = useQuery({
    queryKey: ["readMoreSeries", series],
    queryFn: () => getReadMoreSeriesPosts(series),
  });

  const { data: readMoreData } = useQuery({
    queryKey: ["readMore"],
    queryFn: () => getReadMorePosts(),
  });

  const getDisplayDate = (date: string) => {
    const parsedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(parsedDate);
  };

  const getReadMorePostCards = () => {
    if (readMoreData && readMoreSeriesData) {
      const data = [...readMoreSeriesData, ...readMoreData];

      return data
        .filter((blog) => blog.slug !== slug)
        .slice(0, 2)
        .map((blog, index) => {
          return <BlogCard key={index} data={blog} />;
        });
    } else return [];
  };

  return data ? (
    <>
      <h2 className="text-[42px] font-extrabold leading-none mb-6">
        {data.title}
      </h2>
      <div className="flex gap-6 mb-3">
        <div className="flex gap-3 items-center">
          <FaUser /> {data.author}
        </div>
        <div className="w-[2px] bg-white"></div>
        <div className="flex gap-3 items-center">
          <BsCalendar2DateFill /> {getDisplayDate(data.publishedAt)}
        </div>
        <div className="w-[2px] bg-white"></div>
        <div className="flex gap-3 items-center">
          <FaBookOpen /> {`${data.readTime} min read`}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="h-[600px] relative group justify-center items-center bg-pink-50/20 mb-8"
      >
        <div className="relative w-full h-full">
          <Image
            src={data.img || ""}
            alt={data.title || ""}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      <BlogContent data={data.content} />
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
        {getReadMorePostCards()}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Post;
