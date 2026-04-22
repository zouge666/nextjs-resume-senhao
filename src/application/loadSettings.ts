import { readFile } from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";

import type { SiteSettings } from "@/contracts/portfolio";
import { warnEvent } from "@/core/logger";

const fallbackSettings: SiteSettings = {
  site: {
    title: "Portfolio Starter",
    description: "Config-driven Next.js portfolio template",
    locale: "en-US",
    heroAvatar: "/avatar-placeholder.svg",
  },
  navigation: ["top", "timeline", "projects", "publications", "skills", "awards"],
  socialFallback: "#",
};

export async function loadSettings(): Promise<SiteSettings> {
  const settingsPath = path.join(process.cwd(), "config", "settings.yaml");

  try {
    const source = await readFile(settingsPath, "utf8");
    const parsed = YAML.parse(source) as SiteSettings;

    if (!parsed?.site?.title || !parsed.navigation?.length) {
      warnEvent("settings", "Invalid config/settings.yaml, fallback to defaults");
      return fallbackSettings;
    }

    return parsed;
  } catch {
    warnEvent("settings", "Unable to read config/settings.yaml, fallback to defaults");
    return fallbackSettings;
  }
}
