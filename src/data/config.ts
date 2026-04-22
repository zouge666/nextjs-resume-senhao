import type { PortfolioConfig } from "@/contracts/portfolio";

export const portfolioConfig: PortfolioConfig = {
  hero: {
    name: "Alex Placeholder",
    role: "Full Stack Engineer",
    location: "Copenhagen, Denmark",
    summary:
      "Template profile content. Replace this text with your own summary in one place.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/example" },
      { label: "GitHub", href: "https://github.com/example" },
      { label: "Website", href: "https://example.com" }
    ]
  },
  timeline: [
    {
      period: "2025 - Present",
      title: "Student Software Developer",
      organization: "Sample Tech Company",
      location: "Copenhagen, Denmark",
      kind: "work",
      bullets: [
        "Built CI/CD workflows for internal tooling.",
        "Maintained full-stack modules with reliability guardrails."
      ]
    },
    {
      period: "2024 - 2026",
      title: "M.Sc. Computer Science",
      organization: "Example University",
      location: "Denmark",
      kind: "study",
      bullets: ["Focus: distributed systems, AI engineering, security."]
    }
  ],
  projects: [
    {
      name: "AI Job Search Platform",
      href: "https://example.com/project-1",
      period: "2024 - Present",
      stack: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      bullets: [
        "Shipped reusable UI blocks for profile and application flows.",
        "Improved development speed by introducing component templates."
      ]
    },
    {
      name: "Sports Match Prediction",
      href: "https://example.com/project-2",
      period: "2025",
      stack: ["Python", "Scikit-Learn", "Pandas"],
      bullets: [
        "Engineered prediction features from multi-source datasets.",
        "Published a data-story dashboard with interactive charts."
      ]
    }
  ],
  publications: [
    {
      title: "Metamorphic Testing for NLP Systems",
      venue: "Algorithms 2023",
      doi: "10.1000/example-doi-1",
      note: "Co-author on evaluation methods for relation extraction models."
    },
    {
      title: "Feature Selection for Performance Prediction",
      venue: "Sensors 2022",
      doi: "10.1000/example-doi-2",
      note: "Co-author on feature selection methods."
    }
  ],
  skills: [
    { category: "AI", skills: ["Python", "PyTorch", "TensorFlow", "MLOps"] },
    {
      category: "Full Stack",
      skills: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"]
    }
  ],
  awards: [
    { name: "Innovation Challenge", result: "First Prize · 2025" },
    { name: "Merit Scholarship", result: "Top 5%" }
  ]
};
