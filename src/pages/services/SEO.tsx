
import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import { Search, BarChart, Target, Globe, Layers, ArrowUp } from 'lucide-react';

const SEO = () => {
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
      icon: <Search className="w-7 h-7" />,
      title: "Keyword Research",
      description: "In-depth analysis to identify high-value keywords that your target audience is searching for."
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "On-Page SEO",
      description: "Optimization of your website's content and structure to improve visibility and rankings."
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Technical SEO",
      description: "Improvement of your website's backend structure to enhance search engine crawling and indexing."
    },
    {
      icon: <ArrowUp className="w-7 h-7" />,
      title: "Link Building",
      description: "Strategic acquisition of high-quality backlinks to boost your website's authority."
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Local SEO",
      description: "Optimization strategies to help your business appear in local search results and Google Maps."
    },
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Performance Tracking",
      description: "Comprehensive reporting and analytics to measure the effectiveness of your SEO campaign."
    }
  ];

  const basicFeatures: PricingFeature[] = [
    { text: "Website audit and keyword research", included: true },
    { text: "On-page SEO for up to 5 pages", included: true },
    { text: "Monthly performance reports", included: true },
    { text: "Off-page SEO and backlink building", included: false },
    { text: "Competitor analysis", included: false },
    { text: "Content creation", included: false },
    { text: "Local SEO optimization", included: false }
  ];

  const standardFeatures: PricingFeature[] = [
    { text: "Website audit and keyword research", included: true },
    { text: "On-page SEO for up to 15 pages", included: true },
    { text: "Monthly performance reports", included: true },
    { text: "Off-page SEO and backlink building", included: true },
    { text: "Competitor analysis", included: true },
    { text: "Content creation", included: false },
    { text: "Local SEO optimization", included: false }
  ];

  const premiumFeatures: PricingFeature[] = [
    { text: "Website audit and keyword research", included: true },
    { text: "On-page SEO for up to 30 pages", included: true },
    { text: "Monthly performance reports", included: true },
    { text: "Off-page SEO and backlink building", included: true },
    { text: "Competitor analysis", included: true },
    { text: "Content creation (blogs and articles)", included: true },
    { text: "Local SEO optimization", included: true }
  ];

  return (
    <ServicePageLayout
      title="Search Engine Optimization (SEO)"
      description="Increase your online visibility and drive organic traffic with our data-driven SEO strategies tailored to your business goals."
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
              Comprehensive SEO Services
            </h2>
            <p className="text-lg text-gray-300">
              Boost your website's visibility and attract more qualified traffic
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

      {/* Pricing Section */}
      <section className="py-20 bg-black/90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              SEO Packages
            </h2>
            <p className="text-lg text-gray-300">
              Choose the right SEO package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPackage 
              title="Basic SEO Package" 
              price="$250 USD" 
              period="month"
              description="Essential SEO services for small businesses and startups"
              features={basicFeatures}
              ctaText="Get Started"
            />
            
            <PricingPackage 
              title="Standard SEO Package" 
              price="$500 USD"
              period="month"
              description="Comprehensive SEO for growing businesses seeking to expand their online presence"
              features={standardFeatures}
              highlighted={true}
              ctaText="Most Popular"
            />
            
            <PricingPackage 
              title="Premium SEO Package" 
              price="$900 USD"
              period="month"
              description="Advanced SEO strategies for established businesses with competitive industries"
              features={premiumFeatures}
              ctaText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-black relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-gray-300">
              We've helped businesses across various industries improve their online visibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "250%", desc: "Average increase in organic traffic" },
              { metric: "Top 3", desc: "Search results positions for target keywords" },
              { metric: "35%", desc: "Average increase in conversion rate" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-3">{stat.metric}</div>
                <p className="text-gray-300">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Case Study: E-commerce Store</h3>
              <p className="text-gray-300 mb-6">
                An online retailer approached us with declining organic traffic and poor search engine rankings. 
                After implementing our comprehensive SEO strategy:
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex">
                  <ArrowUp className="w-5 h-5 text-pinkish-red mr-3 flex-shrink-0 mt-1" />
                  <span>Organic traffic increased by 187% within 6 months</span>
                </li>
                <li className="flex">
                  <ArrowUp className="w-5 h-5 text-pinkish-red mr-3 flex-shrink-0 mt-1" />
                  <span>Rankings for primary keywords moved from page 3 to top 5 positions</span>
                </li>
                <li className="flex">
                  <ArrowUp className="w-5 h-5 text-pinkish-red mr-3 flex-shrink-0 mt-1" />
                  <span>Conversion rate improved by 24%, leading to a significant increase in sales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default SEO;
