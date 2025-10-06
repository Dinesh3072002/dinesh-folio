import { Code2, Database, Server, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      skills: ["Git", "GitHub", "VS Code"],
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-gradient border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-muted/50 rounded-full text-sm border border-primary/20"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
