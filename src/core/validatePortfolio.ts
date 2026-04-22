import type { PortfolioConfig } from "@/contracts/portfolio";

export function validatePortfolioConfig(config: PortfolioConfig): string[] {
  const errors: string[] = [];

  if (!config.hero.name.trim()) {
    errors.push("hero.name is required");
  }
  if (!config.hero.summary.trim()) {
    errors.push("hero.summary is required");
  }
  if (config.timeline.length === 0) {
    errors.push("timeline requires at least one item");
  }

  config.projects.forEach((project, index) => {
    if (!project.name.trim()) {
      errors.push(`projects[${index}].name is required`);
    }
  });

  return errors;
}
