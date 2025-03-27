import React, { useEffect } from 'react';
import { ArrowRight, Brain, TrendingUp, Server, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import QuoteFormSection from '@/components/sections/QuoteFormSection';
import { Bot, Code, Lightbulb, Clock, ChartBar, CheckCircle } from 'lucide-react';

const AiDrivenSolution = () => {
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
            icon: <Brain className="w-7 h-7" />,
            title: "Machine Learning",
            description: "Advanced ML algorithms for intelligent data processing and pattern recognition.",
        },
        {
            icon: <Bot className="w-7 h-7" />,
            title: "Process Automation",
            description: "Intelligent automation of repetitive tasks and business workflows.",
        },
        {
            icon: <Server className="w-7 h-7" />,
            title: "AI Infrastructure",
            description: "Scalable infrastructure designed for AI/ML workloads and processing.",
        },
        {
            icon: <ChartBar className="w-7 h-7" />,
            title: "Predictive Analytics",
            description: "Data-driven insights and forecasting for informed decision making.",
        },
        {
            icon: <Code className="w-7 h-7" />,
            title: "Custom AI Models",
            description: "Tailored AI solutions built for your specific business needs.",
        },
        {
            icon: <CheckCircle className="w-7 h-7" />,
            title: "AI Integration",
            description: "Seamless integration of AI capabilities into existing systems.",
        }
    ];

    const testimonials = [
        {
            quote: "The AI solution has revolutionized our operations. We've seen a 60% increase in efficiency and significant cost savings.",
            author: "Sarah Johnson",
            company: "Tech Innovations Ltd",
            rating: 5,
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            quote: "Their AI-driven automation has transformed our data processing capabilities. What took days now happens in minutes.",
            author: "David Zhang",
            company: "DataFlow Systems",
            rating: 5,
            image: "https://images.unsplash.com/photo-1532980400857-c99fe3968aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ];

    const basicFeatures: PricingFeature[] = [
        { text: "Basic AI automation tools", included: true },
        { text: "Machine learning integration", included: true },
        { text: "Data processing capabilities", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "API access", included: true },
        { text: "5 AI model deployments", included: true },
        { text: "Standard support", included: true },
        { text: "Advanced AI customization", included: false },
        { text: "Custom model training", included: false },
        { text: "Advanced analytics", included: false }
    ];

    const premiumFeatures: PricingFeature[] = [
        { text: "All features in Basic Package", included: true },
        { text: "Unlimited AI model deployments", included: true },
        { text: "Advanced AI customization", included: true },
        { text: "Custom model training", included: true },
        { text: "Advanced analytics & insights", included: true },
        { text: "Full API access", included: true },
        { text: "24/7 Priority support", included: true }
    ];

    return (
        <ServicePageLayout
            title="AI-Driven Solutions"
            description="Transform your business with cutting-edge artificial intelligence and automation"
            heroImage="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        >
            <section className="py-20 relative">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
                </div>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            AI Features & Benefits
                        </h2>
                        <p className="text-lg text-gray-600">
                            Discover how our AI solutions can transform your business operations
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
                            Success Stories
                        </h2>
                        <p className="text-lg text-gray-600">
                            See how our AI solutions have transformed businesses
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
                            AI Solution Packages
                        </h2>
                        <p className="text-lg text-gray-600">
                            Choose the right AI package for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingPackage 
                            title="Basic AI Package" 
                            price="$5,000 USD" 
                            period="month"
                            description="Perfect for businesses starting with AI automation"
                            features={basicFeatures}
                            ctaText="Get Started"
                        />
                        
                        <PricingPackage 
                            title="Enterprise AI Package" 
                            price="$10,000 USD"
                            period="month"
                            description="Advanced AI features for enterprise needs"
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
                            AI Technologies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Built with cutting-edge AI and ML technologies
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-4">AI/ML Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">TensorFlow</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">PyTorch</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Scikit-learn</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">OpenAI</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Keras</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">CUDA</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">Cloud & Infrastructure</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">AWS SageMaker</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Google AI</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Azure ML</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Kubernetes</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Docker</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">MLflow</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <img 
                                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                                    alt="AI Development Process" 
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
                            Common questions about our AI solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">How quickly can AI be implemented?</h3>
                            <p className="text-gray-600 mb-4">
                                Implementation timeline varies by complexity, typically ranging from 1-3 months for initial deployment.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Can AI be customized for our needs?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we create custom AI solutions tailored to your specific business processes and requirements.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What about data security?</h3>
                            <p className="text-gray-600 mb-4">
                                We implement robust security measures and comply with industry standards to protect your data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Is training provided?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we provide comprehensive training to help your team effectively use the AI systems.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What support do you offer?</h3>
                            <p className="text-gray-600 mb-4">
                                We provide ongoing technical support and maintenance to ensure optimal AI system performance.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Can AI solutions scale with growth?</h3>
                            <p className="text-gray-600 mb-4">
                                Our AI solutions are built to scale, adapting to your growing business needs and data volume.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <QuoteFormSection />

        </ServicePageLayout>
    );
};

export default AiDrivenSolution;
