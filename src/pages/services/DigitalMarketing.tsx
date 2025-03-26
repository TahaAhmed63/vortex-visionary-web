
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { Megaphone, BarChart2, Target, Users, Share2, Smartphone } from 'lucide-react';

const DigitalMarketing = () => {
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
      icon: <Megaphone className="w-7 h-7" />,
      title: "Social Media Marketing",
      description: "Strategic content creation and community management to build your brand presence across social platforms.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Pay-Per-Click Advertising",
      description: "Targeted ad campaigns on Google, Facebook, Instagram, and other platforms to drive qualified traffic.",
      image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Audience Targeting",
      description: "Advanced audience segmentation to ensure your marketing reaches the right people at the right time.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Share2 className="w-7 h-7" />,
      title: "Content Marketing",
      description: "Creation and distribution of valuable content to attract and engage your target audience.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Marketing",
      description: "Strategies optimized for mobile users to capture the growing segment of on-the-go consumers.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      icon: <BarChart2 className="w-7 h-7" />,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and analysis to measure campaign performance and ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  const socialMediaFeatures: PricingFeature[] = [
    { text: "Management of up to 2 social media platforms", included: true },
    { text: "8 posts per month", included: true },
    { text: "Monthly analytics report", included: true },
    { text: "Content creation", included: true },
    { text: "Community management", included: true },
    { text: "Ad campaign management", included: false },
    { text: "Influencer outreach", included: false }
  ];

  const ppcFeatures: PricingFeature[] = [
    { text: "Campaign setup and monitoring", included: true },
    { text: "Keyword research and ad creation", included: true },
    { text: "Monthly performance reports", included: true },
    { text: "A/B testing", included: true },
    { text: "Conversion tracking", included: true },
    { text: "Landing page optimization", included: true },
    { text: "Remarketing campaigns", included: true }
  ];

  const testimonials = [
    {
      quote: "The digital marketing strategy developed by this team transformed our online presence. Our e-commerce sales increased by 68% in just three months!",
      author: "Jessica Miller",
      company: "Urban Boutique",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "Their PPC campaign management is exceptional. They reduced our cost per lead by 40% while simultaneously increasing our conversion rate.",
      author: "David Chen",
      company: "TechSolutions Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <ServicePageLayout
      title="Digital Marketing Solutions"
      description="Expand your online presence and engage your target audience with our strategic digital marketing services."
      heroImage="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
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
              Our Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600">
              Strategic marketing solutions to boost your online visibility and drive conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their digital presence
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
      <section className="py-20 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Digital Marketing Packages
            </h2>
            <p className="text-lg text-gray-600">
              Choose the marketing services that align with your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingPackage 
              title="Social Media Management" 
              price="$350 USD" 
              period="month"
              description="Build and engage your community across social platforms"
              features={socialMediaFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="PPC Management" 
              price="$450 USD"
              period="month"
              description="Drive targeted traffic and conversions through paid advertising"
              features={ppcFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Marketing Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results for businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pinkish-red/20 flex items-center justify-center mr-4">
                  <Megaphone className="w-8 h-8 text-pinkish-red" />
                </div>
                <h3 className="text-2xl font-semibold ">Fashion Retailer</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A fashion boutique sought to increase online sales and build brand awareness through social media.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">78%</div>
                  <span className="text-gray-600">Increase in social media engagement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">43%</div>
                  <span className="text-gray-600">Growth in online store traffic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">31%</div>
                  <span className="text-gray-600">Increase in conversion rate</span>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Fashion social media marketing" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pinkish-red/20 flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-pinkish-red" />
                </div>
                <h3 className="text-2xl font-semibold ">SaaS Company</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A software company needed to generate qualified leads for their B2B service through Google Ads.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">125%</div>
                  <span className="text-gray-600">Increase in qualified leads</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">45%</div>
                  <span className="text-gray-600">Reduction in cost per acquisition</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-8 flex items-center justify-center text-pinkish-red font-bold">3.2x</div>
                  <span className="text-gray-600">Return on ad spend</span>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2426&q=80" 
                alt="SaaS marketing dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DigitalMarketing;
