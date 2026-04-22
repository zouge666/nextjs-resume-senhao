import { describe, expect, it } from "vitest";

import { buildPortfolioModel } from "@/application/buildPortfolioModel";

describe("buildPortfolioModel", () => {
  it("loads settings and keeps safe links", async () => {
    const model = await buildPortfolioModel();

    expect(model.settings.site.title).toBeTruthy();
    expect(model.portfolio.hero.links.length).toBeGreaterThan(0);
    for (const link of model.portfolio.hero.links) {
      expect(["http", "https"]).toContain(new URL(link.href).protocol.replace(":", ""));
    }
  });
});
