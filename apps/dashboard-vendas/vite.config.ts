import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/projetos/dashboard-vendas/",
  build: {
    outDir: "../../projetos/dashboard-vendas",
    emptyOutDir: true,
  },
});
