import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="space-y-8 animate-fade-in">
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto">
              I'm a passionate Full-Stack Developer with a strong foundation in modern web technologies. 
              I love building applications that solve real-world problems and provide exceptional user experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Education */}
              <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-semibold">Education</h3>
                      
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium text-primary">Master of Computer Applications</p>
                          <p className="text-sm text-muted-foreground">NIITM, Coimbatore</p>
                        </div>
                        
                        <div>
                          <p className="font-medium text-primary">BSc Computer Science</p>
                          <p className="text-sm text-muted-foreground">NMSSVN College, Madurai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-xl font-semibold">Experience</h3>
                      
                      <div className="space-y-2">
                        <p className="font-medium text-primary">Full-Stack Developer Intern</p>
                        <p className="text-sm text-muted-foreground">Pumo Technovation</p>
                        <p className="text-sm text-muted-foreground">6 months</p>
                        <p className="text-sm text-foreground/80 mt-2">
                          Developed responsive web applications using React, Node.js, and modern web technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
