import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "dinesh-folio/public/img1.jpg";
import "./Hero.css";

const Hero = () => {
  const techIcons = [
    { name: "React", color: "text-[#61DAFB]", delay: "0s" },
    { name: "Node", color: "text-[#68A063]", delay: "0.5s" },
    { name: "MongoDB", color: "text-[#4DB33D]", delay: "1s" },
    { name: "JS", color: "text-[#F7DF1E]", delay: "1.5s" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-intro">
              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-name">Dinesh S</h1>
              <h2 className="hero-title">Full Stack Developer</h2>
            </div>

            <p className="hero-description">
              Crafting modern, responsive, and user-friendly websites with passion and precision. 
              Specialized in building performance-driven applications.
            </p>

           <div className="hero-actions">
             <a
                href="/Dinesh.pdf"
                download="Dinesh.pdf"
                className="hero-primary-button flex items-center gap-2"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                <span>Download Resume</span>
             </a>



              <div className="hero-social-links">
                <a href="https://github.com/Dinesh3072002" target="_blank" rel="noopener noreferrer" className="hero-social-button">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/dinesh-coder" target="_blank" rel="noopener noreferrer" className="hero-social-button">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:dineshshanmugam3072002@gmail.com" className="hero-social-button">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Floating Icons */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              {/* Main Profile Image */}
              <div className="hero-image">
                <img
                  src={"img1.jpg"}
                  alt="Dinesh S - Full Stack Developer"
                />
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={tech.name}
                  className="hero-tech-icon"
                  style={{
                    animationDelay: tech.delay,
                    top: `${index * 25}%`,
                    [index % 2 === 0 ? "left" : "right"]: "-2rem",
                  }}
                >
                  <span style={{ color: tech.color }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
