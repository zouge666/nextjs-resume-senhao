export type TimelineKind = "work" | "study";

export interface LinkItem {
  label: string;
  href: string;
}

export interface HeroConfig {
  name: string;
  role: string;
  location: string;
  summary: string;
  links: LinkItem[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  kind: TimelineKind;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  href: string;
  period: string;
  stack: string[];
  bullets: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  doi: string;
  note: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface AwardItem {
  name: string;
  result: string;
}

export interface PortfolioConfig {
  hero: HeroConfig;
  timeline: TimelineItem[];
  projects: ProjectItem[];
  publications: PublicationItem[];
  skills: SkillGroup[];
  awards: AwardItem[];
}

export interface SiteSettings {
  site: {
    title: string;
    description: string;
    locale: string;
    heroAvatar: string;
  };
  navigation: string[];
  socialFallback: string;
}

export interface PortfolioViewModel {
  settings: SiteSettings;
  portfolio: PortfolioConfig;
}
