import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  casestudy?: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    result: string;
  };
}

const services = {
  'ai-solutions': {
    title: 'AI-Driven Solutions',
    description: 'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.',
    longDescription: 'Our AI-driven solutions harness cutting-edge machine learning and neural networks to transform your business operations. We develop custom AI models that learn from your data, automate repetitive tasks, and provide powerful insights for strategic decision-making.',
    icon: '🧠',
    features: [
      'Custom machine learning models',
      'Predictive analytics and forecasting',
      'Natural language processing',
      'Computer vision implementation',
      'AI-powered chatbots and assistants',
      'Automated data analysis'
    ],
    benefits: [
      'Reduce operational costs through automation',
      'Make data-driven decisions with confidence',
      'Personalize customer experiences',
      'Identify trends and opportunities',
      'Scale operations efficiently'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We analyze your business needs and identify opportunities for AI implementation.'
      },
      {
        title: 'Data Assessment',
        description: 'Our team evaluates your existing data infrastructure and prepares it for AI training.'
      },
      {
        title: 'Model Development',
        description: 'We build and train custom AI models specific to your business objectives.'
      },
      {
        title: 'Integration',
        description: 'The AI solution is integrated into your existing systems and workflows.'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'We continuously monitor performance and optimize the models for better results.'
      }
    ],
    casestudy: {
      title: 'Revolutionizing Inventory Management',
      client: 'Global Retail Corporation',
      challenge: 'The client struggled with inventory forecasting, resulting in overstocking and stockouts that cost millions annually.',
      solution: 'We developed a predictive AI model that analyzed historical sales data, seasonal trends, and external factors to optimize inventory levels.',
      result: 'Within 6 months, the client reduced inventory costs by 23% while increasing product availability by 15%, resulting in $4.2M annual savings.'
    }
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns leveraging AI to target your ideal customers and maximize ROI.',
    longDescription: 'Our digital marketing services combine data analytics, AI-powered insights, and creative expertise to create targeted campaigns that reach your ideal audience. We help you build a strong online presence and drive meaningful engagement with your brand.',
    icon: '📈',
    features: [
      'AI-driven audience targeting',
      'SEO optimization',
      'Content marketing strategy',
      'Social media management',
      'Email marketing automation',
      'Performance analytics and reporting'
    ],
    benefits: [
      'Target the right audience with precision',
      'Increase conversion rates',
      'Improve brand awareness and recognition',
      'Maximize marketing ROI',
      'Build lasting customer relationships'
    ],
    process: [
      {
        title: 'Strategy Development',
        description: 'We create a comprehensive marketing strategy aligned with your business goals.'
      },
      {
        title: 'Campaign Planning',
        description: 'Our team designs targeted campaigns for different channels and audiences.'
      },
      {
        title: 'Content Creation',
        description: 'We develop engaging, high-quality content that resonates with your audience.'
      },
      {
        title: 'Campaign Execution',
        description: 'Campaigns are launched across selected platforms with careful monitoring.'
      },
      {
        title: 'Analysis & Optimization',
        description: 'We analyze performance data and continuously optimize for better results.'
      }
    ]
  },
  'crm-development': {
    title: 'CRM Development',
    description: 'Custom CRM solutions to manage customer relationships, track interactions, and boost satisfaction.',
    longDescription: 'Our custom CRM development services help you build robust, scalable systems that centralize customer data, automate communication, and provide valuable insights into customer behavior. We create tailor-made solutions that align perfectly with your business processes.',
    icon: '👥',
    features: [
      'Custom CRM architecture',
      'Workflow automation',
      'Customer data integration',
      'Reporting dashboards',
      'Mobile accessibility',
      'Third-party integrations'
    ],
    benefits: [
      'Centralize customer information',
      'Streamline sales processes',
      'Improve customer service',
      'Enhance team collaboration',
      'Make data-driven decisions'
    ],
    process: [
      {
        title: 'Requirements Analysis',
        description: 'We analyze your business processes and CRM needs in detail.'
      },
      {
        title: 'System Design',
        description: 'Our team designs a CRM architecture tailored to your specific requirements.'
      },
      {
        title: 'Development',
        description: 'We build the custom CRM solution with all required features and integrations.'
      },
      {
        title: 'Testing & Deployment',
        description: 'The system undergoes rigorous testing before being deployed to your environment.'
      },
      {
        title: 'Training & Support',
        description: 'We provide comprehensive training and ongoing support for your team.'
      }
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Responsive, modern web applications that provide seamless user experiences across all devices.',
    longDescription: 'Our web development team creates fast, responsive, and user-friendly websites and web applications that deliver exceptional experiences. We leverage cutting-edge technologies and frameworks to build scalable solutions that drive business growth.',
    icon: '💻',
    features: [
      'Responsive design',
      'Progressive web applications',
      'Ecommerce solutions',
      'Content management systems',
      'Custom web applications',
      'API development and integration'
    ],
    benefits: [
      'Establish a professional online presence',
      'Improve user engagement and conversion',
      'Ensure cross-device compatibility',
      'Optimize performance and speed',
      'Scale your digital capabilities'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We learn about your business goals, target audience, and website requirements.'
      },
      {
        title: 'Planning & Design',
        description: 'Our team creates wireframes and designs that align with your brand and objectives.'
      },
      {
        title: 'Development',
        description: 'We build your website or application using modern technologies and best practices.'
      },
      {
        title: 'Testing',
        description: 'Rigorous testing ensures functionality, compatibility, and performance.'
      },
      {
        title: 'Deployment & Maintenance',
        description: 'We launch your site and provide ongoing support and updates.'
      }
    ]
  },
  'mobile-development': {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that engage users and deliver real value.',
    longDescription: 'Our mobile app development services encompass the entire development lifecycle, from conceptualization to deployment and maintenance. We build intuitive, high-performance apps that provide seamless experiences across iOS and Android platforms.',
    icon: '📱',
    features: [
      'Native iOS and Android apps',
      'Cross-platform development',
      'UI/UX design',
      'Backend integration',
      'Push notifications',
      'Offline functionality'
    ],
    benefits: [
      'Extend your reach to mobile users',
      'Increase customer engagement',
      'Enhance brand loyalty',
      'Create new revenue streams',
      'Gather valuable user data'
    ],
    process: [
      {
        title: 'Strategy & Planning',
        description: 'We define your app\'s objectives, target audience, and key features.'
      },
      {
        title: 'UI/UX Design',
        description: 'Our designers create intuitive, engaging user interfaces and experiences.'
      },
      {
        title: 'Development',
        description: 'We build your app using the most appropriate technologies for your needs.'
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing ensures your app works flawlessly across devices.'
      },
      {
        title: 'Deployment & Support',
        description: 'We handle app store submission and provide ongoing maintenance.'
      }
    ]
  },
  'cloud-infrastructure': {
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud solutions that grow with your business and optimize performance.',
    longDescription: 'Our cloud infrastructure services help you build, migrate, and manage robust cloud environments that offer scalability, security, and cost-efficiency. We design cloud architectures that align with your business needs and future growth plans.',
    icon: '☁️',
    features: [
      'Cloud migration strategies',
      'Infrastructure as Code (IaC)',
      'Serverless architecture',
      'Microservices implementation',
      'DevOps automation',
      'Security and compliance'
    ],
    benefits: [
      'Reduce infrastructure costs',
      'Improve scalability and flexibility',
      'Enhance security and disaster recovery',
      'Accelerate deployment cycles',
      'Support remote work capabilities'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We evaluate your current infrastructure and identify cloud migration opportunities.'
      },
      {
        title: 'Architecture Design',
        description: 'Our team designs a cloud architecture tailored to your specific requirements.'
      },
      {
        title: 'Migration Planning',
        description: 'We create a detailed migration plan to minimize disruption to your operations.'
      },
      {
        title: 'Implementation',
        description: 'Our experts execute the migration and set up your new cloud environment.'
      },
      {
        title: 'Optimization & Management',
        description: 'We continuously monitor and optimize your cloud infrastructure for performance and cost.'
      }
    ]
  }
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    setTimeout(() => {
      if (serviceSlug && services[serviceSlug as keyof typeof services]) {
        setService(services[serviceSlug as keyof typeof services]);
      }
      setLoading(false);
    }, 300);

    // Animation for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [serviceSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-48 bg-muted rounded mb-4"></div>
          <div className="h-6 w-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-midnight-blue">
          <div className="container mx-auto px-4">
            <div className="section-fade-in">
              <Link to="/#services" className="inline-flex items-center text-primary mb-6 hover:text-secondary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <span className="text-5xl mb-6 block">{service.icon}</span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{service.title}</h1>
                  <p className="text-xl text-cool-gray mb-6">{service.longDescription}</p>
                  <Button 
                    className="bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-neon-purple text-white font-medium rounded-md px-8 py-6 transition-all duration-300"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started with {service.title}
                  </Button>
                </div>
                <div className="md:w-1/2">
                  <div className="glass-card p-1 rounded-2xl overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/random/800x600/?${serviceSlug},technology`} 
                      alt={service.title}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-midnight-blue to-jet-black">
          <div className="container mx-auto px-4">
            <div className="section-fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center gold-text-gradient">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
                  <Card key={index} className="bg-black/30 border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-neon-blue">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                        <p className="text-cool-gray">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-jet-black">
          <div className="container mx-auto px-4">
            <div className="section-fade-in">
              <h2 className="text-3xl font-bold mb-8 text-center gold-text-gradient">Benefits</h2>
              <p className="text-center text-cool-gray mb-12 max-w-3xl mx-auto">
                Our {service.title} service provides significant advantages for your business:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 bg-black/20 rounded-lg border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:shadow-neon-purple">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <span className="text-secondary text-xl font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-b from-jet-black to-midnight-blue">
          <div className="container mx-auto px-4">
            <div className="section-fade-in">
              <h2 className="text-3xl font-bold mb-12 text-center gold-text-gradient">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-black/30 rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-cool-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section (conditional) */}
        {service.casestudy && (
          <section className="py-16 bg-midnight-blue">
            <div className="container mx-auto px-4">
              <div className="section-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center gold-text-gradient">Case Study</h2>
                <Card className="bg-black/40 border-white/10 overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">{service.casestudy.title}</h3>
                    <p className="text-lg text-gold mb-6">Client: {service.casestudy.client}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">The Challenge</h4>
                        <p className="text-cool-gray">{service.casestudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">Our Solution</h4>
                        <p className="text-cool-gray">{service.casestudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-white">The Results</h4>
                        <p className="text-cool-gray">{service.casestudy.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-midnight-blue to-jet-black">
          <div className="container mx-auto px-4">
            <div className="section-fade-in">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Transform Your Business?</h2>
                <p className="text-cool-gray mb-8">
                  Let's discuss how our {service.title} can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-gradient-to-r from-electric-blue to-neon-purple hover:shadow-neon-purple text-white font-medium rounded-md px-8 py-3 transition-all duration-300"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request a Quote
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 hover:border-white/30 rounded-md px-8 py-3 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
