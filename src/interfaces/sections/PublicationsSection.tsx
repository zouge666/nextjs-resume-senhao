import type { PublicationItem } from "@/contracts/portfolio";

export function PublicationsSection({ publications }: { publications: PublicationItem[] }) {
  return (
    <section id="publications" className="card">
      <h2>Publications</h2>
      {publications.map((publication) => (
        <article key={publication.title} className="item">
          <div className="itemHead">
            <strong>{publication.title}</strong>
            <span className="muted">{publication.venue}</span>
          </div>
          <p className="muted">DOI: {publication.doi}</p>
          <p>{publication.note}</p>
        </article>
      ))}
    </section>
  );
}
