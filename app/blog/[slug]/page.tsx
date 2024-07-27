import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPostBySlug } from "@/lib/requests";
import Post from "@/components/blog/Post";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["blog", params.slug],
    queryFn: () => getPostBySlug(params.slug),
  });

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="w-full">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Post slug={params.slug} />
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
