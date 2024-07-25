import {
  GetPostsArgs,
  GetPostsResponse,
  SubscribeToNewsletterResponse,
} from "@/interfaces/requests";
import { env } from "./env";
import request, { gql } from "graphql-request";
import { BlogItem } from "@/interfaces/blog";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export const getPosts = async ({
  first = 3,
  pageParam = "",
  filter = {},
}: GetPostsArgs): Promise<BlogItem[]> => {
  const query = gql`
    query getPosts(
      $publicationId: ObjectId!
      $first: Int!
      $after: String
      $filter: PublicationPostConnectionFilter
    ) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after, filter: $filter) {
          edges {
            node {
              id
              title
              slug
              content {
                text
                markdown
              }
              coverImage {
                url
              }
              author {
                name
              }
              publishedAt
              readTimeInMinutes
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query, {
    publicationId,
    first,
    after: pageParam,
    filter,
  });

  const blogs: BlogItem[] = response.publication.posts.edges.map((edge) => ({
    id: edge.node.id,
    slug: edge.node.slug,
    img: edge.node.coverImage.url,
    title: edge.node.title,
    desc: edge.node.content.text.substring(0, 300),
    content: edge.node.content.markdown,
    author: edge.node.author.name,
    publishedAt: edge.node.publishedAt,
    readTime: edge.node.readTimeInMinutes,
    cursor: edge.cursor,
  }));

  return blogs;
};

export const subscribeToNewsletter = async (email: string) => {
  const mutation = gql`
    mutation subscribeToNewsletter($publicationId: ObjectId!, $email: String!) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $publicationId }
      ) {
        status
      }
    }
  `;
  const response = await request<SubscribeToNewsletterResponse>(
    endpoint,
    mutation,
    {
      publicationId,
      email,
    }
  );

  return response;
};
