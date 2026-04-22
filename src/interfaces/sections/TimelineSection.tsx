import type { TimelineItem } from "@/contracts/portfolio";

export function TimelineSection({ items }: { items: TimelineItem[] }) {
  return (
    <section id="timeline" className="card">
      <h2>Timeline</h2>
      <div className="stack">
        {items.map((item) => (
          <article key={`${item.period}-${item.title}`} className="item">
            <div className="itemHead">
              <strong>{item.title}</strong>
              <span className="badge">{item.kind}</span>
            </div>
            <p className="muted">{item.period} · {item.organization} · {item.location}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
