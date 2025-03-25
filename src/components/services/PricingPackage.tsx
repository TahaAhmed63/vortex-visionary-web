
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
  popular?: boolean; // Add this optional prop
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
  ctaText = "Get Started",
  onCtaClick
}: PricingPackageProps) => {
  return (
    <Card className={`relative h-full ${
      highlighted ? 'border-pinkish-red border-2 shadow-lg shadow-pinkish-red/10' : ''
    }`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pinkish-red to-pinkish-red-light text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
          Popular
        </div>
      )}
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-400">/{period}</span>}
        </div>
        {description && (
          <p className="text-gray-400 text-sm mt-3">{description}</p>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`mr-2 h-5 w-5 flex-shrink-0 ${
                feature.included ? 'text-pinkish-red' : 'text-gray-500'
              }`} />
              <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={highlighted ? "default" : "outline"}
          className="w-full" 
          onClick={onCtaClick || (() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' }))}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingPackage;
