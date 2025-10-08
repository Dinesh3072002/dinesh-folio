import { Smartphone, Code, Palette } from "lucide-react";
import "./Services.css";

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
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-heading">
          My <span className="services-heading-accent">Services</span>
        </h2>
        <div className="services-divider" />

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.title} className="services-card">
              <div className="services-card-content">
                <div className="services-card-icon">
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="services-card-title">{service.title}</h3>
                
                <p className="services-card-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
