import type { Project, Service, SocialLink, NavLink } from './types';
import { GithubIcon, LinkedinIcon, TwitterIcon, CodeIcon, LayersIcon, SmartphoneIcon } from './components/icons/SocialIcons';

export const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
];

export const servicesList: Service[] = [
    {
        icon: CodeIcon,
        title: 'Web Development',
        description: 'Creating stunning and responsive websites from scratch using modern technologies like React, Next.js, and Tailwind CSS.'
    },
    {
        icon: LayersIcon,
        title: 'UI/UX Design',
        description: 'Designing intuitive and user-friendly interfaces that provide an exceptional user experience.'
    },
    {
        icon: SmartphoneIcon,
        title: 'App Development',
        description: 'Building robust and scalable mobile applications for both iOS and Android platforms.'
    }
];

export const featuredProjects: Project[] = [
    {
    id: 4,
    title: 'SmartEd - AI Learning Platform',
    description: 'An adaptive learning platform that uses AI to create personalized quizzes and study materials for students.',
    longDescription: 'SmartEd is an innovative educational platform designed to enhance the learning experience. It leverages AI to dynamically generate quizzes based on user-provided text or topics. Students can receive instant feedback, track their progress, and engage with personalized content, making studying more efficient and effective. Built with Next.js and integrated with a powerful AI model for content generation.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'React', 'AI', 'Tailwind CSS', 'Vercel'],
    liveDemoUrl: 'https://smart-ed-two.vercel.app/',
    sourceCodeUrl: 'https://github.com/CraigMagagula/smart-ed',
    category: 'Web App',
  },
  {
    id: 5,
    title: 'Edu-Tech Interactive Learning',
    description: 'A modern e-learning platform featuring interactive lessons, quizzes, and progress tracking to enhance student engagement.',
    longDescription: 'Edu-Tech is a comprehensive e-learning solution designed to make education more accessible and engaging. It provides students with a rich library of interactive courses, complete with video lessons, hands-on exercises, and progress tracking. The platform is built with a focus on user experience, ensuring that learners can easily navigate content and monitor their development. Key technologies include React for the dynamic frontend and a robust backend for content management.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'E-learning', 'JavaScript', 'UI/UX'],
    liveDemoUrl: 'https://edu-tech-sand.vercel.app/',
    sourceCodeUrl: 'https://github.com/CraigMagagula/edu-tech-platform',
    category: 'Web App',
  },
  {
    id: 6,
    title: 'AI-Powered Resume Builder',
    description: 'A dynamic, interactive resume builder that helps you create and customize professional resumes with AI-powered suggestions.',
    longDescription: 'This project is a next-generation resume builder that provides a seamless and interactive experience for creating professional resumes. It features multiple templates, real-time previews, and leverages AI to provide suggestions for improving content and tailoring your resume to specific job descriptions. Built with React and designed for a modern, clean user experience to help users stand out.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'AI', 'JavaScript', 'UI/UX', 'Vercel'],
    liveDemoUrl: 'https://resume-2-0-taupe.vercel.app/',
    sourceCodeUrl: 'https://github.com/CraigMagagula/resume-builder-2.0',
    category: 'Web App',
  },
  {
    id: 7,
    title: 'Sentiment Analysis App',
    description: 'A web application that analyzes the sentiment of a given text, built with Streamlit and NLP techniques.',
    longDescription: "This powerful tool leverages Natural Language Processing (NLP) to analyze text and determine whether its sentiment is positive, negative, or neutral. It's built using Python and the Streamlit library for a fast, interactive user interface, making it easy to get instant sentiment insights. Ideal for analyzing customer feedback, social media comments, and more.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Streamlit', 'NLP', 'Sentiment Analysis'],
    liveDemoUrl: 'https://sentiment-analysis-week.streamlit.app/',
    sourceCodeUrl: 'https://github.com/CraigMagagula/sentiment-analysis-streamlit',
    category: 'Web App',
  },
];


export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/CraigMagagula', icon: GithubIcon },
    { name: 'LinkedIn', url: '#', icon: LinkedinIcon },
    { name: 'Twitter', url: '#', icon: TwitterIcon },
];