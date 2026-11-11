import {
    ChevronsDown,
    BriefcaseBusiness,
    Languages,
    MapPin,
    Code2,
    Database,
    Layers3,
    Server,
    Wrench,
    Award,
    BadgeCheck, ArrowUpRight
} from "lucide-react";
import CertificationsList from "../../components/CertificationsList";
import { certifications } from "@/data/certifications";
import Link from "next/link";


export default function SobreMi() {
    const technologyGroups = [
        {
            id: "frontend",
            title: "Frontend",
            icon: Code2,
            description: "Interfaces responsivas y accesibles, con componentes reutilizables y atención a la experiencia de usuario.",
            technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "Bootstrap"],
        },
        {
            id: "backend",
            title: "Backend",
            icon: Server,
            description: "Aplicaciones del lado del servidor, APIs REST, autenticación y organización del código por responsabilidades.",
            technologies: ["Node.js", "Express", "APIs REST", "Autenticación", "Swagger / OpenAPI"],
        },
        {
            id: "databases",
            title: "Bases de datos",
            icon: Database,
            description: "Persistencia de información, modelado de datos y consultas en bases relacionales y no relacionales.",
            technologies: ["MongoDB", "Mongoose", "SQL", "Firebase"],
        },
        {
            id: "workflow",
            title: "Herramientas de trabajo",
            icon: Wrench,
            description: "Control de versiones, pruebas de APIs y herramientas para desarrollar, organizar y compartir mis proyectos.",
            technologies: ["Git", "GitHub", "VS Code", "npm", "Postman", "Docker"],
        },
    ];

    return (
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            {/* SECTION - Introducción de Sobre mí */}
            <header className="flex flex-col items-start gap-5 md:gap-6">
                <span className="eyebrow-badge">
                    <span aria-hidden="true" className="eyebrow-dot" />
                    Trayectoria y enfoque
                </span>

                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    Sobre mí<span className="text-gold-light">.</span>
                </h1>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    Desarrollador Full Stack con especial interés en el Frontend y la experiencia de usuario. Combino diseño y funcionalidad con conocimientos en Backend para desarrollar aplicaciones web completas, utilizando tecnologías como React, Next.js, Node.js y Express.
                </p>
            </header>

            {/* ITEM - Invitación a explorar */}
            <div className="flex items-center justify-center gap-3">
                <ChevronsDown aria-hidden="true"
                    className="size-9 text-subtle animate-scroll-down motion-reduce:animate-none"
                />
                <a
                    href="#sobre-mi"
                    className="text-subtle transition-colors duration-300 hover:text-gold-light focus-visible:text-gold-light"
                >
                    <span className="text-sm font-medium tracking-[0.2em] uppercase">
                        Deslizá para explorar
                    </span>
                </a>
                <ChevronsDown aria-hidden="true"
                    className="size-9 text-subtle animate-scroll-down motion-reduce:animate-none"
                />
            </div>

            <hr className="section-divider" />

            {/* SECTION - Perfil profesional */}
            <section id="sobre-mi" aria-labelledby="sobre-mi-descripcion" className=" w-full max-w-7xl mx-auto grid grid-cols-1 items-stretch gap-8 md:grid-cols-[2fr_1fr] md:gap-10">

                <div className="flex flex-col style-section p-0">
                    <div className="flex flex-1 flex-col gap-4 p-5">
                        <div className="flex flex-col gap-2">
                            <h2 id="sobre-mi-descripcion" className="mb-1 block w-full border-b border-gold-light pb-1 font-heading text-xl font-semibold tracking-tight text-gold-light md:text-2xl">Perfil profesional
                            </h2>
                            <p className="leading-relaxed tracking-wide">Soy desarrollador web <span className="font-bold text-gold-light">Full Stack</span>, formado en tecnologías Frontend y Backend. A lo largo de mi formación desarrollé aplicaciones integrando autenticación, APIs REST y bases de datos relacionales y no relacionales. Aunque mi mayor interés siempre estuvo en el aspecto visual, decidí profundizar también en Backend para comprender cómo funciona una aplicación de principio a fin y poder aportar soluciones completas y sólidas.</p>
                        </div>

                        <blockquote className="my-1 border-l-2 border-gold-light pl-4 italic text-muted bg-background rounded-r-lg py-4">
                            &quot;Lo que me apasiona de la programación es que no tiene límites, está en constante evolución, siempre presenta nuevos desafíos y oportunidades para aprender, crear y mejorar. Creo en desarrollar experiencias funcionales, intuitivas y accesibles para todos, que crezcan y evolucionen junto a cada marca.&quot;.
                        </blockquote>

                        <p className="leading-relaxed tracking-wide">Resido en la Ciudad Autónoma de Buenos Aires, Argentina. Busco formar parte de un equipo donde pueda aportar mis conocimientos, ideas e iniciativa, participar en proyectos reales y crecer junto a otros profesionales. También disfruto desarrollar proyectos propios, explorar nuevas posibilidades y llevar mis ideas a la práctica..</p>
                    </div>
                    <div className="relative">
                        <dl className="grid w-full grid-cols-1 gap-4 bg-background p-8 text-sm md:grid-cols-2 xl:grid-cols-[auto_auto_auto] xl:justify-between">

                            <div>
                                <span aria-hidden="true" className="edge-line top-0 opacity-45" />

                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <MapPin aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Ubicación
                                </dt>
                                <dd className="opacity-90 mt-[0.5] xl:whitespace-nowrap">CABA, Argentina</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <Languages aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Idiomas
                                </dt>
                                <dd className="opacity-90 mt-[0.5] xl:whitespace-nowrap">Español nativo · Inglés en formación</dd>
                            </div>

                            <div>
                                <dt className="flex flex-row gap-1 text-gold font-light leading-tight tracking-wide opacity-95">
                                    <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0 text-gold" />
                                    Modalidad
                                </dt>
                                <dd className="opacity-90 mt-[0.5] xl:whitespace-nowrap">Remoto · Híbrido · Presencial</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* SUBSECTION - Tarjetas personales */}

                <div className="flex flex-col gap-4">
                    {/*ITEM - TARJETA PERSONAL 1*/}
                    <div className="flex flex-col gap-1 items-center text-center style-section p-4">

                        <div className="size-24 overflow-hidden rounded-full">
                            <img
                                src="/images/img-perfil-agustin.webp"
                                alt="Retrato de Agustín Lovagnini"
                                className="size-full scale-110 object-cover"
                            />
                        </div>

                        <h3 className="font-bold text-lg">Agustín Lovagnini</h3>
                        <p className="text-gold font-medium text-sm">Full Stack Developer</p>
                        <p className="text-muted text-sm">Desarrollador Full Stack con vocación por el diseño y la tecnología. Me caracterizan la curiosidad, la iniciativa y el compromiso por aportar valor en cada proyecto.</p>

                        <dl className="mt-3 grid w-full max-w-xs grid-cols-2 gap-3 rounded-lg bg-outline p-3 text-sm">
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs tracking-widest text-gold-light opacity-80">Compromiso</dt>
                                <dd className="order-1 w-full text-4xl">100%</dd>
                            </div>
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs tracking-widest text-gold-light opacity-80">Certificaciones</dt>
                                <dd className="order-1 w-full text-4xl text-gold-dark">{certifications.length}</dd>
                            </div>
                        </dl>
                    </div>

                    {/*ITEM - TARJETA PERSONAL 2*/}
                    <div className="flex flex-col gap-1 text-center style-section p-4">
                        <div>
                            {/* Acá irá el icono decorativo */}
                            <h3 className="font-bold text-lg">Mi enfoque de desarrollo:</h3>
                        </div>

                        <p className="text-muted text-sm">Priorizo la organización del código, la reutilización de componentes y las buenas prácticas de desarrollo. Busco construir soluciones mantenibles, escalables y preparadas para adaptarse a nuevas necesidades.</p>

                        <p className="text-gold text-sm font-medium mt-3">Código limpio · Accesibilidad · Aprendizaje continuo</p>
                    </div>
                </div>
            </section>

            {/* SECTION - Formación y certificaciones */}
            <section aria-labelledby="formacion-y-certificaciones" className="mx-auto w-full max-w-[1440px] style-section p-4 md:p-5">
                <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
                    <div className="flex items-start gap-3 md:items-center">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-surface text-gold-light">
                            <Award size={20} aria-hidden="true" />
                        </span>
                        <div>
                            <h2 id="formacion-y-certificaciones" className="font-heading text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                Formación y Certificaciones
                            </h2>
                            <p className="mt-0.5 text-sm leading-relaxed text-muted">
                                Trayecto académico y profesional en desarrollo de software.
                            </p>
                        </div>
                    </div>

                    <span className="inline-flex self-start items-center gap-2 rounded-full border border-gold bg-surface px-3 py-1.5 text-xs font-medium text-gold-light shadow-[0_0_12px_rgb(233_183_103/0.25)] lg:shrink-0 lg:self-center">
                        <BadgeCheck size={16} className="shrink-0 text-gold-light" aria-hidden="true" />
                        Instituciones reconocidas
                    </span>
                </div>
                {/* SUBSECTION - Certificaciones académicas de Coderhouse */}
                <div className="mb-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-gold-light">Certificaciones académicas</h3>
                    <p className="mb-4 text-sm text-muted">Coderhouse · Cursos y carrera aprobados.</p>
                    <CertificationsList />
                </div>
            </section>

            <hr className="section-divider" />

            {/* SECTION - Tecnologías principales */}
            <section aria-labelledby="tecnologias-principales" className="mx-auto w-full max-w-[1440px]">
                <header className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-outline bg-surface text-gold-light">
                        <Layers3 size={22} aria-hidden="true" />
                    </span>
                    <div>
                        <h2 id="tecnologias-principales" className="font-heading text-xl font-bold tracking-tight md:text-2xl">
                            Tecnologías principales
                        </h2>
                        <p className="mt-1 text-sm text-muted">Herramientas y lenguajes que utilizo en mis proyectos.</p>
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
                            <p className="text-sm leading-relaxed text-muted">{group.description}</p>
                            <ul className="mt-auto flex flex-wrap gap-2 pt-3" aria-label={`Tecnologías de ${group.title}`}>
                                {group.technologies.map((technology) => (
                                    <li key={technology} className="max-w-full break-words rounded border border-outline bg-background px-2 py-1 text-xs font-medium text-gold-light">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <hr className="section-divider" />

            <section aria-labelledby="llamado-accion" className="style-section w-full">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <span className="mb-2 block border-l-2 border-gold pl-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                            El próximo paso
                        </span>
                        <h2 id="llamado-accion" className="font-heading text-2xl md:text-3xl font-bold leading-tight tracking-tight pb-1">
                            ¿Trabajamos juntos?
                        </h2>

                        <p className="text-sm md:text-base font-normal leading-relaxed text-muted">
                            Ya sea para formar parte de un equipo o desarrollar una nueva idea, estoy abierto a conectar, intercambiar propuestas y explorar oportunidades de colaboración.
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
