import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (ctx) => {
    const blogs = await getCollection("blog");

    if (!ctx.site) {
        throw new Error("Missing site metadata");
    }

    return rss({
        stylesheet: "/rss.xsl",
        title: "NaviTheCoderboi | blog",
        description:
            "Stay updated with the latest insights and trends delivered straight to your feed",
        site: ctx.site,
        items: blogs.map((blog) => ({
            pubDate: blog.data.postedOn,
            title: blog.data.title,
            description: blog.data.description,
            link: `/blog/${blog.slug}`,
            author: blog.data.authors.join(", ")
        }))
    });
};
