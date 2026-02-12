import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [inspectAttr(), react()],
  server: {
    allowedHosts: ["shanmukha.thetrust.ai", "localhost"],
    host: "0.0.0.0",
    port: 8081,
    strictPort: false,
    fs: {
      deny: [".git", "**/.git/**"],
      allow: [".."],
    },
  },
  preview: {
    allowedHosts: ["shanmukha.thetrust.ai", "localhost"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
