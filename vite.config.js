import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Access environment variables directly from process.env
    'process.env': process.env
  },
  server: {
    port: 3000,
  },
})
