import eslintPluginAstro from "eslint-plugin-astro";

export default [
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-strict"],
    {
        ignores: ["node_modules", "pnpm-lock.yaml", "dist"]
    }
];
