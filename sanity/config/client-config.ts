import { createClient } from "next-sanity";

export default function config() {
  return createClient({
    projectId: "f21vbmnf",
    dataset: "production",
    apiVersion: "2021-03-25",
  });
}
