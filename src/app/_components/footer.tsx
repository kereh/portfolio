import { Github, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/kereh",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:dianronaldokereh@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-border/60">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Dian Ronaldo Kereh</p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
