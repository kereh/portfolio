import { ArrowDown, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
            Full-Stack Web Developer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Dian Ronaldo
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Self-taught developer since 2018 crafting modern web applications
            with Next.js, TypeScript, and passion for clean, efficient code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Tomohon, Indonesia</span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
}
