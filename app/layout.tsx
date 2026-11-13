
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
export const metadata: Metadata = {
  title: "Agustín Lovagnini | Full Stack Developer",
  description: "Portfolio profesional de Agustín Lovagnini, desarrollador full stack",
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
