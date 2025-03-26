
import React, { ReactNode } from 'react';

interface ServiceFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}

const ServiceFeature = ({ icon, title, description, image }: ServiceFeatureProps) => {
  return (
    <div className="feature-card group">
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pinkish-red/10 text-pinkish-red transition-all duration-300 group-hover:bg-pinkish-red group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold ">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {image && (
          <div className="mt-auto pt-3">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              style={{ aspectRatio: '16/9' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceFeature;
