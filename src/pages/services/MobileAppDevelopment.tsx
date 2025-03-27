import React, { useEffect } from 'react';
import { ArrowRight, Users, TrendingUp, Server, Smartphone, Tablet, Zap, Shield, Globe, Palette, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ServicePageLayout from '@/components/layout/ServicePageLayout';

import PricingPackage, { PricingFeature } from '@/components/services/PricingPackage';
import ServiceFeature from '@/components/services/ServiceFeature';
import Testimonial from '@/components/services/Testimonial';
import QuoteFormSection from '@/components/sections/QuoteFormSection';

const MobileAppDevelopment = () => {
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
            icon: <Smartphone className="w-7 h-7" />,
            title: "Cross-Platform Development",
            description: "Build once, deploy everywhere with iOS and Android compatibility.",
        },
        {
            icon: <Zap className="w-7 h-7" />,
            title: "High Performance",
            description: "Optimized code for smooth, fast-running mobile applications.",
        },
        {
            icon: <Shield className="w-7 h-7" />,
            title: "Security First",
            description: "Built-in security features to protect user data and privacy.",
        },
        {
            icon: <Globe className="w-7 h-7" />,
            title: "Offline Functionality",
            description: "Apps that work seamlessly with or without internet connection.",
        },
        {
            icon: <Palette className="w-7 h-7" />,
            title: "Custom UI/UX Design",
            description: "Beautiful, intuitive interfaces tailored to your brand.",
        },
        {
            icon: <Cpu className="w-7 h-7" />,
            title: "API Integration",
            description: "Seamless integration with backend services and third-party APIs.",
        }
    ];

    const testimonials = [
        {
            quote: "They delivered our mobile app ahead of schedule and under budget. The user feedback has been overwhelmingly positive.",
            author: "David Zhang",
            company: "FitTech Solutions",
            rating: 5,
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            quote: "Our mobile app has transformed our business. The team's expertise in both iOS and Android development was invaluable.",
            author: "Sarah Martinez",
            company: "EcoDelivery",
            rating: 5,
            image: "https://images.unsplash.com/photo-1532980400857-c99fe3968aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
    ];

    const basicFeatures: PricingFeature[] = [
        { text: "Native iOS or Android app", included: true },
        { text: "Basic UI/UX design", included: true },
        { text: "User authentication", included: true },
        { text: "Push notifications", included: true },
        { text: "Basic API integration", included: true },
        { text: "App store submission", included: true },
        { text: "3 months support", included: true },
        { text: "Advanced features", included: false },
        { text: "Custom animations", included: false },
        { text: "Analytics integration", included: false }
    ];

    const premiumFeatures: PricingFeature[] = [
        { text: "All Basic Package features", included: true },
        { text: "Both iOS and Android apps", included: true },
        { text: "Advanced UI/UX design", included: true },
        { text: "Custom animations", included: true },
        { text: "Analytics integration", included: true },
        { text: "Offline functionality", included: true },
        { text: "12 months support", included: true }
    ];

    return (
        <ServicePageLayout
            title="Mobile App Development"
            description="Transform your ideas into powerful mobile applications"
            heroImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        >
            <section className="py-20 relative">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pinkish-red/20 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pinkish-red/10 rounded-full blur-[100px] opacity-20"></div>
                </div>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 section-fade-in">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                            App Development Features
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create powerful, user-friendly mobile applications for your business
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
                            See how our mobile apps have helped businesses grow
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
                            Development Packages
                        </h2>
                        <p className="text-lg text-gray-600">
                            Affordable solutions for your mobile app needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <PricingPackage 
                            title="Basic App Package" 
                            price="$8,000 USD" 
                            period="one-time"
                            description="Perfect for MVPs and simple applications"
                            features={basicFeatures}
                            ctaText="Get Started"
                        />
                        
                        <PricingPackage 
                            title="Premium App Package" 
                            price="$15,000 USD"
                            period="one-time"
                            description="Full-featured applications for both platforms"
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
                            Development Technologies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Built with modern mobile technologies
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-4">Mobile Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">React Native</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Flutter</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Swift</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Kotlin</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Firebase</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">AWS</span>
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-gray-600 mt-8 mb-4">Backend Technologies</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Node.js</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">MongoDB</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">GraphQL</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">REST APIs</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Socket.io</span>
                                    </div>
                                    <div className="bg-pinkish-red/10 p-3 rounded-md text-center">
                                        <span className="text-gray-600">Redis</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <img 
                                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                                    alt="Mobile App Development Process" 
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
                            Common questions about our mobile app development services
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">How long does it take to develop an app?</h3>
                            <p className="text-gray-600 mb-4">
                                Basic apps typically take 2-3 months, while complex apps may take 4-6 months for development.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Do you provide app maintenance?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we offer ongoing maintenance and support to keep your app running smoothly.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Will my app work on both iOS and Android?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we can develop for both platforms using cross-platform technologies or native development.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">What about app store submission?</h3>
                            <p className="text-gray-600 mb-4">
                                We handle the entire app store submission process for both iOS and Android platforms.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Do you provide updates?</h3>
                            <p className="text-gray-600 mb-4">
                                Yes, we provide regular updates and feature additions based on your needs and user feedback.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Can you help with app marketing?</h3>
                            <p className="text-gray-600 mb-4">
                                We offer basic ASO (App Store Optimization) and can recommend marketing strategies for your app.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteFormSection />
        </ServicePageLayout>
    );
};

export default MobileAppDevelopment;
