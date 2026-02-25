import { defineConfig } from "vite";

export default defineConfig({
  server: {
    watch: {
      // Esta opción fuerza a Vite a detectar cambios en Windows/WSL
      usePolling: true,
    },
  },
  base: "",
});
