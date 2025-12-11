import React from 'react';
import { IconBookOpen } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <IconBookOpen className="w-6 h-6 text-teal-500" />
            <span className="text-white font-bold text-xl">Semence</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-teal-500 transition-colors">Instagram</a>
            <a href="#" className="hover:text-teal-500 transition-colors">YouTube</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Semence. Conteúdo livre para reprodução (Creative Commons).</p>
          <p className="mt-2 md:mt-0">Desenvolvido para expandir o Reino.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;