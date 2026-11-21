"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, CircleX, Share2, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

export default function ShareButton() {


    const { t } = useTranslation("common");

    // El resto del código continúa acá
    // ITEM - Estado del aviso
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 16, width: 352 });

    // ITEM - Posición del aviso y preparación del intento
    const handleShare = async (event: MouseEvent<HTMLButtonElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = Math.min(384, window.innerWidth - 32);
        setPosition({
            top: Math.max(16, Math.min(rect.bottom + 12, window.innerHeight - 220)),
            left: Math.max(16, Math.min(rect.right - width, window.innerWidth - width - 16)),
            width,
        });
        setMessage("");
        setIsError(false);

        // ITEM - Copiar el enlace si compartir no está disponible
        if (!navigator.share) {
            try {
                await navigator.clipboard.writeText(window.location.origin);
                setMessage(t("share.copiedMessage"));
            } catch (error) {
                setIsError(true);
                console.error("No se pudo copiar el enlace:", error);
                setMessage(t("share.copyError"));
            }

            return;
        }

        // ITEM - Compartir mediante el panel del dispositivo
        try {
            await navigator.share({
                title: "Agustín Lovagnini | Portfolio",
                text: t("share.shareText"),
                url: window.location.origin,
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "AbortError") {
                return;
            }

            console.error("No se pudo compartir:", error);
            setIsError(true);
            setMessage(t("share.shareError"));
        }
    };

    return (
        <>
            {/* ITEM - Botón de compartir */}
            <button
                type="button"
                aria-label={t("share.button")}
                onClick={handleShare}
                className="flex items-center gap-2 cursor-pointer"
            >
                <Share2 className="size-7 md:size-5" color="#3e9392" />
            </button>
            {/* SUBSECTION - Aviso de resultado */}
            {/* NOTE - El portal evita que el filtro del Header altere la posición del aviso. */}
            {message && createPortal(
                <div
                    className={`fixed z-100 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl border-2 bg-surface p-5 text-foreground shadow-2xl ${isError ? "border-red-400" : "border-gold"}`}
                    style={position}
                >
                    <div className="flex items-start gap-3">
                        {isError
                            ? <CircleX aria-hidden="true" className="size-8 shrink-0 text-red-400" />
                            : <CheckCircle2 aria-hidden="true" className="size-8 shrink-0 text-gold" />}
                        <div role={isError ? "alert" : "status"} aria-atomic="true" className="min-w-0 flex-1 break-words">
                            <p className="mb-2 text-lg font-semibold">{isError ? t("share.errorTitle") : t("share.copiedTitle")}</p>
                            <p className="text-base leading-relaxed text-muted">{message}</p>
                        </div>
                        <button
                            type="button"
                            aria-label={t("share.closeNotice")}
                            onClick={() => setMessage("")}
                            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded text-foreground hover:bg-outline focus-visible:outline-2 focus-visible:outline-gold"
                        >
                            <X aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </div>,
                document.body,
            )}
        </>
    );
}
