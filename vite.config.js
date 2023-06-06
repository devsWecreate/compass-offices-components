import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',
  publicDir: 'storybook-static',
  build: {
    outDir: 'storybook-static',
  },
  server: {
    open: true,
  }

})
