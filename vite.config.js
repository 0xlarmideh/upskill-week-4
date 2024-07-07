import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        commonjsOptions: { transformMixedEsModules: true },
    },
    base: "/",
});
