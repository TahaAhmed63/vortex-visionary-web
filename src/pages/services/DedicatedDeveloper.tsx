
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Terminal, Server, Database, Globe, Smartphone } from 'lucide-react';

const DedicatedDeveloper = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Function to handle intersection observer for animations
    const handleIntersection = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.15 }
      );

      const sections = document.querySelectorAll(".section-fade-in");
      sections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    handleIntersection();
  }, []);

  const juniorFeatures: PricingFeature[] = [
    { text: "Frontend development", included: true },
    { text: "Basic backend development", included: true },
    { text: "Bug fixing", included: true },
    { text: "Basic feature implementation", included: true },
    { text: "Daily progress reports", included: true },
    { text: "Architecture design", included: false },
    { text: "Complex system development", included: false }
  ];

  const midLevelFeatures: PricingFeature[] = [
    { text: "Frontend development", included: true },
    { text: "Backend development", included: true },
    { text: "Bug fixing", included: true },
    { text: "Advanced feature implementation", included: true },
    { text: "Daily progress reports", included: true },
    { text: "Basic architecture design", included: true },
    { text: "Complex system development", included: false }
  ];

  const seniorFeatures: PricingFeature[] = [
    { text: "Frontend development", included: true },
    { text: "Backend development", included: true },
    { text: "Bug fixing", included: true },
    { text: "Advanced feature implementation", included: true },
    { text: "Daily progress reports", included: true },
    { text: "Architecture design", included: true },
    { text: "Complex system development", included: true }
  ];

  const technologies = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-pinkish-red" />,
      skills: ["React", "Vue.js", "Angular", "Next.js", "HTML5/CSS3", "JavaScript/TypeScript", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6 text-pinkish-red" />,
      skills: ["Node.js", "Express.js", "Django", "Laravel", "Ruby on Rails", "Spring Boot", "ASP.NET Core"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-pinkish-red" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Oracle", "Firebase", "Redis"]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6 text-pinkish-red" />,
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
    },
    {
      category: "DevOps",
      icon: <Terminal className="w-6 h-6 text-pinkish-red" />,
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "CI/CD", "GitHub Actions"]
    },
    {
      category: "Other",
      icon: <Code className="w-6 h-6 text-pinkish-red" />,
      skills: ["GraphQL", "REST API", "WebSockets", "Microservices", "Serverless", "AI/ML Integration"]
    }
  ];

  return (
    <ServicePageLayout
      title="Dedicated Developer Services"
      description="Access skilled developers to bring your projects to life, whether you need a single developer or an entire team."
    >
      {/* Benefits Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Benefits of Hiring Dedicated Developers
            </h2>
            <p className="text-lg text-gray-300">
              Unlock the advantages of working with our skilled development team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Efficiency",
                description: "Save on recruitment, training, and infrastructure costs compared to hiring in-house developers."
              },
              {
                title: "Flexibility",
                description: "Scale your team up or down based on project requirements and development phases."
              },
              {
                title: "Access to Expertise",
                description: "Work with specialists in various technologies without the challenge of finding rare skills locally."
              },
              {
                title: "Faster Development",
                description: "Accelerate your project timeline with experienced developers who can hit the ground running."
              },
              {
                title: "Focus on Core Business",
                description: "Concentrate on your business strategy while we handle the technical implementation."
              },
              {
                title: "Quality Assurance",
                description: "Benefit from our rigorous quality standards and testing procedures for reliable software."
              }
            ].map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black/90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Technical Expertise
            </h2>
            <p className="text-lg text-gray-300">
              Our developers are proficient in a wide range of technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-black/70 border border-pinkish-red/30 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Developer Rates
            </h2>
            <p className="text-lg text-gray-300">
              Transparent pricing based on developer experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Junior Developer" 
              price="$18 USD" 
              period="hour"
              description="1-2 years of experience"
              features={juniorFeatures}
              ctaText="Hire Now"
            />
            
            <PricingPackage 
              title="Mid-Level Developer" 
              price="$28 USD"
              period="hour"
              description="3-5 years of experience"
              features={midLevelFeatures}
              highlighted={true}
              ctaText="Most Popular"
            />
            
            <PricingPackage 
              title="Senior Developer" 
              price="$40 USD"
              period="hour"
              description="5+ years of experience"
              features={seniorFeatures}
              ctaText="Contact Us"
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Need a full development team? Contact us for custom team pricing and availability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black/90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              How It Works
            </h2>
            <p className="text-lg text-gray-300">
              Our streamlined process for engaging dedicated developers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                {
                  title: "Requirements Analysis",
                  description: "We start by understanding your project needs, technical requirements, and team composition needs."
                },
                {
                  title: "Developer Selection",
                  description: "Based on your requirements, we recommend suitable developers with the right skills and experience."
                },
                {
                  title: "Onboarding",
                  description: "The selected developers are introduced to your team and briefed on the project details."
                },
                {
                  title: "Development Process",
                  description: "Our developers work on your project, following your preferred methodology and communication protocols."
                },
                {
                  title: "Regular Reporting",
                  description: "Receive consistent updates on progress, with daily or weekly reports based on your preference."
                },
                {
                  title: "Quality Assurance",
                  description: "All deliverables undergo rigorous testing to ensure they meet our quality standards and your requirements."
                }
              ].map((step, index) => (
                <div key={index} className="relative mb-8 md:mb-12 pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-0 top-0 ml-14 h-full w-0.5 bg-pinkish-red/30"></div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex md:flex-col items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pinkish-red text-white font-bold z-10">
                        {index + 1}
                      </div>
                      <div className="md:w-28 h-0.5 md:h-0 md:mt-4 bg-pinkish-red/30 flex-grow md:flex-grow-0 mx-3 md:mx-0"></div>
                    </div>
                    <div className="glass-card p-6 flex-grow mt-3 md:mt-0">
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DedicatedDeveloper;
