import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteSvgPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    ViteSvgPlugin(),
  ],
  build: {
    outDir: 'dist', // Especificando a pasta de saída do build
    assetsInlineLimit: 0 // Ajustando o limite de inlining de assets para 0 para garantir que os SVGs não sejam inlined
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
