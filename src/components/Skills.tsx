
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: string;
  category: "language" | "framework" | "database" | "other";
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "language" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "language" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "language" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "language" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "framework" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "framework" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "framework" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "database" },
    { name: "Web Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "other" },
  ];

  const categories = [
    { id: "language", name: "Languages & Tools" },
    { id: "framework", name: "Frameworks/Libraries" },
    { id: "database", name: "Databases" },
    { id: "other", name: "Other Knowledge" }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="stagger-animation">
              <h3 className="text-xl font-semibold mb-6 pl-2 border-l-4 border-portfolio-accent">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill) => (
                    <div 
                      key={skill.name}
                      className="bg-portfolio-secondary/50 backdrop-filter backdrop-blur-sm border border-portfolio-accent/10 rounded-lg p-4 hover:border-portfolio-accent/30 transition-all hover:translate-y-[-5px]"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className={cn(
                          "w-12 h-12 flex items-center justify-center rounded-md bg-portfolio-background p-2",
                          skill.category === "language" && "bg-blue-900/20",
                          skill.category === "framework" && "bg-green-900/20",
                          skill.category === "database" && "bg-yellow-900/20",
                          skill.category === "other" && "bg-purple-900/20",
                        )}>
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8" 
                          />
                        </div>
                        <p className="font-medium">{skill.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
