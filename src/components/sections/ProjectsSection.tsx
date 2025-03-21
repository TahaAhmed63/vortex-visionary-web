import React, { useRef, useEffect, useState } from 'react';
import { Code, ExternalLink, Github, Tv } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "An advanced analytics platform that uses machine learning to provide predictive insights and visualize complex data patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1500&q=80",
      technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Enterprise CRM Solution",
      description: "A comprehensive customer relationship management system with advanced automation and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1500&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      description: "A cross-platform shopping application with personalized recommendations and seamless payment processing.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1500&q=80",
      technologies: ["React Native", "Firebase", "Stripe API"],
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Smart Home IoT Platform",
      description: "An integrated system for managing connected devices with real-time monitoring and automated responses.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1500&q=80",
      technologies: ["Python", "MQTT", "React", "AWS IoT"],
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain Supply Chain Tracker",
      description: "A transparent supply chain management system built on blockchain technology for verification and traceability.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1500&q=80",
      technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "An intelligent content creation tool that leverages natural language processing to generate marketing copy.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1500&q=80",
      technologies: ["Python", "GPT-3", "React", "FastAPI"],
      githubUrl: "https://github.com",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.technologies.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // All unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return (
    <section id="projects" className="py-20 bg-midnight-blue" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 section-fade-in">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-neon-purple bg-neon-purple/10 rounded-full">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-cool-gray">
            Explore our portfolio of innovative solutions across various technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 section-fade-in">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-electric-blue hover:bg-electric-blue/90' 
              : 'border-white/20 text-white hover:bg-white/5'}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'featured' ? 'default' : 'outline'} 
            onClick={() => setActiveFilter('featured')}
            className={activeFilter === 'featured' 
              ? 'bg-electric-blue hover:bg-electric-blue/90' 
              : 'border-white/20 text-white hover:bg-white/5'}
          >
            Featured
          </Button>
          {allTechnologies.map(tech => (
            <Button 
              key={tech}
              variant={activeFilter === tech ? 'default' : 'outline'} 
              onClick={() => setActiveFilter(tech)}
              className={activeFilter === tech 
                ? 'bg-electric-blue hover:bg-electric-blue/90' 
                : 'border-white/20 text-white hover:bg-white/5'}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-black/30 border border-white/10 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-md overflow-hidden section-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cool-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-black/50 text-cool-gray border-white/10"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-white/10 pt-4">
                {project.githubUrl && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/5"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show More Button - conditionally rendered if projects are filtered */}
        {activeFilter !== 'all' && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/5" 
              onClick={() => setActiveFilter('all')}
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
