import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "@/interfaces/sections/HeroSection";
import { TimelineSection } from "@/interfaces/sections/TimelineSection";
import { portfolioConfig } from "@/data/config";

describe("sections", () => {
  it("renders About section with top anchor", () => {
    render(<HeroSection hero={portfolioConfig.hero} avatar="/avatar-placeholder.svg" />);

    const heading = screen.getByRole("heading", { name: "Alex Placeholder" });
    expect(heading.closest("header")).toHaveAttribute("id", "top");
  });

  it("renders Timeline section with timeline anchor", () => {
    render(<TimelineSection items={portfolioConfig.timeline} />);

    const timelineHeading = screen.getByRole("heading", { name: "Timeline" });
    expect(timelineHeading.closest("section")).toHaveAttribute("id", "timeline");
  });
});
