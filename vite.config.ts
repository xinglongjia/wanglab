import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: '/wanglab/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
}))
