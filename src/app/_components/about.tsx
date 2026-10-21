export function About() {
  return (
    <section id="about" className="space-y-4">
      <div className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          01 / About
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Background
        </h2>
      </div>

      <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          I am a self-taught full-stack developer based in Tomohon, Indonesia,
          building web software since 2018. My core focus is on TypeScript,
          Next.js, relational database architecture with PostgreSQL, and
          reliable deployment workflows.
        </p>
        <p>
          Over the past several years, I have engineered production systems for
          local government bodies and academic institutions, including employee
          performance appraisal systems, automated allowance calculations,
          attendance tracking, and institutional web portals.
        </p>
        <p>
          Currently completing a Bachelor&apos;s degree in Informatics at
          Universitas Sariputra Indonesia Tomohon (class of 2026).
        </p>
      </div>
    </section>
  );
}
