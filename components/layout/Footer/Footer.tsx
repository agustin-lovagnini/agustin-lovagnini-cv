"use client"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
    
    const { t } = useTranslation("common");

    return (
        <footer className="relative bg-surface px-8 py-4 text-subtle md:px-12">
            <span aria-hidden="true" className="edge-line top-0" />
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                {/* ITEM - Rol y ubicación */}
                <div className="text-center md:self-start md:text-left">
                    <p className="mt-1 hidden text-sm lg:text-lg font-normal leading-snug text-muted md:block select-none">
                        Full Stack Developer
                    </p>

                    <p className="hidden text-sm lg:text-lg font-normal leading-snug text-muted md:block select-none">
                        CABA, Argentina
                    </p>
                </div>

                {/* SUBSECTION - Redes profesionales y correo */}
                <nav
                    aria-label={t("footer.socialNavigation")}
                    className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm lg:text-base"
                >
                    <a
                        href="https://www.linkedin.com/in/agustinlovagnini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link hover:drop-shadow-[0_0_1px_#fff] transition-[filter] duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} aria-hidden="true" />
                    </a>
                    <a
                        href="https://github.com/agustin-lovagnini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link hover:drop-shadow-[0_0_1px_#fff] transition-[filter] duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} aria-hidden="true" />
                    </a>
                    <a
                        href="mailto:agustin.lovagnini.a@gmail.com"
                        className="footer-link hover:drop-shadow-[0_0_1px_#fff] transition-[filter] duration-300"
                        aria-label={t("footer.email")}
                    >
                        <FaEnvelope size={30} aria-hidden="true" />
                    </a>
                </nav>
            </div>

            {/* ITEM - Autoría del portfolio */}
            <p className="mt-2 text-center text-xs lg:text-sm font-normal leading-relaxed text-muted select-none md:text-sm">
                &copy; 2026 Agustín Lovagnini · {t("footer.professionalPortfolio")}
            </p>
        </footer>
    );
}
