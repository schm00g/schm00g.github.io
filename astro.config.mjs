import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://schm00g.github.io',
	base: '/schm00g.github.io',
	integrations: [tailwind(), mdx(), image()],
});
