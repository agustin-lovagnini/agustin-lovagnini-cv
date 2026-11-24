import type { Certification } from "../../data/certifications";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CertificationCardProps {
    certification: Certification;
}

export default function CertificationCard({ certification, }: CertificationCardProps) {
    const { t } = useTranslation("common");

    const status = t(`certifications.${certification.id}.status`, {
        defaultValue: certification.status,
    });

    const title = t(`certifications.${certification.id}.title`, {
        defaultValue: certification.title,
    });

    const description = t(`certifications.${certification.id}.description`, {
        defaultValue: certification.description,
    });

    return (
        <article className="flex h-full min-w-0 flex-col gap-3 style-section p-4 rounded-xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-gold font-bold uppercase text-xs lg:text-sm">
                    {certification.institution}
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-2 py-0.5 text-xs lg:text-sm font-medium text-gold-light select-none">
                    <ShieldCheck size={14} className="shrink-0" aria-hidden="true" />
                    {status}
                </span>
            </div>
            <h4 className="font-bold text-lg leading-snug break-words">
                {title}
            </h4>

            <p className="text-sm lg:text-lg leading-relaxed text-muted">
                {description}
            </p>

            <div className="mt-auto flex justify-center pt-2">
                <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button action-primary whitespace-normal text-center"
                    aria-label={t("certifications.viewCertificateLabel", { title })}
                >
                    {t("certifications.viewCertificate")}
                    <ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                </a>

            </div>
        </article>
    );
}
