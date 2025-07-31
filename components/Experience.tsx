
import React from 'react';
import { JSIcon, NextJSIcon, HTML5Icon, CSS3Icon, ReactIcon } from './icons/TechIcons';

const technologies = [
  { name: 'JavaScript', Icon: JSIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'HTML5', Icon: HTML5Icon },
  { name: 'CSS3', Icon: CSS3Icon },
  { name: 'React', Icon: ReactIcon },
];

const Experience = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-muted uppercase mb-12">
        Experience With
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
        {technologies.map(({ name, Icon }, index) => (
          <div 
            key={name} 
            title={name} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 150}ms`}}
          >
            <Icon className="h-12 w-12 md:h-14 md:w-14 text-brand-muted transition-colors duration-300 hover:text-white" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
