import { technologies } from "../data/technologies";

export default function TechnologiesMarquee() {
    return (
        <div className="marquee overflow-hidden rounded-xl border border-outline bg-background p-4">
            <div className="marquee-track flex w-max">
                <ul className="flex w-max shrink-0 gap-4 pr-4">
                    {technologies.map((technology) => (
                        <li key={technology.id} className="shrink-0 whitespace-nowrap rounded-lg border border-outline bg-surface px-4 py-3">
                            {technology.name}
                        </li>
                    ))}
                </ul>

                <ul aria-hidden="true" className="flex w-max shrink-0 gap-4 pr-4">
                    {technologies.map((technology) => (
                        <li key={technology.id} className="shrink-0 whitespace-nowrap rounded-lg border border-outline bg-surface px-4 py-3">
                            {technology.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
