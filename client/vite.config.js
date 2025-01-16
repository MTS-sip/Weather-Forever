import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Set the root directory to the current directory
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the output directory before each build
    rollupOptions: {
      input: './index.html', // Entry point for the build
    },
  },
});