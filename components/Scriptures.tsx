import React from 'react';
import { SCRIPTURES } from '../constants';
import { IconBookOpen, IconArrowRight, IconDownload } from './Icons';
import { Scripture } from '../types';

interface ScripturesProps {
  onOpenStudy: (study: Scripture) => void;
  onOpenGuide?: () => void;
}

const Scriptures: React.FC<ScripturesProps> = ({ onOpenStudy, onOpenGuide }) => {
  
  const handleStudyClick = (index: number) => {
    // Check if it is study #7 or #8 (Indices 6 and 7)
    if (index === 6 || index === 7) {
      onOpenStudy(SCRIPTURES[index]);
    } else {
       alert("O conteúdo completo deste estudo estará disponível em breve. Tente os estudos #7 ou #8 para ver o modelo completo.");
    }
  };

  return (
    <section id="scriptures" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header - Acting as the Main Page Header now */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-teal-50 rounded-xl text-teal-700">
               <IconBookOpen className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">DBS</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Um guia prático para ler a Bíblia e descobrir a verdade em comunidade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
             {onOpenGuide && (
              <button 
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 text-orange-700 font-bold rounded-full hover:bg-orange-100 transition-colors border border-orange-100"
              >
                <IconDownload className="w-5 h-5" />
                Guia do Facilitador
              </button>
             )}
          </div>

          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
            Caminho de Descoberta
          </p>
        </div>

        {/* List */}
        <div className="max-w-3xl mx-auto bg-white">
          <div className="space-y-3">
            {SCRIPTURES.map((item, index) => (
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
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">{item.theme}</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scriptures;