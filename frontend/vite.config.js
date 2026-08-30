import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Standard Vite + React config. Nothing project-specific is needed here
// because we keep the setup simple (no proxy magic - the frontend calls
// the backend's full URL directly, see src/utils/api.js).
export default defineConfig({
  plugins: [react()],
});
