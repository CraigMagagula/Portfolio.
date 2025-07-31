
import React, { useState } from 'react';
import type { SocialLink } from '../types';

interface FooterProps {
    socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // This is where you would integrate with an email service like Formspree or a custom backend.
    // For this demo, we'll just simulate a success response.
    const success = Math.random() > 0.1; // 90% success rate for demo

    if (success) {
      setSubmitStatus('success');
      e.currentTarget.reset();
    } else {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);

    // Hide status message after 5 seconds
    setTimeout(() => {
        setSubmitStatus(null);
    }, 5000);
  };

  return (
    <>
    <section id="contact" className="py-24 bg-brand-card/50 border-t border-b border-brand-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-sora font-bold text-white">Let's Work Together</h2>
                <p className="text-lg text-brand-muted mt-2">Have a project in mind? I'd love to hear about it.</p>
            </div>
            <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                 <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" required className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                 <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" rows={5} placeholder="Your Message" required className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                </div>
                <div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brand-accent-1 to-brand-accent-2 text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                <div className="h-6 mt-4 text-center">
                    {submitStatus === 'success' && (
                        <p className="text-green-400 animate-fade-in">Thank you for your message! I'll get back to you soon.</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-400 animate-fade-in">Sorry, there was an error. Please try again later.</p>
                    )}
                </div>
            </form>
        </div>
    </section>
    <footer className="bg-brand-dark">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
         <a href="#home" className="text-xl font-sora font-bold text-white">
            Craig Magagula
         </a>
        <p className="text-sm text-brand-muted">&copy; {new Date().getFullYear()} Craig Magagula. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
            {socialLinks.map(link => {
                const IconComponent = link.icon;
                return (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-white transition-colors">
                        <span className="sr-only">{link.name}</span>
                        <IconComponent className="h-5 w-5" />
                    </a>
                );
            })}
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
