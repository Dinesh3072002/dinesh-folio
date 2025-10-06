import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/dinesh-profile.jpg";

const Hero = () => {
  const techIcons = [
    { name: "React", color: "text-[#61DAFB]", delay: "0s" },
    { name: "Node", color: "text-[#68A063]", delay: "0.5s" },
    { name: "MongoDB", color: "text-[#4DB33D]", delay: "1s" },
    { name: "JS", color: "text-[#F7DF1E]", delay: "1.5s" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Dinesh S
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-gradient">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-muted-foreground text-lg max-w-lg">
              Crafting modern, responsive, and user-friendly websites with passion and precision. 
              Specialized in building performance-driven applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/Dinesh3072002" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/dinesh-coder" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href="mailto:dineshshanmugam3072002@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image with Floating Icons */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img
                  src={profileImage}
                  alt="Dinesh S - Full Stack Developer"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: '50% 35%' }}
                />
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full card-gradient border border-primary/30 flex items-center justify-center font-bold animate-float"
                  style={{
                    animationDelay: tech.delay,
                    top: `${index * 25}%`,
                    [index % 2 === 0 ? "left" : "right"]: "-2rem",
                  }}
                >
                  <span className={tech.color}>{tech.name}</span>
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
