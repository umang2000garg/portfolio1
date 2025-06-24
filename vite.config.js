// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio1/', // 👈 your repo name — must be exact!
  plugins: [react()],
})
