import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-surface px-8 py-4 text-subtle md:px-12">
            <span aria-hidden="true" className="edge-line top-0" />
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                <div className="text-center md:self-start md:text-left">
                    <p className="font-heading text-base font-medium leading-tight text-foreground md:text-lg select-none">
                        Agustín Lovagnini
                    </p>
                    <p className="mt-1 hidden text-xs leading-snug md:block select-none">Developer Full Stack</p>
                    <p className="hidden text-xs leading-snug md:block select-none">CABA, Argentina</p>
                </div>

                <nav aria-label="Redes y contacto" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
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
                        href="mailto:agustin.lovagnini.v@gmail.com"
                        className="footer-link hover:drop-shadow-[0_0_1px_#fff] transition-[filter] duration-300"
                        aria-label="Correo electrónico"
                    >
                        <FaEnvelope size={30} aria-hidden="true" />
                    </a>
                </nav>
            </div>

            <p className="mt-2 text-center text-xs leading-relaxed select-none">
                &copy; 2026 Agustín Lovagnini · Portfolio profesional
            </p>
        </footer>
    );
}
