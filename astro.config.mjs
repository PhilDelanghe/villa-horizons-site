import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://villa-horizons.fr',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
