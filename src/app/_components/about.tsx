import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-linear-to-r from-purple-500 to-blue-500 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/foto.jpg"
                  alt="Dian Ronaldo Kereh"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-linear-to-r from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50" />
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-sm font-medium text-purple-500 tracking-widest uppercase">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Passionate Developer
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-justify md:text-left indent-6">
              Self-taught developer since 2018 with expertise in building modern
              web applications using Next.js, TypeScript, and CI/CD workflows.
              I&apos;ve developed production systems for government institutions
              and educational organizations, always focusing on efficient
              solutions that meet real business needs.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify md:text-left indent-6">
              Currently pursuing my Bachelor&apos;s degree in Informatics at
              Universitas Sariputra Indonesia Tomohon, graduating in 2026. My
              journey in tech started with curiosity and has evolved into a
              passion for creating impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
