import React from 'react';
import { IconBookOpen, IconUsers, IconHeart, IconCheckCircle, IconArrowRight, IconMessageCircle } from './Icons';

const Method: React.FC = () => {
  return (
    <section id="method" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-teal-600 font-bold tracking-wider text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Simples & Reprodutível
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Não é preciso ser teólogo. O método DBS se baseia em três pilares práticos que qualquer pessoa pode seguir.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          
          {/* Card 1: Preparação */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-600 shadow-inner">
                <IconBookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Preparação</h3>
            <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
              Antes do grupo chegar, prepare o ambiente e o coração.
            </p>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                <span><strong>Texto Curto:</strong> Escolha uma história bíblica simples (apenas 10-15 versículos).</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                <span><strong>Ambiente:</strong> Um café, uma sala ou um parque. Lugares naturais facilitam a conversa.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                <span><strong>Oração:</strong> Peça que o Espírito Santo seja o verdadeiro professor.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: O Encontro (Roteiro) - Highlighted */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100 relative z-10 transform md:-translate-y-4 ring-1 ring-teal-50">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-t-2xl"></div>
            <div className="absolute top-4 right-4 bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-1 rounded border border-teal-100 uppercase tracking-wide">
                O Roteiro
            </div>
            
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 shadow-inner">
                <IconUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. O Encontro</h3>
            <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
              Siga este fluxo simples. O objetivo é descobrir juntos, não pregar.
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <span><strong>Conectar:</strong> Gratidão e Desafios da semana.</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <span><strong>Ler:</strong> Ler o texto e recontar com suas palavras.</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <span><strong>Descobrir:</strong> O que aprendemos sobre Deus?</span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                <span><strong>Agir:</strong> "Eu vou..." (Obediência prática).</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Dicas (Facilitação) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500 shadow-inner">
                <IconHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. O Facilitador</h3>
            <p className="text-gray-500 text-sm mb-6 border-b border-gray-100 pb-4">
              Sua postura é mais importante que seu conhecimento.
            </p>
            <ul className="space-y-4 text-sm font-medium text-gray-700">
              <li className="flex items-start gap-3">
                <IconMessageCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <span><strong>Regra 70/30:</strong> O grupo fala 70% do tempo. Você só 30%.</span>
              </li>
              <li className="flex items-start gap-3">
                <IconArrowRight className="w-5 h-5 text-orange-400 mt-0.5" />
                <span><strong>Volte ao Texto:</strong> Se surgirem dúvidas, pergunte: "Onde o texto diz isso?"</span>
              </li>
              <li className="flex items-start gap-3">
                <IconCheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <span><strong>Foco na Prática:</strong> Conhecimento sem obediência é apenas informação.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;