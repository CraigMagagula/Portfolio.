import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onGeneratePresentation: (project: Project) => void;
  animationDelay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onGeneratePresentation, animationDelay }) => {
  return (
    <div 
        className="bg-brand-card rounded-xl overflow-hidden shadow-lg border border-brand-border flex flex-col transition-transform duration-300 hover:-translate-y-2 animate-fade-in"
        style={{ animationDelay: `${animationDelay}ms`}}
    >
      <img className="h-52 w-full object-cover" src={project.image} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-sora font-bold text-white mb-2">{project.title}</h3>
        <p className="text-brand-muted text-sm mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="bg-brand-dark text-brand-primary border border-brand-border text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-brand-border space-y-2">
            <button
                onClick={() => onGeneratePresentation(project)}
                className="w-full bg-brand-primary text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity text-sm"
            >
                ✨ Generate Presentation
            </button>
            <div className="flex justify-between gap-2">
                 <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="text-center w-full bg-brand-border text-brand-muted font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors text-sm">
                    Source Code
                </a>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-center w-full bg-brand-border text-brand-muted font-semibold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors text-sm">
                    Live Demo
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;