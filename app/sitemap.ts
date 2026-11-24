import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

    const paths = ["", "/sobre-mi", "/proyectos", "/contacto"];

    return paths.flatMap((path) => {
        const spanishUrl = new URL(`/es${path}`, siteUrl).toString();
        const englishUrl = new URL(`/en${path}`, siteUrl).toString();

        const alternates = {
            languages: {
                es: spanishUrl,
                en: englishUrl,
            },
        };

        return [
            { url: spanishUrl, alternates },
            { url: englishUrl, alternates },
        ];
    });
}
