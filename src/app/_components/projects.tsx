/** biome-ignore-all lint/suspicious/noArrayIndexKey: biome */

import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Employee Performance System",
    description:
      "Comprehensive web-based system for managing employee performance, online attendance tracking, and calculating performance allowances (Tukin). Features monthly/yearly reports for streamlined HR evaluation.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better-Auth"],
    type: "Government",
    highlights: [
      "Performance management module",
      "Online attendance system",
      "Automated allowance calculation",
      "Report generation",
    ],
  },
  {
    title: "School Profile Website",
    description:
      "Modern, responsive school profile website designed to enhance the institution's public image and provide accessible information to students, parents, and the community.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    type: "Education",
    highlights: [
      "Responsive design",
      "Content management",
      "SEO optimized",
      "Fast performance",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-purple-500 tracking-widest uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production systems built for real-world use in government and
            education sectors
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-2 bg-linear-to-r from-purple-500 to-blue-500" />
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <Badge className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20">
                      {project.type}
                    </Badge>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {project.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
