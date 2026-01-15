import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium group-hover:text-purple-500 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
