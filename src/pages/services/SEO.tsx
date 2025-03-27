import React, { useEffect } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import { Search, BarChart, Target, Globe, Layers, ArrowUp } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

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
      title="Search Engine Optimization"
      description="Drive organic traffic and increase your online visibility with our SEO services."
      heroImage="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
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
              Comprehensive SEO Services
            </h2>
            <p className="text-lg text-gray-600">
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
                // image={index < 2 ? `https://images.unsplash.com/photo-${index === 0 ? '1571844511263-55af08fff4cf' : '1552664730-b9ef494abaa5'}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80` : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 /90 relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              SEO Packages
            </h2>
            <p className="text-lg text-gray-600">
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
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Real Results for Real Businesses
            </h2>
            <p className="text-lg text-gray-600">
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
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Case Study: E-commerce Store</h3>
              <p className="text-gray-600 mb-6">
                An online retailer approached us with declining organic traffic and poor search engine rankings. 
                After implementing our comprehensive SEO strategy:
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
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

      {/* Case Study Section */}
      <section className="py-20  relative section-fade-in">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              SEO Success Story
            </h2>
            <p className="text-lg text-gray-600">
              Real results from our comprehensive SEO strategy
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold pinkest-red mb-4">Local Business Growth</h3>
                <p className="text-gray-600 mb-6">
                  A local service business struggling to compete in a saturated market needed to improve their online visibility.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Comprehensive keyword research and competitive analysis</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">On-page optimization of all service pages</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Local SEO strategy including Google Business Profile optimization</span>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-pinkish-red">✓</div>
                    <span className="text-gray-600">Content strategy with bi-weekly blog posts</span>
                  </div>
                </div>
                <div className="bg-pinkish-red/10 p-4 rounded-lg border border-pinkish-red/30">
                  <p className="pinkest-red font-medium">Results:</p>
                  <p className="text-gray-600">First page rankings for 27 target keywords and 112% increase in organic traffic within 6 months.</p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2534&q=80" 
                  alt="SEO growth analytics" 
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormSection />
    </ServicePageLayout>
  );
};

export default SEO;
