import type { Metadata } from "next";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import TechnologiesMarquee from "../components/ui/TechnologiesMarquee";
import Image from "next/image";
import fotoPerfil from "../public/images/img-perfil-agustin.webp";

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
        url: "/images/og/og-agustin-lovagnini.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio de Agustín Lovagnini, Full Stack Developer",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-384 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
      {/* SECTION - Presentación personal */}
      <section
        aria-labelledby="presentacion-personal"
        className="grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_1fr] md:gap-10"
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

          <p className="text-sm pt-2 leading-relaxed text-muted md:text-base md:pt-0">
            Soy desarrollador web <strong className="underline">Full Stack</strong>, apasionado por el Frontend, el diseño y la experiencia de usuario. Siempre me atrajo crear interfaces modernas, intuitivas y responsivas que combinen estética y funcionalidad. Decidí formarme también en Backend para comprender el desarrollo de aplicaciones de principio a fin y crear soluciones completas. Mi objetivo es marcar la diferencia y aportar valor a una empresa o equipo de desarrollo, contribuyendo con conocimientos, ideas, soluciones y compromiso, mientras continúo aprendiendo y creciendo profesionalmente junto a mis compañeros.
          </p>

          <div className="mt-4 flex flex-col items-center gap-5 md:flex-row md:flex-wrap md:gap-3 ">
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/proyectos" className="action-button action-primary">
                <span>Ver proyectos</span>
                <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
              </Link>
              <Link href="/contacto" className="action-button action-secondary">
                <span>Contactar</span>
                <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
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
          <div className="w-full max-w-85 overflow-hidden rounded-full border border-outline bg-surface shadow-[0_0_20px_rgba(233,183,103,0.12),0_8px_24px_rgba(0,0,0,0.3)] md:rounded-lg">
            <Image
              src={fotoPerfil}
              alt="Retrato de Agustín Lovagnini"
              sizes="(min-width: 768px) 340px, 220px"
              className="aspect-square w-full object-cover object-center md:aspect-3/4"
            />
          </div>
        </div>
      </section>

      {/* SECTION - Stack principal y marquesina */}
      <section aria-labelledby="tecnologias-y-habilidades" className="style-section w-full">
        <div>
          <span className="mb-3 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl">
            Stack Principal
          </span>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr] md:items-center md:gap-8">
            <h2
              id="tecnologias-y-habilidades"
              className="font-heading text-xl font-semibold tracking-tight md:text-2xl"
            >
              Tecnologías y Habilidades
            </h2>

            <p className="text-sm leading-relaxed text-muted">
              Me motiva formar parte de un ecosistema de desarrollo moderno, enfocado en crear aplicaciones robustas, escalables y con componentes reutilizables.
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-outline bg-background p-4">
          <TechnologiesMarquee />
        </div>

      </section>

      {/* SECTION - Invitación a contactar */}
      <section aria-labelledby="llamado-accion" className="style-section w-full">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="mb-2 block border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
              Contame tu idea y vamos a darle vida
            </span>
            <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
              ¿Tenés un proyecto en mente?
            </h2>
          </div>
          <Link href="/contacto" className="action-button action-primary">
            <span>Iniciar Conversación</span>
            <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
