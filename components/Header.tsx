import Link from "next/link";

export default function Header() {
    return (
        <header>
            <p>Header</p>
            <nav aria-label="Navegación principal">
                <Link href="/">Inicio</Link>
                <Link href="/sobre-mi">Sobre Mí</Link>
                <Link href="/proyectos">Proyectos</Link>
                <Link href="/contacto">Contacto</Link>
            </nav>
        </header>
    );
}