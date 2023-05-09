const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" },
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default article;
