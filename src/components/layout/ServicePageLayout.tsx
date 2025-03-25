
import React, { ReactNode } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  heroImage?: string;
}

const ServicePageLayout = ({ 
  children, 
  title, 
  description, 
  heroImage 
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section 
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black text-white overflow-hidden"
          style={{
            backgroundImage: heroImage ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${heroImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Background decoration */}
          {!heroImage && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
            </div>
          )}
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{title}</h1>
              <p className="text-xl text-gray-300 mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        {children}
        
        {/* CTA Section */}
        <section className="py-20 bg-black relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help your business thrive in the digital landscape.
              </p>
              <Button 
                size="lg"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
