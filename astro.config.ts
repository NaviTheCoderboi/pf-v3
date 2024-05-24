import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode, { ExpressiveCodeTheme } from "astro-expressive-code";
import { defineConfig } from "astro/config";
import fs from "node:fs";
import path from "node:path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const jsoncString = fs.readFileSync(
    path.join(import.meta.dirname, "./src/lib/theme.jsonc"),
    "utf-8"
);
const myTheme = ExpressiveCodeTheme.fromJSONString(jsoncString);

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    prefetch: {
        defaultStrategy: "tap"
    },
    markdown: {
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    },
    integrations: [
        sitemap(),
        expressiveCode({
            themes: [myTheme],
            frames: {
                showCopyToClipboardButton: true
            }
        }),
        mdx()
    ],
    site: "https://navithecoderboi.me"
});
