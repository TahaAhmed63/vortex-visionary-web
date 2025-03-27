import React, { useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Server, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import { UserPlus, Code, Lightbulb, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const CrmDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
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
            icon: <Users className="w-7 h-7" />,
            title: "Customer Management",
            description: "Centralized customer data management and relationship tracking.",
        },
        {
            icon: <TrendingUp className="w-7 h-7" />,
            title: "Sales Automation",
            description: "Streamline sales processes with automated workflows and pipelines.",
        },
        {
            icon: <Server className="w-7 h-7" />,
            title: "Data Integration",
            description: "Seamless integration with existing business systems and databases.",
        },
        {
            icon: <Smartphone className="w-7 h-7" />,
            title: "Mobile Access",
            description: "Access your CRM system anywhere through mobile applications.",
        },
        {
            icon: <MessageSquare className="w-7 h-7" />,
            title: "Communication Tools",
            description: "Built-in tools for customer communication and engagement tracking.",
        },
        {
            icon: <CheckCircle className="w-7 h-7" />,
            title: "Analytics & Reporting",
            description: "Comprehensive reporting and analytics for data-driven decisions.",
        }
    ];

    const testimonials = [
        {
            quote: "The custom CRM solution has transformed how we manage customer relationships. It's perfectly tailored to our business needs.",
            author: "Michael Chen",
            company: "Global Solutions Inc",
            rating: 5,
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            quote: "Our sales efficiency has increased dramatically since implementing this CRM system. The automation features are game-changing.",
            author: "Emma Rodriguez",
            company: "Sales Pro Tech",
            rating: 5,
            image: "https://images.unsplash.com/photo-1532980400857-c99fe3968aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ];

    const basicFeatures: PricingFeature[] = [
        { text: "Basic CRM functionality", included: true },
        { text: "Customer database management", included: true },
        { text: "Email integration", included: true },
        { text: "Basic reporting", included: true },
        { text: "Mobile access", included: true },
        { text: "5 user licenses", included: true },
        { text: "Standard support", included: true },
        { text: "Advanced automation", included: false },
        { text: "Custom integrations", included: false },
        { text: "Advanced analytics", included: false }
    ];

    const premiumFeatures: PricingFeature[] = [
        { text: "All features in Basic Package", included: true },
        { text: "Unlimited user licenses", included: true },
        { text: "Advanced automation workflows", included: true },
        { text: "Custom integrations", included: true },
        { text: "Advanced analytics & reporting", included: true },
        { text: "API access", included: true },
        { text: "24/7 Priority support", included: true }
    ];

    return (
        <ServicePageLayout
            title="Custom CRM Development"
            description="Transform your customer relationship management with our tailored CRM solutions"
            heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        >
            <section className="py-20 relative">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
                </div>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            CRM Features & Benefits
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover how our CRM solutions can streamline your business operations
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

            <section className="py-20 relative section-fade-in">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            Client Success Stories
                        </h2>
                        <p className="text-lg text-gray-600">
                            See how our CRM solutions have helped businesses grow
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

            <section className="py-20 relative section-fade-in">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            CRM Solution Packages
                        </h2>
                        <p className="text-lg text-gray-600">
                            Choose the right CRM package for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingPackage 
                            title="Basic CRM Package" 
                            price="$2,500 USD" 
                            period="month"
                            description="Perfect for small businesses getting started with CRM"
                            features={basicFeatures}
                            ctaText="Get Started"
                        />
                        
                        <PricingPackage 
                            title="Enterprise CRM Package" 
                            price="$5,000 USD"
                            period="month"
                            description="Advanced features for growing businesses"
                            features={premiumFeatures}
                            ctaText="Contact Us"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 relative section-fade-in">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            CRM Technologies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Built with modern technologies for optimal performance
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-4">Frontend Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">React</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Angular</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Vue.js</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">TypeScript</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Redux</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">GraphQL</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">Backend Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Node.js</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Python</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">.NET</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">PostgreSQL</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">MongoDB</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Redis</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <img 
                                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                                    alt="CRM Development Process" 
                                    className="rounded-lg w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 relative section-fade-in">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Common questions about our CRM development services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">How long does CRM implementation take?</h3>
                            <p className="text-gray-600 mb-4">
                                Implementation timeline varies based on complexity, typically ranging from 2-6 months for full deployment.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Can you customize the CRM to our needs?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we specialize in creating custom CRM solutions tailored to your specific business processes and requirements.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What about data migration?</h3>
                            <p className="text-gray-600 mb-4">
                                We handle complete data migration from your existing systems, ensuring no data loss during the transition.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Is training provided?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we provide comprehensive training for your team to ensure effective use of the new CRM system.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What support do you offer?</h3>
                            <p className="text-gray-600 mb-4">
                                We provide ongoing technical support and maintenance to ensure your CRM system runs smoothly.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Can the CRM scale with our business?</h3>
                            <p className="text-gray-600 mb-4">
                                Our CRM solutions are built to scale, accommodating your business growth and evolving needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteFormSection />
        </ServicePageLayout>
    );
};

export default CrmDevelopment;
