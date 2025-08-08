import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://autismforeverhome.vercel.app",
  integrations: [
    tailwind(),   // ✅ use Astro’s Tailwind integration
    mdx(),
    sitemap(),
    icon(),
  ],
  // remove vite: { plugins: [tailwindcss()] }
});
