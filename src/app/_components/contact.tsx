import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dianronaldokereh@gmail.com",
    href: "mailto:dianronaldokereh@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kereh",
    href: "https://github.com/kereh",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+62 896 1222 5233",
    href: "tel:+6289612225233",
  },
];

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <div className="space-y-1">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          05 / Contact
        </p>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Get in Touch
        </h2>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
        Available for full-stack engineering contracts, freelance projects, and
        technical consultations.
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        {contactLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="group p-4 rounded-lg border border-border/60 bg-card/40 hover:border-foreground/30 hover:bg-card/70 transition-all flex flex-col justify-between gap-3"
          >
            <div className="flex items-center justify-between text-muted-foreground group-hover:text-foreground transition-colors">
              <item.icon className="size-4" />
              <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-xs text-muted-foreground">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm font-medium text-foreground truncate">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground pt-2">
        <MapPin className="size-3.5" />
        <span>Based in Tomohon, North Sulawesi, Indonesia (UTC+8)</span>
      </div>
    </section>
  );
}
