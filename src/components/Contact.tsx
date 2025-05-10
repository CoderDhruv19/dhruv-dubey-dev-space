
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setLoading(false);
    }, 1500);
  };
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "dhruvoneplusn2@gmail.com",
      link: "mailto:dhruvoneplusn2@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone/WhatsApp",
      value: "+91 9026870327",
      link: "tel:+919026870327",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "dhruv-dubey-527974346",
      link: "https://www.linkedin.com/in/dhruv-dubey-527974346",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "CoderDhruv19",
      link: "https://github.com/CoderDhruv19",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      value: "@dhruvdubey_19",
      link: "https://twitter.com/dhruvdubey_19",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      value: "@dhruvdubey_19",
      link: "https://instagram.com/dhruvdubey_19",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-portfolio-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="stagger-animation">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border border-portfolio-accent/10 bg-portfolio-background">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-portfolio-accent/10 p-2 rounded-full text-portfolio-accent">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-portfolio-text/60 text-sm">{item.label}</p>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-text hover:text-portfolio-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="stagger-animation">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-portfolio-text/70">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-portfolio-background border-portfolio-accent/20 focus:border-portfolio-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-portfolio-text/70">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-portfolio-background border-portfolio-accent/20 focus:border-portfolio-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-portfolio-text/70">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-portfolio-background border-portfolio-accent/20 focus:border-portfolio-accent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-portfolio-text/70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="bg-portfolio-background border-portfolio-accent/20 focus:border-portfolio-accent min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-black"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
