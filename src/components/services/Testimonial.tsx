
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company?: string;
  rating?: number;
  image?: string;
}

const Testimonial = ({ quote, author, company, rating = 5, image }: TestimonialProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-grow flex flex-col">
        {/* Stars */}
        {rating > 0 && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} 
              />
            ))}
          </div>
        )}
        
        {/* Quote */}
        <blockquote className="text-gray-300 italic mb-6 flex-grow">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center mt-auto">
          {image && (
            <div className="mr-3">
              <img 
                src={image} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-semibold text-white">{author}</div>
            {company && <div className="text-sm text-gray-400">{company}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
