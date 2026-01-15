import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dianronaldokereh@gmail.com",
    href: "mailto:dianronaldokereh@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 896 1222 5233",
    href: "tel:+6289612225233",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tomohon, Indonesia",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium text-purple-500 tracking-widest uppercase">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-center">
            Contact Information
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors group text-center"
              >
                <div className="h-12 w-12 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-medium group-hover:text-purple-500 transition-colors text-sm">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
