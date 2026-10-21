import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Frontend & UI",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & Auth",
    skills: ["Node.js", "tRPC", "Better-Auth", "REST APIs", "Laravel"],
  },
  {
    category: "Database & ORM",
    skills: ["PostgreSQL", "Drizzle ORM", "Prisma ORM"],
  },
  {
    category: "DevOps & Infrastructure",
    skills: ["Linux VPS", "Git", "GitHub Actions", "Domain & DNS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          04 / Stack
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Technical Capabilities
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="p-4 rounded-lg border border-border/60 bg-card/40 space-y-3"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/60 bg-muted/40 font-normal text-foreground/90"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
