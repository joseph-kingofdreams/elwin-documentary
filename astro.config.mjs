import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN
  },
  integrations: [tailwind(), react()],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});