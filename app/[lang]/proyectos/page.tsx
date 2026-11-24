import type { Metadata } from "next";
import ScrollPrompt from "../../../components/ui/ScrollPrompt/ScrollPrompt";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../../data/projects";
import FeaturedProjectCard from "../../../components/projects/FeaturedProjectCard";
import ProjectMarquee from "../../../components/projects/ProjectMarquee/ProjectMarquee";
import { notFound } from "next/navigation";
import { isLocale } from "../../../i18n/resources";
import { createTranslation } from "../../../i18n/createTranslation";
import { Trans } from "react-i18next";

// ITEM - Metadatos de Proyectos
export async function generateMetadata({
    params,
}: PageProps<"/[lang]/proyectos">): Promise<Metadata> {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);

    return {
        title: translation.t("projects.metadata.title"),
        description: translation.t("projects.metadata.description"),
        alternates: {
            canonical: `/${lang}/proyectos`,
            languages: {
                es: "/es/proyectos",
                en: "/en/proyectos",
            },
        },
        openGraph: {
            title: translation.t("projects.metadata.socialTitle"),
            description: translation.t("projects.metadata.socialDescription"),
            url: `/${lang}/proyectos`,
            siteName: translation.t("home.metadata.siteName"),
            locale: lang === "es" ? "es_AR" : "en_US",
            type: "website",
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    width: 1200,
                    height: 630,
                    alt: translation.t("home.metadata.imageAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: translation.t("projects.metadata.socialTitle"),
            description: translation.t("projects.metadata.socialDescription"),
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    alt: translation.t("home.metadata.imageAlt"),
                },
            ],
        },
    };
}

export default async function ProjectsPage({
    params,
}: PageProps<"/[lang]/proyectos">) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);

    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    const secondaryProjects = projects
        .filter((project) => project.featured === false)
        .sort((a, b) => a.date.localeCompare(b.date));

    return (
        <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            {/* SECTION - Presentación de los proyectos destacados */}
            <header className="flex flex-col items-start gap-5 md:gap-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs lg:text-sm font-medium tracking-wide">
                    <span className="eyebrow-badge self-center">
                        <span aria-hidden="true" className="eyebrow-dot" />
                        {translation.t("projects.page.badge")}
                    </span>
                    <span className="text-subtle">{translation.t("projects.page.areas")}</span>
                </div>

                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    <Trans
                        i18n={translation}
                        ns="common"
                        i18nKey="projects.page.heading"
                        components={{
                            highlight: <span className="text-gold" />,
                        }}
                    />
                </h1>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    {translation.t("projects.page.description")}
                </p>
            </header>

            {/* ITEM - Invitación a explorar */}
            <ScrollPrompt
                href="#proyectos-destacados"
                text={translation.t("projects.page.scrollPrompt")}
            />

            <hr className="section-divider" />

            {/* SECTION - Proyectos destacados */}
            <section
                id="proyectos-destacados"
                aria-labelledby="titulo-proyectos-destacados"
                className="flex flex-col gap-6"
            >
                <h2
                    id="titulo-proyectos-destacados"
                    className="text-center font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                >
                    {translation.t("projects.page.featuredHeading")}
                    <span className="text-gold-light">.</span>
                </h2>

                {featuredProjects.map((project) => (
                    <FeaturedProjectCard
                        key={project.id}
                        project={project}
                        locale={lang}
                    />
                ))}
            </section>

            <hr className="section-divider my-3" />

            {/* SECTION - Evolución como desarrollador */}
            <section
                aria-labelledby="titulo-evolucion"
                className="flex min-w-0 flex-col gap-6"
            >
                <div>
                    <h2
                        id="titulo-evolucion"
                        className="font-heading text-2xl font-bold md:text-3xl"
                    >
                        {translation.t("projects.page.evolutionTitle")}
                    </h2>

                    <p className="mt-2 text-sm lg:text-lg leading-relaxed text-muted">
                        {translation.t("projects.page.evolutionDescription")}
                    </p>
                </div>

                <ProjectMarquee projects={secondaryProjects} />
            </section>

            <hr className="section-divider my-3" />

            {/* SECTION - Llamada a la acción */}
            <section aria-labelledby="llamado-accion" className="mx-auto w-full max-w-360 style-section">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="mb-2 block border-l-2 border-gold pl-3 text-xs lg:text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
                            {translation.t("projects.contactEyebrow")}
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            {translation.t("projects.contactTitle")}
                        </h2>

                        <p className="text-sm lg:text-lg md:text-base font-normal leading-relaxed text-muted">
                            {translation.t("projects.contactDescription")}
                        </p>
                    </div>
                    <Link href={`/${lang}/contacto`} className="action-button action-primary self-start md:self-center">
                        <span>{translation.t("projects.contactButton")}</span>
                        <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
