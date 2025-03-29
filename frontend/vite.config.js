import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";  // <-- Ensure this is here

export default defineConfig({
  plugins: [react()],  // <-- Ensure this is added
});