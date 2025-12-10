import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { IconSun, IconHeart, IconBookOpen, IconMessageCircle, IconCheckCircle, IconArrowRight, IconArrowLeft, IconUsers, IconClock, IconPlay, IconPause, IconRotateCcw } from './Icons';
import { Language, MeditationItem, FontSize } from '../types';
import { MORNING_UI, MORNING_MEDITATIONS_LIST } from '../constants';

interface MorningMeditationProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    fontSize: FontSize;
}

type Mode = 'list' | 'guide' | 'read';

const SACRED_TIME_SECONDS = 15 * 60; // 15 minutes
const STORAGE_KEY_END_TIME = 'dbs_mct_end_time';
const STORAGE_KEY_PAUSED_LEFT = 'dbs_mct_paused_left';

const MorningMeditation: React.FC<MorningMeditationProps> = ({ language, setLanguage, fontSize }) => {
    const [mode, setMode] = useState<Mode>('list');
    const [activeMeditation, setActiveMeditation] = useState<MeditationItem | null>(null);
    
    // Timer State
    const [timeLeft, setTimeLeft] = useState(SACRED_TIME_SECONDS);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [timerFinished, setTimerFinished] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const ui = MORNING_UI[language];

    // Font Styles
    const titleSize = fontSize === 'large' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl';
    const bodySize = fontSize === 'large' ? 'text-xl leading-relaxed' : 'text-lg leading-relaxed';
    const reflectionSize = fontSize === 'large' ? 'text-xl' : 'text-lg';

    // Initialization: Check Storage on Mount
    useEffect(() => {
        const storedEndTime = localStorage.getItem(STORAGE_KEY_END_TIME);
        const storedPausedLeft = localStorage.getItem(STORAGE_KEY_PAUSED_LEFT);

        if (storedEndTime) {
            // Timer was running
            const endTime = parseInt(storedEndTime, 10);
            const now = Date.now();
            const remaining = Math.ceil((endTime - now) / 1000);

            if (remaining > 0) {
                setTimeLeft(remaining);
                setIsTimerActive(true);
            } else {
                // Timer finished while user was away
                setTimeLeft(0);
                setIsTimerActive(false);
                setTimerFinished(true);
                localStorage.removeItem(STORAGE_KEY_END_TIME);
            }
        } else if (storedPausedLeft) {
            // Timer was paused
            setTimeLeft(parseInt(storedPausedLeft, 10));
            setIsTimerActive(false);
            setTimerFinished(false);
        }
    }, []);

    // Interval Logic: Tick based on Date.now() vs Target Time
    useEffect(() => {
        if (isTimerActive) {
            intervalRef.current = window.setInterval(() => {
                const storedEndTime = localStorage.getItem(STORAGE_KEY_END_TIME);
                if (storedEndTime) {
                    const endTime = parseInt(storedEndTime, 10);
                    const now = Date.now();
                    const remaining = Math.ceil((endTime - now) / 1000);

                    if (remaining <= 0) {
                        // Finished
                        setTimeLeft(0);
                        setIsTimerActive(false);
                        setTimerFinished(true);
                        localStorage.removeItem(STORAGE_KEY_END_TIME);
                        localStorage.removeItem(STORAGE_KEY_PAUSED_LEFT);
                        if (intervalRef.current) clearInterval(intervalRef.current);
                    } else {
                        // Ticking
                        setTimeLeft(remaining);
                    }
                } else {
                    // Fallback safety if localstorage is cleared externally
                    setIsTimerActive(false);
                }
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isTimerActive]);

    const toggleTimer = () => {
        if (isTimerActive) {
            // PAUSE
            setIsTimerActive(false);
            localStorage.removeItem(STORAGE_KEY_END_TIME);
            localStorage.setItem(STORAGE_KEY_PAUSED_LEFT, timeLeft.toString());
        } else {
            // START / RESUME
            if (timeLeft <= 0) return; // Don't start if finished
            
            const targetEndTime = Date.now() + (timeLeft * 1000);
            localStorage.setItem(STORAGE_KEY_END_TIME, targetEndTime.toString());
            localStorage.removeItem(STORAGE_KEY_PAUSED_LEFT);
            
            setIsTimerActive(true);
            setTimerFinished(false);
        }
    };

    const resetTimer = () => {
        setIsTimerActive(false);
        setTimerFinished(false);
        setTimeLeft(SACRED_TIME_SECONDS);
        localStorage.removeItem(STORAGE_KEY_END_TIME);
        localStorage.removeItem(STORAGE_KEY_PAUSED_LEFT);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOpenMeditation = (item: MeditationItem) => {
        setActiveMeditation(item);
        setMode('read');
        window.scrollTo(0,0);
    };

    const handleBack = () => {
        setMode('list');
        setActiveMeditation(null);
        window.scrollTo(0,0);
    };

    // --- SUB-COMPONENTS ---

    const GuideView = () => (
        <div className="animate-in fade-in duration-500 pb-20 max-w-3xl mx-auto select-none">
             <button 
                onClick={handleBack}
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors font-medium sticky top-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-100 shadow-sm"
            >
                <IconArrowLeft className="w-5 h-5" /> {ui.backBtn}
            </button>
            
            <div className="space-y-12">
                <div className="text-center mb-10">
                    <span className="inline-block py-1 px-3 bg-orange-50 rounded-full text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">Guia Prático</span>
                    <h2 className={`${titleSize} font-serif font-bold text-gray-900 mb-6 leading-tight`}>{ui.guideTitle}</h2>
                    <p className={`${bodySize} text-gray-600 font-serif italic border-l-4 border-orange-200 pl-4 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-4`}>
                        "{ui.guideIntro}"
                    </p>
                </div>

                {ui.guidePhases.map((phase, pIndex) => (
                    <div key={pIndex} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="mb-8 pb-4 border-b border-gray-100">
                            <h3 className="text-xl md:text-2xl font-bold text-orange-600 uppercase tracking-wide mb-2">{phase.title}</h3>
                            {phase.desc && <p className={`${bodySize} text-gray-600 font-medium`}>{phase.desc}</p>}
                        </div>

                        <div className="space-y-8">
                            {phase.steps.map((step, sIndex) => {
                                // Cycle through icons for visual variety
                                const icons = [
                                    <IconSun className="w-6 h-6 text-orange-500" />,
                                    <IconBookOpen className="w-6 h-6 text-teal-600" />,
                                    <IconHeart className="w-6 h-6 text-red-500" />,
                                    <IconMessageCircle className="w-6 h-6 text-blue-500" />,
                                    <IconCheckCircle className="w-6 h-6 text-purple-500" />,
                                    <IconUsers className="w-6 h-6 text-indigo-500" />
                                ];
                                // Generate a deterministic index for icons based on title length
                                const iconIndex = step.title.length % icons.length;

                                return (
                                    <div key={sIndex} className="relative pl-4 md:pl-0">
                                         <div className="flex flex-col md:flex-row gap-4 md:items-start">
                                             <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 items-center justify-center border border-gray-100">
                                                 {icons[iconIndex]}
                                             </div>
                                             
                                             <div className="flex-grow">
                                                 <div className="flex items-center gap-3 mb-2">
                                                     <div className="md:hidden text-orange-500">{icons[iconIndex]}</div>
                                                     <h4 className="text-lg md:text-xl font-bold text-gray-800">{step.title}</h4>
                                                 </div>
                                                 
                                                 <p className={`${bodySize} text-gray-600 mb-3`}>
                                                     {step.desc}
                                                 </p>

                                                 {step.bullets && step.bullets.length > 0 && (
                                                     <ul className="space-y-2 mt-3 bg-orange-50/50 p-4 rounded-xl">
                                                         {step.bullets.map((bullet, bIndex) => (
                                                             <li key={bIndex} className="flex gap-2 text-sm md:text-base text-gray-700">
                                                                 <span className="text-orange-400 font-bold">•</span>
                                                                 <span>{bullet}</span>
                                                             </li>
                                                         ))}
                                                     </ul>
                                                 )}
                                             </div>
                                         </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const ReadView = () => {
        if (!activeMeditation) return null;
        const content = activeMeditation[language];

        return (
            <div className="animate-in slide-in-from-right duration-500 pb-20 max-w-3xl mx-auto">
                <button 
                    onClick={handleBack}
                    className="mb-8 flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors font-medium sticky top-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-100 shadow-sm select-none"
                >
                    <IconArrowLeft className="w-5 h-5" /> {ui.backBtn}
                </button>

                <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden select-none">
                    <div className="bg-orange-50 p-8 text-center border-b border-orange-100">
                         <span className="inline-block py-1 px-3 bg-white rounded-full text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Devocional</span>
                         <h2 className={`${titleSize} font-serif font-bold text-gray-800 mb-2`}>{content.title}</h2>
                         <p className="text-orange-700 font-medium">{activeMeditation.reference}</p>
                    </div>

                    <div className="p-8 md:p-12 space-y-8">
                        {/* Generic Reading Instruction since we don't have full text for all */}
                        <div className="text-center p-8 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
                            <IconBookOpen className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-700 mb-2">
                                Leia {activeMeditation.reference}
                            </h3>
                            <p className="text-gray-500 italic">
                                Abra sua Bíblia e leia este texto calmamente duas ou três vezes.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-100 pb-2">Reflexão</h3>
                            
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                                <p className={`font-serif text-gray-700 italic mb-4 ${reflectionSize}`}>"{content.theme}"</p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <IconHeart className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                                        <span className={`text-gray-700 ${reflectionSize}`}>O que Deus está falando ao meu coração hoje sobre isso?</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <IconCheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                                        <span className={`text-gray-700 ${reflectionSize}`}>Existe algo que preciso entregar ou confiar a Ele?</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const ListView = () => (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-500 pb-20 select-none">
            {/* Guide CTA */}
            <div className="mb-10 text-center flex justify-center">
                 <button 
                    onClick={() => {
                        setMode('guide');
                        window.scrollTo(0,0);
                    }}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5"
                  >
                    <IconSun className="w-6 h-6 text-yellow-200 animate-pulse" />
                    <div className="text-left">
                        <span className="block text-xs text-orange-100 uppercase tracking-wider font-semibold">Novo Método</span>
                        <span className="block text-lg leading-none">{ui.guideBtn}</span>
                    </div>
                  </button>
            </div>

            {/* List */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4 px-2">
                     <IconHeart className="w-4 h-4 text-orange-500" />
                     <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide">{ui.listTitle}</h2>
                </div>
                
                {MORNING_MEDITATIONS_LIST.map((item) => {
                    const content = item[language];
                    return (
                        <div 
                            key={item.id}
                            onClick={() => handleOpenMeditation(item)}
                            className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-pointer flex items-center justify-between group"
                        >
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">{content.title}</h3>
                                <p className="text-sm text-gray-400 font-medium">{item.reference}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <IconArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section className="py-12 md:py-20 min-h-screen bg-white relative select-none">
            <div className="container mx-auto px-4 pb-24">
                
                {/* SACRED TIME TIMER (POMODORO) - Fixed Top RIGHT (Updated) - WHITE PILL */}
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top duration-500 group select-none">
                    <div className={`flex items-center gap-0 rounded-full transition-all duration-300 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm ${timerFinished ? 'text-green-600 bg-green-50 border-green-200' : ''}`}>
                         {/* Time Display (Always Visible) */}
                         <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-default ${isTimerActive ? 'text-orange-600' : 'text-gray-500'}`}>
                            <IconClock className={`w-3 h-3 ${isTimerActive ? 'animate-pulse' : ''}`} />
                            <span className="tabular-nums text-sm">{formatTime(timeLeft)}</span>
                         </div>
                         
                         {/* Controls (Hidden, Slide reveal on hover) */}
                         <div className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-500 ease-in-out flex items-center opacity-0 group-hover:opacity-100">
                             <div className="flex items-center pr-2 pl-1 border-l border-gray-200/50">
                                 <button 
                                    onClick={toggleTimer}
                                    className="p-1.5 hover:bg-orange-50 hover:text-orange-600 rounded-full text-gray-500 transition-colors"
                                    title={isTimerActive ? "Pausar" : "Iniciar"}
                                 >
                                     {isTimerActive ? <IconPause className="w-3 h-3" /> : <IconPlay className="w-3 h-3" />}
                                 </button>
                                 <button 
                                    onClick={resetTimer}
                                    className="p-1.5 hover:bg-orange-50 hover:text-orange-600 rounded-full text-gray-500 transition-colors"
                                    title="Reiniciar (15 min)"
                                 >
                                     <IconRotateCcw className="w-3 h-3" />
                                 </button>
                             </div>
                         </div>
                    </div>
                    {/* Tooltip hint mostly for desktop - Aligned Right */}
                    <div className="hidden md:block absolute top-full mt-1 right-0 text-[10px] text-gray-400 font-medium tracking-wide pr-1 pointer-events-none text-right">
                        TEMPO SAGRADO
                    </div>
                </div>

                {/* Main Header (Visible unless reading) */}
                {mode === 'list' && (
                    <div className="max-w-3xl mx-auto text-center mb-12 mt-8 select-none">
                        <div className="inline-flex p-3 bg-yellow-50 rounded-full text-yellow-600 mb-6 shadow-sm">
                            <IconSun className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{ui.title}</h1>
                        <p className="text-lg text-gray-600">{ui.subtitle}</p>
                    </div>
                )}

                {/* Content Area */}
                <div className="mt-8">
                    {mode === 'list' && <ListView />}
                    {mode === 'guide' && <GuideView />}
                    {mode === 'read' && <ReadView />}
                </div>

            </div>
        </section>
    );
};

export default MorningMeditation;