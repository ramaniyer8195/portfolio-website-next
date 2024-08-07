export interface BlogItem {
  id: string;
  img: string;
  title: string;
  desc: string;
  content: string;
  author: string;
  publishedAt: Date;
}

export interface BlogCardImageData {
  src: string;
  alt: string;
}
