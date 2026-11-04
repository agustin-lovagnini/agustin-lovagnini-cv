import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import TechnologiesMarquee from "../components/TechnologiesMarquee";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-16 px-4 py-8 ">
      <section
        aria-labelledby="presentacion-personal"
        className="grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_1fr] md:gap-12"
      >
        <div className="flex flex-col gap-1 style-section border-glow">
          <span className="my-1 inline-flex items-center justify-start gap-1 px-2 py-1 bg-gold-dark select-none rounded-full text-xs text-gold-light font-bold drop-shadow-[0_1px_2px_#00000099] self-start">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-gold-light"
            />
            Disponible para nuevas oportunidades
          </span>

          <span className="block tracking-tight text-sm">Full Stack Developer
            <span className="pl-1 text-gold-light">+3 años de código</span>
          </span>

          <h1 id="presentacion-personal" className="text-4xl font-bold leading-tight md:text-5xl">
            Agustin Lovagnini<span className="text-gold-light">.</span>
          </h1>

          <p><span className="text-gold-light">Transformando ideas en</span> realidades digitales</p>
          <p>Soy desarrollador web Full Stack, con especial interés en el Frontend y la experiencia de usuario. Me apasiona crear interfaces modernas, intuitivas y responsivas, combinando diseño y funcionalidad. Trabajo con tecnologías como React, JavaScript, Node.js y Express, desarrollando proyectos que integran soluciones tanto del lado del cliente como del servidor.</p>
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
          </div>
        </div>

        <div className="flex justify-center style-section border-glow">
          <img
            src="/images/img-perfil-agustin.webp"
            alt="Agustín Lovagnini"
            className="h-64 w-64 rounded-2xl border-3 border-surface object-cover"
          />
        </div>
      </section>



      <section aria-labelledby="tecnologias-y-habilidades" className="style-section w-full">
        <div>
          <span className="mb-3 block w-full border-b border-gold-light pb-1 text-gold-light tracking-tight text-2xl">Stack Principal</span>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[3fr_2fr] md:items-center md:gap-8">
            <h2 id="tecnologias-y-habilidades" className="text-xl">Tecnologías y Habilidades</h2>

            <p className="text-gold-light opacity-75 text-sm">Ecosistema moderno concentrado en la solidez tipeada, la velocidad de ejecucion y componenetes reutlilizables</p>
          </div>
        </div>

        <div className="mt-6  rounded-xl border border-outline bg-background p-4">
          <TechnologiesMarquee />
        </div>

      </section>
    </main>
  );
}
