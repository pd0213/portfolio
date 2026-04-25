import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const work3d = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/3d' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    video: z.string().optional(),
    images: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});
const work2d = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/2d' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});
const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    icon: z.string().optional(),
    bio: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
      icon: z.string(),
    })).optional(),
  }),
});
export const collections = {
  '3d': work3d,
  '2d': work2d,
  'settings': settings,
};
