import { ChevronsDown } from "lucide-react";

interface ScrollPromptProps {
    href: string;
    text?: string;
}

export default function ScrollPrompt({
    href,
    text = "Deslizá para explorar",
}: ScrollPromptProps) {
    return (
        <div className="flex items-center justify-center gap-3">
            <ChevronsDown
                aria-hidden="true"
                className="size-9 shrink-0 text-subtle animate-scroll-down motion-reduce:animate-none"
            />

            <a
                href={href}
                className="text-subtle transition-colors duration-300 hover:text-gold-light focus-visible:text-gold-light"
            >
                <span className="text-sm font-medium tracking-[0.2em] uppercase">
                    {text}
                </span>
            </a>

            <ChevronsDown
                aria-hidden="true"
                className="size-9 shrink-0 text-subtle animate-scroll-down motion-reduce:animate-none"
            />
        </div>
    );
}