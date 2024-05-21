import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
    prefetch: {
        defaultStrategy: "tap"
    },
    integrations: [
        sitemap(),
        expressiveCode({
            themes: ["one-dark-pro"],
            frames: {
                showCopyToClipboardButton: true
            }
        }),
        mdx({
            optimize: true,
            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
            // syntaxHighlight: "shiki",
            // shikiConfig: {
            //     theme: "one-dark-pro"
            // }
        })
    ],
    site: "https://navithecoderboi.me"
});
