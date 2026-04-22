import { readFileSync } from "node:fs";
import YAML from "yaml";

const settings = YAML.parse(readFileSync("config/settings.yaml", "utf8"));
console.log(`[portfolio-summary] title: ${settings.site.title}`);
console.log(`[portfolio-summary] nav: ${settings.navigation.join(", ")}`);
