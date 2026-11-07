import {
    ChevronsDown,
    BriefcaseBusiness,
    Languages,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Award,
    BadgeCheck
} from "lucide-react";
import CertificationCard from "../../components/CertificationCard";
import { certifications } from "../../data/certifications";


export default function SobreMi() {
    return (
        <main className="w-full flex flex-col gap-8 px-4 py-8">
            {/* SECTION - Introducción de Sobre mí */}
            <header className="flex flex-col items-center gap-2 text-center">
                <span className="eyebrow-badge mb-5 self-center">
                    <span aria-hidden="true" className="eyebrow-dot" />
                    Trayectoria y enfoque
                </span>

                <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                    Sobre mí<span className="text-gold-light">.</span>
                </h1>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    Desarrollador Full Stack orientado a crear aplicaciones web modernas,
                    funcionales y escalables. Combino el desarrollo de interfaces intuitivas
                    con soluciones backend, priorizando la experiencia de usuario,
                    la organización del código y el aprendizaje continuo.
                </p>

                <p className="text-muted mt-5">
                    Disponible para oportunidades laborales y proyectos freelance.
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
                    <div className="flex flex-1 flex-col gap-6 p-5">
                        <div className="flex flex-col gap-4">
                            <h2 id="sobre-mi-descripcion" className="text-gold font-medium uppercase underline underline-offset-4 text-lg">Perfil profesional
                            </h2>
                            <p className="leading-relaxed tracking-wide">Soy desarrollador web <span className="font-bold text-gold-light">Full Stack</span>, formado en tecnologías Frontend y Backend. A lo largo de mi formación desarrollé aplicaciones con React, JavaScript, Node.js y Express, integrando autenticación, APIs REST y bases de datos relacionales y no relacionales.

                                Me interesa especialmente el desarrollo Frontend, la creación de interfaces accesibles y responsivas, y la construcción de aplicaciones que combinen una buena experiencia de usuario con una arquitectura sólida.</p>
                        </div>

                        <blockquote className="my-1 border-l-2 border-gold-light pl-4 italic text-muted bg-background rounded-r-lg py-4">
                            &quot;Creo que una buena aplicación no solo debe funcionar correctamente: también debe ser intuitiva, accesible y estar construida para evolucionar&quot;.
                        </blockquote>

                        <p className="leading-relaxed tracking-wide">Resido en la Ciudad Autónoma de Buenos Aires, Argentina. Me interesa formar parte de equipos donde pueda aportar mis conocimientos, seguir aprendiendo y participar en el desarrollo de productos digitales reales.</p>
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
                        <p className="text-muted text-sm">Desarrollador orientado a crear experiencias web modernas, combinando interfaces funcionales con soluciones backend. En constante aprendizaje y evolución profesional.</p>

                        <dl className="mt-3 grid w-full max-w-xs grid-cols-2 gap-3 rounded-lg bg-outline p-3 text-sm">
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs tracking-widest text-gold-light opacity-80">Compromiso</dt>
                                <dd className="order-1 w-full text-4xl">100%</dd>
                            </div>
                            <div className="flex min-w-0 flex-col text-center">
                                <dt className="order-2 w-full text-xs tracking-widest text-gold-light opacity-80">Certificaciones</dt>
                                <dd className="order-1 w-full text-4xl text-gold-dark">6+</dd>
                            </div>
                        </dl>
                    </div>

                    {/*ITEM - TARJETA PERSONAL 2*/}
                    <div className="flex flex-col gap-1 text-center style-section p-4">
                        <div>
                            {/* Acá irá el icono decorativo */}
                            <h3 className="font-bold text-lg">Mi enfoque de desarrollo:</h3>
                        </div>

                        <p className="text-muted text-sm">Me enfoco en escribir código claro, reutilizable y mantenible. Busco comprender cómo funciona cada tecnología, aplicar buenas prácticas y construir soluciones que puedan evolucionar con el tiempo.</p>

                        <p className="text-gold text-sm font-medium mt-3">Código limpio · Accesibilidad · Aprendizaje continuo</p>
                    </div>
                </div>
            </section>

            {/* SECTION - Formación y certificaciones */}
            <section aria-labelledby="formacion-y-certificaciones" className="w-full style-section">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                    <div className="flex items-start gap-3 md:items-center">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-surface text-gold-light">
                            <Award size={24} aria-hidden="true" />
                        </span>
                        <div>
                            <h2 id="formacion-y-certificaciones" className="font-heading text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                                Formación y Certificaciones
                            </h2>
                            <p className="mt-0.5 text-sm leading-relaxed text-muted">
                                Trayecto académico y profesional en desarrollo de software.
                            </p>
                        </div>
                    </div>

                    <span className="inline-flex self-start items-center gap-2 rounded-full border border-gold bg-surface px-3 py-1.5 text-sm font-medium text-gold-light shadow-[0_0_12px_rgb(233_183_103/0.25)] md:shrink-0 md:self-center">
                        <BadgeCheck size={16} className="shrink-0 text-gold-light" aria-hidden="true" />
                        Instituciones reconocidas
                    </span>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certificadoActual) => (
                        <CertificationCard
                            key={certificadoActual.id}
                            certification={certificadoActual}
                        />
                    ))}
                </div>

            </section>

            {/* SECTION - Tecnologías principales */}
            <section aria-labelledby="tecnologias-principales" className="w-full"></section>

            {/* SECTION - Competencias y habilidades profesionales */}
            <section aria-labelledby="competencias-y-habiliades-profecionales" className="w-full"></section>
        </main>
    );
}
