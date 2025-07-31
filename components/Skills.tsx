import React from 'react';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sora font-bold text-white">Services</h2>
          <p className="text-lg text-brand-muted mt-2">What I can offer to help you achieve your goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
                <div 
                  key={index} 
                  className="bg-brand-card rounded-xl p-8 border border-brand-border shadow-lg text-center transition-transform duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms`}}
                >
                    <div className="inline-block p-4 bg-brand-dark rounded-full border border-brand-border mb-4">
                        <IconComponent className="w-8 h-8 text-brand-primary" />
                    </div>
                  <h3 className="text-xl font-sora font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-brand-muted">{service.description}</p>
                </div>
            );
          })}
        </div>
    </section>
  );
};

export default Services;