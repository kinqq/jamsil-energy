import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          // NOTE: GitHub Actions에서는 REPL_ID가 없어서 아래 두 개는 로드 안 됨
          await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
          await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner()),
        ]
      : []),
  ],

  // 프로젝트 페이지면 '/<repo>/' 로, 루트/커스텀 도메인이면 '/'
  base: "/",

  // root가 'client'라면 index.html은 client/ 아래에 있어야 함
  root: path.resolve(import.meta.dirname, "client"),

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  build: {
    // <<<<<< 여기만 dist 로 바꿉니다 (root 기준 상대 경로로도 OK)
    outDir: path.resolve(import.meta.dirname, "dist"),
    // 또는 그냥 outDir: "dist",  // root 상대
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
