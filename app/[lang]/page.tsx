import type { Metadata } from "next";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import TechnologiesMarquee from "../../components/ui/TechnologiesMarquee";
import Image from "next/image";
import fotoPerfil from "../../public/images/img-perfil-agustin.webp";
import { projects } from "../../data/projects";
import FeaturedProjectCard from "../../components/projects/FeaturedProjectCard";
import { notFound } from "next/navigation";
import { isLocale } from "../../translations/i18n/resources";
import { createTranslation } from "../../translations/i18n/createTranslation";
import { Trans } from "react-i18next";



// ITEM - Metadatos de Inicio
export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const translation = createTranslation(lang);

  return {
    title: {
      absolute: translation.t("home.metadata.title"),
    },
    description: translation.t("home.metadata.description"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      url: `/${lang}`,
      title: translation.t("home.metadata.title"),
      description: translation.t("home.metadata.socialDescription"),
      siteName: translation.t("siteMetadata.siteName"),
      locale: lang === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/og/og-agustin-lovagnini.jpg",
          width: 1200,
          height: 630,
          alt: translation.t("siteMetadata.imageAlt")
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: translation.t("home.metadata.title"),
      description: translation.t("home.metadata.socialDescription"),
      images: [
        {
          url: "/images/og/og-agustin-lovagnini.jpg",
          alt: translation.t("siteMetadata.imageAlt"),
        },
      ],
    },
  };
}

export default async function Home({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const translation = createTranslation(lang);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="mx-auto flex w-full max-w-384 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
      {/* SECTION - Presentación personal */}
      <section
        aria-labelledby="presentacion-personal"
        className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-x-10 md:gap-y-6"
      >
        <div className="flex flex-col gap-4">
          <h1
            id="presentacion-personal"
            className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Agustín Lovagnini
            <span className="text-gold-light">.</span>
          </h1>

          <p className="font-heading text-xl font-semibold text-gold md:text-2xl">
            Full Stack Developer
          </p>

          <p className="font-heading text-lg font-medium leading-snug md:text-xl">
            <span className="text-gold-light">
              {translation.t("home.taglineLead")}
            </span>{" "}
            {translation.t("home.taglineEnd")}
          </p>

          <p className="text-sm lg:text-lg pt-2 leading-relaxed text-muted md:text-base md:pt-0">
            <Trans
              i18n={translation}
              ns="common"
              i18nKey="home.description"
              components={{
                strong: <strong className="font-semibold text-foreground" />,
              }}
            />
          </p>
        </div>

        {/* ITEM - Retrato de presentación */}
        <div className="mx-auto w-full max-w-44 md:col-start-2 md:row-start-1 md:row-span-2 md:max-w-80">
          <div className="overflow-hidden rounded-xl border border-outline">
            <Image
              src={fotoPerfil}
              alt={translation.t("home.portraitAlt")}
              sizes="(min-width: 768px) 320px, 176px"
              className="aspect-square w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-3 md:col-start-1 md:row-start-2 md:flex-row md:flex-wrap md:items-center">
          <div className="flex w-full md:w-auto">
            <Link href={`/${lang}/proyectos`} className="action-button action-primary w-full md:w-auto">
              <span>{translation.t("home.viewProjects")}</span>
              <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <a
              href="https://drive.google.com/file/d/1IqUTZjc_qskEoOR5iyi07wqiAYtlPn_V/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button flex-1 border-outline bg-surface text-foreground md:flex-none"
              aria-label={translation.t("home.viewCvLabel")}
            >
              <FileText size={22} className="shrink-0" aria-hidden="true" />
              <span>{translation.t("home.viewCv")}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/agustinlovagnini"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button action-social"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/agustin-lovagnini"
              target="_blank"
              rel="noopener noreferrer"
              className="action-button action-social"
              aria-label="GitHub"
            >
              <FaGithub size={22} aria-hidden="true" />
            </a>

          </div>
        </div>
      </section>

      <hr className="section-divider" />



      {/* SECTION - Vista rápida de proyectos destacados */}
      <section aria-labelledby="proyectos-destacados" className="w-full">
        <h2
          id="proyectos-destacados"
          className="font-heading text-2xl font-bold after:mt-2 after:block after:h-0.5 after:w-12 after:bg-gold md:text-3xl"
        >
          {translation.t("home.featuredProjects")}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              locale={lang}
              compact
            />
          ))}
        </div>
      </section>

      {/* SECTION - Stack principal y marquesina */}
      <section
        aria-labelledby="tecnologias-y-habilidades"
        className="w-full"
      >
        <h2
          id="tecnologias-y-habilidades"
          className="font-heading text-2xl font-bold after:mt-2 after:block after:h-0.5 after:w-12 after:bg-gold md:text-3xl"
        >
          {translation.t("home.mainStack")}
        </h2>

        <div className="mt-4">
          <TechnologiesMarquee />
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION - Invitación a contactar */}
      <section
        aria-labelledby="llamado-accion"
        className="w-full rounded-xl border border-outline bg-surface p-5 md:p-6"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              id="llamado-accion"
              className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl"
            >
              {translation.t("home.contactTitle")}
            </h2>
          </div>
          <Link
            href={`/${lang}/contacto`}
            className="action-button action-primary w-full md:w-auto"
          >
            <span>{translation.t("home.contactButton")}</span>
            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </section>


    </main>
  );
}
