import Link from "next/link";

export default function Header() {
    return (
        <header>
            <p>Header</p>
            <nav aria-label="Navegación principal">
                <Link href="/">Inicio</Link>
            </nav>
        </header>
    );
}