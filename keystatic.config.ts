import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "kholishafid",
      name: "kholishafid.github.io",
    },
    // kind: "local",
  },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        short_description: fields.text({
          label: "Short Description",
        }),
        date: fields.date({ label: "Date" }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/articles",
              publicPath: "../../assets/images/articles/",
            },
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      path: "src/content/projects/*",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        short_description: fields.text({
          label: "Short Description",
        }),
        link: fields.url({ label: "Link" }),
        logo: fields.image({
          label: "Logo",
          directory: "public/images/projects/logo",
          publicPath: "/images/projects/logo",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/projects",
              publicPath: "../../assets/images/projects/",
            },
          },
        }),
      },
    }),
  },
});
