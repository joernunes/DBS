import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Scriptures from './components/Scriptures';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import { Scripture, Language } from './types';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  
  // Initialize language from localStorage or default to 'pt'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dbs_language');
    return (saved === 'pt' || saved === 'en' || saved === 'fr') ? saved : 'pt';
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

  // Renderização das Views
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

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Scriptures 
          onOpenStudy={handleOpenStudy} 
          onOpenGuide={handleOpenGuide}
          language={language}
          setLanguage={setLanguage}
          completedStudies={completedStudies}
        />
      </main>
    </div>
  );
}

export default App;