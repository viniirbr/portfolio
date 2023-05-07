import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "f21vbmnf",
  dataset: "production",
  title: "Personal Website",
  apiVersion: "2021-03-25",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
