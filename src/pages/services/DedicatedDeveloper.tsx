import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { UserPlus, Code, Lightbulb, Clock, MessageSquare, CheckCircle } from 'lucide-react';

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

  const features = [
    {
      icon: <UserPlus className="w-7 h-7" />,
      title: "Access to Top Talent",
      description: "Hire pre-vetted developers with expertise in various technologies.",
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Custom Skill Matching",
      description: "Developers matched to your specific project requirements and tech stack.",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Flexible Engagement",
      description: "Scale your team up or down as needed with flexible contract options.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Time Zone Alignment",
      description: "Developers available in time zones that align with your team's working hours.",
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Direct Communication",
      description: "Seamless communication with your dedicated developer for efficient collaboration.",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance processes to ensure high-quality code.",
    }
  ];

  const testimonials = [
    {
      quote: "Having a dedicated developer from this service has been a game-changer for our project. Their expertise and commitment have significantly accelerated our development timeline.",
      author: "Alex Johnson",
      company: "Innovatech Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The dedicated developer we hired quickly integrated into our team and has been instrumental in delivering high-quality code. Their proactive approach and problem-solving skills are invaluable.",
      author: "Sarah Williams",
      company: "WebDev Dynamics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1532980400857-c99fe3968aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  const basicFeatures: PricingFeature[] = [
    { text: "40 hours per week", included: true },
    { text: "Daily progress reports", included: true },
    { text: "Code review", included: true },
    { text: "Bug fixing", included: true },
    { text: "Basic project management", included: true },
    { text: "Access to standard tech stack", included: true },
    { text: "Direct communication via email", included: true },
    { text: "Priority support", included: false },
    { text: "Access to premium tech stack", included: false },
    { text: "Dedicated project manager", included: false }
  ];

  const premiumFeatures: PricingFeature[] = [
    { text: "All features in the Basic Package", included: true },
    { text: "Priority support", included: true },
    { text: "Access to premium tech stack", included: true },
    { text: "Dedicated project manager", included: true },
    { text: "Flexible working hours", included: true },
    { text: "Advanced code optimization", included: true },
    { text: "Direct communication via Slack/Teams", included: true }
  ];

  return (
    <ServicePageLayout
      title="Dedicated Developer Services"
      description="Access skilled developers tailored to your project requirements."
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    >
      {/* Features Section */}
      <section className="py-20  relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Hire a Dedicated Developer?
            </h2>
            <p className="text-lg text-gray-600">
              Get access to top talent focused solely on your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                // image={index < 2 ? `https://images.unsplash.com/photo-${index === 0 ? '1573497491765-dccce02b3982' : '1522252234503-e356532cafd5'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80` : undefined}
            />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their development process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Dedicated Developer Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that best suits your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingPackage 
              title="Basic Package" 
              price="$4,000 USD" 
              period="month"
              description="Ideal for small to medium-sized projects"
              features={basicFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Premium Package" 
              price="$7,000 USD"
              period="month"
              description="Perfect for large-scale and complex projects"
              features={premiumFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Technology Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Our developers are proficient in a wide range of technologies
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">Frontend Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">React</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Vue.js</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Angular</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">TypeScript</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Next.js</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Tailwind</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">Backend Technologies</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Node.js</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">PHP</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Python</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">Java</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">MongoDB</span>
                  </div>
                  <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                    <span className="text-gray-600">SQL</span>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Developer working on code" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Answers to common questions about our dedicated developer services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">What is a dedicated developer?</h3>
              <p className="text-gray-600 mb-4">
                A dedicated developer is a software engineer who works exclusively on your projects, providing focused attention and expertise.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">How do you match developers to projects?</h3>
              <p className="text-gray-600 mb-4">
                We carefully assess your project requirements and tech stack to match you with a developer who has the right skills and experience.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">What if I'm not satisfied with the developer?</h3>
              <p className="text-gray-600 mb-4">
                We offer a satisfaction guarantee. If you're not happy with your developer, we'll find a replacement at no additional cost.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">What communication tools do you use?</h3>
              <p className="text-gray-600 mb-4">
                We use a variety of communication tools, including email, Slack, and video conferencing, to ensure seamless collaboration.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">How do you ensure code quality?</h3>
              <p className="text-gray-600 mb-4">
                We follow industry best practices for code quality, including code reviews, testing, and continuous integration.
              </p>

              <h3 className="text-xl font-semibold text-gray-600 mb-2">Can I scale my team up or down as needed?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer flexible contract options that allow you to scale your team up or down as your project needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default DedicatedDeveloper;
