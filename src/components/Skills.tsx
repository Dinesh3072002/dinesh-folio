import { Code2, Database, Server, Layers } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "Bootstrap"],
      color: "text-blue-400",
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node JS", "Express JS"],
      color: "text-green-400",
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "MongoDB"],
      color: "text-purple-400",
    },
    {
      icon: Layers,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code" , "Netlify"],
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">
          Skills & <span className="skills-heading-accent">Expertise</span>
        </h2>
        <div className="skills-divider" />

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skills-card">
              <div className="skills-card-content">
                <div className="skills-card-icon">
                  <category.icon className={`h-8 w-8`} style={{ color: category.color }} />
                </div>
                
                <h3 className="skills-card-title">{category.title}</h3>
                
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skills-item">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
