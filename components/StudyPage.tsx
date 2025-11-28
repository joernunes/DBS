import * as React from 'react';
import { useEffect, useState } from 'react';
import { IconArrowLeft, IconPrinter } from './Icons';
import { LocalizedStudyContent } from '../types';
import { STUDY_CONTENTS } from '../constants';

interface StudyPageProps {
  study: { title: string; reference: string }; 
  onBack: () => void;
}

type Language = 'pt' | 'en' | 'fr';

const UI_LABELS = {
  pt: {
    back: "Voltar",
    print: "Imprimir",
    studyLabel: "Estudo Bíblico",
    godTitle: "Sobre Deus",
    godDesc: "O que aprendemos sobre o caráter de Deus nesta história?",
    peopleTitle: "Sobre Pessoas",
    peopleDesc: "O que aprendemos sobre a natureza humana?",
    obeyTitle: "Obediência",
    obeyDesc: "Se isso é verdade, o que vai mudar na minha vida esta semana?",
    shareTitle: "Compartilhar",
    shareDesc: "Com quem vou compartilhar essa história?",
    footer: "DBS — Discípulos Fazendo Discípulos",
    footerDesc: "Texto bíblico para fins de estudo e descoberta em comunidade."
  },
  en: {
    back: "Back",
    print: "Print",
    studyLabel: "Bible Study",
    godTitle: "About God",
    godDesc: "What do we learn about God's character in this story?",
    peopleTitle: "About People",
    peopleDesc: "What do we learn about human nature?",
    obeyTitle: "Obedience",
    obeyDesc: "If this is true, what will change in my life this week?",
    shareTitle: "Share",
    shareDesc: "Who am I going to share this story with?",
    footer: "DBS — Disciples Making Disciples",
    footerDesc: "Bible text for study and discovery in community."
  },
  fr: {
    back: "Retour",
    print: "Imprimer",
    studyLabel: "Étude Biblique",
    godTitle: "Sur Dieu",
    godDesc: "Qu'apprenons-nous sur le caractère de Dieu dans cette histoire ?",
    peopleTitle: "Sur les Hommes",
    peopleDesc: "Qu'apprenons-nous sur la nature humaine ?",
    obeyTitle: "Obéissance",
    obeyDesc: "Si c'est vrai, qu'est-ce qui va changer dans ma vie cette semaine ?",
    shareTitle: "Partager",
    shareDesc: "Avec qui vais-je partager cette histoire ?",
    footer: "DBS — Disciples Faisant des Disciples",
    footerDesc: "Texte biblique pour l'étude et la découverte en communauté."
  }
};

const StudyPage: React.FC<StudyPageProps> = ({ study, onBack }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get multilingual content
  const multiContent = STUDY_CONTENTS[study.reference];

  // Default fallback if study not found
  const defaultContent: LocalizedStudyContent = {
    title: study.title,
    bibleText: [],
    quadrants: { god: [], people: [], obedience: { example: "", share: "" } }
  };

  // Get specific language content or fallback
  const content = multiContent ? multiContent[language] : defaultContent;
  const labels = UI_LABELS[language];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation Bar - Sticky Top */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 p-4 sticky top-0 z-50 flex justify-between items-center print:hidden">
         <div className="flex items-center gap-4">
             <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm group"
            >
              <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{labels.back}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${language === 'pt' ? 'bg-white shadow-sm text-teal-700' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    PT
                </button>
                <button 
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${language === 'en' ? 'bg-white shadow-sm text-teal-700' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    EN
                </button>
                <button 
                    onClick={() => setLanguage('fr')}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${language === 'fr' ? 'bg-white shadow-sm text-teal-700' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    FR
                </button>
            </div>
         </div>
        
        <div className="font-bold text-gray-900 tracking-tight text-sm md:text-base hidden md:block">DBS</div>
        
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors font-medium text-sm"
        >
          <IconPrinter className="w-4 h-4" />
          <span className="hidden sm:inline">{labels.print}</span>
        </button>
      </div>

      {/* Main Content Area - Full Bleed */}
      <main className="w-full">
        
        {/* Header Section */}
        <header className="py-16 md:py-24 px-6 text-center border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              {labels.studyLabel}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 tracking-tight leading-tight">
              {content.title}
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
                  
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-teal-800">{labels.godTitle}</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-teal-200 pl-6 leading-relaxed">
                        {labels.godDesc}
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
                   
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-sky-800">{labels.peopleTitle}</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-sky-200 pl-6 leading-relaxed">
                        {labels.peopleDesc}
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
                  
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-orange-800">{labels.obeyTitle}</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-orange-200 pl-6 leading-relaxed">
                        {labels.obeyDesc}
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
                   
                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tight text-slate-700">{labels.shareTitle}</h2>
                    <p className="text-gray-600 text-xl font-serif italic mb-10 border-l-4 border-slate-200 pl-6 leading-relaxed">
                        {labels.shareDesc}
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
            <p className="mb-3 font-semibold text-gray-400">{labels.footer}</p>
            <p className="opacity-60">{labels.footerDesc}</p>
        </footer>

      </main>
    </div>
  );
};

export default StudyPage;