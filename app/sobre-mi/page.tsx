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
import ScrollPrompt from "../../components/ui/ScrollPrompt/ScrollPrompt";
import CertificationsList from "../../components/certifications/CertificationsList";
import { certifications } from "@/data/certifications";
import Link from "next/link";
import { technologyGroups } from "../../data/technologyGroups";
import { competencies } from "../../data/competencies";
import Image from "next/image";
import fotoPerfil from "../../public/images/img-perfil-agustin.webp";

// ITEM - Metadatos de Sobre mí
export const metadata: Metadata = {
    title: "Sobre mí",
    description:
        "Conocé la formación, experiencia, certificaciones y tecnologías de Agustín Lovagnini, desarrollador Full Stack.",
    alternates: {
        canonical: "/sobre-mi",
    },
    openGraph: {
        title: "Sobre mí | Agustín Lovagnini",
        description:
            "Conocé mi formación, experiencia, certificaciones y tecnologías como desarrollador Full Stack.",
        url: "/sobre-mi",
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
    twitter: {
        card: "summary_large_image",
        title: "Sobre mí | Agustín Lovagnini",
        description:
            "Conocé mi formación, experiencia, certificaciones y tecnologías como desarrollador Full Stack.",
        images: [
            {
                url: "/images/og/og-agustin-lovagnini.jpg",
                alt: "Portfolio de Agustín Lovagnini, Full Stack Developer",
            },
        ],
    },
};


export default function AboutPage() {
    return (
        <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            {/* SECTION - Introducción de Sobre mí */}
            <header className="text-center">
                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    Sobre <span className="text-gold">Mí</span>
                </h1>
            </header>

            <ScrollPrompt href="#proyectos-destacados" />

            <hr className="section-divider" />

            {/* SECTION - Perfil profesional */}
            <section id="sobre-mi" aria-labelledby="sobre-mi-descripcion" className="w-full mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-[2fr_1fr] md:gap-10">

                <div className="flex flex-col style-section p-0">
                    <div className="flex flex-1 flex-col gap-4 p-5">
                        <div className="flex flex-col gap-2">
                            <h2 id="sobre-mi-descripcion" className="mb-1 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl">Perfil profesional
                            </h2>
                            <p className="leading-relaxed tracking-wide lg:text-lg">Soy desarrollador web <span className="font-bold text-gold-light">Full Stack</span>, con especial interés en el <strong>Frontend, el diseño y la experiencia de usuario</strong>. Trabajo con tecnologías como React, Next.js, Node.js y Express, integrando interfaces modernas con APIs REST, autenticación y bases de datos. Mi objetivo es desarrollar aplicaciones web completas, funcionales y escalables, combinando diseño, tecnología y buenas prácticas.</p>


                        </div>

                        <blockquote className="my-1 border-l-2 border-gold-light pl-4 italic text-muted bg-background rounded-r-lg py-4 lg:text-lg">
                            &ldquo;Me apasiona transformar ideas en experiencias digitales intuitivas y accesibles.&rdquo;
                        </blockquote>

                        <p className="leading-relaxed tracking-wide lg:text-lg">Resido en CABA, Argentina. Busco formar parte de un equipo donde pueda aportar mis conocimientos, colaborar en proyectos y seguir creciendo profesionalmente.</p>
                    </div>
                    <div className="relative">
                        <dl className="grid w-full grid-cols-1 gap-4 bg-background p-8 text-sm lg:text-base md:grid-cols-2 xl:grid-cols-[auto_auto_auto] xl:justify-between">

                            <div>
                                <span aria-hidden="true" className="edge-line top-0 opacity-45" />

                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <MapPin aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Ubicación
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">CABA, Argentina</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <Languages aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Idiomas
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">Español nativo · Inglés en formación</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Modalidad
                                </dt>
                                <dd className="opacity-90 mt-0.5 xl:whitespace-nowrap">Remoto · Híbrido · Presencial</dd>
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
                                alt="Retrato de Agustín Lovagnini"
                                sizes="96px"
                                className="size-full scale-110 object-cover"
                            />
                        </div>

                        <h3 className="font-bold text-lg">Agustín Lovagnini</h3>
                        <p className="text-gold font-medium text-sm lg:text-lg">Full Stack Developer</p>
                        <p className="text-muted text-sm lg:text-lg">Me caracterizan la curiosidad, el compromiso y las ganas de aprender. Disfruto crear soluciones y afrontar nuevos desafíos.</p>

                        <dl className="mt-3 grid w-full max-w-xs grid-cols-[repeat(auto-fit,minmax(8.5rem,1fr))] gap-3 rounded-lg bg-outline p-3 text-sm lg:text-base">                            <div className="flex min-w-0 flex-col text-center">
                            <dt className="order-2 w-full text-xs lg:text-sm tracking-widest text-gold-light opacity-80">Compromiso</dt>
                            <dd className="order-1 w-full text-4xl">100%</dd>
                        </div>
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs lg:text-sm tracking-widest text-gold-light opacity-80">Certificaciones</dt>
                                <dd className="order-1 w-full text-4xl text-gold-dark">{certifications.length}</dd>
                            </div>
                        </dl>
                    </div>

                    {/* SUBSECTION - Enfoque de desarrollo */}
                    <div className="flex flex-col gap-1 text-center style-section p-4">
                        <div>
                            <h3 className="font-bold text-lg">Mi enfoque de desarrollo:</h3>
                        </div>

                        <p className="text-muted text-sm lg:text-lg">Priorizo el código limpio, la accesibilidad y las buenas prácticas para desarrollar aplicaciones mantenibles y escalables.</p>

                        <p className="text-gold text-sm lg:text-lg font-medium mt-3">Código limpio · Accesibilidad · Aprendizaje continuo</p>
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
                            Tecnologías principales
                        </h2>
                        <p className="mt-1 text-sm lg:text-lg text-muted">Herramientas y lenguajes que utilizo en mis proyectos.</p>
                    </div>
                </header>

                {/* SUBSECTION - Tecnologías organizadas por área */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {technologyGroups.map((group) => (
                        <article key={group.id} className="flex min-w-0 flex-col gap-4 rounded-2xl border border-outline bg-surface p-5">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                                <group.icon size={20} className="mt-1 shrink-0 text-gold-light" aria-hidden="true" />
                            </div>
                            <p className="text-sm lg:text-lg leading-relaxed text-muted">{group.description}</p>
                            <ul className="mt-auto flex flex-wrap gap-2 pt-3" aria-label={`Tecnologías de ${group.title}`}>
                                {group.technologies.map((technology) => (
                                    <li key={technology} className="max-w-full break-words rounded border border-subtle/70 bg-background px-2 py-1 text-xs lg:text-sm font-medium text-gold-light">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
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
                                Formación y Certificaciones
                            </h2>
                            <p className="mt-0.5 text-sm lg:text-lg leading-relaxed text-muted">
                                Trayecto académico y profesional en desarrollo de software.
                            </p>
                        </div>
                    </div>

                    <span className="inline-flex self-start items-center gap-2 rounded-full border border-gold bg-surface px-3 py-1.5 text-xs lg:text-sm font-medium text-gold-light shadow-[0_0_12px_rgb(233_183_103/0.25)] lg:shrink-0 lg:self-center">
                        <BadgeCheck size={16} className="shrink-0 text-gold-light" aria-hidden="true" />
                        Instituciones reconocidas
                    </span>
                </div>
                {/* SUBSECTION - Certificaciones académicas de Coderhouse */}
                <div className="mb-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-gold-light">Certificaciones académicas</h3>
                    <p className="mb-4 text-sm lg:text-lg text-muted">Coderhouse · Cursos y carrera aprobados.</p>
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
                            Competencias profesionales
                        </h2>
                        <p className="mt-1 text-sm lg:text-lg text-muted">
                            Habilidades que aplico en cada proyecto y al trabajar en equipo.
                        </p>
                    </div>
                </header>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {competencies.map((competency) => (
                        <article key={competency.id} className="style-section flex min-w-0 flex-col gap-3 rounded-xl">
                            <div className="flex items-start gap-3">
                                <competency.icon size={22} className="mt-0.5 shrink-0 text-gold-light" aria-hidden="true" />
                                <h3 className="font-heading text-lg font-semibold">
                                    {competency.title}
                                </h3>
                            </div>
                            <p className="text-sm lg:text-lg leading-relaxed text-muted">
                                {competency.description}
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
                            El próximo paso
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            ¿Trabajamos juntos?
                        </h2>

                        <p className="text-sm lg:text-lg md:text-base font-normal leading-relaxed text-muted">
                            Estoy abierto a nuevas oportunidades y proyectos donde pueda aportar valor y seguir creciendo profesionalmente.
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
