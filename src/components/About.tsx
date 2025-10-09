import { GraduationCap, Briefcase } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-wrapper">
          <h2 className="about-heading">
            About <span className="about-heading-accent">Me</span>
          </h2>
          <div className="about-divider" />

          <div className="about-content">
            <p className="about-description">
              I'm a passionate Full-Stack Developer with a strong foundation in modern web technologies. 
              I love building applications that solve real-world problems and provide exceptional user experiences.
            </p>

            <div className="about-cards">
              {/* Education */}
              <div className="about-card">
                <div className="about-card-content">
                  <div className="about-card-icon">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="about-card-body">
                    <h3 className="about-card-title">Education</h3>
                    
                    <div className="about-card-items">
                      <div>
                        <p className="about-card-item-title">Master of Computer Applications</p>
                        <p className="about-card-item-subtitle">NIITM, Coimbatore</p>
                      </div>
                      
                      <div>
                        <p className="about-card-item-title">BSc Computer Science</p>
                        <p className="about-card-item-subtitle">NMSSVN College, Madurai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="about-card">
                <div className="about-card-content">
                  <div className="about-card-icon">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="about-card-body">
                    <h3 className="about-card-title">Internship</h3>
                    
                    <div className="about-card-items">
                      <p className="about-card-item-title">Full-Stack Developer Intern</p>
                      <p className="about-card-item-subtitle">Pumo Technovation</p>
                      <p className="about-card-item-subtitle">6 months</p>
                      <p className="about-card-item-description">
                        Developed responsive web applications using React, Node.js, and modern web technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
