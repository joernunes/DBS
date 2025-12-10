import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Scriptures from './components/Scriptures';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import MorningMeditation from './components/MorningMeditation';
import ResourcesPage from './components/ResourcesPage';
import Home from './components/Home';
import Onboarding from './components/Onboarding'; // Import Onboarding
import SettingsModal from './components/SettingsModal'; // Import Settings Modal
import { IconBookOpen, IconSun, IconHome, IconFile, IconSettings } from './components/Icons';
import { Scripture, Language, FontSize } from './types';

type ViewMode = 'home' | 'dbs' | 'meditation' | 'resources';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // 1. Lazy Initialization para Onboarding
  const [isOnboarding, setIsOnboarding] = useState(() => {
      const completed = localStorage.getItem('dbs_onboarding_complete');
      return completed !== 'true';
  });
  
  // 2. Roteamento: Determinar ViewMode inicial baseado na URL (Hash)
  // Isso garante que ao recarregar em /#dbs, o usuário permaneça no DBS
  const getInitialViewMode = (): ViewMode => {
      const hash = window.location.hash.replace('#', '');
      if (['dbs', 'meditation', 'resources'].includes(hash)) {
          return hash as ViewMode;
      }
      // Se recarregar em uma sub-rota como #estudo ou #guia, volta para a lista (dbs)
      if (hash === 'estudo' || hash === 'guia') {
          return 'dbs';
      }
      return 'home';
  };

  const [viewMode, setViewModeState] = useState<ViewMode>(getInitialViewMode);
  
  // Initialize language lazily
  const [language, setLanguageState] = useState<Language>(() => {
      const saved = localStorage.getItem('dbs_language');
      return (saved as Language) || 'pt';
  });

  // Initialize Font Size lazily
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
      const saved = localStorage.getItem('dbs_font_size');
      return (saved as FontSize) || 'normal';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dbs_language', lang);
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('dbs_font_size', size);
  };

  const handleOnboardingComplete = (selectedLang: Language) => {
      setLanguage(selectedLang);
      localStorage.setItem('dbs_onboarding_complete', 'true');
      setIsOnboarding(false);
  };

  // Função centralizada de navegação que atualiza URL e Estado
  const navigateTo = (mode: ViewMode) => {
      setViewModeState(mode);
      setActiveStudy(null);
      setIsGuideOpen(false);
      window.scrollTo(0, 0);
      
      const newHash = mode === 'home' ? '' : `#${mode}`;
      
      // Atualiza a URL sem recarregar a página
      if (window.location.hash !== newHash) {
          // Se for home, usamos pushState com url limpa para remover o #
          if (mode === 'home') {
             window.history.pushState(null, '', window.location.pathname);
          } else {
             window.history.pushState(null, '', newHash);
          }
      }
  };

  // Monitorar Botão Voltar do Navegador e Mudanças manuais na URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      // Se a hash for uma das views principais, navega para ela
      if (['dbs', 'meditation', 'resources'].includes(hash)) {
        setViewModeState(hash as ViewMode);
        setActiveStudy(null);
        setIsGuideOpen(false);
      } 
      // Se a hash estiver vazia ou for home
      else if (hash === '' || hash === 'home') {
        setViewModeState('home');
        setActiveStudy(null);
        setIsGuideOpen(false);
      }
      // Nota: Se for 'estudo' ou 'guia', não fazemos nada aqui pois
      // o estado activeStudy/isGuideOpen controla a view, e o popstate abaixo cuida do fechamento
    };

    // Popstate lida com o botão "Voltar" do navegador
    const handlePopState = (event: PopStateEvent) => {
        // Se o usuário clicar em voltar e estava em um estudo (#estudo)
        // e agora a URL mudou (ex: voltou para #dbs), precisamos fechar o estudo
        const hash = window.location.hash;
        
        if (!hash.includes('estudo') && activeStudy) {
            setActiveStudy(null);
        }
        if (!hash.includes('guia') && isGuideOpen) {
            setIsGuideOpen(false);
        }
        
        handleHashChange();
    };

    window.addEventListener('popstate', handlePopState);
    // Adicionamos hashchange para cobrir edições manuais na URL
    window.addEventListener('hashchange', handleHashChange);

    return () => {
        window.removeEventListener('popstate', handlePopState);
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, [activeStudy, isGuideOpen]);

  useLayoutEffect(() => {
    if (!activeStudy && !isGuideOpen) {
      window.scrollTo(0, savedScrollPosition);
    }
  }, [activeStudy, isGuideOpen, savedScrollPosition]);

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
    window.history.back();
  };

  // 1. Show Onboarding if not completed
  if (isOnboarding) {
      return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // 2. Full Page Views (Overlay)
  if (activeStudy) {
    return (
      <StudyPage 
        study={activeStudy} 
        onBack={handleBack} 
        language={language}
        setLanguage={setLanguage}
        fontSize={fontSize}
      />
    );
  }

  if (isGuideOpen) {
    return (
        <GuidePage 
          onBack={handleBack} 
          language={language}
          setLanguage={setLanguage}
          fontSize={fontSize}
        />
    );
  }

  // 3. Main Layout
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col relative animate-in fade-in duration-700">
      <main className="flex-grow">
        {viewMode === 'home' && (
             <Home 
                language={language} 
                setLanguage={setLanguage}
                onNavigate={navigateTo} 
             />
        )}
        {viewMode === 'dbs' && (
             <Scriptures 
             onOpenStudy={handleOpenStudy} 
             onOpenGuide={handleOpenGuide}
             language={language}
             setLanguage={setLanguage}
           />
        )}
        {viewMode === 'meditation' && (
            <MorningMeditation 
              language={language} 
              setLanguage={setLanguage}
              fontSize={fontSize}
            />
        )}
        {viewMode === 'resources' && (
            <ResourcesPage 
              language={language} 
              setLanguage={setLanguage}
              onBack={() => navigateTo('home')}
            />
        )}
      </main>

      {/* Settings Modal */}
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        currentFontSize={fontSize}
        onFontSizeChange={setFontSize}
      />

      {/* Navigation Bar (Bottom) */}
      {viewMode !== 'resources' && (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="bg-gray-900/90 backdrop-blur-xl text-white p-1.5 rounded-full shadow-2xl flex items-center gap-1 pointer-events-auto transform transition-all hover:scale-105 border border-white/10">
                
                <button 
                    onClick={() => navigateTo('home')}
                    className={`group relative flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'home' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconHome className="w-5 h-5" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                        Início
                    </span>
                </button>

                <div className="w-px h-4 bg-gray-700 mx-1"></div>

                <button 
                    onClick={() => navigateTo('dbs')}
                    className={`group relative flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'dbs' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconBookOpen className="w-5 h-5" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                        Estudos
                    </span>
                </button>
                
                <div className="w-px h-4 bg-gray-700 mx-1"></div>

                <button 
                    onClick={() => navigateTo('meditation')}
                    className={`group relative flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'meditation' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconSun className="w-5 h-5" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                        Meditação
                    </span>
                </button>

                <div className="w-px h-4 bg-gray-700 mx-1"></div>

                {/* Settings Button */}
                <button 
                    onClick={() => setIsSettingsOpen(true)}
                    className={`group relative flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm text-gray-400 hover:text-white hover:bg-white/10`}
                >
                    <IconSettings className="w-5 h-5" />
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                        Ajustes
                    </span>
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;