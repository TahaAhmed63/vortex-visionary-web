
import React, { useRef, useEffect } from 'react';
import { Brain, Users, Code, TrendingUp, Server, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  linkTo: string;
}

const ServiceCard = ({ icon, title, description, delay, linkTo }: ServiceCardProps) => {
  return (
    <div 
      className="feature-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pinkish-red/10 text-pinkish-red transition-all duration-300 group-hover:bg-pinkish-red group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-5 text-gray-300 flex-grow">{description}</p>
        <Link to={linkTo}>
          <Button 
            variant="ghost" 
            className="p-0 h-auto w-auto justify-start text-pinkish-red group-hover:text-pinkish-red-light"
          >
            Learn more
            <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
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
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Driven Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.",
      linkTo: "/services/ai-solutions"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns leveraging AI to target your ideal customers and maximize ROI.",
      linkTo: "/services/digital-marketing"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "CRM Development",
      description: "Custom CRM solutions to manage customer relationships, track interactions, and boost satisfaction.",
      linkTo: "/services/crm-development"
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Web Development",
      description: "Responsive, modern web applications that provide seamless user experiences across all devices.",
      linkTo: "/services/web-development"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and deliver real value.",
      linkTo: "/services/mobile-development"
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions that grow with your business and optimize performance.",
      linkTo: "/services/cloud-infrastructure"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>
      
      <div className="section-container section-fade-in relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-4">
            <span className="text-sm font-medium text-pinkish-red">Our Services</span>
          </div>
          <h2 className="section-title text-gradient">
            Comprehensive Digital Solutions
          </h2>
          <p className="section-subtitle">
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
              linkTo={service.linkTo}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg"
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
