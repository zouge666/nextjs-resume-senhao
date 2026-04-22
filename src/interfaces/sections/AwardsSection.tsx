import type { AwardItem } from "@/contracts/portfolio";

export function AwardsSection({ awards }: { awards: AwardItem[] }) {
  return (
    <section id="awards" className="card">
      <h2>Awards</h2>
      {awards.map((award) => (
        <article key={award.name} className="item itemHead">
          <strong>{award.name}</strong>
          <span className="muted">{award.result}</span>
        </article>
      ))}
    </section>
  );
}
