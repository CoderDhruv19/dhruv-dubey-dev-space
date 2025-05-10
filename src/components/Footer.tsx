
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/CoderDhruv19",
      icon: <Github className="h-4 w-4" />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/dhruv-dubey-527974346",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/dhruvdubey_19",
      icon: <Twitter className="h-4 w-4" />,
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/dhruvdubey_19",
      icon: <Instagram className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="bg-portfolio-secondary/50 backdrop-filter backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Dhruv<span className="text-portfolio-accent">.</span>
            </a>
            <p className="text-sm text-portfolio-text/60 mt-2">
              &copy; {currentYear} Dhruv Dubey. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text/70 hover:text-portfolio-accent transition-colors"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
