import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="py-6 flex items-center justify-between border-b border-border/60">
      <a
        href="#home"
        className="font-mono text-sm font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
      >
        DRK
      </a>

      <nav className="flex items-center gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
