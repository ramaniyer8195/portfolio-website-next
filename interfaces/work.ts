export interface WorkCardData {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
  blog: string;
}

export enum LinkType {
  LIVE = "live",
  GITHUB = "github",
  BLOG = "blog",
}

export interface WorkCardLinkData {
  type: LinkType;
  url: string;
  content: string;
}

export interface WorkCardImageData {
  src: string;
  alt: string;
}
