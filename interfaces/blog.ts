export interface BlogItem {
  id: string;
  slug: string;
  img: string;
  series: string;
  title: string;
  desc: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  cursor: string;
}

export interface BlogDetailsItem {
  id: string;
  img: string;
  series: string;
  seriesSlug: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

export interface BlogCardImageData {
  src: string;
  alt: string;
}
