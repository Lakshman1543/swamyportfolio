
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'education', 'projects', 'certifications', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-lg py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-gradient">
          Lakshmana Swamy
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-2 px-4 transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-neon-purple'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Lakshman1543"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshmana-swamy-49a428255/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:2200030326cseh@gmail.com"
            className="p-2 rounded-lg glass hover:neon-glow transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
