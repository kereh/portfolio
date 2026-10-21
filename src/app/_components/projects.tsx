import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "e-Kinerja (Employee Performance System)",
    client: "KPU Kota Tomohon · Government",
    description:
      "Production web platform for civil service evaluation, real-time employee attendance tracking, and automated performance allowance (Tukin) calculations with audit-ready reporting.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better-Auth"],
    highlights: [
      "Performance evaluation engine",
      "Online attendance logging",
      "Automated allowance calculation",
      "Monthly & annual report export",
    ],
    externalLink: "https://ekinerja.e-office.site",
    githubLink: null,
  },
  {
    title: "School Profile & Portal",
    client: "SMK Dharma Bhakti Tomohon · Education",
    description:
      "Institutional web application providing accessible program directories, student registration guidelines, and administrative announcements for school community members.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Responsive accessibility",
      "Structured curriculum directory",
      "SEO & metadata optimization",
      "Lightweight fast delivery",
    ],
    externalLink: null,
    githubLink: "https://github.com/kereh",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          03 / Projects
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Selected Work
        </h2>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group p-5 sm:p-6 rounded-lg border border-border/70 bg-card/40 hover:border-foreground/30 transition-colors space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {project.client}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {project.externalLink && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 px-2.5 font-mono text-xs"
                  >
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="size-3.5 mr-1.5" />
                      Live Site
                      <ArrowUpRight className="size-3 ml-1 opacity-70" />
                    </a>
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 px-2.5 font-mono text-xs"
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-3.5 mr-1.5" />
                      Code
                      <ArrowUpRight className="size-3 ml-1 opacity-70" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-foreground/40 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/60 bg-muted/40 font-normal"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
