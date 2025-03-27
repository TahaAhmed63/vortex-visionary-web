import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import ServiceFeature from '@/components/services/ServiceFeature';
import { Button } from "@/components/ui/button";
import { Video, Mic, Edit, Palette, Play, FileText, PenTool } from 'lucide-react';

const VideoAnimation = () => {
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
      icon: <FileText className="w-7 h-7" />,
      title: "Scriptwriting",
      description: "Professional scriptwriting that effectively communicates your message in a clear and engaging manner."
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: "Storyboarding",
      description: "Detailed visual planning to map out every scene of your animation before production begins."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Custom Animation",
      description: "Bespoke animations created to match your brand style and effectively convey your message."
    },
    {
      icon: <Mic className="w-7 h-7" />,
      title: "Professional Voiceover",
      description: "High-quality narration from experienced voice actors to enhance your video's impact."
    },
    {
      icon: <Play className="w-7 h-7" />,
      title: "Background Music",
      description: "Carefully selected music and sound effects to complement your animation and evoke the right emotions."
    },
    {
      icon: <Edit className="w-7 h-7" />,
      title: "Revisions",
      description: "Two rounds of revisions included to ensure the final product perfectly meets your expectations."
    }
  ];

  const process = [
    {
      title: "Discovery & Briefing",
      description: "We begin by understanding your business, target audience, and goals for the video animation."
    },
    {
      title: "Script Development",
      description: "Our copywriters create a compelling script that effectively communicates your message."
    },
    {
      title: "Storyboarding",
      description: "We create a visual plan for your animation, mapping out each scene and transition."
    },
    {
      title: "Style Development",
      description: "Our designers craft the visual style for your animation, aligned with your brand identity."
    },
    {
      title: "Animation Production",
      description: "Our animators bring the storyboard to life with dynamic and engaging movements."
    },
    {
      title: "Voiceover & Sound",
      description: "Professional narration and sound design are added to enhance your message."
    },
    {
      title: "Review & Revisions",
      description: "You review the animation and provide feedback for up to two rounds of revisions."
    },
    {
      title: "Final Delivery",
      description: "Once approved, we deliver your animation in the required formats for your intended platforms."
    }
  ];

  return (
    <ServicePageLayout
      title="Video Animation Services"
      description="Engage your audience with professional explainer videos and animations."
      heroImage="https://images.unsplash.com/photo-1574717024453-354a08aab7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
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
              Our Video Animation Services
            </h2>
            <p className="text-lg text-gray-600">
              Bring your ideas to life with engaging and informative animated videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                // image={index < 2 ? `https://images.unsplash.com/photo-${index === 0 ? '1551244072-237a26d3e658' : '1580136895875-4227dfd03166'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Explainer Video Package
            </h2>
            <p className="text-lg text-gray-600">
              Professional 60-second animated video to explain your product or service
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="aspect-video /50 rounded-xl overflow-hidden border border-pinkish-red/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-pinkish-red/80 flex items-center justify-center cursor-pointer hover:bg-pinkish-red transition-colors">
                      <Video className="w-7 h-7 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3 text-gray-600">60-Second Explainer Video</h3>
                <p className="text-gray-600 mb-4">
                  A professionally crafted animated video that clearly explains your product or service to your target audience.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Custom script and storyboard</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Professional voiceover</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Music and sound effects</span>
                  </div>
                  <div className="flex items-start">
                    <Play className="w-5 h-5 text-pinkish-red mr-2 mt-1" />
                    <span className="text-gray-600">Two rounds of revisions</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gradient">$1,200 USD</div>
                  <div className="text-gray-400 text-sm">One-time payment</div>
                </div>
                
                <Button 
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Our Animation Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to creating effective animated videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pinkish-red text-gray-600 font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600">{step.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Animation Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Examples of our video animation work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Product Explainer Animation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 /50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-600 text-xl font-medium">Product Explainer</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Product Explainer Animation</h3>
                <p className="text-gray-600">
                  An engaging animation that clearly demonstrates product features and benefits.
                </p>
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1574717024453-354a08aab7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Corporate Brand Story" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 /50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-600 text-xl font-medium">Brand Story</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Corporate Brand Story</h3>
                <p className="text-gray-600">
                  A compelling narrative animation that communicates company values and mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default VideoAnimation;
