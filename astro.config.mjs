// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    platformProxy: { enabled: true },
    sessions: false,
    imageService: 'passthrough',
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});