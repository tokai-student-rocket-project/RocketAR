import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "RocketAR" : "./",
  plugins: [basicSsl()],
});
