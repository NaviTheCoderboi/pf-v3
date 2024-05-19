import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        defaultStrategy: "tap"
    },
    integrations: [sitemap(), mdx()],
    site: "https://navithecoderboi.me"
});
