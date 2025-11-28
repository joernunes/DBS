import React, { useEffect } from 'react';
import { IconArrowLeft, IconArrowUp, IconUsers, IconCheckCircle, IconMessageCircle, IconPrinter } from './Icons';

interface GuidePageProps {
  onBack: () => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* Navigation Bar - Sticky Top */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 p-4 sticky top-0 z-50 flex justify-between items-center print:hidden">
         <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm group"
        >
          <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>
        <div className="font-bold text-gray-900 tracking-tight text-sm md:text-base">GUIA DO FACILITADOR</div>
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors font-medium text-sm"
        >
          <IconPrinter className="w-4 h-4" />
          <span className="hidden sm:inline">Imprimir Guia</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="w-full">
        
        {/* Header Section */}
        <header className="py-16 md:py-20 px-6 text-center border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1.5 px-4 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Modelo de Reunião
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 mb-4 tracking-tight leading-tight">
              Roteiro de Descoberta
            </h1>
            <p className="text-teal-700 font-sans uppercase tracking-widest text-sm font-bold">
              Use este guia para facilitar qualquer texto bíblico
            </p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-12 px-6 bg-white border-b border-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl font-serif italic text-gray-600 leading-relaxed">
                    "Você não precisa ser um especialista. Seu papel é apenas fazer as perguntas e deixar que o grupo descubra as respostas no texto. O verdadeiro professor é o Espírito Santo."
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
                            Olhar para Trás
                            <span className="text-xs font-normal text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">15-20 min</span>
                        </h3>
                        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 space-y-4">
                            <p>Comece perguntando como foi a semana. Crie um ambiente de cuidado mútuo.</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>Do que você é grato nesta semana?</li>
                                <li>Qual foi o maior desafio/stress da semana?</li>
                                <li><strong>Prestação de Contas:</strong> Como foi sua obediência ao "Eu vou..." da semana passada? Com quem você compartilhou?</li>
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
                            Ler e Recontar
                            <span className="text-xs font-normal text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">15 min</span>
                        </h3>
                        <div className="font-serif text-lg md:text-xl leading-relaxed text-gray-600 space-y-4">
                            <p>O objetivo é fixar a história na mente de todos antes de analisar.</p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-800">
                                <li>Peça para alguém ler o texto em voz alta enquanto os outros acompanham.</li>
                                <li>Peça para outra pessoa ler em outra versão (se houver).</li>
                                <li>Peça para alguém <strong>recontar a história</strong> com suas próprias palavras. O grupo pode ajudar a completar detalhes esquecidos.</li>
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
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Cima</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-teal-800">Sobre Deus</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-teal-200 pl-4">
                        O que este texto nos diz sobre Deus Pai, Jesus ou o Espírito Santo?
                    </p>
                    
                    <div className="bg-white/60 p-6 rounded-xl border border-teal-100">
                        <p className="text-sm font-bold text-teal-800 mb-3 uppercase tracking-wide">Perguntas Auxiliares:</p>
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>Quais são seus atributos ou caráter aqui? (Amoroso, Justo, Poderoso...)</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>O que Ele está fazendo ou dizendo?</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-teal-500 font-bold">?</span>
                                <span>Existe alguma promessa para reivindicar?</span>
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
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Cima</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-sky-800">Sobre Pessoas</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-sky-200 pl-4">
                        O que este texto nos diz sobre a humanidade ou sobre nós mesmos?
                    </p>
                    
                    <div className="bg-white/60 p-6 rounded-xl border border-sky-100">
                        <p className="text-sm font-bold text-sky-800 mb-3 uppercase tracking-wide">Perguntas Auxiliares:</p>
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>Existe algum exemplo a ser seguido?</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>Existe algum pecado ou erro a ser evitado?</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-sky-500 font-bold">?</span>
                                <span>O que isso revela sobre a condição humana?</span>
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
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Frente</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-orange-800">Obediência</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-orange-200 pl-4">
                        Se isso é verdade, o que vou fazer sobre isso?
                    </p>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                        <p className="font-bold text-gray-800 mb-2">A Declaração "Eu vou..."</p>
                        <p className="text-gray-600 mb-4">Cada pessoa deve criar uma frase de ação que seja:</p>
                        <ul className="text-sm space-y-1 text-gray-500 uppercase font-bold tracking-wide">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Específica</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Mensurável</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Alcançável nesta semana</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* SLATE/GRAY - SHARE */}
            <div className="bg-slate-50 text-gray-800 p-10 md:p-16 flex flex-col">
                 <div className="max-w-lg mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6 opacity-60 text-slate-700">
                        <IconMessageCircle className="w-8 h-8" />
                        <span className="text-sm font-bold uppercase tracking-widest">Olhar para Frente</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight text-slate-700">Compartilhar</h2>
                    <p className="text-gray-600 text-lg font-serif italic mb-8 border-l-4 border-slate-200 pl-4">
                        Com quem vou compartilhar essa história/verdade?
                    </p>
                    
                     <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <p className="font-bold text-gray-800 mb-2">Nome Específico</p>
                        <p className="text-gray-600 leading-relaxed">
                            Incentive cada um a pensar em uma pessoa do seu círculo (família, trabalho, vizinhos) que precisa ouvir o que foi aprendido hoje.
                        </p>
                        <p className="mt-4 p-3 bg-slate-100 text-slate-600 italic text-sm rounded">
                            "Vou contar a história para..."
                        </p>
                    </div>
                </div>
            </div>

        </section>

        {/* Footer */}
        <footer className="bg-gray-50 text-gray-500 py-16 px-6 text-center text-sm print:hidden border-t border-gray-100">
            <p className="mb-3 font-semibold text-gray-400">DBS — Guia do Facilitador</p>
            <p className="opacity-60">Imprima este guia e leve para suas reuniões.</p>
        </footer>

      </main>
    </div>
  );
};

export default GuidePage;