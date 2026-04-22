const navNameMap: Record<string, string> = {
  top: "About",
  timeline: "Timeline",
  projects: "Projects",
  publications: "Publications",
  skills: "Skills",
  awards: "Awards",
};

export function NavBar({ items }: { items: string[] }) {
  return (
    <nav className="topNav" aria-label="Main navigation">
      {items.map((item) => (
        <a key={item} href={`#${item}`}>
          {navNameMap[item] ?? item}
        </a>
      ))}
    </nav>
  );
}
