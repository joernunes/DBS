import React, { useEffect } from 'react';
import { IconArrowLeft, IconArrowUp, IconUsers, IconCheckCircle, IconMessageCircle, IconPrinter } from './Icons';
import { StudyContent } from '../types';
import { STUDY_CONTENTS } from '../constants';

interface StudyPageProps {
  study: { title: string; reference: string }; // Using simplified type for props to match caller
  onBack: () => void;
}

const StudyPage: React.FC<StudyPageProps> = ({ study, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find content or use default structure if not found (fallback)
  const content: StudyContent = STUDY_CONTENTS[study.reference] || {
    bibleText: [],
    quadrants: {
      god: [],
      people: [],
      obedience: { example: "", share: "" }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation Bar - Sticky Top */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 p-4 sticky top-0 z-50 flex justify-between items-center print:hidden">
         <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm group"
        >
          <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar
        </button>
        <div className="font-bold text-gray-900 tracking-tight text-sm md:text-base">DBS</div>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors font-medium text-sm"
        >
          <IconPrinter className="w-4 h-4" />
          <span className="hidden sm:inline">Imprimir</span>
        </button>
      </div>

      {/* Main Content Area - Full Bleed */}
      <main className="w-full">
        
        {/* Header Section */}
        <header className="py-16 md:py-24 px-6 text-center border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Estudo Bíblico
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 tracking-tight leading-tight">
              {study.title}
            </h1>
            <p className="text-teal-700 font-sans uppercase tracking-widest text-sm font-bold">
              {study.reference}
            </p>
          </div>
        </header>

        {/* Bible Text Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="font-serif text-xl md:text-2xl leading-loose text-gray-800 antialiased space-y-8">
                  {content.bibleText.length > 0 ? (
                    content.bibleText.map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.verses.map((verse, vIndex) => (
                          <React.Fragment key={vIndex}>
                            <span className="text-sm font-sans font-bold text-gray-400 mr-2 select-none align-text-top">
                              {verse.num}
                            </span>
                            {verse.text}{" "}
                          </React.Fragment>
                        ))}
                      </p>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 italic">Texto bíblico não carregado para este estudo.</p>
                  )}
                </div>
            </div>
        </section>

        {/* Quadrants - Full Bleed Grid */}
        <section className="grid md:grid-cols-2 min-h-[60vh]">
            
            {/* TEAL (Green-Water) - GOD */}
            <div className="bg-teal-50 text-gray-800 p-10 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-teal-100">
                <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-teal-800">
                        <IconArrowUp className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Cima</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-teal-800">Sobre Deus</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-teal-200 pl-6 leading-relaxed">
                        O que aprendemos sobre o caráter de Deus nesta história?
                    </p>
                    
                    <ul className="space-y-6 text-lg md:text-xl font-medium text-gray-700">
                        {content.quadrants.god.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                              <span className="text-teal-400 mt-2 text-xs">●</span>
                              <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* SKY BLUE - PEOPLE */}
            <div className="bg-sky-50 text-gray-800 p-10 md:p-20 flex flex-col justify-center">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-sky-800">
                        <IconUsers className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Cima</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-sky-800">Sobre Pessoas</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-sky-200 pl-6 leading-relaxed">
                        O que aprendemos sobre a natureza humana?
                    </p>
                    
                    <ul className="space-y-6 text-lg md:text-xl font-medium text-gray-700">
                        {content.quadrants.people.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                              <span className="text-sky-400 mt-2 text-xs">●</span>
                              <span>{item}</span>
                          </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ORANGE - OBEY */}
            <div className="bg-orange-50 text-gray-800 p-10 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-orange-100">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-orange-800">
                        <IconCheckCircle className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Frente</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-orange-800">Obediência</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-orange-200 pl-6 leading-relaxed">
                        Se isso é verdade, o que vai mudar na minha vida esta semana?
                    </p>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
                        <p className="font-serif text-2xl leading-relaxed italic text-gray-700">
                            "{content.quadrants.obedience.example}"
                        </p>
                    </div>
                </div>
            </div>

            {/* SLATE/GRAY - SHARE */}
            <div className="bg-slate-50 text-gray-800 p-10 md:p-20 flex flex-col justify-center">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-slate-700">
                        <IconMessageCircle className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Frente</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-slate-700">Compartilhar</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-slate-200 pl-6 leading-relaxed">
                        Com quem vou compartilhar essa história?
                    </p>
                    
                     <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <p className="font-serif text-2xl leading-relaxed italic text-gray-700">
                            "{content.quadrants.obedience.share}"
                        </p>
                    </div>
                </div>
            </div>

        </section>

        {/* Footer */}
        <footer className="bg-gray-50 text-gray-500 py-16 px-6 text-center text-sm print:hidden border-t border-gray-100">
            <p className="mb-3 font-semibold text-gray-400">DBS — Discípulos Fazendo Discípulos</p>
            <p className="opacity-60">Texto bíblico para fins de estudo e descoberta em comunidade.</p>
        </footer>

      </main>
    </div>
  );
};

export default StudyPage;