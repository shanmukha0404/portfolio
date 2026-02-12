import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { inspectAttr } from "kimi-plugin-inspect-react";

export default defineConfig({
  base: "/",
  plugins: [inspectAttr(), react()],

  // Development server
  server: {
    host: "0.0.0.0",
    port: 8081,
    strictPort: false,
    allowedHosts: ["shanmukha.thetrust.ai", ".thetrust.ai", "localhost"],
    fs: {
      deny: [".git", "**/.git/**"],
      allow: [".."],
    },
  },

  // Vite preview (this is what you're using)
  preview: {
    host: "0.0.0.0",
    port: 8081,
    strictPort: false,
    allowedHosts: ["shanmukha.thetrust.ai", ".thetrust.ai", "localhost"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
