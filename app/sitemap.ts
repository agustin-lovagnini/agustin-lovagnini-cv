import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl =
        process.env.SITE_URL ?? "http://localhost:3000";

    return ["/", "/sobre-mi", "/proyectos", "/contacto"].map(
        (path) => ({
            url: new URL(path, siteUrl).toString(),
        })
    );
}