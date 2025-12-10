import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Scriptures from './components/Scriptures';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import MorningMeditation from './components/MorningMeditation';
import { IconBookOpen, IconSun } from './components/Icons';
import { Scripture, Language } from './types';

type ViewMode = 'dbs' | 'meditation';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('dbs');
  
  // Initialize language from localStorage or default to 'fr' (French)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dbs_language');
    return (saved === 'pt' || saved === 'en' || saved === 'fr') ? saved : 'fr';
  });

  // Initialize completed studies from localStorage
  const [completedStudies, setCompletedStudies] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('dbs_completed_studies');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
  });

  // Custom setter for language to sync with localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dbs_language', lang);
  };

  const toggleStudyCompletion = (reference: string) => {
    setCompletedStudies(prev => {
        const isCompleted = prev.includes(reference);
        const newCompleted = isCompleted 
            ? prev.filter(ref => ref !== reference)
            : [...prev, reference];
        
        localStorage.setItem('dbs_completed_studies', JSON.stringify(newCompleted));
        return newCompleted;
    });
  };

  // Manipular o botão "Voltar" do navegador (History API)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Se não houver estado (ou seja, voltamos para a raiz), resetamos para a Home
      if (!event.state) {
        setActiveStudy(null);
        setIsGuideOpen(false);
      } 
      // Se houver estado, poderíamos restaurar aqui, mas para este app simples
      // vamos assumir que 'back' sempre volta para a Home.
      else if (event.state.page === 'home') {
        setActiveStudy(null);
        setIsGuideOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Substituir o estado inicial para garantir que temos um ponto de retorno
    window.history.replaceState({ page: 'home' }, '', '');

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Restaurar a posição da rolagem ao voltar para a Home
  useLayoutEffect(() => {
    if (!activeStudy && !isGuideOpen) {
      window.scrollTo(0, savedScrollPosition);
    }
  }, [activeStudy, isGuideOpen, savedScrollPosition]);

  // Funções de Navegação
  const handleOpenStudy = (study: Scripture) => {
    setSavedScrollPosition(window.scrollY);
    window.history.pushState({ page: 'study' }, '', `#estudo`);
    setActiveStudy(study);
    setIsGuideOpen(false);
  };

  const handleOpenGuide = () => {
    setSavedScrollPosition(window.scrollY);
    window.history.pushState({ page: 'guide' }, '', `#guia`);
    setIsGuideOpen(true);
    setActiveStudy(null);
  };

  const handleBack = () => {
    // Usar history.back() dispara o evento popstate, que reseta o estado corretamente
    window.history.back();
  };

  // Renderização das Views de Página Inteira (StudyPage ou GuidePage)
  if (activeStudy) {
    return (
      <StudyPage 
        study={activeStudy} 
        onBack={handleBack} 
        language={language}
        setLanguage={setLanguage}
        isCompleted={completedStudies.includes(activeStudy.reference)}
        onToggleCompletion={() => toggleStudyCompletion(activeStudy.reference)}
      />
    );
  }

  if (isGuideOpen) {
    return (
        <GuidePage 
          onBack={handleBack} 
          language={language}
          setLanguage={setLanguage}
        />
    );
  }

  // Visualização Principal (Home) com Dynamic Island
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col relative">
      <main className="flex-grow">
        {viewMode === 'dbs' ? (
             <Scriptures 
             onOpenStudy={handleOpenStudy} 
             onOpenGuide={handleOpenGuide}
             language={language}
             setLanguage={setLanguage}
             completedStudies={completedStudies}
           />
        ) : (
            <MorningMeditation 
              language={language} 
              setLanguage={setLanguage}
            />
        )}
      </main>

      {/* Dynamic Island Navigation */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className="bg-gray-900/90 backdrop-blur-xl text-white p-1.5 rounded-full shadow-2xl flex items-center gap-1 pointer-events-auto transform transition-all hover:scale-105 border border-white/10">
              <button 
                onClick={() => setViewMode('dbs')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm
                ${viewMode === 'dbs' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              >
                  <IconBookOpen className="w-4 h-4" />
                  <span>DBS</span>
              </button>
              
              <div className="w-px h-4 bg-gray-700 mx-1"></div>

              <button 
                onClick={() => setViewMode('meditation')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm
                ${viewMode === 'meditation' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
              >
                  <IconSun className="w-4 h-4" />
                  <span>MCT</span>
              </button>
          </div>
      </div>
    </div>
  );
}

export default App;