import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Definindo a base para produção
  build: {
    outDir: 'dist', // Diretório de saída
  },
})
