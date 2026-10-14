import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // The category data and the photo index are big on purpose; the photo index loads lazily.
  build: { chunkSizeWarningLimit: 1600 },
})
