import type { Certification } from "../data/certifications";
import { ArrowRight, ShieldCheck } from "lucide-react";


interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification, }: CertificationCardProps) {
    return (
        <article className="flex flex-col gap-3 style-section p-4 rounded-2xl">
            <div className="flex items-center justify-between gap-2 pr-3 mb-2">
                <span className="text-gold font-bold uppercase text-sm">
                    {certification.institution}
                </span>

                <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold-light select-none">
                    {certification.status}
                </span>
            </div>
            <h3 className="font-bold text-2xl">
                {certification.title}
            </h3>

            <p className="text-muted">
                {certification.description}
            </p>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button action-primary"
                >
                    Ver certificado
                    <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-2">
                    <span className="text-gold-light text-sm underline underline-offset-4 select-none">
                        Certificado Oficial
                    </span>

                    <ShieldCheck
                        size={30}
                        strokeWidth={2}
                        className="shrink-0 text-gold-light"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </article>
    );
}