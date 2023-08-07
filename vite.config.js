import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: "RocketAR",
  plugins: [basicSsl()],
  build: {
    outDir: "./docs",
  },
});
