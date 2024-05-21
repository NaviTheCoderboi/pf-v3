import eslintPluginAstro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";

export default [
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-strict"],
    {
        ignores: ["node_modules", "pnpm-lock.yaml", "dist"]
    },
    {
        ...mdx.flat,
        processor: mdx.createRemarkProcessor({
            lintCodeBlocks: true,
            languageMapper: {}
        })
    },
    {
        ...mdx.flatCodeBlocks,
        rules: {
            ...mdx.flatCodeBlocks.rules,
            "no-var": "error",
            "prefer-const": "error"
        }
    }
];
