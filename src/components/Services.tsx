
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Server, Shield, Mail } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const services: Service[] = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web application development with robust frontend and backend solutions tailored to your needs.",
      icon: <Code className="h-10 w-10" />,
    },
    {
      title: "Web Design",
      description: "Modern, responsive, and user-friendly interfaces that provide exceptional user experience across all devices.",
      icon: <Layout className="h-10 w-10" />,
    },
    {
      title: "Backend API Development",
      description: "Scalable and secure RESTful APIs designed to power your web and mobile applications efficiently.",
      icon: <Server className="h-10 w-10" />,
    },
    {
      title: "Web Security Implementation",
      description: "Comprehensive security measures to protect your applications from common vulnerabilities and threats.",
      icon: <Shield className="h-10 w-10" />,
    },
    {
      title: "Email Integration",
      description: "Setup and configuration of email services like Resend for newsletters, notifications, and marketing campaigns.",
      icon: <Mail className="h-10 w-10" />,
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="gradient-text">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-portfolio-secondary/50 backdrop-filter backdrop-blur-sm border border-portfolio-accent/10 hover:border-portfolio-accent/30 transition-all hover:translate-y-[-5px]"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-portfolio-accent/10 p-4 rounded-full mb-6">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: "text-portfolio-accent" 
                  })}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-portfolio-text/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
