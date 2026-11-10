import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contacto() {
    return (
        <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 pt-8 pb-2 md:px-8 md:py-12">
            <header className="flex flex-col items-start gap-2 md:gap-6">
                <div className="flex flex-col items-start gap-2">
                    <span className="eyebrow-badge">
                        <span aria-hidden="true" className="eyebrow-dot" />
                        Contacto directo
                    </span>

                    <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                        ¿Tenés una idea o propuesta?
                        <span className="block text-gold">Hablemos.</span>
                    </h1>
                </div>

                <p className="max-w-3xl font-heading text-lg text-gold-light opacity-90 leading-snug md:text-xl">
                    Estoy abierto a oportunidades laborales como desarrollador Frontend o Full Stack, colaboraciones y proyectos freelance. Si querés conocer más sobre mi trabajo o tenés una propuesta, podés escribirme a través del formulario o mis canales de contacto.
                </p>
            </header>

            {/* SUBSECTION - Contenedor: una columna en móvil y dos en pantallas grandes */}
            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[3fr_2fr]">
                {/* SECTION - formulario*/}
                <section className="style-section" aria-labelledby="formulario-contacto">
                    <h2 id="formulario-contacto">Enviar mensaje directo</h2>
                    <form action="https://formspree.io/f/mnppeqkb"
                        method="POST" className="mt-5 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre">Nombre completo o empresa</label>

                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Tu nombre o empresa"
                                required
                                className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Correo electrónico</label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="tu@email.com"
                                required
                                className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"

                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="asunto">Asunto</label>

                            <select id="asunto" name="asunto" defaultValue="" required className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                                <option value="" disabled>
                                    Seleccioná un asunto
                                </option>
                                <option value="oportunidad-laboral" className="bg-surface text-gold-light">
                                    Oportunidad laboral
                                </option>
                                <option value="proyecto-freelance" className="bg-surface text-gold-light">
                                    Proyecto freelance
                                </option>
                                <option value="otra-consulta" className="bg-surface text-gold-light">
                                    Otra consulta
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mensaje">Mensaje</label>

                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows={6}
                                placeholder="Contame sobre tu propuesta o consulta..."
                                required
                                className="w-full resize-y rounded-lg border border-outline bg-background px-4 py-3 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            />
                        </div>
                        <button type="submit" className="action-button action-primary cursor-pointer">
                            Enviar mensaje
                        </button>
                    </form>

                </section>

                {/* SUBSECTION - Columna de tarjetas apiladas con separación */}
                <div className="flex flex-col gap-4">
                    {/* SECTION - disponibilidad actual*/}
                    <section className="style-section" aria-labelledby="disponibilidad-actual">
                        <h2
                            id="disponibilidad-actual"
                            className="text-xs font-semibold uppercase tracking-wide text-gold-light"
                        >
                            Disponibilidad actual
                        </h2>

                        <p className="mt-4 font-heading text-xl font-semibold">
                            Abierto a nuevas oportunidades
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            Busco oportunidades como desarrollador Frontend o Full Stack
                            Junior. También estoy disponible para conversar sobre proyectos
                            freelance.
                        </p>
                    </section>

                    {/* SECTION - Canales de contacto */}
                    <section className="style-section" aria-labelledby="canales-de-contacto">
                        <h2
                            id="canales-de-contacto"
                            className="text-xs font-semibold uppercase tracking-wide text-gold-light"
                        >
                            Canales directos
                        </h2>

                        <div className="mt-4 flex flex-col gap-3">
                            <a
                                href="mailto:agustin.lovagnini.a@gmail.com"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaEnvelope
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span className="min-w-0">
                                    <span className="block text-xs text-gold-light">
                                        Correo electrónico
                                    </span>
                                    <span className="block break-words text-sm">
                                        agustin.lovagnini.a@gmail.com
                                    </span>
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/agustinlovagnini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaLinkedin
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span>
                                    <span className="block text-xs text-gold-light">
                                        Perfil profesional
                                    </span>
                                    <span className="block text-sm">
                                        LinkedIn
                                    </span>
                                </span>
                            </a>

                            <a
                                href="https://github.com/agustin-lovagnini"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 rounded-lg border border-outline bg-background p-4 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                                <FaGithub
                                    size={22}
                                    aria-hidden="true"
                                    className="shrink-0 text-gold-light"
                                />
                                <span>
                                    <span className="block text-xs text-gold-light">
                                        Repositorios y código
                                    </span>
                                    <span className="block text-sm">
                                        GitHub
                                    </span>
                                </span>
                            </a>
                        </div>
                    </section>

                    {/* SECTION - garantia de trato*/}
                    <section className="style-section" aria-labelledby="garantia-del-contrato">
                        <h2
                            id="garantia-del-contrato"
                            className="text-xs font-semibold uppercase tracking-wide text-gold-light"
                        >
                            Mi forma de trabajar
                        </h2>

                        <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-muted">
                            <li>
                                Comunicación clara para entender tu propuesta y acordar
                                los próximos pasos.
                            </li>
                            <li>
                                Alcance y tiempos conversados antes de comenzar cada proyecto.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
