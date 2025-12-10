import * as React from 'react';
import { useEffect } from 'react';
import { IconArrowLeft, IconPrinter, IconBookOpen } from './Icons';
import { LocalizedStudyContent, Language, FontSize } from '../types';
import { STUDY_CONTENTS, GENERIC_QUESTIONS, SCRIPTURES_LIST } from '../constants';

interface StudyPageProps {
  study: { title: string; reference: string }; 
  onBack: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: FontSize;
}

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
    footerDesc: "Texto bíblico para fins de estudo e descoberta em comunidade.",
    openBible: "Abra sua Bíblia em",
    readInBible: "Este texto ainda não está disponível no app. Por favor, leia diretamente na sua Bíblia e use as perguntas abaixo para guiar o estudo.",
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
    footerDesc: "Bible text for study and discovery in community.",
    openBible: "Open your Bible to",
    readInBible: "This text is not yet available in the app. Please read directly from your Bible and use the questions below to guide the study.",
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
    footerDesc: "Texte biblique pour l'étude et la découverte en communauté.",
    openBible: "Ouvrez votre Bible à",
    readInBible: "Ce texte n'est pas encore disponible dans l'application. Veuillez lire directement dans votre Bible et utiliser les questions ci-dessous pour guider l'étude.",
  },
  es: {
    back: "Volver",
    print: "Imprimir",
    studyLabel: "Estudio Bíblico",
    godTitle: "Sobre Dios",
    godDesc: "¿Qué aprendemos sobre el carácter de Dios en esta historia?",
    peopleTitle: "Sobre Personas",
    peopleDesc: "¿Qué aprendemos sobre la naturaleza humana?",
    obeyTitle: "Obediencia",
    obeyDesc: "Si esto es verdad, ¿qué va a cambiar en mi vida esta semana?",
    shareTitle: "Compartir",
    shareDesc: "¿Con quién voy a compartir esta historia?",
    footer: "DBS — Discípulos Haciendo Discípulos",
    footerDesc: "Texto bíblico para fines de estudio y descubrimiento en comunidad.",
    openBible: "Abre tu Biblia en",
    readInBible: "Este texto aún no está disponible en la app. Por favor, lee directamente en tu Biblia y usa las preguntas de abajo para guiar el estudio.",
  }
};

const StudyPage: React.FC<StudyPageProps> = ({ study, onBack, language, setLanguage, fontSize }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Labels
  const labels = UI_LABELS[language];
  const genericQs = GENERIC_QUESTIONS[language];

  // Logic to determine content
  const multiContent = STUDY_CONTENTS[study.reference];
  
  // Dynamic lookup for title to ensure translation works
  const scriptureItem = SCRIPTURES_LIST.find(s => s.reference === study.reference);
  const currentTitle = scriptureItem ? scriptureItem[language].title : study.title;
  
  // Font Size Classes
  const textSizeClass = fontSize === 'large' ? 'text-2xl md:text-3xl leading-relaxed' : 'text-xl md:text-2xl leading-loose';
  const listTextClass = fontSize === 'large' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
  
  let content: LocalizedStudyContent;
  
  if (multiContent) {
    // Specific content exists
    content = {
        ...multiContent[language],
        title: currentTitle // Ensure title matches list even for specific content
    };
  } else {
    // FALLBACK: Use Generic Questions
    content = {
      title: currentTitle,
      bibleText: [], // Empty indicates generic mode
      isGeneric: true,
      quadrants: {
        god: genericQs.god,
        people: genericQs.people,
        obedience: genericQs.obedience
      }
    };
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-10 relative select-none">
      
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
         </div>
        
        {/* Header Actions */}
        <div className="flex items-center gap-3">
            <button 
                onClick={() => window.print()}
                className="flex items-center justify-center p-2 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                title={labels.print}
            >
                <IconPrinter className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Main Content Area - Full Bleed */}
      <main className="w-full">
        
        {/* Header Section */}
        <header className="py-12 md:py-20 px-6 text-center border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              {labels.studyLabel}
            </span>
            {/* Added key to force update on language change */}
            <h1 key={`${language}-title`} className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 tracking-tight leading-tight">
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
                {/* Added key to force update on language change */}
                <div key={`${language}-text`} className={`font-serif text-gray-800 antialiased space-y-8 ${textSizeClass} select-text`}>
                  {content.bibleText.length > 0 ? (
                    // RENDER FULL TEXT
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
                    // RENDER GENERIC INSTRUCTION
                    <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
                        <IconBookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">
                            {labels.openBible}: <span className="text-teal-600 underline">{study.reference}</span>
                        </h3>
                        <p className="text-gray-500 italic max-w-lg mx-auto">
                            {labels.readInBible}
                        </p>
                    </div>
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
                    
                    <ul key={`${language}-god`} className={`space-y-6 font-medium text-gray-700 ${listTextClass}`}>
                        {content.quadrants.god.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                              <span className="text-teal-500 mt-1 font-bold">?</span>
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
                    
                    <ul key={`${language}-people`} className={`space-y-6 font-medium text-gray-700 ${listTextClass}`}>
                        {content.quadrants.people.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group">
                              <span className="text-sky-500 mt-1 font-bold">?</span>
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
                    
                    <div key={`${language}-obey`} className="bg-white p-8 rounded-xl shadow-sm border border-orange-100">
                         {content.isGeneric ? (
                            <p className={`font-serif leading-relaxed text-gray-700 ${listTextClass}`}>
                                {content.quadrants.obedience.example}
                            </p>
                         ) : (
                            <p className={`font-serif leading-relaxed italic text-gray-700 ${textSizeClass}`}>
                                "{content.quadrants.obedience.example}"
                            </p>
                         )}
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
                    
                     <div key={`${language}-share`} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        {content.isGeneric ? (
                             <p className={`font-serif leading-relaxed text-gray-700 ${listTextClass}`}>
                                {content.quadrants.obedience.share}
                             </p>
                        ) : (
                             <p className={`font-serif leading-relaxed italic text-gray-700 ${textSizeClass}`}>
                                "{content.quadrants.obedience.share}"
                            </p>
                        )}
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