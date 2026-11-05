export default function SobreMi() {
    return (
        <main className="w-full flex flex-col gap-8 px-4 py-8">
            <header className="flex flex-col items-center gap-4 text-center">
                <span className="eyebrow-badge  self-center">
                    <span aria-hidden="true" className="eyebrow-dot" />
                    Trayectoria y enfoque
                </span>

                <h1>
                    Sobre mí<span className="text-gold">.</span>
                </h1>

                <p className="max-w-3xl">
                    Desarrollador Full Stack orientado a crear aplicaciones web modernas,
                    funcionales y escalables. Combino el desarrollo de interfaces intuitivas
                    con soluciones backend, priorizando la experiencia de usuario,
                    la organización del código y el aprendizaje continuo.
                </p>

                <p className="text-muted">
                    Disponible para oportunidades laborales y proyectos freelance.
                </p>
            </header>

<hr className="h-px w-full border-0 bg-linear-to-r from-transparent via-subtle to-transparent" />
            {/* CONTENEDORES AMARILLO SECTION */}
            <section aria-labelledby="sobre-mi-descripcion">
                {/* CONTENEDORES VERDES */}
                <div>
                    <h2>Perfil profesional</h2>
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
