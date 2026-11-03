import { technologies } from "../data/technologies";

export default function TechnologiesMarquee() {
    return (
        <ul>
            {technologies.map((technology) => (
                <li key={technology.id}>{technology.name}</li>
            ))}
        </ul>
    );
}