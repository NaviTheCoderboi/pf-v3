import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        defaultStrategy: "tap"
    },
    site: "https://navithecoderboi.github.io/pf-v3",
    base: "pf-v3"
});
