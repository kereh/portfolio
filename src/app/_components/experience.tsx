import { Badge } from "@/components/ui/badge";

const workExperience = [
  {
    title: "Web Developer Intern",
    company: "KPU Kota Tomohon",
    location: "Sulawesi Utara",
    period: "Oct 2025 – Dec 2025",
    description: [
      "Engineered full employee performance platform (e-Kinerja) covering evaluation metrics, online attendance logging, and automated performance allowance (Tukin) calculation.",
      "Designed and implemented monthly and annual report generation for civil service evaluation.",
      "Maintained data integrity, auditability, and role-based permissions across personnel records.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better-Auth"],
  },
  {
    title: "Part-Time Developer",
    company: "SMK Dharma Bhakti Tomohon",
    location: "Sulawesi Utara",
    period: "Apr 2025 – Jun 2025",
    description: [
      "Developed responsive institutional website to streamline communication with prospective students and parents.",
      "Worked directly with school administration to organize curriculum, announcements, and program directories.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const education = [
  {
    degree: "Bachelor's Degree (S-1) in Informatics",
    school: "Universitas Sariputra Indonesia Tomohon",
    period: "Graduated 2026",
    status: "Completed",
  },
  {
    degree: "Vocational High School – Computer & Network Engineering",
    school: "SMKS Kristen 2 Tomohon",
    period: "Graduated 2022",
    status: "Completed",
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          02 / Experience
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Work & Education
        </h2>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60 pb-2">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {workExperience.map((job) => (
              <div key={job.company} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <h4 className="text-base font-semibold text-foreground">
                      {job.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                  {job.description.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1 select-none">
                        ›
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/60 bg-muted/40 font-normal"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-border/60 pb-2">
            Education
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="p-4 rounded-lg border border-border/60 bg-card/40 space-y-2"
              >
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground pt-1">
                  <span>{edu.period}</span>
                  <span className="px-1.5 py-0.5 rounded bg-muted/60 text-foreground/80">
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
