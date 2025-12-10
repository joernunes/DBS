import * as React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import Scriptures from './components/Scriptures';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import MorningMeditation from './components/MorningMeditation';
import ResourcesPage from './components/ResourcesPage';
import Home from './components/Home';
import Onboarding from './components/Onboarding'; // Import Onboarding
import { IconBookOpen, IconSun, IconHome, IconFile } from './components/Icons';
import { Scripture, Language } from './types';

type ViewMode = 'home' | 'dbs' | 'meditation' | 'resources';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [isOnboarding, setIsOnboarding] = useState(true); // State for onboarding
  
  // Initialize language
  const [language, setLanguageState] = useState<Language>('pt');

  // Check LocalStorage on Mount for Onboarding status and Language
  useEffect(() => {
      const completed = localStorage.getItem('dbs_onboarding_complete');
      const savedLang = localStorage.getItem('dbs_language');

      if (completed === 'true' && savedLang) {
          setIsOnboarding(false);
          setLanguageState(savedLang as Language);
      } else {
          setIsOnboarding(true);
      }
  }, []);

  // Initialize completed studies from localStorage
  const [completedStudies, setCompletedStudies] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('dbs_completed_studies');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('dbs_language', lang);
  };

  const handleOnboardingComplete = (selectedLang: Language) => {
      setLanguage(selectedLang);
      localStorage.setItem('dbs_onboarding_complete', 'true');
      setIsOnboarding(false);
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
      if (!event.state) {
        setActiveStudy(null);
        setIsGuideOpen(false);
      } 
      else if (event.state.page === 'home') {
        setActiveStudy(null);
        setIsGuideOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.history.replaceState({ page: 'home' }, '', '');

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  // 2. Full Page Views
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

  // 3. Main Layout
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col relative animate-in fade-in duration-700">
      <main className="flex-grow">
        {viewMode === 'home' && (
             <Home 
                language={language} 
                setLanguage={setLanguage}
                onNavigate={setViewMode}
             />
        )}
        {viewMode === 'dbs' && (
             <Scriptures 
             onOpenStudy={handleOpenStudy} 
             onOpenGuide={handleOpenGuide}
             language={language}
             setLanguage={setLanguage}
             completedStudies={completedStudies}
           />
        )}
        {viewMode === 'meditation' && (
            <MorningMeditation 
              language={language} 
              setLanguage={setLanguage}
            />
        )}
        {viewMode === 'resources' && (
            <ResourcesPage 
              language={language} 
              setLanguage={setLanguage}
              onBack={() => setViewMode('home')}
            />
        )}
      </main>

      {viewMode !== 'resources' && (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="bg-gray-900/90 backdrop-blur-xl text-white p-1.5 rounded-full shadow-2xl flex items-center gap-1 pointer-events-auto transform transition-all hover:scale-105 border border-white/10">
                
                <button 
                    onClick={() => setViewMode('home')}
                    className={`flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'home' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconHome className="w-5 h-5" />
                </button>

                <div className="w-px h-4 bg-gray-700 mx-1"></div>

                <button 
                    onClick={() => setViewMode('dbs')}
                    className={`flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'dbs' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconBookOpen className="w-5 h-5" />
                </button>
                
                <div className="w-px h-4 bg-gray-700 mx-1"></div>

                <button 
                    onClick={() => setViewMode('meditation')}
                    className={`flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 font-medium text-sm
                    ${viewMode === 'meditation' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                >
                    <IconSun className="w-5 h-5" />
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;