import { defineCollection, z } from 'astro:content';
const work3d = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    video: z.string(),
    images: z.array(z.string()).optional(),
  }),
});
const work2d = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});
export const collections = {
  '3d': work3d,
  '2d': work2d,
};
