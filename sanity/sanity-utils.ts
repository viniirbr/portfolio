import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import config from "./config/client-config";
import { Article } from "@/types/Article";

export async function getProjects() {
  return await config().fetch<Project[]>(
    groq`*[_type == "project"]{_id, _createdAt, name, "slug": slug.current, "image": image.asset -> url, alt, deployedUrl, repositoryUrl, stacks}`
  );
}

export async function getArticles() {
  return await config().fetch<Article[]>(
    groq`*[_type == "article"]{_id, _createdAt, title, "slug": slug.current, "image": image.asset -> url, alt, deployedUrl, content, keywords}`
  );
}
export async function getArticleBySlug(slug: string) {
  return await config().fetch<Article>(
    groq`*[_type == "article" && slug.current==$slug][0]{_id, _createdAt, title, "slug": slug.current, "image": image.asset -> url, alt, content, keywords}`,
    { slug }
  );
}
