"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pause, Play } from "lucide-react";
import { technologies } from "../../data/technologies";

export default function TechnologiesMarquee() {
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useTranslation("common");

    return (
        <div className="flex flex-col gap-3">
            <div
                className="marquee overflow-hidden rounded-xl border border-outline bg-surface px-4 py-3"
                data-paused={isPaused}
            >
                {/* ITEM - Pista de desplazamiento continuo */}
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

                    {/* ITEM - Copia para continuidad de la marquesina */}
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
            <button
                type="button"
                onClick={() => setIsPaused((previous) => !previous)}
                className={`action-button w-full cursor-pointer motion-reduce:hidden md:w-auto md:self-end ${isPaused
                        ? "border-gold bg-gold text-background shadow-[0_4px_14px_rgba(233,183,103,0.25)]"
                        : "border-outline bg-surface text-foreground hover:border-gold hover:bg-gold/15 hover:text-gold-light hover:shadow-[0_4px_14px_rgba(233,183,103,0.25)]"
                    }`}
            >
                {isPaused ? (
                    <Play size={16} aria-hidden="true" />
                ) : (
                    <Pause size={16} aria-hidden="true" />
                )}
                {t(isPaused ? "home.resumeMarquee" : "home.pauseMarquee")}
            </button>
        </div>
    );
}
