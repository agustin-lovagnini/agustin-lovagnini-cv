import type { Metadata } from "next";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, FileText, FolderGit2 } from "lucide-react";
import TechnologiesMarquee from "../components/ui/TechnologiesMarquee";
import Image from "next/image";
import fotoPerfil from "../public/images/img-perfil-agustin.webp";
import { projects } from "../data/projects";
import FeaturedProjectCard from "../components/projects/FeaturedProjectCard";

// ITEM - Metadatos de Inicio
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Agustín Lovagnini | Full Stack Developer",
    description:
      "Conocé mis proyectos, tecnologías y experiencia en desarrollo web.",
    siteName: "Portfolio de Agustín Lovagnini",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/og/og-agustin-lovagnini.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio de Agustín Lovagnini, Full Stack Developer",
      },
    ],
  },
};

export default function Home() {

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="mx-auto flex w-full max-w-384 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
      {/* SECTION - Presentación personal */}
      <section
        aria-labelledby="presentacion-personal"
        className="grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_1fr] md:items-stretch md:gap-10"
      >
        <div className="flex flex-col gap-1 style-section">
          <span className="eyebrow-badge">
            <span
              aria-hidden="true"
              className="eyebrow-dot"
            />
            Full Stack Developer +3 años de código
          </span>

          <h1
            id="presentacion-personal"
            className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Agustin Lovagnini
            <span className="text-gold-light">.</span>
          </h1>

          <p className="font-heading text-lg font-medium leading-snug md:text-xl">
            <span className="text-gold-light">
              Cada idea tiene una identidad.
            </span>{" "}
            Mi trabajo es darle vida.
          </p>

          <p className="text-sm lg:text-lg pt-2 leading-relaxed text-muted md:text-base md:pt-0">
            Soy desarrollador web <strong className="underline">Full Stack</strong>, especializado en crear experiencias digitales modernas, intuitivas y funcionales. Me apasionan el Frontend, el diseño y la tecnología, y busco aportar soluciones que combinen creatividad y buenas prácticas.
          </p>

          <div className="mt-4 flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:gap-3 ">
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/proyectos" className="action-button action-primary">
                <span>Ver proyectos</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
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
              <a
                href="https://drive.google.com/file/d/1IqUTZjc_qskEoOR5iyi07wqiAYtlPn_V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="action-button action-social w-auto gap-2 px-4 sm:w-auto sm:gap-2"
                aria-label="Ver CV en PDF (abre en una pestaña nueva)"
              >
                <FileText size={22} className="shrink-0" aria-hidden="true" />
                <span>Ver CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* ITEM - Retrato con sombra dorada */}
        <div className="relative isolate mx-auto flex w-full max-w-55 items-center justify-center md:max-w-85">
          <div className="relative w-full max-w-85 overflow-hidden rounded-full border border-outline bg-surface shadow-[0_0_20px_rgba(233,183,103,0.12),0_8px_24px_rgba(0,0,0,0.3)] md:h-full md:rounded-lg">
            <Image
              src={fotoPerfil}
              alt="Retrato de Agustín Lovagnini"
              sizes="(min-width: 768px) 340px, 220px"
              className="aspect-square w-full object-cover object-center md:absolute md:inset-0 md:h-full md:aspect-auto"
            />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION - Stack principal y marquesina */}
      <section aria-labelledby="tecnologias-y-habilidades" className="style-section w-full">
        <div>
          <span className="mb-3 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl">
            Stack Principal
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-outline bg-background p-4">
          <TechnologiesMarquee />
        </div>
      </section>

      <hr className="section-divider" />

      {/* SECTION - Vista rápida de proyectos destacados */}
      <section aria-labelledby="proyectos-destacados" className="w-full">
        <div className="flex items-center gap-4">
          <div className="rounded-xl border border-outline bg-surface p-3 text-gold-light">
            <FolderGit2 size={24} aria-hidden="true" />
          </div>

          <div>
            <h2 id="proyectos-destacados" className="font-heading text-2xl font-bold">
              Proyectos destacados
            </h2>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              compact
            />
          ))}
        </div>
      </section>

      {/* SECTION - Invitación a contactar */}
      <section aria-labelledby="llamado-accion" className="style-section w-full">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-2 block border-l-2 border-gold pl-3 text-xs lg:text-sm font-semibold uppercase tracking-[0.15em] text-gold-light">
              Contacto
            </span>
            <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
              Hablemos de tu próximo proyecto
            </h2>
          </div>
          <Link href="/contacto" className="action-button action-primary">
            <span>Contactar</span>
            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
