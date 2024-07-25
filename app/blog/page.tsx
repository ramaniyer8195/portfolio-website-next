import Posts from "@/components/blog/Posts";
import { BlogItem } from "@/interfaces/blog";
import { getPosts } from "@/lib/requests";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Blog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["blogs"],
    queryFn: getPosts,
    getNextPageParam: (lastPage: BlogItem[]) =>
      lastPage.length < 3 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Posts />
        </HydrationBoundary>
      </div>
    </section>
  );
};

export default Blog;
