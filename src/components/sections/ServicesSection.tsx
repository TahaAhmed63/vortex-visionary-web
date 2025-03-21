
import React, { useRef, useEffect } from 'react';
import { Brain, Users, Code, TrendingUp, Server, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  slug: string;
}

const ServiceCard = ({ icon, title, description, delay, slug }: ServiceCardProps) => {
  return (
    <div 
      className="feature-card group hover-glow animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -inset-1 bg-blue-purple-gradient opacity-30 rounded-2xl blur-lg group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="flex flex-col h-full relative z-10">
        <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/5 text-primary transition-all duration-500 group-hover:text-white group-hover:bg-secondary">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">{title}</h3>
        <p className="mb-5 text-cool-gray flex-grow">{description}</p>
        <Link to={`/services/${slug}`} className="text-primary font-medium inline-flex items-center hover:text-secondary transition-all">
          Learn more
          <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Driven Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.",
      slug: "ai-solutions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns leveraging AI to target your ideal customers and maximize ROI.",
      slug: "digital-marketing"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Development",
      description: "Custom CRM solutions to manage customer relationships, track interactions, and boost satisfaction.",
      slug: "crm-development"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Responsive, modern web applications that provide seamless user experiences across all devices.",
      slug: "web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and deliver real value.",
      slug: "mobile-development"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions that grow with your business and optimize performance.",
      slug: "cloud-infrastructure"
    }
  ];

  return (
    <section id="services" className="py-20 bg-midnight-blue bg-opacity-60" ref={sectionRef}>
      <div className="section-container section-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold gold-text-gradient">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-xl text-cool-gray">
            We offer a full spectrum of services to help businesses thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
              slug={service.slug}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-neon-purple text-white font-medium rounded-md px-8 py-2.5 transition-all duration-300"
            onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
