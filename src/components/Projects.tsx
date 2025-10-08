import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Building Website",
      description: "A comprehensive website for a construction company featuring project showcases, service listings, and contact forms. Built with React and responsive design principles.",
      tech: ["React", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      github: "https://github.com/Dinesh3072002",
    },
    {
      title: "Dress Website",
      description: "An elegant e-commerce platform for fashion retail with product catalogs, shopping cart functionality, and modern UI/UX design.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
      github: "https://github.com/Dinesh3072002",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">
          Featured <span className="projects-heading-accent">Projects</span>
        </h2>
        <div className="projects-divider" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="projects-card">
              <div className="projects-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects-image"
                />
                <div className="projects-image-overlay" />
              </div>
              
              <div className="projects-card-body">
                <h3 className="projects-card-title">{project.title}</h3>
                <p className="projects-card-description">{project.description}</p>
                
                <div className="projects-tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech} className="projects-tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="projects-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects-button">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a href="#" className="projects-button">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
