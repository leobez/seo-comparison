import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'sitemap.xml', // Caminho relativo ao diretório raiz do projeto
          dest: '' // Destino relativo à pasta de saída (dist)
        }
      ]
    })
  ],
})
