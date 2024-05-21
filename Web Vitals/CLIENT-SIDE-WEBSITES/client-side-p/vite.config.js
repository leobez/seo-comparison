import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This function prevents deduplication of image files by treating each file separately
          if (id.includes('assets')) {
            const assetPath = resolve(__dirname, 'src/assets');
            if (id.startsWith(assetPath)) {
              const fileName = id.slice(assetPath.length + 1);
              return `assets/${fileName}`;
            }
          }
        }
      }
    }
  }
})
