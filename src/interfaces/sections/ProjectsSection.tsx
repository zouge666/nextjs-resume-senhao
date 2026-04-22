import type { ProjectItem } from "@/contracts/portfolio";

export function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.name} className="item">
          <div className="itemHead">
            <a href={project.href} target="_blank" rel="noreferrer">{project.name}</a>
            <span className="muted">{project.period}</span>
          </div>
          <div className="tags">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
