import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/neltecho/',
  plugins: [react()],
  server: { port: 5178, strictPort: true },
})
