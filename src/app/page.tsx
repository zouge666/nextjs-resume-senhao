import { buildPortfolioModel } from "@/application/buildPortfolioModel";
import { NavBar } from "@/interfaces/NavBar";
import { HeroSection } from "@/interfaces/sections/HeroSection";
import { TimelineSection } from "@/interfaces/sections/TimelineSection";
import { ProjectsSection } from "@/interfaces/sections/ProjectsSection";
import { PublicationsSection } from "@/interfaces/sections/PublicationsSection";
import { SkillsSection } from "@/interfaces/sections/SkillsSection";
import { AwardsSection } from "@/interfaces/sections/AwardsSection";

export default async function Home() {
  const model = await buildPortfolioModel();

  return (
    <>
      <NavBar items={model.settings.navigation} />
      <main className="pageLayout">
        <HeroSection hero={model.portfolio.hero} avatar={model.settings.site.heroAvatar} />
        <TimelineSection items={model.portfolio.timeline} />
        <ProjectsSection projects={model.portfolio.projects} />
        <PublicationsSection publications={model.portfolio.publications} />
        <SkillsSection groups={model.portfolio.skills} />
        <AwardsSection awards={model.portfolio.awards} />
      </main>
    </>
  );
}
