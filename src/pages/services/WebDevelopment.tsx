import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { Code, Smartphone, Globe, Database, Server, Lock } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const WebDevelopment = () => {
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
      icon: <Code className="w-7 h-7" />,
      title: "Custom Web Development",
      description: "Tailor-made websites designed to meet your specific business needs and goals.",
      // image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Responsive Design",
      description: "Websites that look and function beautifully on all devices, from desktops to smartphones.",
      // image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "E-commerce Solutions",
      description: "Secure, scalable online stores with seamless payment gateway integration."
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Content Management Systems",
      description: "User-friendly CMS implementation allowing you to update your website with ease."
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "Web Application Development",
      description: "Custom web applications that automate processes and enhance productivity."
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Website Security",
      description: "Comprehensive security measures to protect your website and user data."
    }
  ];

  const starterFeatures: PricingFeature[] = [
    { text: "Custom template/theme selection", included: true },
    { text: "Up to 20 product uploads", included: true },
    { text: "Payment gateway integration", included: true },
    { text: "Responsive design", included: true },
    { text: "Home page slider", included: true },
    { text: "Training for website management", included: true },
    { text: "1-month free technical support", included: true },
    { text: "Advanced SEO optimization", included: false },
    { text: "Social media integration", included: false },
    { text: "Custom plugin development", included: false }
  ];

  const businessFeatures: PricingFeature[] = [
    { text: "All features in the Starter Package", included: true },
    { text: "Up to 100 product uploads", included: true },
    { text: "Advanced SEO optimization", included: true },
    { text: "Social media integration", included: true },
    { text: "2 months free technical support", included: true },
    { text: "Custom plugin development", included: false }
  ];

  const enterpriseFeatures: PricingFeature[] = [
    { text: "All features in the Business Package", included: true },
    { text: "Unlimited product uploads", included: true },
    { text: "Custom plugin development", included: true },
    { text: "Priority support with 3 months free technical assistance", included: true }
  ];

  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. The website they created not only looks fantastic but has significantly improved our conversion rates.",
      author: "Michael Stevens",
      company: "TechCorp Solutions",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "The attention to detail and responsive design has made our e-commerce store accessible to customers on all devices. Sales have increased by 45% since the redesign.",
      author: "Emily Johnson",
      company: "Fashion Forward",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
    }
  ];

  return (
    <ServicePageLayout
      title="Web Design & Development"
      description="Custom, responsive websites and applications that drive business growth."
      heroImage="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2339&q=80"
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
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Custom website solutions designed to showcase your brand and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                // image={feature?.image}
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
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their online presence
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

      {/* Case Study Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Featured Case Study
            </h2>
            <p className="text-lg text-gray-600">
              See how we helped transform an e-commerce business
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold  mb-4">E-Commerce Platform Redesign</h3>
                <p className="text-gray-600 mb-6">
                  A well-established retail business needed to modernize their online store to improve user experience and increase sales.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Complete redesign with modern UI/UX principles</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Mobile-first approach ensuring perfect responsiveness</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Streamlined checkout process reducing abandonment by 35%</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Integration with multiple payment gateways</span>
                  </div>
                </div>
                <div className="bg-pinkish-red/10 p-4 rounded-lg border border-pinkish-red/30">
                  <p className=" font-medium">Results:</p>
                  <p className="text-gray-600">58% increase in mobile conversions and 42% overall sales growth within 3 months of launch.</p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="E-commerce platform case study" 
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormSection/>
      {/* Pricing Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Web Development Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the package that best suits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Starter Package" 
              price="$800 USD" 
              description="Perfect for small businesses looking to establish an online presence"
              features={starterFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Business Package" 
              price="$1,500 USD"
              highlighted={true}
              description="Ideal for growing businesses with more advanced requirements"
              features={businessFeatures}
              ctaText="Choose Business"
            />
            
            <PricingPackage 
              title="Enterprise Package" 
              price="$2,200 USD"
              description="Comprehensive solution for established businesses with complex needs"
              features={enterpriseFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WebDevelopment;
