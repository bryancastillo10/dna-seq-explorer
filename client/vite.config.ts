import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
});
