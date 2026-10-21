import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="space-y-6 pt-4">
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Dian Ronaldo Kereh
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            Full-Stack Web Developer
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground pt-1">
            <MapPin className="size-3.5" />
            <span>Tomohon, Indonesia</span>
            <span className="text-border">/</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-foreground/60" />
              Available for projects
            </span>
          </div>
        </div>

        <div className="relative size-20 sm:size-24 rounded-full overflow-hidden border border-border shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/foto.jpg"
            alt="Dian Ronaldo Kereh"
            fill
            sizes="96px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        Self-taught software developer since 2018 specializing in Next.js,
        TypeScript, and PostgreSQL. Experienced in designing and deploying
        production web systems for public sector and educational institutions.
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button asChild size="sm">
          <a href="#contact">
            <Mail className="size-3.5 mr-2" />
            Contact
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a
            href="https://github.com/kereh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-3.5 mr-2" />
            GitHub
            <ArrowUpRight className="size-3 ml-1 opacity-70" />
          </a>
        </Button>
      </div>
    </section>
  );
}
