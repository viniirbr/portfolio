import { PortableTextBlock } from "sanity";

export interface Project {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  alt: string;
  repositoryUrl: string;
  deployedUrl: string;
  stacks: string[];
}
