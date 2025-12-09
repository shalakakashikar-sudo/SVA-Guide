import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SVA/",   // <-- match the URL path you opened
  plugins: [react()],
});
