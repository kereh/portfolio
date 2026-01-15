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
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
