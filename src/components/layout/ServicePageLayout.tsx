import React, { ReactNode, useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ServicePageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  heroImage?: string;
  serviceImages?: string[];
}

const ServicePageLayout = ({ 
  children, 
  title, 
  description, 
  heroImage,
  serviceImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1500&q=80"
  ]
}: ServicePageLayoutProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === serviceImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [serviceImages.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section 
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        >
          {/* Background decoration */}
          {!heroImage && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
            </div>
          )}
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{title}</h1>
                <p className="text-xl text-gray-600 mb-8">{description}</p>
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
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Right Content - Image Carousel */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                {serviceImages.map((image, index) => (
                  <div
                    key={image}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000",
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <img
                      src={image}
                      alt={`Service showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                ))}
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {serviceImages.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentImageIndex 
                          ? "bg-pinkish-red w-4" 
                          : "bg-white/50 hover:bg-white/75"
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        {children}
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
          </div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
