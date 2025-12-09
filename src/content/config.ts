// @ts-ignore
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    date: z.date(),
  }),
});

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    short_description: z.string(),
    link: z.string(),
    logo: z.string().optional(),
  }),
});

export const collections = { articles, projects };
