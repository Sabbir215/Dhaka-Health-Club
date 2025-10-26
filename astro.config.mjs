// @ts-check
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), icon()],
  server: {
    maxRequestBodySize: 10 * 1024 * 1024, // Set to 10MB, for example
  }
});
