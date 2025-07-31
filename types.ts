import type { ComponentType, SVGProps } from 'react';

export type ProjectCategory = 'Web App' | 'UI/UX' | 'Mobile App';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveDemoUrl: string;
  sourceCodeUrl: string;
  category: ProjectCategory;
}

export interface Service {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface SocialLink {
  name: 'GitHub' | 'LinkedIn' | 'Twitter';
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface NavLink {
    name: string;
    href: string;
}