
import React, { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full animate-fade-in">
              AI-Powered Innovation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business With <span className="text-gradient">Intelligent</span> Solutions
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Leverage the power of AI-driven technologies to accelerate growth, enhance customer experience, and streamline operations with our cutting-edge software solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md px-8 py-6 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md px-6 py-6 transition-all duration-300"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Case Studies <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div 
            className="relative mx-auto max-w-lg lg:max-w-none animate-fade-in"
            ref={heroRef}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25"></div>
              <div className="relative glass-card p-1 rounded-2xl overflow-hidden bg-white/90">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1470&q=80" 
                  alt="AI-Driven Solutions" 
                  className="w-full h-auto rounded-xl"
                />
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-gray-500 text-xs">Client Growth</p>
                      <p className="text-gray-900 font-bold text-xl">+147%</p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <p className="text-gray-500 text-xs">Projects</p>
                      <p className="text-gray-900 font-bold text-xl">250+</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs">Client Retention</p>
                      <p className="text-gray-900 font-bold text-xl">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
