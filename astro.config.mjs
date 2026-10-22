import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jiejia2023.github.io',
  base: '/srw-guide/',
  vite: {
    plugins: [tailwindcss()],
  },
});
