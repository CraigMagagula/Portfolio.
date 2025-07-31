import React, { useState } from 'react';
import type { NavLink, SocialLink } from '../types';

interface HeaderProps {
    navLinks: NavLink[];
    socialLinks: SocialLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks, socialLinks}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
    if(isOpen) setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-dark/70 backdrop-blur-lg z-50 border-b border-brand-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-sora font-bold text-white">
            Craig Magagula
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-brand-muted hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
             {socialLinks.map(link => {
                const IconComponent = link.icon;
                return (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-white transition-colors">
                        <span className="sr-only">{link.name}</span>
                        <IconComponent className="h-5 w-5" />
                    </a>
                );
            })}
             <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 text-white font-semibold py-2 px-5 rounded-md hover:opacity-90 transition-opacity text-sm"
              >
                Contact Me
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-card inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-brand-muted hover:bg-brand-card hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-brand-border/50 pt-4 mt-4">
                 <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="w-full text-center bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 text-white font-semibold py-2 px-5 rounded-md hover:opacity-90 transition-opacity text-sm block"
                  >
                    Contact Me
                </a>
                <div className="flex justify-center space-x-6 mt-4">
                {socialLinks.map(link => {
                    const IconComponent = link.icon;
                    return (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-white transition-colors">
                            <span className="sr-only">{link.name}</span>
                            <IconComponent className="h-6 w-6" />
                        </a>
                    );
                })}
                </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;