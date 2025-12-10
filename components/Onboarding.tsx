import * as React from 'react';
import { IconBookOpen, IconArrowRight } from './Icons';
import { Language } from '../types';

interface OnboardingProps {
    onComplete: (lang: Language) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    return (
        <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop" 
                    alt="Gathering" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-teal-900/60 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
                
                {/* Logo / Icon */}
                <div className="w-20 h-20 bg-teal-600/20 backdrop-blur-xl rounded-full flex items-center justify-center mb-8 border border-teal-500/30 shadow-[0_0_30px_rgba(13,148,136,0.3)]">
                    <IconBookOpen className="w-10 h-10 text-teal-400" />
                </div>

                {/* Text */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
                    Comunidade Viva
                </h1>
                <p className="text-gray-300 text-lg mb-12 font-light leading-relaxed max-w-xs mx-auto">
                    Conectando corações, estudando a Palavra e caminhando juntos.
                </p>

                {/* Language Selection */}
                <div className="w-full space-y-4">
                    <p className="text-teal-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
                        Selecione seu Idioma / Select Language
                    </p>
                    
                    <button 
                        onClick={() => onComplete('pt')}
                        className="group w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-teal-500/50 text-white py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">🇧🇷</span>
                            <div className="text-left">
                                <span className="block font-bold">Português</span>
                                <span className="text-xs text-gray-400">Começar jornada</span>
                            </div>
                        </div>
                        <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </button>

                    <button 
                        onClick={() => onComplete('es')}
                        className="group w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-teal-500/50 text-white py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">🇪🇸</span>
                            <div className="text-left">
                                <span className="block font-bold">Español</span>
                                <span className="text-xs text-gray-400">Comenzar viaje</span>
                            </div>
                        </div>
                        <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </button>

                    <button 
                        onClick={() => onComplete('en')}
                        className="group w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-teal-500/50 text-white py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">🇺🇸</span>
                            <div className="text-left">
                                <span className="block font-bold">English</span>
                                <span className="text-xs text-gray-400">Start journey</span>
                            </div>
                        </div>
                        <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </button>

                    <button 
                        onClick={() => onComplete('fr')}
                        className="group w-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-teal-500/50 text-white py-4 px-6 rounded-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">🇫🇷</span>
                            <div className="text-left">
                                <span className="block font-bold">Français</span>
                                <span className="text-xs text-gray-400">Commencer</span>
                            </div>
                        </div>
                        <IconArrowRight className="w-5 h-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
                    </button>
                </div>

                <div className="mt-12 text-xs text-gray-500 font-medium">
                    Discípulos fazendo discípulos.
                </div>
            </div>
        </div>
    );
};

export default Onboarding;