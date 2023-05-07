import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import config from "./config/client-config";

export async function getProjects() {
  return await config().fetch<Project[]>(
    groq`*[_type == "project"]{_id, _createdAt, name, "slug": slug.current, "image": image.asset -> url, alt, content}`
  );
}

export async function getProjectBySlug(slug: string) {
  return await config().fetch<Project>(
    groq`*[_type == "project" && slug.current==$slug][0]{_id, _createdAt, name, "slug": slug.current, "image": image.asset -> url, alt, content, url, stack}`,
    { slug }
  );
}
