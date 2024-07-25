import type { QueryFunctionContext } from "@tanstack/react-query";

export type PostMetadata = {
  id: string;
  title: string;
  slug: string;
  content: {
    markdown: string;
    text: string;
  };
  coverImage: {
    url: string;
  };
  author: {
    name: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
};

export type GetPostsResponse = {
  publication: {
    posts: {
      edges: {
        node: PostMetadata;
        cursor: string;
      }[];
    };
  };
};

type GetPostsFunctionArgs = {
  first: number;
  pageParam: string;
  filter: {
    tags?: string[];
  };
};

export type GetPostsArgs = QueryFunctionContext & GetPostsFunctionArgs;

export type SubscribeToNewsletterResponse = {
  data?: {
    subscribeToNewsletter: {
      status: string;
    };
  };

  errors?: { message: string }[];
};

export type GetPostBySlugResponse = {
  publication: {
    post: PostMetadata;
  };
};
