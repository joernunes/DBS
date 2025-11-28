import * as React from 'react';
import { useEffect } from 'react';
import { IconArrowLeft, IconArrowUp, IconUsers, IconCheckCircle, IconMessageCircle, IconPrinter } from './Icons';
import { Language } from '../types';

interface GuidePageProps {
  onBack: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TRANSLATIONS = {
  pt: {
    back: "Voltar para Home",
    headerTitle: "GUIA DO FACILITADOR",
    print: "Imprimir Guia",
    tagline: "Modelo de Reunião",
    title: "Roteiro de Descoberta",
    subtitle: "Use este guia para facilitar qualquer texto bíblico",
    intro: "\"Você não precisa ser um especialista. Seu papel é apenas fazer as perguntas e deixar que o grupo descubra as respostas no texto. O verdadeiro professor é o Espírito Santo.\"",
    lookBack: {
      title: "Olhar para Trás",
      time: "15-20 min",
      desc: "Comece perguntando como foi a semana. Crie um ambiente de cuidado mútuo.",
      q1: "Do que você é grato nesta semana?",
      q2: "Qual foi o maior desafio/stress da semana?",
      accountability: "Prestação de Contas:",
      accountabilityQ: "Como foi sua obediência ao \"Eu vou...\" da semana passada? Com quem você compartilhou?"
    },
    readRetell: {
      title: "Ler e Recontar",
      time: "15 min",
      desc: "O objetivo é fixar a história na mente de todos antes de analisar.",
      step1: "Peça para alguém ler o texto em voz alta enquanto os outros acompanham.",
      step2: "Peça para outra pessoa ler em outra versão (se houver).",
      step3: "Peça para alguém <strong>recontar a história</strong> com suas próprias palavras. O grupo pode ajudar a completar detalhes esquecidos."
    },
    lookUp: {
      tag: "Olhar para Cima",
      godTitle: "Sobre Deus",
      godDesc: "O que este texto nos diz sobre Deus Pai, Jesus ou o Espírito Santo?",
      auxTitle: "Perguntas Auxiliares:",
      godQ1: "Quais são seus atributos ou caráter aqui? (Amoroso, Justo, Poderoso...)",
      godQ2: "O que Ele está fazendo ou dizendo?",
      godQ3: "Existe alguma promessa para reivindicar?",
      peopleTitle: "Sobre Pessoas",
      peopleDesc: "O que este texto nos diz sobre a humanidade ou sobre nós mesmos?",
      peopleQ1: "Existe algum exemplo a ser seguido?",
      peopleQ2: "Existe algum pecado ou erro a ser evitado?",
      peopleQ3: "O que isso revela sobre a condição humana?"
    },
    lookForward: {
      tag: "Olhar para Frente",
      obeyTitle: "Obediência",
      obeyDesc: "Se isso é verdade, o que vou fazer sobre isso?",
      iWillTitle: "A Declaração \"Eu vou...\"",
      iWillDesc: "Cada pessoa deve criar uma frase de ação que seja:",
      specific: "Específica",
      measurable: "Mensurável",
      achievable: "Alcançável nesta semana",
      shareTitle: "Compartilhar",
      shareDesc: "Com quem vou compartilhar essa história/verdade?",
      shareSpecific: "Nome Específico",
      shareInst: "Incentive cada um a pensar em uma pessoa do seu círculo (família, trabalho, vizinhos) que precisa ouvir o que foi aprendido hoje.",
      shareQuote: "\"Vou contar a história para...\""
    },
    footer: {
      title: "DBS — Guia do Facilitador",
      desc: "Imprima este guia e leve para suas reuniões."
    }
  },
  en: {
    back: "Back to Home",
    headerTitle: "FACILITATOR GUIDE",
    print: "Print Guide",
    tagline: "Meeting Model",
    title: "Discovery Script",
    subtitle: "Use this guide to facilitate any Bible text",
    intro: "\"You don't need to be an expert. Your role is just to ask the questions and let the group discover the answers in the text. The true teacher is the Holy Spirit.\"",
    lookBack: {
      title: "Look Back",
      time: "15-20 min",
      desc: "Start by asking how the week went. Create an environment of mutual care.",
      q1: "What are you thankful for this week?",
      q2: "What was the biggest challenge/stress of the week?",
      accountability: "Accountability:",
      accountabilityQ: "How did your obedience to the \"I will...\" go last week? Who did you share with?"
    },
    readRetell: {
      title: "Read & Retell",
      time: "15 min",
      desc: "The goal is to fix the story in everyone's mind before analyzing.",
      step1: "Ask someone to read the text aloud while others follow along.",
      step2: "Ask someone else to read in another version (if available).",
      step3: "Ask someone to <strong>retell the story</strong> in their own words. The group can help fill in forgotten details."
    },
    lookUp: {
      tag: "Look Up",
      godTitle: "About God",
      godDesc: "What does this text tell us about God the Father, Jesus, or the Holy Spirit?",
      auxTitle: "Helping Questions:",
      godQ1: "What are His attributes or character here? (Loving, Just, Powerful...)",
      godQ2: "What is He doing or saying?",
      godQ3: "Is there a promise to claim?",
      peopleTitle: "About People",
      peopleDesc: "What does this text tell us about humanity or ourselves?",
      peopleQ1: "Is there an example to follow?",
      peopleQ2: "Is there a sin or mistake to avoid?",
      peopleQ3: "What does this reveal about the human condition?"
    },
    lookForward: {
      tag: "Look Forward",
      obeyTitle: "Obedience",
      obeyDesc: "If this is true, what am I going to do about it?",
      iWillTitle: "The \"I will...\" Statement",
      iWillDesc: "Each person should create an action sentence that is:",
      specific: "Specific",
      measurable: "Measurable",
      achievable: "Achievable this week",
      shareTitle: "Share",
      shareDesc: "Who am I going to share this story/truth with?",
      shareSpecific: "Specific Name",
      shareInst: "Encourage everyone to think of a person in their circle (family, work, neighbors) who needs to hear what was learned today.",
      shareQuote: "\"I will tell the story to...\""
    },
    footer: {
      title: "DBS — Facilitator Guide",
      desc: "Print this guide and take it to your meetings."
    }
  },
  fr: {
    back: "Retour à l'Accueil",
    headerTitle: "GUIDE DU FACILITATEUR",
    print: "Imprimer le Guide",
    tagline: "Modèle de Réunion",
    title: "Scénario de Découverte",
    subtitle: "Utilisez ce guide pour faciliter n'importe quel texte biblique",
    intro: "\"Vous n'avez pas besoin d'être un expert. Votre rôle est simplement de poser les questions et de laisser le groupe découvrir les réponses dans le texte. Le véritable enseignant est le Saint-Esprit.\"",
    lookBack: {
      title: "Regarder en Arrière",
      time: "15-20 min",
      desc: "Commencez par demander comment s'est passée la semaine. Créez un environnement de soin mutuel.",
      q1: "De quoi êtes-vous reconnaissant cette semaine ?",
      q2: "Quel a été le plus grand défi/stress de la semaine ?",
      accountability: "Redevabilité :",
      accountabilityQ: "Comment s'est passée votre obéissance au \"Je vais...\" de la semaine dernière ? Avec qui avez-vous partagé ?"
    },
    readRetell: {
      title: "Lire et Raconter",
      time: "15 min",
      desc: "L'objectif est de fixer l'histoire dans l'esprit de tous avant d'analyser.",
      step1: "Demandez à quelqu'un de lire le texte à haute voix pendant que les autres suivent.",
      step2: "Demandez à quelqu'un d'autre de lire dans une autre version (si disponible).",
      step3: "Demandez à quelqu'un de <strong>raconter l'histoire</strong> avec ses propres mots. Le groupe peut aider à compléter les détails oubliés."
    },
    lookUp: {
      tag: "Regarder en Haut",
      godTitle: "Sur Dieu",
      godDesc: "Que nous dit ce texte sur Dieu le Père, Jésus ou le Saint-Esprit ?",
      auxTitle: "Questions Utiles :",
      godQ1: "Quels sont ses attributs ou son caractère ici ? (Amour, Juste, Puissant...)",
      godQ2: "Que fait-il ou que dit-il ?",
      godQ3: "Y a-t-il une promesse à réclamer ?",
      peopleTitle: "Sur les Hommes",
      peopleDesc: "Que nous dit ce texte sur l'humanité ou sur nous-mêmes ?",
      peopleQ1: "Y a-t-il un exemple à suivre ?",
      peopleQ2: "Y a-t-il un péché ou une erreur à éviter ?",
      peopleQ3: "Qu'est-ce que cela révèle sur la condition humaine ?"
    },
    lookForward: {
      tag: "Regarder en Avant",
      obeyTitle: "Obéissance",
      obeyDesc: "Si c'est vrai, qu'est-ce que je vais faire à ce sujet ?",
      iWillTitle: "La Déclaration \"Je vais...\"",
      iWillDesc: "Chaque personne doit créer une phrase d'action qui soit :",
      specific: "Spécifique",
      measurable: "Mesurable",
      achievable: "Réalisable cette semaine",
      shareTitle: "Partager",
      shareDesc: "Avec qui vais-je partager cette histoire/vérité ?",
      shareSpecific: "Nom Spécifique",
      shareInst: "Encouragez chacun à penser à une personne de son entourage (famille, travail, voisins) qui a besoin d'entendre ce qui a été appris aujourd'hui.",
      shareQuote: "\"Je vais raconter l'histoire à...\""
    },
    footer: {
      title: "DBS — Guide du Facilitateur",
      desc: "Imprimez ce guide et emportez-le à vos réunions."
    }
  }
};

const GuidePage: React.FC<GuidePageProps> = ({ onBack, language, setLanguage }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation Bar - Sticky Top */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 p-4 sticky top-0 z-50 flex justify-between items-center print:hidden">
        <div className="flex items-center gap-4">
             <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm group"
            >
              <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{t.back}</span>
            </button>
            
            {/* Language Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1">
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

        <div className="font-bold text-gray-900 tracking-tight text-sm md:text-base hidden md:block uppercase">{t.headerTitle}</div>
        
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors font-medium text-sm"
        >
          <IconPrinter className="w-4 h-4" />
          <span className="hidden sm:inline">{t.print}</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="w-full">
        
        {/* Header Section */}
        <header className="py-16 md:py-20 px-6 text-center border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              {t.tagline}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-teal-700 font-sans uppercase tracking-widest text-sm font-bold">
              {t.subtitle}
            </p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-12 px-6 bg-white border-b border-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl font-serif italic text-gray-600 leading-relaxed">
                    {t.intro}
                </p>
            </div>
        </section>

        {/* Phase 1 & 2 Instructions */}
        <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-4xl mx-auto space-y-12">
                
                {/* Step 1: Look Back */}
                <div className="flex gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">1</div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                            {t.lookBack.title}
                            <span className="text-xs font-normal text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">{t.lookBack.time}</span>
                        </h3>
                        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 space-y-4">
                            <p>{t.lookBack.desc}</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>{t.lookBack.q1}</li>
                                <li>{t.lookBack.q2}</li>
                                <li><strong>{t.lookBack.accountability}</strong> {t.lookBack.accountabilityQ}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-100" />

                {/* Step 2: Read & Retell */}
                <div className="flex gap-6 md:gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl">2</div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                            {t.readRetell.title}
                            <span className="text-xs font-normal text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">{t.readRetell.time}</span>
                        </h3>
                        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 space-y-4">
                            <p>{t.readRetell.desc}</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>{t.readRetell.step1}</li>
                                <li>{t.readRetell.step2}</li>
                                <li dangerouslySetInnerHTML={{ __html: t.readRetell.step3 }}></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Phase 3: Discovery Quadrants */}
        <section className="grid md:grid-cols-2 min-h-[60vh] border-t border-gray-200">
            
            {/* TEAL (Green-Water) - GOD */}
            <div className="bg-teal-50 text-gray-800 p-10 md:p-16 flex flex-col border-b md:border-b-0 md:border-r border-teal-100">
                <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-teal-800">
                        <IconArrowUp className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">{t.lookUp.tag}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-teal-800">{t.lookUp.godTitle}</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-teal-200 pl-4">
                        {t.lookUp.godDesc}
                    </p>
                    
                    <div className="bg-white/60 p-6 rounded-xl border border-teal-100">
                        <p className="text-sm font-bold text-teal-800 mb-3 uppercase tracking-wide">{t.lookUp.auxTitle}</p>
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>{t.lookUp.godQ1}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>{t.lookUp.godQ2}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>{t.lookUp.godQ3}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SKY BLUE - PEOPLE */}
            <div className="bg-sky-50 text-gray-800 p-10 md:p-16 flex flex-col">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-sky-800">
                        <IconUsers className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">{t.lookUp.tag}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-sky-800">{t.lookUp.peopleTitle}</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-sky-200 pl-4">
                        {t.lookUp.peopleDesc}
                    </p>
                    
                    <div className="bg-white/60 p-6 rounded-xl border border-sky-100">
                        <p className="text-sm font-bold text-sky-800 mb-3 uppercase tracking-wide">{t.lookUp.auxTitle}</p>
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>{t.lookUp.peopleQ1}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>{t.lookUp.peopleQ2}</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>{t.lookUp.peopleQ3}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ORANGE - OBEY */}
            <div className="bg-orange-50 text-gray-800 p-10 md:p-16 flex flex-col border-b md:border-b-0 md:border-r border-orange-100">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-orange-800">
                        <IconCheckCircle className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">{t.lookForward.tag}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-orange-800">{t.lookForward.obeyTitle}</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-orange-200 pl-4">
                        {t.lookForward.obeyDesc}
                    </p>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                        <p className="font-bold text-gray-800 mb-2">{t.lookForward.iWillTitle}</p>
                        <p className="text-gray-600 mb-4">{t.lookForward.iWillDesc}</p>
                        <ul className="text-sm space-y-1 text-gray-500 uppercase font-bold tracking-wide">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> {t.lookForward.specific}</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> {t.lookForward.measurable}</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> {t.lookForward.achievable}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SLATE/GRAY - SHARE */}
            <div className="bg-slate-50 text-gray-800 p-10 md:p-16 flex flex-col">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-slate-700">
                        <IconMessageCircle className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">{t.lookForward.tag}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-slate-700">{t.lookForward.shareTitle}</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-slate-200 pl-4">
                        {t.lookForward.shareDesc}
                    </p>
                    
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p className="font-bold text-gray-800 mb-2">{t.lookForward.shareSpecific}</p>
                        <p className="text-gray-600 leading-relaxed">
                            {t.lookForward.shareInst}
                        </p>
                        <p className="mt-4 p-3 bg-slate-100 text-slate-600 italic text-sm rounded">
                            {t.lookForward.shareQuote}
                        </p>
                    </div>
                </div>
            </div>

        </section>

        {/* Footer */}
        <footer className="bg-gray-50 text-gray-500 py-16 px-6 text-center text-sm print:hidden border-t border-gray-100">
            <p className="mb-3 font-semibold text-gray-400">{t.footer.title}</p>
            <p className="opacity-60">{t.footer.desc}</p>
        </footer>

      </main>
    </div>
  );
};

export default GuidePage;