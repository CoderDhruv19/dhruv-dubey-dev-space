
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/CoderDhruv19",
      icon: <Github className="h-5 w-5" />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dhruv-dubey-527974346",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/dhruvdubey_19",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/dhruvdubey_19",
      icon: <Instagram className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolio-accent/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 max-w-2xl stagger-animation">
            <div>
              <p className="text-portfolio-accent mb-2">Hi there, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="gradient-text">Dhruv Dubey</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-portfolio-text/80">
                Full Stack Web Developer & Software Enthusiast
              </h2>
            </div>

            <p className="text-lg text-portfolio-text/70">
              A passionate third-year B.Tech student building modern web applications
              with a focus on clean code and user-friendly experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-portfolio-accent hover:bg-portfolio-accent/80 text-black"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline" 
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
              >
                Hire Me / Contact
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-portfolio-text/60 mb-3">Find me on:</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-secondary p-2 rounded-full hover:bg-portfolio-accent/20 transition-colors"
                    aria-label={link.platform}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex-1 flex justify-center">
            <div className="relative">
              {/* Profile image with glow effect */}
              <div className="w-60 h-60 md:w-72 md:h-72 relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-accent to-pink-500 blur-md opacity-50 animate-pulse-glow"></div>
                <Avatar className="w-full h-full border-4 border-portfolio-secondary">
                  <AvatarImage src="/placeholder.svg" alt="Dhruv Dubey" />
                  <AvatarFallback className="bg-portfolio-secondary text-3xl">
                    DD
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Tech stack badge */}
              <div className="absolute -bottom-4 -right-4 bg-portfolio-secondary border border-portfolio-accent/20 backdrop-filter backdrop-blur-sm py-2 px-4 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse"></span>
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
