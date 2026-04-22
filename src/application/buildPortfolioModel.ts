import type { PortfolioViewModel } from "@/contracts/portfolio";
import { portfolioConfig } from "@/data/config";
import { validatePortfolioConfig } from "@/core/validatePortfolio";
import { warnEvent } from "@/core/logger";
import { toSafeExternalLink } from "@/integrations/safeLink";
import { loadSettings } from "@/application/loadSettings";

export async function buildPortfolioModel(): Promise<PortfolioViewModel> {
  const settings = await loadSettings();
  const validationErrors = validatePortfolioConfig(portfolioConfig);

  if (validationErrors.length > 0) {
    warnEvent("portfolio", `Validation errors: ${validationErrors.join(", ")}`);
  }

  return {
    settings,
    portfolio: {
      ...portfolioConfig,
      hero: {
        ...portfolioConfig.hero,
        links: portfolioConfig.hero.links.map((link) => ({
          ...link,
          href: toSafeExternalLink(link.href, settings.socialFallback),
        })),
      },
      projects: portfolioConfig.projects.map((project) => ({
        ...project,
        href: toSafeExternalLink(project.href, settings.socialFallback),
      })),
    },
  };
}
