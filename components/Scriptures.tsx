import React, { useState } from 'react';
import { SCRIPTURES_LIST, HOME_UI } from '../constants';
import { IconBookOpen, IconArrowRight, IconDownload } from './Icons';
import { Scripture } from '../types';

interface ScripturesProps {
  onOpenStudy: (study: Scripture) => void;
  onOpenGuide?: () => void;
}

type Language = 'pt' | 'en' | 'fr';

const Scriptures: React.FC<ScripturesProps> = ({ onOpenStudy, onOpenGuide }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const ui = HOME_UI[language];
  
  const handleStudyClick = (index: number) => {
    // Check if it is study #7 or #8 (Indices 6 and 7)
    if (index === 6 || index === 7) {
      // Use the localized title but keep the reference
      const item = SCRIPTURES_LIST[index];
      const localizedItem = item[language];
      
      onOpenStudy({
        title: localizedItem.title,
        reference: item.reference,
        theme: localizedItem.theme
      });
    } else {
       alert(ui.comingSoon);
    }
  };

  return (
    <section id="scriptures" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Language Switcher - Floating Top Right */}
        <div className="absolute top-4 right-4 z-50">
             <div className="flex bg-gray-100 rounded-lg p-1 shadow-sm">
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
        
        {/* Header - Acting as the Main Page Header now */}
        <div className="max-w-3xl mx-auto text-center mb-12 mt-8">
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-teal-50 rounded-xl text-teal-700">
               <IconBookOpen className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{ui.title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {ui.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
             {onOpenGuide && (
              <button 
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 text-orange-700 font-bold rounded-full hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <IconDownload className="w-5 h-5" />
                {ui.facilitatorBtn}
              </button>
             )}
          </div>

          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
            {ui.pathLabel}
          </p>
        </div>

        {/* List */}
        <div className="max-w-3xl mx-auto bg-white">
          <div className="space-y-3">
            {SCRIPTURES_LIST.map((item, index) => {
              const localizedItem = item[language];
              return (
                <div 
                  key={index} 
                  onClick={() => handleStudyClick(index)}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border transition-all duration-200 group relative
                    ${(index === 6 || index === 7)
                      ? 'bg-white border-teal-200 cursor-pointer shadow-sm hover:shadow-md hover:border-teal-400 hover:-translate-y-0.5' 
                      : 'bg-gray-50 border-gray-100 opacity-70 hover:opacity-100 cursor-pointer'
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold rounded-full text-lg
                      ${(index === 6 || index === 7) ? 'bg-teal-600 text-white shadow-sm' : 'bg-gray-200 text-gray-500'}`}>
                      {index + 1}
                    </span>
                    <div>
                      <h4 className={`text-lg font-bold group-hover:text-teal-700 transition-colors flex items-center gap-2 ${(index === 6 || index === 7) ? 'text-gray-900' : 'text-gray-600'}`}>
                        {localizedItem.title}
                      </h4>
                      <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">{localizedItem.theme}</span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 pl-14 sm:pl-0 flex items-center gap-2 text-sm font-medium">
                    {(index === 6 || index === 7) ? (
                       <span className="flex items-center text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                         {item.reference} <IconArrowRight className="w-4 h-4 ml-2" />
                       </span>
                    ) : (
                      <span className="text-gray-400 flex items-center">
                          {item.reference}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scriptures;