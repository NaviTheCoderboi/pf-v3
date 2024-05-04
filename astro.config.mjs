import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        defaultStrategy: "tap"
    },
    site: "https://navithecoderboi.github.io/",
    base: "pf-v3"
});
