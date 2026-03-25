import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const work3d = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/3d' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    video: z.string().optional(),
    images: z.array(z.string()).optional(),
  }),
});
const work2d = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/2d' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});
export const collections = {
  '3d': work3d,
  '2d': work2d,
};
