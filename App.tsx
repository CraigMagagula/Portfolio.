
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Experience from './components/Experience';
import { featuredProjects, servicesList, socialLinks, navLinks } from './constants';
import { generatePresentationOutline } from './services/geminiService';
import { marked } from 'marked';
import type { Project } from './types';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-brand-primary animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-brand-primary animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 rounded-full bg-brand-primary animate-pulse [animation-delay:0.4s]"></div>
    </div>
);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [isModalLoading, setIsModalLoading] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
    setModalTitle('');
  };

  const handleGeneratePresentation = async (project: Project) => {
    setIsModalOpen(true);
    setModalTitle(`Presentation Outline for "${project.title}"`);
    setIsModalLoading(true);
    setModalContent('');

    try {
      const outline = await generatePresentationOutline(project);
      const htmlContent = marked(outline) as string;
      setModalContent(htmlContent);
    } catch (error) {
      console.error(error);
      setModalContent('<p class="text-red-400">Sorry, there was an error generating the presentation. Please try again later.</p>');
    } finally {
      setIsModalLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-brand-dark font-poppins">
       <style>{`
          .prose-styles h1, .prose-styles h2, .prose-styles h3, .prose-styles h4, .prose-styles h5, .prose-styles h6 {
            color: #FFFFFF;
            font-family: 'Sora', sans-serif;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
          }
          .prose-styles h1 { font-size: 1.875rem; }
          .prose-styles h2 { font-size: 1.5rem; }
          .prose-styles h3 { font-size: 1.25rem; }
          .prose-styles p {
            margin-bottom: 1em;
            color: #A3A3B5;
            line-height: 1.6;
          }
          .prose-styles ul {
            list-style-type: disc;
            padding-left: 1.5em;
            margin-bottom: 1em;
            color: #A3A3B5;
          }
          .prose-styles li {
            margin-bottom: 0.5em;
          }
          .prose-styles strong, .prose-styles b {
            color: #FFFFFF;
          }
          .prose-styles code {
            background-color: #13131A;
            color: #C13584;
            padding: 0.2em 0.4em;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.9em;
          }
        `}</style>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        {isModalLoading ? (
            <div className="flex justify-center items-center h-64">
                <LoadingSpinner />
            </div>
        ) : (
            <div className="prose-styles" dangerouslySetInnerHTML={{ __html: modalContent }} />
        )}
      </Modal>

      <Header navLinks={navLinks} socialLinks={socialLinks} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Services services={servicesList} />
        <Experience />
        <Projects projects={featuredProjects} onGeneratePresentation={handleGeneratePresentation} />
      </main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
};

export default App;
