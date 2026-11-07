import type { Certification } from "../data/certifications";
import { ArrowRight, ShieldCheck } from "lucide-react";


interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification, }: CertificationCardProps) {
    return (
        <article className="flex min-w-0 flex-col gap-3 style-section p-4 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-gold font-bold uppercase text-xs">
                    {certification.institution}
                </span>

                <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold-light select-none">
                    {certification.status}
                </span>
            </div>
            <h4 className="font-bold text-lg leading-snug break-words">
                {certification.title}
            </h4>

            <p className="text-sm leading-relaxed text-muted">
                {certification.description}
            </p>

            <div className="mt-auto flex flex-col items-center justify-center gap-3 pt-2 text-center lg:flex-row lg:flex-wrap">
                <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button action-primary whitespace-normal text-center"
                >
                    Ver certificado
                    <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                </a>

                <div className="flex items-center gap-1.5">
                    <span className="text-gold-light text-xs underline underline-offset-4 select-none">
                        Certificado Oficial
                    </span>

                    <ShieldCheck
                        size={20}
                        strokeWidth={2}
                        className="shrink-0 text-gold-light"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </article>
    );
}
