"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {

    const handleShare = async () => {

        if (!navigator.share) {
            try {
                await navigator.clipboard.writeText(window.location.origin);
                alert("Enlace copiado. Ya podés pegarlo y compartirlo.");
            } catch (error) {
                console.error("No se pudo copiar el enlace:", error);
                alert("No se pudo copiar. Podés copiar la dirección del navegador.");
            }

            return;
        }

        try {
            await navigator.share({
                title: "Agustín Lovagnini | Portfolio",
                text: "Conocé mi portfolio profesional.",
                url: window.location.origin,
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                return;
            }

            console.error("No se pudo compartir:", error);
        }
    };

    return (
        <button
            type="button"
            aria-label="Compartir portfolio"
            onClick={handleShare}
            className="flex items-center gap-2 cursor-pointer"
        >
            <Share2 size={20} color="#3e9392" />
        </button>
    );
}