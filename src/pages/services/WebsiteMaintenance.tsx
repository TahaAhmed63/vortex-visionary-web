import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import { Shield, RefreshCw, Clock, Database, BarChart, Settings } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const WebsiteMaintenance = () => {
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
      icon: <Shield className="w-7 h-7" />,
      title: "Security Monitoring",
      description: "Continuous monitoring for vulnerabilities and threats to keep your website secure."
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: "Regular Updates",
      description: "Timely updates to core software, plugins, and themes to ensure optimal performance."
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Backup Management",
      description: "Regular backups of your website files and database to prevent data loss."
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Technical Support",
      description: "Expert assistance for resolving technical issues and implementing new features."
    },
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Performance Optimization",
      description: "Speed and performance enhancements to improve user experience and SEO."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Uptime Monitoring",
      description: "24/7 monitoring to ensure your website is always accessible to visitors."
    }
  ];

  const basicFeatures: PricingFeature[] = [
    { text: "Up to 5 hours of updates and support", included: true },
    { text: "Regular backups and security checks", included: true },
    { text: "Software and plugin updates", included: true },
    { text: "Performance optimization", included: false },
    { text: "Monthly analytics report", included: false },
    { text: "Priority support", included: false },
    { text: "Advanced security monitoring", included: false }
  ];

  const standardFeatures: PricingFeature[] = [
    { text: "Up to 10 hours of updates and support", included: true },
    { text: "Regular backups and security checks", included: true },
    { text: "Software and plugin updates", included: true },
    { text: "Performance optimization", included: true },
    { text: "Monthly analytics report", included: true },
    { text: "Priority support", included: false },
    { text: "Advanced security monitoring", included: false }
  ];

  const premiumFeatures: PricingFeature[] = [
    { text: "Up to 20 hours of updates and support", included: true },
    { text: "Regular backups and security checks", included: true },
    { text: "Software and plugin updates", included: true },
    { text: "Performance optimization", included: true },
    { text: "Monthly analytics report", included: true },
    { text: "Priority support", included: true },
    { text: "Advanced security monitoring", included: true }
  ];

  return (
    <ServicePageLayout
      title="Website Maintenance Services"
      description="Keep your website secure, up-to-date, and performing at its best with our maintenance packages."
      heroImage="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
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
              Comprehensive Website Maintenance
            </h2>
            <p className="text-lg text-gray-600">
              Proactive care to keep your website secure, updated, and performing at its best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={index < 2 ? `https://images.unsplash.com/photo-${index === 0 ? '1486312338219-ce68d2c6f44d' : '1531482615713-2afd69097998'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with image */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Choose Our Maintenance Services
            </h2>
            <p className="text-lg text-gray-600">
              Proactive support to keep your website running smoothly
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold pinkest-red mb-4">Proactive Maintenance Approach</h3>
                <p className="text-gray-600 mb-6">
                  We don't just fix issues when they occur - we prevent them from happening in the first place.
                </p>
                <div className="space-y-5 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 w-6 h-6 rounded-full bg-pinkish-red/20 flex items-center justify-center text-pinkish-red">✓</div>
                    <div>
                      <h4 className="pinkest-red font-medium">Regular Security Updates</h4>
                      <p className="text-gray-600 text-sm">Keeping your website protected against the latest threats.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 w-6 h-6 rounded-full bg-pinkish-red/20 flex items-center justify-center text-pinkish-red">✓</div>
                    <div>
                      <h4 className="pinkest-red font-medium">Scheduled Backups</h4>
                      <p className="text-gray-600 text-sm">Regular data backups to ensure nothing is ever lost.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 w-6 h-6 rounded-full bg-pinkish-red/20 flex items-center justify-center text-pinkish-red">✓</div>
                    <div>
                      <h4 className="pinkest-red font-medium">Performance Monitoring</h4>
                      <p className="text-gray-600 text-sm">Continuous monitoring for optimal loading speeds and uptime.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Website maintenance monitoring" 
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Why Website Maintenance Matters
            </h2>
            <p className="text-lg text-gray-600">
              Regular maintenance is essential for the health and performance of your website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 pinkest-red">Security Protection</h3>
                <p className="text-gray-600">
                  Websites without regular updates are vulnerable to security breaches. Regular maintenance helps protect your site and user data from hackers and malware.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 pinkest-red">Performance Optimization</h3>
                <p className="text-gray-600">
                  Slow websites drive visitors away. Our maintenance services include regular performance checks and optimizations to keep your site loading quickly.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 pinkest-red">Prevent Downtime</h3>
                <p className="text-gray-600">
                  Website downtime can cost you customers and revenue. Proactive maintenance helps identify and resolve issues before they cause your site to go offline.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-pinkish-red/20">
                <img 
                  src="/lovable-uploads/03_23_2025_X-Design (3) (1).png" 
                  alt="Website Maintenance" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-pinkish-red mr-3" />
                    <div>
                      <h4 className="pinkest-red font-semibold">Proactive Protection</h4>
                      <p className="text-gray-600 text-sm">Keeping your website secure and reliable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Maintenance Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the maintenance plan that best suits your website needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Basic Maintenance" 
              price="$90 USD" 
              period="month"
              description="Essential maintenance for small websites"
              features={basicFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Standard Maintenance" 
              price="$160 USD"
              period="month"
              description="Comprehensive care for business websites"
              features={standardFeatures}
              highlighted={true}
              ctaText="Most Popular"
            />
            
            <PricingPackage 
              title="Premium Maintenance" 
              price="$220 USD"
              period="month"
              description="Advanced support for high-traffic and e-commerce sites"
              features={premiumFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>
      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default WebsiteMaintenance;
