import { defineCollection, z } from "astro:content";

import type { ImageFunction } from "astro:content";

const blogModel = ({ image }: { image: ImageFunction }) => {
    return z.object({
        title: z.string(),
        description: z.string(),
        cover: image(),
        tags: z.array(z.string()),
        postedOn: z.coerce.date(),
        authors: z.array(z.string())
    });
};

const blog = defineCollection({
    type: "content",
    schema: ({ image }) => blogModel({ image })
});

const authorsModel = ({ image }: { image: ImageFunction }) => {
    return z.object({
        name: z.string(),
        avatar: z.union([z.string().url(), image()]),
        social: z.string().url()
    });
};

const authors = defineCollection({
    type: "content",
    schema: ({ image }) => authorsModel({ image })
});

export const collections = {
    blog: blog,
    authors: authors
};
