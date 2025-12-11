import * as React from 'react';
import { SCRIPTURES_LIST, HOME_UI } from '../constants';
import { IconBookOpen, IconArrowRight, IconDownload } from './Icons';
import { Scripture, Language } from '../types';

interface ScripturesProps {
  onOpenStudy: (study: Scripture) => void;
  onOpenGuide?: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Scriptures: React.FC<ScripturesProps> = ({ onOpenStudy, onOpenGuide, language, setLanguage }) => {
  const ui = HOME_UI[language];
  
  const handleStudyClick = (index: number) => {
    const item = SCRIPTURES_LIST[index];
    const localizedItem = item[language];
    
    onOpenStudy({
      title: localizedItem.title,
      reference: item.reference, // Keep ID for lookup
      theme: localizedItem.theme
    });
  };

  return (
    <section id="scriptures" className="py-12 md:py-20 bg-white min-h-screen select-none">
      <div className="container mx-auto px-4 pb-24">
        
        {/* Header */}
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
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl border transition-all duration-200 group relative cursor-pointer shadow-sm hover:shadow-md hover:border-teal-400 hover:-translate-y-0.5 bg-white border-teal-100`}
                >
                  <div className="flex items-center gap-5">
                    <div className="relative">
                        <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold rounded-full text-lg transition-colors bg-teal-100 text-teal-800">
                          {index + 1}
                        </span>
                    </div>
                    
                    <div>
                      <h4 className={`text-lg font-bold group-hover:text-teal-700 transition-colors flex items-center gap-2 text-gray-900`}>
                        {localizedItem.title}
                      </h4>
                      <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">{localizedItem.theme}</span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 pl-14 sm:pl-0 flex items-center gap-2 text-sm font-medium">
                       <span className="flex items-center text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                         {localizedItem.reference} <IconArrowRight className="w-4 h-4 ml-2" />
                       </span>
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