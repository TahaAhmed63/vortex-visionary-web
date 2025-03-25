import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

export interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPackageProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  highlighted?: boolean;
  popular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

const PricingPackage = ({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  popular = false,
  ctaText = "Get Started",
  onCtaClick
}: PricingPackageProps) => {
  return (
    <Card className={`relative h-full transition-transform duration-300 hover:scale-102 ${
      highlighted ? 'border-2 border-pinkish-red shadow-xl shadow-pinkish-red/20' : 'border-gray-800'
    } ${popular ? 'ring-2 ring-pinkish-red' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pinkish-red text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
          Most Popular
        </div>
      )}
      
      <CardHeader className="pb-2">
        <h3 className="text-2xl font-bold mb-1 text-gray-100">{title}</h3>
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-extrabold bg-gradient-to-r from-pinkish-red to-pinkish-red-light bg-clip-text text-transparent">
            {price}
          </span>
          {period && <span className="text-gray-400 text-sm">/{period}</span>}
        </div>
        {description && (
          <p className="text-gray-400 text-base mt-3">{description}</p>
        )}
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-3.5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`mr-2.5 h-5 w-5 flex-shrink-0 ${
                feature.included ? 'text-pinkish-red' : 'text-gray-600'
              }`} />
              <span className={`text-base ${
                feature.included ? 'text-gray-200' : 'text-gray-500 line-through'
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          size="lg"
          className={`w-full text-lg font-semibold ${
            highlighted ? 'bg-pinkish-red hover:bg-pinkish-red/90' : ''
          }`}
          onClick={onCtaClick || (() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }))}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingPackage;