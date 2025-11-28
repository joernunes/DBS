import React, { useState, useEffect, useLayoutEffect } from 'react';
import Scriptures from './components/Scriptures';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import { Scripture } from './types';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

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
      />
    );
  }

  if (isGuideOpen) {
    return (
        <GuidePage onBack={handleBack} />
    );
  }

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Scriptures 
          onOpenStudy={handleOpenStudy} 
          onOpenGuide={handleOpenGuide}
        />
      </main>
    </div>
  );
}

export default App;