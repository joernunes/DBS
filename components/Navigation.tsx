import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { IconMenu, IconX, IconBookOpen } from './Icons';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => scrollToSection('hero')}
          >
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-teal-50 text-teal-700' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
              <IconBookOpen className="w-6 h-6" />
            </div>
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
              Semence
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium text-sm hover:opacity-80 transition-colors ${scrolled ? 'text-gray-600 hover:text-teal-600' : 'text-white/90 hover:text-white drop-shadow-sm'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
                onClick={() => scrollToSection('questions')}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                scrolled 
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm' 
                    : 'bg-white text-teal-700 hover:bg-gray-100 shadow-lg'
                }`}
            >
              Comece Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 md:hidden border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-2 text-gray-600 font-medium hover:text-teal-600 border-b border-gray-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('questions')}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 active:scale-95 transition-all"
          >
            Baixe o Guia PDF
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;