import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

  server: {
     port: 4322, // Set your desired port here
   },

  adapter: cloudflare(),
});