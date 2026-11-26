import type { Metadata } from "next";
import {
    BriefcaseBusiness,
    Languages,
    MapPin,
    Layers3,
    Award,
    BadgeCheck,
    ArrowUpRight,
} from "lucide-react";
import ScrollPrompt from "../../../components/ui/ScrollPrompt/ScrollPrompt";
import CertificationsList from "../../../components/certifications/CertificationsList";
import { certifications } from "@/data/certifications";
import Link from "next/link";
import { technologyGroups } from "../../../data/technologyGroups";
import { competencies } from "../../../data/competencies";
import Image from "next/image";
import fotoPerfil from "../../../public/images/img-perfil-agustin.webp";
import { notFound } from "next/navigation";
import { isLocale } from "../../../translations/i18n/resources";
import { createTranslation } from "../../../translations/i18n/createTranslation";
import { Trans } from "react-i18next";

// ITEM - Metadatos de Sobre mí
export async function generateMetadata({
    params,
}: PageProps<"/[lang]/sobre-mi">): Promise<Metadata> {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);

    return {
        title: translation.t("about.metadata.title"),
        description: translation.t("about.metadata.description"),
        alternates: {
            canonical: `/${lang}/sobre-mi`,
            languages: {
                es: "/es/sobre-mi",
                en: "/en/sobre-mi",
            },
        },
        openGraph: {
            title: translation.t("about.metadata.socialTitle"),
            description: translation.t("about.metadata.socialDescription"),
            url: `/${lang}/sobre-mi`,
            siteName: translation.t("siteMetadata.siteName"),
            locale: lang === "es" ? "es_AR" : "en_US",
            type: "website",
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    width: 1200,
                    height: 630,
                    alt: translation.t("siteMetadata.imageAlt"),
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: translation.t("about.metadata.socialTitle"),
            description: translation.t("about.metadata.socialDescription"),
            images: [
                {
                    url: "/images/og/og-agustin-lovagnini.jpg",
                    alt: translation.t("siteMetadata.imageAlt"),
                },
            ],
        },
    }
};

export default async function AboutPage({
    params,
}: PageProps<"/[lang]/sobre-mi">) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const translation = createTranslation(lang);


    return (
        <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            {/* SECTION - Introducción de Sobre mí */}
            <header className="text-center">
                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    <Trans
                        i18n={translation}
                        ns="common"
                        i18nKey="about.heading"
                        components={{
                            highlight: <span className="text-gold" />,
                        }}
                    />
                </h1>
            </header>

            <ScrollPrompt
                href="#sobre-mi"
                text={translation.t("about.scrollPrompt")}
            />

            <hr className="section-divider" />

            {/* SECTION - Perfil profesional */}
            <section id="sobre-mi" aria-labelledby="sobre-mi-descripcion" className="w-full mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_1fr] md:gap-10">

                <div className="flex flex-col style-section p-0">
                    <div className="flex flex-1 flex-col gap-4 p-5">
                        <div className="flex flex-col gap-2">
                            <h2
                                id="sobre-mi-descripcion"
                                className="mb-1 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl"
                            >
                                {translation.t("about.profile.title")}
                            </h2>

                            <p className="leading-relaxed tracking-wide lg:text-lg">
                                <Trans
                                    i18n={translation}
                                    ns="common"
                                    i18nKey="about.profile.description"
                                    components={{
                                        role: <span className="font-bold text-gold-light" />,
                                        strong: <strong />,
                                    }}
                                />
                            </p>

                        </div>

                        <blockquote className="my-1 border-l-2 border-gold-light pl-4 italic text-muted bg-background rounded-r-lg py-4 lg:text-lg">
                            &ldquo;{translation.t("about.profile.quote")}&rdquo;
                        </blockquote>

                        <p className="leading-relaxed tracking-wide lg:text-lg">
                            {translation.t("about.profile.locationDescription")}
                        </p>
                    </div>
                    <div className="relative">
                        <dl className="grid w-full grid-cols-1 gap-4 bg-background p-8 text-sm lg:text-base md:grid-cols-2 xl:grid-cols-[auto_auto_auto] xl:justify-between">

                            <div>
                                <span aria-hidden="true" className="edge-line top-0 opacity-45" />

                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <MapPin aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    {translation.t("about.profile.locationLabel")}
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">{translation.t("about.profile.locationValue")}</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <Languages aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    {translation.t("about.profile.languagesLabel")}
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">{translation.t("about.profile.languagesValue")}</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    {translation.t("about.profile.workModeLabel")}
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">{translation.t("about.profile.workModeValue")}</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* SUBSECTION - Tarjetas personales */}

                <div className="flex flex-col gap-4">
                    {/* SUBSECTION - Presentación y certificaciones */}
                    <div className="flex flex-col gap-1 items-center text-center style-section p-4">

                        <div className="size-24 overflow-hidden rounded-full">
                            <Image
                                src={fotoPerfil}
                                alt={translation.t("about.personalCard.portraitAlt")}
                                sizes="96px"
                                className="size-full scale-110 object-cover"
                            />
                        </div>

                        <h3 className="font-bold text-lg">Agustín Lovagnini</h3>
                        <p className="text-gold font-medium text-sm lg:text-lg">Full Stack Developer</p>
                        <p className="text-muted text-sm lg:text-lg">{translation.t("about.personalCard.description")}</p>

                        <dl className="mt-3 grid w-full max-w-xs grid-cols-[repeat(auto-fit,minmax(8.5rem,1fr))] gap-3 rounded-lg bg-outline p-3 text-sm lg:text-base">                            <div className="flex min-w-0 flex-col text-center">
                            <dt className="order-2 w-full text-xs lg:text-sm tracking-widest text-gold-light opacity-80">{translation.t("about.personalCard.commitment")}</dt>
                            <dd className="order-1 w-full text-4xl">100%</dd>
                        </div>
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs lg:text-sm tracking-widest text-gold-light opacity-80">{translation.t("about.personalCard.certifications")}</dt>
                                <dd className="order-1 w-full text-4xl text-gold-dark">{certifications.length}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* SUBSECTION - Enfoque de desarrollo */}
                    <div className="flex flex-col gap-1 text-center style-section p-4">
                        <div>
                            <h3 className="font-bold text-lg">{translation.t("about.approach.title")}</h3>
                        </div>

                        <p className="text-muted text-sm lg:text-lg">{translation.t("about.approach.description")}</p>

                        <p className="text-gold text-sm lg:text-lg font-medium mt-3">{translation.t("about.approach.values")}</p>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* SECTION - Tecnologías principales */}
            <section aria-labelledby="tecnologias-principales" className="mx-auto w-full max-w-360">
                <header className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-outline bg-surface text-gold-light">
                        <Layers3 size={22} aria-hidden="true" />
                    </span>
                    <div>
                        <h2 id="tecnologias-principales" className="font-heading text-xl font-bold tracking-tight md:text-2xl">
                            {translation.t("about.technologies.title")}
                        </h2>
                        <p className="mt-1 text-sm lg:text-lg text-muted">{translation.t("about.technologies.description")}</p>
                    </div>
                </header>

                {/* SUBSECTION - Tecnologías organizadas por área */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {technologyGroups.map((group) => {
                        const title = translation.t(
                            `about.technologies.groups.${group.id}.title`,
                            { defaultValue: group.title }
                        );

                        const description = translation.t(
                            `about.technologies.groups.${group.id}.description`,
                            { defaultValue: group.description }
                        );
                        return (
                            <article key={group.id} className="flex min-w-0 flex-col gap-4 rounded-2xl border border-outline bg-surface p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="font-heading text-lg font-semibold">{title}</h3>
                                    <group.icon size={20} className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
                                </div>
                                <p className="text-sm lg:text-lg leading-relaxed text-muted">{description}</p>
                                <ul className="mt-auto flex flex-wrap gap-2 pt-3" aria-label={translation.t("about.technologies.groupLabel", { title })}>
                                    {group.technologies.map((technology) => (
                                        <li key={technology} className="max-w-full break-words rounded border border-subtle/70 bg-background px-2 py-1 text-xs lg:text-sm font-medium text-gold-light">
                                            {technology === "Autenticación"
                                                ? translation.t("about.technologies.authentication")
                                                : technology}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </section>

            <hr className="section-divider" />

            {/* SECTION - Formación y certificaciones */}
            <section aria-labelledby="formacion-y-certificaciones" className="mx-auto w-full max-w-360 style-section p-4 md:p-5">
                <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
                    <div className="flex items-start gap-3 md:items-center">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-surface text-gold-light">
                            <Award size={20} aria-hidden="true" />
                        </span>
                        <div>
                            <h2 id="formacion-y-certificaciones" className="font-heading text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                {translation.t("about.education.title")}
                            </h2>
                            <p className="mt-0.5 text-sm lg:text-lg leading-relaxed text-muted">
                                {translation.t("about.education.description")}
                            </p>
                        </div>
                    </div>

                    <span className="inline-flex self-start items-center gap-2 rounded-full border border-gold bg-surface px-3 py-1.5 text-xs lg:text-sm font-medium text-gold-light shadow-[0_0_12px_rgb(233_183_103/0.25)] lg:shrink-0 lg:self-center">
                        <BadgeCheck size={16} className="shrink-0 text-gold-light" aria-hidden="true" />
                        {translation.t("about.education.badge")}
                    </span>
                </div>
                {/* SUBSECTION - Certificaciones académicas de Coderhouse */}
                <div className="mb-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-gold-light">{translation.t("about.education.academicTitle")}</h3>
                    <p className="mb-4 text-sm lg:text-lg text-muted">{translation.t("about.education.academicDescription")}</p>
                    <CertificationsList />
                </div>
            </section>

            {/* SECTION - Competencias profesionales */}
            <section aria-labelledby="competencias-profesionales" className="w-full">
                <header className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-outline bg-surface text-gold-light">
                        <BriefcaseBusiness size={22} aria-hidden="true" />
                    </span>
                    <div>
                        <h2 id="competencias-profesionales" className="font-heading text-xl font-bold tracking-tight md:text-2xl">
                            {translation.t("competencies.title")}
                        </h2>
                        <p className="mt-1 text-sm lg:text-lg text-muted">
                            {translation.t("competencies.description")}
                        </p>
                    </div>
                </header>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {competencies.map((competency) => (
                        <article key={competency.id} className="style-section flex min-w-0 flex-col gap-3 rounded-xl">
                            <div className="flex items-start gap-3">
                                <competency.icon size={22} className="mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />
                                <h3 className="font-heading text-lg font-semibold">
                                    {translation.t(`competencies.items.${competency.id}.title`, {
                                        defaultValue: competency.title,
                                    })}
                                </h3>
                            </div>
                            <p className="text-sm lg:text-lg leading-relaxed text-muted">
                                {translation.t(`competencies.items.${competency.id}.description`, {
                                    defaultValue: competency.description,
                                })}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <hr className="section-divider" />

            {/* SECTION - Invitación a contactar */}
            <section aria-labelledby="llamado-accion" className="style-section w-full">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="mb-2 block border-l-2 border-gold pl-3 text-xs lg:text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
                            {translation.t("about.contactInvitation.eyebrow")}
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            {translation.t("about.contactInvitation.title")}
                        </h2>

                        <p className="text-sm lg:text-lg md:text-base font-normal leading-relaxed text-muted">
                            {translation.t("about.contactInvitation.description")}
                        </p>
                    </div>
                    <Link href={`/${lang}/contacto`} className="action-button action-primary">
                        <span>{translation.t("about.contactInvitation.button")}</span>
                        <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
