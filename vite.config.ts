import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The base must match your repository name for GitHub Pages
  // If your repo is https://github.com/username/eman-bakeries
  // Then base should be '/eman-bakeries/'
  base: '/eman-bakeries/', 
  build: {
    outDir: 'dist',
  }
});