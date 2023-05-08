import { PortableTextBlock } from "sanity";

export interface Article {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  image: string;
  alt: string;
  content: PortableTextBlock[];
  keywords: string[];
}
