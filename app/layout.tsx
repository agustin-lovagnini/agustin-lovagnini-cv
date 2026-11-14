
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MobilePageNavigation from "../components/layout/MobilePageNavigation";


// ITEM - Fuentes compartidas
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// ITEM - Metadatos generales del portfolio
// ITEM - Metadatos generales del portfolio
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ?? "http://localhost:3000"
  ),

  title: {
    default: "Agustín Lovagnini | Full Stack Developer",
    template: "%s | Agustín Lovagnini",
  },

  description:
    "Portfolio de Agustín Lovagnini, desarrollador Full Stack. Conocé mis proyectos, tecnologías, formación y medios de contacto.",

  openGraph: {
    title: "Agustín Lovagnini | Full Stack Developer",
    description:
      "Conocé mis proyectos, tecnologías y experiencia en desarrollo web.",
    siteName: "Portfolio de Agustín Lovagnini",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/og/og-agustin-lovagnini.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio de Agustín Lovagnini, Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agustín Lovagnini | Full Stack Developer",
    description:
      "Conocé mis proyectos, tecnologías y experiencia en desarrollo web.",
    images: [
      {
        url: "/images/og/og-agustin-lovagnini.webp",
        alt: "Portfolio de Agustín Lovagnini, Full Stack Developer",
      },
    ],
  },
};

// ITEM - Estructura compartida de las páginas
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="min-h-dvh flex flex-col">
        <Header />
        {/* NOTE - Next.js coloca en children el contenido de la ruta actual. */}
        {children}
        <MobilePageNavigation />
        <Footer />
      </body>
    </html>
  );
}
