import type { SkillGroup } from "@/contracts/portfolio";

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="skills" className="card">
      <h2>Skills</h2>
      {groups.map((group) => (
        <article key={group.category} className="item">
          <p className="muted"><strong>{group.category}</strong></p>
          <div className="tags">
            {group.skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
