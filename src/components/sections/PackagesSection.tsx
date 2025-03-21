
import React from 'react';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingPackage {
  id: number;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PackagesSection = () => {
  const packages: PricingPackage[] = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small businesses just getting started with digital solutions.",
      price: "$999",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Basic SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "1 Month Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: false },
        { title: "Custom CRM Integration", included: false },
        { title: "AI-Powered Analytics", included: false },
      ]
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced solutions for growing businesses seeking a competitive edge.",
      price: "$2,499",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Advanced SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "3 Months Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: true },
        { title: "Basic CRM Integration", included: true },
        { title: "AI-Powered Analytics", included: false },
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Comprehensive digital solutions for large organizations with complex needs.",
      price: "$4,999",
      period: "one-time fee",
      features: [
        { title: "Responsive Website Design", included: true },
        { title: "Advanced SEO Optimization", included: true },
        { title: "Contact Form Integration", included: true },
        { title: "6 Months Support", included: true },
        { title: "Social Media Integration", included: true },
        { title: "E-commerce Functionality", included: true },
        { title: "Custom CRM Integration", included: true },
        { title: "AI-Powered Analytics", included: true },
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-black relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-4">
            <span className="text-sm font-medium text-pinkish-red">Our Packages</span>
          </div>
          <h2 className="section-title text-gradient">
            Choose the Perfect Package
          </h2>
          <p className="section-subtitle">
            Select the package that best fits your business needs and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl relative border ${
                pkg.popular 
                  ? 'border-pinkish-red' 
                  : 'border-pinkish-red/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-bl-lg rounded-tr-lg px-3 py-1.5 bg-pinkish-red text-white">
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-5 h-12">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 ml-2 mb-1">/{pkg.period}</span>
                  </div>
                </div>
                
                <Button
                  variant={pkg.popular ? 'default' : 'outline'}
                  className="w-full mb-8"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white">Features included:</h4>
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-pinkish-red mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-white' : 'text-gray-500'}`}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Need a custom solution? We offer tailored packages to meet your specific requirements
          </p>
          <Button onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
