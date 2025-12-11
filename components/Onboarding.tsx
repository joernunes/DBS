import * as React from 'react';
import { IconBookOpen, IconArrowRight } from './Icons';

interface OnboardingProps {
    onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    return (
        <div className="fixed inset-0 z-50 bg-gray-900 flex flex-col items-center justify-center overflow-hidden select-none">
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

                {/* Single Button */}
                <button 
                    onClick={onComplete}
                    className="group w-full max-w-xs bg-teal-600 hover:bg-teal-500 text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg shadow-teal-900/50 flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95"
                >
                    Começar Jornada
                    <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-12 text-xs text-gray-500 font-medium opacity-60">
                    Discípulos fazendo discípulos.
                </div>
            </div>
        </div>
    );
};

export default Onboarding;