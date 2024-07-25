export interface BlogItem {
  id: string;
  slug: string;
  img: string;
  title: string;
  desc: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  cursor: string;
}

export interface BlogCardImageData {
  src: string;
  alt: string;
}
