import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TechnologiesMarquee from "../components/TechnologiesMarquee";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-8">
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
            Disponible para nuevas oportunidades
          </span>

          <span className="block text-sm font-medium tracking-tight sm:text-base">
            Full Stack Developer
            <span className="pl-1 font-semibold text-gold-light">
              +3 años de código
            </span>
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
              Transformando ideas en
            </span>{" "}
            realidades digitales
          </p>

          <p className="text-sm leading-relaxed text-muted md:text-base">
            Soy desarrollador web Full Stack, con especial interés en el Frontend y la experiencia de usuario. Me apasiona crear interfaces modernas, intuitivas y responsivas, combinando diseño y funcionalidad. Trabajo con tecnologías como React, JavaScript, Node.js y Express, desarrollando proyectos que integran soluciones tanto del lado del cliente como del servidor.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-3">
            <Link href="/proyectos" className="action-button action-primary">
              <span>Ver proyectos</span>
              <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
            </Link>
            <Link href="/contacto" className="action-button action-secondary">
              <span>Contactar</span>
              <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
            </Link>
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

        {/* ITEM - Retrato con sombra dorada */}
        <div className="relative isolate mx-auto flex w-full max-w-[340px] items-center justify-center">
          <div className="w-full max-w-[340px] overflow-hidden rounded-lg border border-outline bg-surface shadow-[0_0_20px_rgba(233,183,103,0.12),0_8px_24px_rgba(0,0,0,0.3)]">
            <img
              src="/images/img-perfil-agustin.webp"
              alt="Retrato de Agustín Lovagnini"
              className="aspect-[3/4] w-full object-cover object-center"
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
              Un ecosistema moderno enfocado en el desarrollo de
              aplicaciones robustas, escalables y con componentes reutilizables.
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
              Construyamos algo juntos
            </span>
            <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
              ¿Tenés un proyecto en mente?
            </h2>

            <p className="text-sm md:text-base font-normal leading-relaxed text-muted">
              Contame tu idea y veamos cómo podemos hacerla realidad
              en el mundo digital
            </p>
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
