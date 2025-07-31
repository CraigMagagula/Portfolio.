import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
  onGeneratePresentation: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onGeneratePresentation }) => {
  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-sora font-bold text-white">Recent Work</h2>
        <p className="text-lg text-brand-muted mt-2">Here's a selection of my projects. Check them out!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onGeneratePresentation={onGeneratePresentation}
            animationDelay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;