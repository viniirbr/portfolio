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
      filds: [
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "stack",
      title: "Stacks",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default project;
