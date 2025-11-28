import React, { useState } from 'react';
import Scriptures from './components/Scriptures';
import Footer from './components/Footer';
import StudyPage from './components/StudyPage';
import GuidePage from './components/GuidePage';
import { Scripture } from './types';

function App() {
  const [activeStudy, setActiveStudy] = useState<Scripture | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  // If a study is active, render the Study Page View
  if (activeStudy) {
    return (
      <StudyPage 
        study={activeStudy} 
        onBack={() => setActiveStudy(null)} 
      />
    );
  }

  // If guide is open, render the Guide Page View
  if (isGuideOpen) {
    return (
        <GuidePage onBack={() => setIsGuideOpen(false)} />
    );
  }

  // Otherwise, render the Main Landing Page View (Now simplified)
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-teal-200 selection:text-teal-900 min-h-screen flex flex-col">
      <main className="flex-grow">
        <Scriptures 
          onOpenStudy={(study) => setActiveStudy(study)} 
          onOpenGuide={() => setIsGuideOpen(true)}
        />
      </main>
      
    </div>
  );
}

export default App;