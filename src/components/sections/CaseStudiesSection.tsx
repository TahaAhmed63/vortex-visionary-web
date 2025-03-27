
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  results: {
    label: string;
    value: string;
  }[];
}

const CaseStudiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "AI-Powered Customer Segmentation",
      client: "RetailGiant Inc.",
      description: "Implemented an advanced AI solution that analyzed customer behavior and purchase patterns to create highly targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=80",
      category: "AI Solutions",
      results: [
        { label: "Conversion Rate", value: "+43%" },
        { label: "Customer Retention", value: "+28%" },
        { label: "ROI", value: "312%" }
      ]
    },
    {
      id: 2,
      title: "End-to-End E-commerce Platform",
      client: "FashionForward",
      description: "Developed a comprehensive e-commerce platform with integrated CRM, inventory management, and AI-driven product recommendations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1500&q=80",
      category: "Web Development",
      results: [
        { label: "Sales Growth", value: "+87%" },
        { label: "User Engagement", value: "+64%" },
        { label: "Cart Abandonment", value: "-35%" }
      ]
    },
    {
      id: 3,
      title: "Mobile Banking App Overhaul",
      client: "FinTech Solutions",
      description: "Redesigned and rebuilt a mobile banking application with enhanced security, improved user experience, and new feature integration.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1500&q=80",
      category: "Mobile Development",
      results: [
        { label: "User Adoption", value: "+125%" },
        { label: "Transaction Volume", value: "+78%" },
        { label: "Support Tickets", value: "-41%" }
      ]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-20  relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30 mb-4">
            <span className="text-sm font-medium text-pinkish-red">Success Stories</span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-dark-gray">
            Our Work  <span className='text-pinkish-red'> Speaks For Itself</span>
          </h2>
          <p className="section-subtitle">
            Explore how we've helped businesses achieve remarkable results with our custom solutions
          </p>
        </div>

        <div className="relative">
          {/* Case Study Slider */}
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-2xl shadow-xl glass-card border border-pinkish-red/20"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-pinkish-red hover:bg-pinkish-red/90 ">
                          {study.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="p-6 lg:p-10 flex flex-col">
                      <div className="mb-2 text-sm text-gray-600">Client: {study.client}</div>
                      <h3 className="text-2xl font-bold  mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{study.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center p-3 bg-pinkish-red/30 rounded-lg border border-pinkish-red/20">
                            <p className="text-gray-600 text-xs">{result.label}</p>
                            <p className="text-pinkish-red font-bold text-xl">{result.value}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        className="self-start"
                      >
                        View Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-8">
            <div className="flex space-x-1">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-10 h-1.5 rounded-full transition-all ${
                    index === activeSlide ? 'bg-pinkish-red' : 'bg-gray-700'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-10 w-10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="default"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-10 w-10"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
