import { ChevronsDown } from "lucide-react";

export default function SobreMi() {
    return (
        <main className="w-full flex flex-col gap-8 px-4 py-8">
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

            {/* CONTENEDORES AMARILLO SECTION */}
            <section id="sobre-mi" aria-labelledby="sobre-mi-descripcion">
                {/* CONTENEDORES VERDES */}
                <div>
                    <h2 id="sobre-mi-descripcion">Perfil profesional</h2>
                    <p>Especializado en desarrollo web...</p>

                    <blockquote>
                        Creo en la combinación de interfaces...
                    </blockquote>

                    <p>Basado en Argentina...</p>

                    <div>
                        {/* Ubicación, idiomas y modalidad */}
                    </div>
                </div>

                {/* CONTENEDORES AZULES */}
                <div>
                    {/* AZUL 1: Tarjeta personal */}
                    <div></div>
                    {/* AZUL 2: Tarjeta personal */}
                    <div></div>
                </div>
            </section>
            <section aria-labelledby="formacion-y-certificaciones" className="w-full"></section>
            <section aria-labelledby="tecnologias-principales" className="w-full"></section>
            <section aria-labelledby="competencias-y-habilidades-profecionales" className="w-full"></section>
        </main>
    );
}
