import Image from "next/image";
import type { HeroConfig } from "@/contracts/portfolio";

export function HeroSection({ hero, avatar }: { hero: HeroConfig; avatar: string }) {
  return (
    <header id="top" className="card heroSection">
      <Image
        src={avatar}
        alt="Profile placeholder"
        className="heroAvatar"
        width={112}
        height={112}
      />
      <div>
        <h1>{hero.name}</h1>
        <p className="muted">{hero.role} · {hero.location}</p>
        <p>{hero.summary}</p>
        <div className="linksRow">
          {hero.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
