"use client";

import { useId, useState } from "react";
import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CertificationsList() {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandedContentId = useId();

    const academicCertifications = certifications.filter(
        (certification) => certification.institution === "Coderhouse"
    );

    const complementaryCertifications = certifications.filter(
        (certification) => certification.institution === "freeCodeCamp"
    );

    const initialCertifications = academicCertifications.slice(0, 4);
    const remainingCertifications = academicCertifications.slice(4);

    return (
        <div>
            {/* ITEM - primera vista, certificado coderhouse */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {initialCertifications.map((certification) => (
                    <CertificationCard
                        key={certification.id}
                        certification={certification}
                    />
                ))}
            </div>

            {/* SUBSECTION - Certificaciones adicionales desplegables */}
            {/* NOTE - El bloque permanece montado para animar también el cierre; inert desactiva sus enlaces al ocultarlo. */}
            <div
                id={expandedContentId}
                inert={!isExpanded}
                aria-hidden={!isExpanded}
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="pt-3">
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {remainingCertifications.map((certification) => (
                                <CertificationCard
                                    key={certification.id}
                                    certification={certification}
                                />
                            ))}
                        </div>

                        <div className="mt-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-gold-light">
                        Certificaciones complementarias
                    </h3>

                    <p className="mb-4 text-sm text-muted">
                        freeCodeCamp · Formación práctica y autodidacta.
                    </p>

                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {complementaryCertifications.map((certificationComplementary) => (
                            <CertificationCard
                                key={certificationComplementary.id}
                                certification={certificationComplementary}
                            />
                        ))}
                    </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={() => setIsExpanded((previous) => !previous)}
                aria-expanded={isExpanded}
                aria-controls={expandedContentId}
                className="mx-auto mt-5 flex cursor-pointer items-center gap-2 rounded-lg border border-gold px-4 py-2 text-gold-light focus-visible:outline-2 focus-visible:outline-gold"
            >
                {isExpanded ? "Ver menos" : "Ver más"}

                {isExpanded
                    ? <ChevronUp aria-hidden="true" size={18} />
                    : <ChevronDown aria-hidden="true" size={18} />}
            </button>
        </div>
    );
}
