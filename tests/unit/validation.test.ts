import { describe, expect, it } from "vitest";
import { validatePortfolioConfig } from "@/core/validatePortfolio";
import { portfolioConfig } from "@/data/config";

describe("validatePortfolioConfig", () => {
  it("returns empty array for valid config", () => {
    expect(validatePortfolioConfig(portfolioConfig)).toEqual([]);
  });

  it("reports required field errors", () => {
    const broken = {
      ...portfolioConfig,
      hero: { ...portfolioConfig.hero, name: "", summary: "" },
      timeline: [],
    };

    expect(validatePortfolioConfig(broken)).toEqual([
      "hero.name is required",
      "hero.summary is required",
      "timeline requires at least one item",
    ]);
  });
});
