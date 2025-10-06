import { Smartphone, Code, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Creating beautiful, mobile-first websites that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Transforming designs into pixel-perfect, interactive user interfaces with smooth animations.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-gradient">Services</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center glow-primary">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
