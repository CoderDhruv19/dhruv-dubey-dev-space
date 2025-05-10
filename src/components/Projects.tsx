
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Blog Writing App",
      description: "A Twitter clone microblogging platform with features for content creation, following users, and engaging with posts.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/CoderDhruv19",
    },
    {
      title: "YouTube Clone (Backend)",
      description: "A robust backend API that mimics YouTube's core functionality including video uploads, user management, and comments.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      tags: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/CoderDhruv19",
    },
    {
      title: "Amazon Clone",
      description: "A full-featured e-commerce platform modeled after Amazon with product listings, search, cart, and checkout functionality.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "Firebase", "Stripe"],
      githubUrl: "https://github.com/CoderDhruv19",
    },
    {
      title: "Netflix Clone",
      description: "A streaming service interface with movie browsing, trailer previews, and user recommendation features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
      tags: ["React", "API Integration"],
      githubUrl: "https://github.com/CoderDhruv19",
    },
    {
      title: "Mini Apps Collection",
      description: "A collection of utility applications including BMI Calculator, Rock Paper Scissors Game, and Currency Converter.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
      tags: ["JavaScript", "HTML/CSS"],
      githubUrl: "https://github.com/CoderDhruv19",
    }
  ];

  return (
    <section id="projects" className="section-padding bg-portfolio-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-portfolio-background border border-portfolio-accent/10 overflow-hidden hover:border-portfolio-accent/30 transition-all hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-portfolio-text/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                
                {project.liveUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-portfolio-accent text-black hover:bg-portfolio-accent/80"
                    asChild
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
