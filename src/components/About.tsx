
import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-8 stagger-animation">
            <p className="text-lg text-portfolio-text/80 leading-relaxed">
              I'm a third-year B.Tech student at Bharati Vidyapeeth College of Engineering, Pune, 
              with a passion for full stack development and software engineering. I enjoy building 
              web applications that are both functional and visually appealing, with a focus on 
              creating seamless user experiences.
            </p>
            
            <p className="text-lg text-portfolio-text/80 leading-relaxed">
              My journey in tech began with a curiosity about how websites work, which led me to 
              explore various programming languages and frameworks. Today, I'm proficient in 
              several technologies including React, Node.js, and MongoDB, and I'm constantly 
              expanding my knowledge in the rapidly evolving field of web development.
            </p>
            
            <Card className="bg-portfolio-background border border-portfolio-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-accent/10 p-3 rounded-md">
                    <GraduationCap className="h-6 w-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Education</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium">B.Tech in Computer Engineering</p>
                        <p className="text-portfolio-text/70 flex items-center gap-2">
                          <Code className="h-4 w-4" /> 
                          Bharati Vidyapeeth College of Engineering, Pune
                        </p>
                        <p className="text-portfolio-text/70 flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4" /> 
                          Expected Graduation: 2026
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center pt-4">
              <a 
                href="#contact" 
                className="text-portfolio-accent hover:text-portfolio-accent/80 transition-colors underline underline-offset-4"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
