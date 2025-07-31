
import React, { useState, useEffect, useRef } from 'react';

const StatPill: React.FC<{ 
    initialValue?: number;
    value: string; 
    label: string; 
}> = ({ initialValue, value, label }) => {
    const isAnimated = typeof initialValue === 'number';
    const endValue = parseInt(value, 10);
    const duration = 1500; // Animation duration in milliseconds

    const [count, setCount] = useState(isAnimated ? initialValue : value);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isAnimated || !ref.current) return;

        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    
                    let startTimestamp: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        const currentNum = Math.floor(progress * (endValue - initialValue!) + initialValue!);
                        setCount(currentNum);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(endValue);
                        }
                    };
                    requestAnimationFrame(step);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.8 }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [isAnimated, endValue, initialValue, duration]);
    
    const displayValue = isAnimated 
        ? (count === endValue ? value : count) 
        : value;

    return (
        <div ref={ref} className="bg-brand-card/50 border border-brand-border rounded-lg px-4 py-2 text-center">
            <p className="text-2xl font-sora font-bold text-white">{displayValue}</p>
            <p className="text-sm text-brand-muted">{label}</p>
        </div>
    );
};


const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
    <section id="home" className="relative flex items-center min-h-[calc(100vh-80px)] pt-20 pb-10 md:pt-0 md:pb-0">
      <div className="grid md:grid-cols-2 items-center gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-extrabold text-white leading-tight">
            Hi, I'm Craig Magagula. <br/>A <span className="text-brand-primary">Creative Developer</span>
          </h1>
          <p className="mt-6 text-lg text-brand-muted">
            I'm a passionate developer with a knack for crafting beautiful and functional web applications. I turn ideas into reality through code.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                About Me 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#" className="bg-brand-card border border-brand-border text-white font-semibold py-3 px-8 rounded-md hover:bg-brand-border transition-colors flex items-center justify-center gap-2">
                Download CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>
          </div>
        </div>

        <div className="relative w-full h-96 flex justify-center items-center">
             <div className="absolute w-80 h-80 bg-gradient-to-br from-brand-accent-1 to-brand-accent-2 rounded-full filter blur-3xl opacity-30"></div>
             <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" 
                alt="Creative Developer Portfolio"
                className="relative rounded-lg shadow-2xl w-full max-w-lg object-cover"
            />
        </div>
      </div>
    </section>

    <section id="about" className="py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative flex justify-center items-center">
                <div className="absolute w-64 h-64 md:w-72 md:h-72 bg-brand-primary rounded-full filter blur-3xl opacity-20"></div>
                <img
                    className="relative w-64 h-64 md:w-72 md:h-72 rounded-lg object-cover shadow-lg"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
                    alt="Craig Magagula working on a project"
                />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-sora font-bold text-white">About Me</h2>
                <h3 className="text-xl font-sora font-semibold text-brand-primary mt-2">Crafting Digital Experiences</h3>
                <p className="mt-4 text-brand-muted">
                    I'm a creative Front-End Developer with a passion for integrating AI technologies into modern web applications. I specialize in crafting responsive, intuitive user interfaces that seamlessly connect with intelligent backend—making AI accessible and user-friendly.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                    <StatPill value="1" label="Year Experience" />
                    <StatPill initialValue={1} value="5+" label="Projects Completed" />
                    <StatPill value="1" label="Bootcamp Graduate" />
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Hero;