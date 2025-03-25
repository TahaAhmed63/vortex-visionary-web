
import React, { ReactNode } from 'react';

interface ServiceFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceFeature = ({ icon, title, description }: ServiceFeatureProps) => {
  return (
    <div className="feature-card group">
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pinkish-red/10 text-pinkish-red transition-all duration-300 group-hover:bg-pinkish-red group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceFeature;
