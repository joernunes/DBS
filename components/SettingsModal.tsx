import React, { useEffect } from 'react';
import { IconX, IconCheckCircle, IconBookOpen } from './Icons';
import { Language, FontSize } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentFontSize: FontSize;
  onFontSizeChange: (size: FontSize) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, onClose, 
  currentLanguage, onLanguageChange,
  currentFontSize, onFontSizeChange
}) => {
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-4 select-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-t-3xl md:rounded-2xl shadow-2xl p-6 animate-in slide-in-from-bottom duration-300 flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <h2 className="text-xl font-bold text-gray-900">Configurações / Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto space-y-6 pb-6">
          
          {/* Font Size Section */}
          <div className="space-y-3">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <IconBookOpen className="w-3 h-3" />
                Aparência / Text Size
             </p>
             <div className="grid grid-cols-2 gap-3">
                 <button
                    onClick={() => {
                        onFontSizeChange('normal');
                        onClose();
                    }}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all active:scale-95 ${
                        currentFontSize === 'normal' 
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                 >
                     <span className="text-lg font-serif">Aa</span>
                     <span className="text-xs font-bold">Normal</span>
                 </button>

                 <button
                    onClick={() => {
                        onFontSizeChange('large');
                        onClose();
                    }}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all active:scale-95 ${
                        currentFontSize === 'large' 
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500' 
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                 >
                     <span className="text-2xl font-serif font-medium">Aa</span>
                     <span className="text-xs font-bold">Grande / Large</span>
                 </button>
             </div>
          </div>
          
          <hr className="border-gray-100" />

          {/* Language Section */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Idioma / Language
            </p>
            
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all active:scale-[0.98] ${
                    currentLanguage === lang.code 
                      ? 'bg-teal-50 border-teal-500 ring-1 ring-teal-500 shadow-sm' 
                      : 'bg-white border-gray-100 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className={`font-medium ${currentLanguage === lang.code ? 'text-teal-900' : 'text-gray-700'}`}>
                      {lang.label}
                    </span>
                  </div>
                  {currentLanguage === lang.code && (
                    <IconCheckCircle className="w-5 h-5 text-teal-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-2 text-center text-xs text-gray-400">
          Semence v1.2
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;