import * as React from 'react';
import { HOME_UI } from '../constants';
import { Language } from '../types';
import { IconCalendar, IconMapPin, IconBookOpen, IconSun, IconArrowRight, IconFile } from './Icons';

interface HomeProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    onNavigate: (view: 'dbs' | 'meditation' | 'resources') => void;
}

// Dados da Escola Sabatina Multilíngues
const SABBATH_SCHOOL_SCHEDULE = [
    // Final de 2025 - Themes in Faith
    { 
        date: '2025-12-06', 
        quarter: {
            en: 'Themes in Faith',
            pt: 'Temas de Fé',
            es: 'Temas de Fe',
            fr: 'Thèmes de la Foi'
        },
        title: {
            en: 'Ultimate Loyalty: Worship in a War Zone',
            pt: 'Lealdade Suprema: Adoração em Zona de Guerra',
            es: 'Lealtad Suprema: Adoración en Zona de Guerra',
            fr: 'Loyauté Suprême : Adoration en Zone de Guerre'
        }
    },
    { 
        date: '2025-12-13', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'Giants of Faith: Joshua and Caleb',
            pt: 'Gigantes da Fé: Josué e Calebe',
            es: 'Gigantes de la Fe: Josué y Caleb',
            fr: 'Géants de la Foi : Josué et Caleb'
        }
    },
    { 
        date: '2025-12-20', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'Heirs of Promises, Prisoners of Hope',
            pt: 'Herdeiros da Promessa, Prisioneiros da Esperança',
            es: 'Herederos de Promesas, Prisioneros de Esperanza',
            fr: 'Héritiers des Promesses, Prisonniers de l\'Espérance'
        }
    },
    { 
        date: '2025-12-27', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'The True Joshua',
            pt: 'O Verdadeiro Josué',
            es: 'El Verdadero Josué',
            fr: 'Le Vrai Josué'
        }
    },
    { 
        date: '2026-01-03', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'Living in the Land',
            pt: 'Vivendo na Terra',
            es: 'Viviendo en la Tierra',
            fr: 'Vivre dans le Pays'
        }
    },
    { 
        date: '2026-01-10', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'God Is Faithful!',
            pt: 'Deus é Fiel!',
            es: '¡Dios es Fiel!',
            fr: 'Dieu est Fidèle !'
        }
    },
    { 
        date: '2026-01-17', 
        quarter: { en: 'Themes in Faith', pt: 'Temas de Fé', es: 'Temas de Fe', fr: 'Thèmes de la Foi' },
        title: {
            en: 'Choose This Day!',
            pt: 'Escolhei Hoje!',
            es: '¡Escoged Hoy!',
            fr: 'Choisissez Aujourd\'hui !'
        }
    },
    
    // 1º Trimestre de 2026 — Philippians and Colossians
    { 
        date: '2026-01-24', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Persecuted But Not Forsaken',
            pt: 'Perseguidos, mas não Desamparados',
            es: 'Perseguidos pero no Desamparados',
            fr: 'Persécutés mais non Abandonnés'
        }
    },
    { 
        date: '2026-01-31', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Reasons for Thanksgiving and Prayer',
            pt: 'Razões para Ação de Graças e Oração',
            es: 'Razones para Acción de Gracias y Oración',
            fr: 'Raisons d\'Action de Grâce et de Prière'
        }
    },
    { 
        date: '2026-02-07', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Life and Death',
            pt: 'Vida e Morte',
            es: 'Vida y Muerte',
            fr: 'Vie et Mort'
        }
    },
    { 
        date: '2026-02-14', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Unity through Humility',
            pt: 'Unidade através da Humildade',
            es: 'Unidad a través de la Humildad',
            fr: 'L\'Unité par l\'Humilité'
        }
    },
    { 
        date: '2026-02-21', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Shining as Lights in the Night',
            pt: 'Brilhando como Luzes na Noite',
            es: 'Brillando como Luces en la Noche',
            fr: 'Briller comme des Lumières dans la Nuit'
        }
    },
    { 
        date: '2026-02-28', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Confidence Only in Christ',
            pt: 'Confiança Apenas em Cristo',
            es: 'Confianza Solo en Cristo',
            fr: 'Confiance Seulement en Christ'
        }
    },
    { 
        date: '2026-03-07', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'A Heavenly Citizenship',
            pt: 'Uma Cidadania Celestial',
            es: 'Una Ciudadanía Celestial',
            fr: 'Une Citoyenneté Céleste'
        }
    },
    { 
        date: '2026-03-14', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'The Preeminence of Christ',
            pt: 'A Preeminência de Cristo',
            es: 'La Preeminencia de Cristo',
            fr: 'La Prééminence du Christ'
        }
    },
    { 
        date: '2026-03-21', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Reconciliation and Hope',
            pt: 'Reconciliação e Esperança',
            es: 'Reconciliación y Esperanza',
            fr: 'Réconciliation et Espérance'
        }
    },
    { 
        date: '2026-03-28', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Complete in Christ',
            pt: 'Completos em Cristo',
            es: 'Completos en Cristo',
            fr: 'Complets en Christ'
        }
    },
    { 
        date: '2026-04-04', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Living with Christ',
            pt: 'Vivendo com Cristo',
            es: 'Viviendo con Cristo',
            fr: 'Vivre avec Christ'
        }
    },
    { 
        date: '2026-04-11', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Living with Each Other',
            pt: 'Vivendo Uns com os Outros',
            es: 'Viviendo Unos con Otros',
            fr: 'Vivre les Uns avec les Autres'
        }
    },
    { 
        date: '2026-04-18', 
        quarter: { en: 'Philippians & Colossians', pt: 'Filipenses e Colossenses', es: 'Filipenses y Colosenses', fr: 'Philippiens et Colossiens' },
        title: {
            en: 'Standing in All the Will of God',
            pt: 'Firmes em Toda a Vontade de Deus',
            es: 'Firmes en Toda la Voluntad de Dios',
            fr: 'Fermes dans Toute la Volonté de Dieu'
        }
    },
];

const Home: React.FC<HomeProps> = ({ language, setLanguage, onNavigate }) => {
    const ui = HOME_UI[language];

    // Localized Verse of the Day
    const verses = {
        pt: {
            text: "Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
            reference: "Mateus 18:20",
        },
        en: {
            text: "For where two or three gather in my name, there am I with them.",
            reference: "Matthew 18:20",
        },
        fr: {
            text: "Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d'eux.",
            reference: "Matthieu 18:20",
        },
        es: {
            text: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.",
            reference: "Mateo 18:20",
        }
    };
    
    const verseOfDay = verses[language];

    const getGroupLabel = () => {
        switch(language) {
            case 'fr': return 'Petit Groupe';
            case 'en': return 'Small Group';
            case 'es': return 'Grupo Pequeño';
            default: return 'Pequeno Grupo';
        }
    };

    const getResourcesLabel = () => {
        switch(language) {
            case 'fr': return 'Ressources';
            case 'en': return 'Resources';
            case 'es': return 'Recursos';
            default: return 'Recursos';
        }
    };

    const getLibraryLabel = () => {
        switch(language) {
            case 'fr': return 'Bibliothèque & Uploads';
            case 'en': return 'Library & Uploads';
            case 'es': return 'Biblioteca y Subidas';
            default: return 'Biblioteca & Uploads';
        }
    };

    // Lógica para obter a lição atual
    const getCurrentLesson = () => {
        const today = new Date();
        // Ordena do mais recente para o mais antigo
        const sortedLessons = [...SABBATH_SCHOOL_SCHEDULE].sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Encontra a primeira lição cuja data seja menor ou igual a hoje
        // Se hoje for antes da primeira data (Preview Mode), retorna a primeira da lista original
        const current = sortedLessons.find(l => new Date(l.date) <= today);
        
        return current || SABBATH_SCHOOL_SCHEDULE[0];
    };

    const currentLesson = getCurrentLesson();

    // Formatação de data amigável
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(language, { day: 'numeric', month: 'short' });
    };

    return (
        <section className="bg-gray-50 min-h-screen pb-24 select-none">
            {/* Header Hero */}
            <div className="relative h-64 md:h-80 overflow-hidden">
                 <div className="absolute inset-0 bg-gray-900/40 z-10"></div>
                 <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                    alt="Comunidade" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 pb-12">
                     <span className="text-white/90 uppercase tracking-widest text-xs font-bold mb-2 bg-white/20 inline-block px-2 py-1 rounded backdrop-blur-md w-fit">
                        {getGroupLabel()}
                     </span>
                     <h1 className="text-3xl md:text-5xl font-bold text-white shadow-sm">
                        {ui.welcome}
                     </h1>
                 </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-30 space-y-6">
                
                {/* Info Card (Next Meeting) */}
                <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">{ui.meetingInfo}</h3>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
                                <IconCalendar className="w-5 h-5 text-teal-600" />
                                {ui.meetingDay}
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <IconMapPin className="w-4 h-4" />
                                {ui.location}
                            </div>
                        </div>
                    </div>
                    <button className="px-5 py-2.5 bg-teal-50 text-teal-700 font-bold rounded-lg hover:bg-teal-100 transition-colors text-sm">
                        {ui.confirmBtn}
                    </button>
                </div>

                {/* Verse of the Day Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group cursor-default">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
                    <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded-full">
                                {ui.verseTitle}
                            </span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif text-gray-800 italic leading-relaxed mb-4">
                            "{verseOfDay.text}"
                        </p>
                        <p className="text-gray-500 font-bold text-sm text-right border-t border-gray-100 pt-3">
                            {verseOfDay.reference}
                        </p>
                    </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Action: DBS */}
                    <button 
                        onClick={() => onNavigate('dbs')}
                        className="relative h-48 rounded-2xl overflow-hidden shadow-md group text-left border border-gray-200"
                    >
                         {/* Image Background */}
                        <div className="absolute inset-0">
                            <img 
                                src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop" 
                                alt="Bible Study"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Gradient Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent mix-blend-multiply"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full p-5 flex flex-col justify-between z-10">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                <IconBookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1 leading-tight shadow-black/50 drop-shadow-sm">{ui.nextStudy}</h3>
                                <p className="text-xs text-teal-100 font-medium opacity-90">{ui.pathLabel}</p>
                            </div>
                        </div>
                    </button>

                    {/* Action: Meditation */}
                    <button 
                        onClick={() => onNavigate('meditation')}
                        className="relative h-48 rounded-2xl overflow-hidden shadow-md group text-left border border-gray-200"
                    >
                         {/* Image Background */}
                        <div className="absolute inset-0">
                            <img 
                                src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop" 
                                alt="Sunrise"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                             {/* Dark Gradient Overlay for Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent mix-blend-multiply"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full p-5 flex flex-col justify-between z-10">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                <IconSun className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1 leading-tight shadow-black/50 drop-shadow-sm">{ui.devotionalTitle}</h3>
                                <p className="text-xs text-orange-100 font-medium opacity-90">{ui.devotionalDesc}</p>
                            </div>
                        </div>
                    </button>
                    
                    {/* Action: Resources (New) */}
                     <button 
                        onClick={() => onNavigate('resources')}
                        className="col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-left hover:border-indigo-300 transition-all group active:scale-95 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <IconFile className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">
                                    {getResourcesLabel()}
                                </h3>
                                <p className="text-xs text-gray-500">
                                     {getLibraryLabel()}
                                </p>
                            </div>
                        </div>
                        <IconArrowRight className="text-gray-300" />
                    </button>
                </div>

                {/* Sabbath School Card (Dynamic) */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        {ui.ssTitle}
                    </h3>

                    <div className="mb-4 relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                             <span className="text-[10px] uppercase font-bold bg-indigo-500/30 border border-indigo-400/30 px-2 py-0.5 rounded text-indigo-100 tracking-wider">
                                {formatDate(currentLesson.date)}
                             </span>
                             <span className="text-[10px] uppercase font-bold text-purple-200 tracking-wide opacity-80">
                                {currentLesson.quarter[language]}
                             </span>
                        </div>
                        <p className="text-white font-bold text-xl leading-snug">
                            {currentLesson.title[language]}
                        </p>
                    </div>

                    <a 
                        href={`https://sabbath-school.adventech.io/${language}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-all inline-flex items-center gap-2"
                    >
                        {ui.ssBtn} <IconArrowRight className="w-3 h-3" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Home;