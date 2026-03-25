import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // After route + chart code-splitting, main chunk should stay reasonable; avoid noisy CI failures.
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/recharts")) return "recharts"
          if (id.includes("node_modules/lucide-react")) return "icons"
        },
      },
    },
  },
})
