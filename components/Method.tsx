import React from 'react';
import { IconBookOpen, IconUsers, IconMessageCircle, IconCheckCircle, IconHeart, IconArrowRight, IconHelpCircle } from './Icons';

const Method: React.FC = () => {
  return (
    <section id="method" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-teal-600 font-bold tracking-wider text-sm uppercase bg-teal-50 px-3 py-1 rounded-full">
            Simples & Reprodutível
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Não é preciso ser um especialista. O método se baseia em três pilares simples: Preparação, o Encontro e a Postura do Facilitador.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Preparação */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-gray-400 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-600">
                <IconBookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Preparação</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">
              O sucesso do encontro começa antes dele acontecer. Seu papel é preparar o ambiente e o coração.
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="text-gray-400 mt-0.5">•</span>
                <span><strong>Escolha a Passagem:</strong> Selecione um texto curto (narrativa ou ensino de Jesus) de fácil compreensão.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-gray-400 mt-0.5">•</span>
                <span><strong>Ambiente:</strong> Prepare um local acolhedor (café, sala, parque) onde todos possam interagir.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-gray-400 mt-0.5">•</span>
                <span><strong>Oração:</strong> Ore pedindo que o Espírito Santo seja o verdadeiro professor.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: O Encontro (Roteiro) */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 border-t-4 border-t-teal-500 transform md:-translate-y-4 h-full flex flex-col relative z-10">
            <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                O Roteiro
            </div>
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                <IconUsers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. O Encontro</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">
              Siga este fluxo simples. O objetivo não é pregar, mas descobrir juntos o que o texto diz.
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <span className="bg-teal-100 text-teal-800 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                <span><strong>Conexão:</strong> Como foi a semana? (Gratidão e desafios).</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-teal-100 text-teal-800 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                <span><strong>Ler e Recontar:</strong> Leiam o texto e peçam para alguém recontar com suas palavras.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-teal-100 text-teal-800 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                <span><strong>Perguntas SOS:</strong> O que aprendemos sobre Deus? Sobre Pessoas?</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-teal-100 text-teal-800 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                <span><strong>Prática:</strong> "Eu vou..." (Obediência) e "Vou contar para..." (Compartilhar).</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Dicas (Facilitação) */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-orange-400 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                <IconHeart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Dicas de Ouro</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">
              Como facilitador, sua postura é mais importante que seu conhecimento. Seja um aprendiz junto com o grupo.
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <IconCheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span><strong>Fale Pouco:</strong> Siga a regra 70/30. Deixe o grupo falar 70% do tempo.</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconCheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span><strong>Seja Neutro:</strong> Se fizerem uma pergunta difícil, devolva ao texto: "O que esta passagem diz sobre isso?"</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconCheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span><strong>Foque na Ação:</strong> Conhecimento sem obediência é apenas informação. Incentive passos práticos.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;