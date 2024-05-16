import { defineCollection, z } from "astro:content";
import { format, parseISO } from "date-fns";

import type { ImageFunction } from "astro:content";

const blogModel = ({ image }: { image: ImageFunction }) => {
    return z.object({
        title: z.string(),
        description: z.string(),
        cover: image(),
        tags: z.array(z.string()),
        postedOn: z.coerce
            .date()
            .transform((v) =>
                format(parseISO(v.toISOString()), "LLLL d, yyyy")
            ),
        authors: z.array(z.string())
    });
};

const blog = defineCollection({
    type: "content",
    schema: ({ image }) => blogModel({ image })
});

export const collections = {
    blog: blog
};
