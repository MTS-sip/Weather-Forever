import { defineConfig } from 'vite';
import path from 'path';


/*
// https://vitejs.dev/config/
export default defineConfig({
  root: './client',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, './client/dist'),
    emptyOutDir: true,
  },
});
*/

export default defineConfig({
  root: './client', // Ensure this points to the directory containing index.html
  build: {
    outDir: path.resolve(__dirname, './dist/client'), // Adjust the output directory
    emptyOutDir: true,
  },
});