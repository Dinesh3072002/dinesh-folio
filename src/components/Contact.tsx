import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_64bxglo',
        'template_yiulqva',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'QySB9LpASk6icHIZc'
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dineshshanmugam3072002@gmail.com",
      href: "mailto:dineshshanmugam3072002@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080632021",
      href: "tel:+919080632021",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dinesh-coder",
      href: "https://www.linkedin.com/in/dinesh-coder",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Dinesh3072002",
      href: "https://github.com/Dinesh3072002",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">
          Get In <span className="contact-heading-accent">Touch</span>
        </h2>
        <div className="contact-divider" />

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-container">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-info-card">
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    <div className="contact-info-icon">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div className="contact-info-text">
                      <p>{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>

              <button 
                type="submit" 
                className="contact-submit-button"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
