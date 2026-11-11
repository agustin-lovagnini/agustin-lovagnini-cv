import type { Certification } from "../data/certifications";
import { ArrowRight, ShieldCheck } from "lucide-react";


interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification, }: CertificationCardProps) {
    return (
        <article className="flex h-full min-w-0 flex-col gap-3 style-section p-4 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-gold font-bold uppercase text-xs">
                    {certification.institution}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 text-xs font-medium text-gold-light select-none">
                    <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
                    {certification.status}
                </span>
            </div>
            <h4 className="font-bold text-lg leading-snug break-words">
                {certification.title}
            </h4>

            <p className="text-sm leading-relaxed text-muted">
                {certification.description}
            </p>

            <div className="mt-auto flex justify-center pt-2">
                <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button action-primary whitespace-normal text-center"
                >
                    Ver certificado
                    <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                </a>

            </div>
        </article>
    );
}
