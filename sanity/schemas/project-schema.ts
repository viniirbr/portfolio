const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "alt",
          type: "string",
        },
        {
          name: "url",
          title: "URL",
          type: "url",
        },
      ],
    },
    {
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
    },
    {
      name: "deployedUrl",
      title: "Deployed URL",
      type: "url",
    },
    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
