"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/requests";
import { Button } from "../ui/button";

const Posts = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 3 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8">
        {data?.pages.map((group) =>
          group.map((blog) => {
            return <BlogCard key={blog.id} data={blog} />;
          })
        )}
      </div>

      {isFetching ? (
        <div className="text-accent text-center mt-6">Loading...</div>
      ) : hasNextPage ? (
        <div className="flex justify-center mt-6">
          <Button
            disabled={!hasNextPage || isFetching}
            onClick={() => fetchNextPage()}
          >
            Load More
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
