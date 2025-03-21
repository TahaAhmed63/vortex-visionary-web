
import React, { useRef, useEffect } from 'react';
import { Brain, Users, Code, TrendingUp, Server, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className="feature-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-5 text-gray-600 flex-grow">{description}</p>
        <a href="#" className="text-blue-600 font-medium inline-flex items-center hover:underline transition-all">
          Learn more
          <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
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
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Driven Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns leveraging AI to target your ideal customers and maximize ROI."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "CRM Development",
      description: "Custom CRM solutions to manage customer relationships, track interactions, and boost satisfaction."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Responsive, modern web applications that provide seamless user experiences across all devices."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and deliver real value."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud solutions that grow with your business and optimize performance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container section-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
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
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md px-8 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg"
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
