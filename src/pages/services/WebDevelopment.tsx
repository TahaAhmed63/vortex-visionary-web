
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { Palette, Layout, Code, Search, Globe, FileCode, Laptop } from 'lucide-react';

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
      icon: <Palette className="w-7 h-7" />,
      title: "Custom Design",
      description: "Aesthetically pleasing designs tailored to match your brand identity and appeal to your target audience."
    },
    {
      icon: <Layout className="w-7 h-7" />,
      title: "Responsive Layout",
      description: "Websites that look and function perfectly across all devices - from desktops to smartphones."
    },
    {
      icon: <Code className="w-7 h-7" />,
      title: "Clean Code",
      description: "Well-structured, easy-to-maintain code that ensures your website runs smoothly and efficiently."
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "SEO-Ready",
      description: "Built with search engines in mind to enhance your visibility and drive organic traffic."
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "E-commerce Integration",
      description: "Secure payment gateways and product management systems for seamless online selling."
    },
    {
      icon: <FileCode className="w-7 h-7" />,
      title: "Custom Functionality",
      description: "Bespoke features and plugins developed to meet your specific business requirements."
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
    { text: "Custom template/theme selection", included: true },
    { text: "Up to 100 product uploads", included: true },
    { text: "Payment gateway integration", included: true },
    { text: "Responsive design", included: true },
    { text: "Home page slider", included: true },
    { text: "Training for website management", included: true },
    { text: "2-months free technical support", included: true },
    { text: "Advanced SEO optimization", included: true },
    { text: "Social media integration", included: true },
    { text: "Custom plugin development", included: false }
  ];

  const enterpriseFeatures: PricingFeature[] = [
    { text: "Custom template/theme selection", included: true },
    { text: "Unlimited product uploads", included: true },
    { text: "Payment gateway integration", included: true },
    { text: "Responsive design", included: true },
    { text: "Home page slider", included: true },
    { text: "Training for website management", included: true },
    { text: "3-months free technical support", included: true },
    { text: "Advanced SEO optimization", included: true },
    { text: "Social media integration", included: true },
    { text: "Custom plugin development", included: true }
  ];

  const testimonials = [
    {
      quote: "Working with Vortex Solution was a game-changer for our business. They delivered a stunning website that perfectly captures our brand and has significantly increased our online conversions.",
      author: "Sarah Johnson",
      company: "Bright Ideas Co.",
      rating: 5
    },
    {
      quote: "The team's attention to detail and technical expertise are unmatched. Our e-commerce platform is not only beautiful but also incredibly functional and easy to manage.",
      author: "David Chen",
      company: "EcoGoods Inc.",
      rating: 5
    },
    {
      quote: "From concept to launch, Vortex Solution guided us through the entire process with professionalism and creativity. The final product exceeded our expectations.",
      author: "Michael Rodriguez",
      company: "InnoTech Solutions",
      rating: 5
    }
  ];

  return (
    <ServicePageLayout
      title="Web Design & Development"
      description="Custom, responsive websites tailored to your business needs, from simple informational sites to complex e-commerce platforms."
      heroImage="/lovable-uploads/03_23_2025_X-Design (3).png"
    >
      {/* Features Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-lg text-gray-300">
              We create custom websites that deliver exceptional user experiences and drive results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-300">
              A structured approach that delivers results on time and on budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-white font-bold mr-4">1</div>
                  <h3 className="text-xl font-semibold">Discovery & Planning</h3>
                </div>
                <p className="text-gray-300 pl-14">We start by understanding your business goals, target audience, and functional requirements to develop a strategic plan.</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-white font-bold mr-4">2</div>
                  <h3 className="text-xl font-semibold">Design & Prototyping</h3>
                </div>
                <p className="text-gray-300 pl-14">Our designers create wireframes and visual mockups, refining the user experience and interface based on your feedback.</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-white font-bold mr-4">3</div>
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <p className="text-gray-300 pl-14">Our developers bring the designs to life with clean, efficient code, implementing all functionality and features.</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-white font-bold mr-4">4</div>
                  <h3 className="text-xl font-semibold">Testing & Launch</h3>
                </div>
                <p className="text-gray-300 pl-14">Rigorous testing across devices and browsers ensures your website is bug-free and ready for a successful launch.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-pinkish-red/20">
                <img 
                  src="/lovable-uploads/03_23_2025_X-Design (1).png" 
                  alt="Web Development Process" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center">
                    <Laptop className="w-8 h-8 text-pinkish-red mr-3" />
                    <div>
                      <h4 className="text-white font-semibold">Expert Development</h4>
                      <p className="text-gray-300 text-sm">Cutting-edge technology, exceptional results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Affordable Web Development Packages
            </h2>
            <p className="text-lg text-gray-300">
              Choose the package that fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Starter Package" 
              price="$800 USD" 
              description="Perfect for small businesses and startups looking to establish an online presence"
              features={starterFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Business Package" 
              price="$1,500 USD"
              description="Ideal for growing businesses requiring additional features and customization"
              features={businessFeatures}
              highlighted={true}
              ctaText="Most Popular"
            />
            
            <PricingPackage 
              title="Enterprise Package" 
              price="$2,200 USD"
              description="Comprehensive solution for established businesses with complex requirements"
              features={enterpriseFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Don't just take our word for it - hear from businesses we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Recent Projects
            </h2>
            <p className="text-lg text-gray-300">
              Explore some of our latest web development work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={`/lovable-uploads/03_23_2025_X-Design (${index + 1}).png`} 
                  alt={`Portfolio Project ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">Project Name {index + 1}</h3>
                  <p className="text-gray-300">Web Development, E-commerce</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Answers to common questions about our web development services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does it take to build a website?",
                a: "The timeline varies depending on the complexity of the project. A basic website typically takes 2-4 weeks, while more complex sites can take 6-12 weeks or longer."
              },
              {
                q: "Do you provide website maintenance after launch?",
                a: "Yes, we offer various maintenance packages to ensure your website remains secure, up-to-date, and performing optimally after launch."
              },
              {
                q: "Can you redesign my existing website?",
                a: "Absolutely! We specialize in website redesigns that improve both aesthetics and functionality while preserving your brand identity."
              },
              {
                q: "Do you provide content for my website?",
                a: "While we can provide guidance on content strategy, clients typically provide their own content. We can recommend professional copywriters if needed."
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Yes, all our websites are built with responsive design to ensure they look and function beautifully on all devices."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept credit cards, bank transfers, and PayPal. Projects typically require a 50% deposit to begin work, with the balance due upon completion."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-pinkish-red/30 rounded-xl p-6 hover:border-pinkish-red/50 transition-colors">
                <h3 className="text-xl font-semibold mb-3 text-white">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default WebDevelopment;
