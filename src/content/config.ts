import { defineCollection, z } from 'astro:content';

const experienceCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
	}),
});

export const collections = {
	experience: experienceCollection,
};
