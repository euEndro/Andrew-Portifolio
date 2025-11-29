import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Andrew-Portfolio/",
  optimizeDeps: {
    exclude: [],
  },
  resolve: {
    alias: {
      "react-native-web": "./node_modules/react-native-web/dist/index.js",
    },
  },
});
