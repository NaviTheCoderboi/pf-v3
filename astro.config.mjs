import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        defaultStrategy: "tap"
    },
    integrations: [sitemap()],
    site: "https://navithecoderboi.me"
});
