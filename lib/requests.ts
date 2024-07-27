import {
  GetPostBySlugResponse,
  GetPostsArgs,
  GetPostsResponse,
  GetReadMorePostsResponse,
  SubscribeToNewsletterResponse,
} from "@/interfaces/requests";
import { env } from "./env";
import request, { gql } from "graphql-request";
import { BlogDetailsItem, BlogItem } from "@/interfaces/blog";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export const getPosts = async ({
  first,
  pageParam = "",
}: GetPostsArgs): Promise<BlogItem[]> => {
  const query = gql`
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
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
              series {
                name
                slug
              }
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
    series: edge.node.series?.name || "",
    cursor: edge.cursor,
  }));

  return blogs;
};

export const getReadMoreSeriesPosts = async (
  seriesSlug: string
): Promise<BlogItem[]> => {
  const query = gql`
    query getReadMoreSeriesPosts(
      $publicationId: ObjectId!
      $seriesSlug: String!
    ) {
      publication(id: $publicationId) {
        series(slug: $seriesSlug) {
          posts(first: 3) {
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
                series {
                  name
                  slug
                }
              }
              cursor
            }
          }
        }
      }
    }
  `;

  const response = await request<GetReadMorePostsResponse>(endpoint, query, {
    publicationId,
    seriesSlug,
  });

  const blogs: BlogItem[] = response.publication.series.posts.edges.map(
    (edge) => ({
      id: edge.node.id,
      slug: edge.node.slug,
      img: edge.node.coverImage.url,
      title: edge.node.title,
      desc: edge.node.content.text.substring(0, 300),
      content: edge.node.content.markdown,
      author: edge.node.author.name,
      publishedAt: edge.node.publishedAt,
      readTime: edge.node.readTimeInMinutes,
      series: edge.node.series?.name || "",
      cursor: edge.cursor,
    })
  );

  return blogs;
};

export const getReadMorePosts = async (): Promise<BlogItem[]> => {
  const query = gql`
    query getReadMorePosts($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 3) {
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
              series {
                name
                slug
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query, {
    publicationId,
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
    series: edge.node.series?.name || "",
    cursor: edge.cursor,
  }));

  return blogs;
};

export const getPostBySlug = async (slug: string): Promise<BlogDetailsItem> => {
  const query = gql`
    query getPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
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
          series {
            name
            slug
          }
        }
      }
    }
  `;

  const response = await request<GetPostBySlugResponse>(endpoint, query, {
    publicationId,
    slug,
  });

  const post = response.publication.post;
  const blog: BlogDetailsItem = {
    id: post.id,
    img: post.coverImage.url,
    title: post.title,
    content: post.content.markdown,
    author: post.author.name,
    publishedAt: post.publishedAt,
    readTime: post.readTimeInMinutes,
    series: post.series.name,
    seriesSlug: post.series.slug,
  };

  return blog;
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
