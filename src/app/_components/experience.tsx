/** biome-ignore-all lint/suspicious/noArrayIndexKey: biome ribet amat bjir */
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const workExperience = [
  {
    title: "Web Developer Intern",
    company: "KPU Kota Tomohon",
    location: "Sulawesi Utara",
    period: "Oct 2025 - Dec 2025",
    description: [
      "Developed comprehensive employee performance website system, including performance management, online attendance, and allowance calculation modules",
      "Designed and implemented monthly/yearly performance and attendance reports for streamlined evaluation",
      "Ensured system accuracy and functionality to support transparency in personnel administration",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
  },
  {
    title: "Part-Time Developer",
    company: "SMK Dharma Bhakti Tomohon",
    location: "Sulawesi Utara",
    period: "Apr 2025 - Jun 2025",
    description: [
      "Developed and implemented school profile website to enhance public image and information access",
      "Collaborated with school stakeholders to translate content requirements into functional and aesthetic web solutions",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const education = [
  {
    degree: "Bachelor's Degree (S-1)",
    school: "Universitas Sariputra Indonesia Tomohon",
    major: "Informatics",
    year: "2026",
  },
  {
    degree: "Vocational High School",
    school: "SMKS Kristen 2 Tomohon",
    major: "Computer & Network Engineering",
    year: "2022",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-purple-500 tracking-widest uppercase">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Experience & Education
          </h2>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-purple-500" />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground">{edu.school}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {edu.major}
                    </span>
                    <Badge variant="secondary">{edu.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
