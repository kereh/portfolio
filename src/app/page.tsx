import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Experience } from "./_components/experience";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Header />
        <main className="space-y-16 sm:space-y-20 py-8 sm:py-12">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
