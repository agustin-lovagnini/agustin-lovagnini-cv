import { technologies } from "../../data/technologies";

export default function TechnologiesMarquee() {
    return (
        <div className="marquee overflow-hidden rounded-xl border border-outline bg-background p-4">
            {/* SUBSECTION - Pista de desplazamiento continuo */}
            <div className="marquee-track flex w-max">
                {/* SUBSECTION - Lista principal de tecnologías */}
                <ul className="flex w-max shrink-0 gap-4 pr-4">
                    {technologies.map((technology) => (
                        <li key={technology.id} className="flex flex-col items-center gap-2 shrink-0 whitespace-nowrap rounded-lg border border-outline bg-surface px-4 py-3">
                            {technology.icon && (
                                <technology.icon
                                    aria-hidden="true"
                                    className="size-10 text-gold"
                                />
                            )}
                            <span>{technology.name}</span>
                        </li>
                    ))}
                </ul>

                {/* SUBSECTION - Copia para continuidad de la marquesina */}
                {/* NOTE - La copia tiene el mismo ancho y se oculta a lectores de pantalla para no repetir los nombres. */}
                <ul aria-hidden="true" className="flex w-max shrink-0 gap-4 pr-4">
                    {technologies.map((technology) => (
                        <li key={technology.id} className="flex flex-col items-center gap-2 shrink-0 whitespace-nowrap rounded-lg border border-outline bg-surface px-4 py-3">
                            {technology.icon && (
                                <technology.icon
                                    aria-hidden="true"
                                    className="size-10 text-gold"
                                />
                            )}
                            <span>{technology.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
