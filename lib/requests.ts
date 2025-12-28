import {
  GetPostBySlugResponse,
  GetPostsArgs,
  GetPostsResponse,
  GetReadMorePostsResponse,
  GetTotalPostsResponse,
  SubscribeToNewsletterResponse,
} from "@/interfaces/requests";
import { env } from "./env";
import { GraphQLClient, gql } from "graphql-request";
import { BlogDetailsItem, BlogItem } from "@/interfaces/blog";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

const client = new GraphQLClient(endpoint, {
  fetch: (url, init) => {
    return fetch(url, {
      ...init,
      cache: "no-store",
    });
  },
});

export const getPosts = async ({
  first,
  pageParam = "",
}: GetPostsArgs): Promise<BlogItem[]> => {
  const query = gql`
    query getPosts_${Date.now()}($publicationId: ObjectId!, $first: Int!, $after: String) {
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

  try {
    const response = await client.request<GetPostsResponse>(query, {
      publicationId,
      first,
      after: pageParam,
    });

    const blogs: BlogItem[] = response.publication.posts.edges.map((edge) => ({
      id: edge.node.id,
      slug: edge.node.slug,
      img: edge.node.coverImage?.url || "/assets/blog/default.png",
      title: edge.node.title,
      desc: edge.node.content?.text?.substring(0, 300) || "",
      content: edge.node.content?.markdown || "",
      author: edge.node.author?.name || "Raman Iyer",
      publishedAt: edge.node.publishedAt || new Date().toISOString(),
      readTime: edge.node.readTimeInMinutes || 0,
      series: edge.node.series?.name || "",
      cursor: edge.cursor,
    }));

    return blogs;
  } catch (error) {
    console.error("Error in getPosts:", error);
    return [];
  }
};

export const getReadMoreSeriesPosts = async (
  seriesSlug: string
): Promise<BlogItem[]> => {
  const query = gql`
    query getReadMoreSeriesPosts_${Date.now()}(
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

  const response = await client.request<GetReadMorePostsResponse>(query, {
    publicationId,
    seriesSlug,
  });

  const blogs: BlogItem[] = response.publication.series.posts.edges.map(
    (edge) => ({
      id: edge.node.id,
      slug: edge.node.slug,
      img: edge.node.coverImage?.url || "/assets/blog/default.png",
      title: edge.node.title,
      desc: edge.node.content?.text?.substring(0, 300) || "",
      content: edge.node.content?.markdown || "",
      author: edge.node.author?.name || "Raman Iyer",
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
    query getReadMorePosts_${Date.now()}($publicationId: ObjectId!) {
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

  const response = await client.request<GetPostsResponse>(query, {
    publicationId,
  });

  const blogs: BlogItem[] = response.publication.posts.edges.map((edge) => ({
    id: edge.node.id,
    slug: edge.node.slug,
    img: edge.node.coverImage?.url || "/assets/blog/default.png",
    title: edge.node.title,
    desc: edge.node.content?.text?.substring(0, 300) || "",
    content: edge.node.content?.markdown || "",
    author: edge.node.author?.name || "Raman Iyer",
    publishedAt: edge.node.publishedAt,
    readTime: edge.node.readTimeInMinutes,
    series: edge.node.series?.name || "",
    cursor: edge.cursor,
  }));

  return blogs;
};

export const getPostBySlug = async (slug: string): Promise<BlogDetailsItem> => {
  const query = gql`
    query getPostBySlug_${Date.now()}($publicationId: ObjectId!, $slug: String!) {
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

  const response = await client.request<GetPostBySlugResponse>(query, {
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
    series: post.series?.name || "",
    seriesSlug: post.series?.slug || "",
  };

  return blog;
};

export const subscribeToNewsletter = async (email: string) => {
  const mutation = gql`
    mutation subscribeToNewsletter_${Date.now()}($publicationId: ObjectId!, $email: String!) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $publicationId }
      ) {
        status
      }
    }
  `;
  const response = await client.request<SubscribeToNewsletterResponse>(
    mutation,
    {
      publicationId,
      email,
    }
  );

  return response;
};

export const getTotalPostsCount = async (): Promise<number> => {
  const query = gql`
    query getTotalPostsCount_${Date.now()}($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        posts(first: 1) {
          totalDocuments
        }
      }
    }
  `;

  const response = await client.request<GetTotalPostsResponse>(query, {
    publicationId,
  });
  return response.publication.posts.totalDocuments;
};
