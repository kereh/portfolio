// biome-ignore-all lint/suspicious/noArrayIndexKey: ayolah biome key doank

import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Web Development",
    color: "from-purple-500 to-pink-500",
    skills: ["Next.js", "TypeScript", "tRPC", "Better-Auth"],
  },
  {
    category: "Database & ORM",
    color: "from-blue-500 to-cyan-500",
    skills: ["PostgreSQL", "Drizzle ORM", "Prisma ORM"],
  },
  {
    category: "DevOps & CI/CD",
    color: "from-green-500 to-emerald-500",
    skills: ["GitHub Actions", "Git"],
  },
  {
    category: "Infrastructure",
    color: "from-orange-500 to-red-500",
    skills: ["VPS Configuration", "Domain Management", "Microservices"],
  },
  {
    category: "Other Frameworks",
    color: "from-indigo-500 to-purple-500",
    skills: ["Laravel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-purple-500 tracking-widest uppercase">
            Technical Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className={`h-3 w-3 rounded-full bg-linear-to-r ${cat.color}`}
                />
                <h3 className="font-semibold">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3 pl-6">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
