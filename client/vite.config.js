import { defineConfig } from 'vite';

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