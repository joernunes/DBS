import React from 'react';
import { IconX, IconBookOpen, IconArrowUp, IconUsers, IconArrowRight } from './Icons';

interface StudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  reference: string;
}

const StudyModal: React.FC<StudyModalProps> = ({ isOpen, onClose, title, reference }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="absolute inset-4 md:inset-10 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-teal-700 text-white px-6 py-4 flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <p className="text-teal-200 text-sm flex items-center gap-2">
              <IconBookOpen className="w-4 h-4" />
              {reference}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <IconX className="w-6 h-6" />
          </button>
        </div>

        {/* 4 Quadrants Content */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Quadrant 1: The Text (Left Top) */}
            <div className="flex flex-col h-full bg-gray-50/50">
              <div className="p-4 bg-gray-100 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2 uppercase text-sm tracking-wider">
                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">1</span>
                O Texto Bíblico
              </div>
              <div className="p-6 overflow-y-auto leading-relaxed text-gray-800 text-lg space-y-4 font-serif">
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">1</span>
                  Alguns dias depois, Jesus entrou de novo em Cafarnaum, e logo se espalhou a notícia de que ele estava em casa. 
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">2</span>
                  Muitas pessoas se reuniram ali, a ponto de não sobrar lugar nem mesmo em frente da porta. E Jesus anunciava a palavra a elas.
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">3</span>
                  Vieram então alguns trazendo um paralítico, carregado por quatro homens. 
                  <span className="text-xs text-gray-400 align-top mr-1">4</span>
                  Como não conseguiam levá-lo até Jesus por causa da multidão, abriram o teto, bem em cima de onde ele estava. Fizeram uma abertura e baixaram a maca em que o paralítico estava deitado.
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">5</span>
                  Vendo a fé que eles tinham, Jesus disse ao paralítico: “Filho, os seus pecados estão perdoados”.
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">6</span>
                  Ora, estavam sentados ali alguns mestres da lei, que pensavam em seu coração: 
                  <span className="text-xs text-gray-400 align-top mr-1">7</span>
                  “Por que este homem fala assim? Ele está blasfemando! Quem pode perdoar pecados, a não ser um só, que é Deus?”
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">8</span>
                  Jesus percebeu imediatamente em seu espírito o que eles estavam pensando e lhes disse: “Por que vocês estão pensando essas coisas? 
                  <span className="text-xs text-gray-400 align-top mr-1">9</span>
                  O que é mais fácil dizer ao paralítico: ‘Os seus pecados estão perdoados’, ou: ‘Levante-se, pegue a sua maca e ande’? 
                  <span className="text-xs text-gray-400 align-top mr-1">10</span>
                  Pois, para que vocês saibam que o Filho do Homem tem na terra autoridade para perdoar pecados” — disse ele ao paralítico — 
                  <span className="text-xs text-gray-400 align-top mr-1">11</span>
                  “eu digo a você: Levante-se, pegue a sua maca e vá para casa”.
                </p>
                <p>
                  <span className="text-xs text-gray-400 align-top mr-1">12</span>
                  Ele se levantou, pegou a maca e saiu imediatamente, à vista de todos. Todos ficaram admirados e glorificaram a Deus, dizendo: “Nunca vimos nada igual!”
                </p>
              </div>
            </div>

            {/* Right Column Wrapper for Desktop */}
            <div className="flex flex-col h-full md:overflow-hidden">
                
                {/* Quadrant 2: God (Top Right) */}
                <div className="flex-1 flex flex-col min-h-[250px] border-b border-gray-200">
                  <div className="p-4 bg-teal-50 border-b border-teal-100 font-bold text-teal-800 flex items-center gap-2 uppercase text-sm tracking-wider">
                    <IconArrowUp className="w-5 h-5" />
                    2. O que aprendemos sobre Deus?
                  </div>
                  <div className="p-6 overflow-y-auto bg-white">
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-gray-700">Jesus tem autoridade para perdoar pecados (é Divino).</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-gray-700">Ele conhece os pensamentos e corações das pessoas.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-gray-700">Ele valoriza o perdão espiritual acima da cura física.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-gray-700">Ele honra a fé que é demonstrada com ação.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Bottom Row Wrapper for Desktop Grid splits */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 min-h-[300px]">
                    
                    {/* Quadrant 3: People (Bottom Left of Right side - visually arranged in 4 quadrants on desktop requires CSS grid trickery, but simple stacking is fine. Let's do true 4 quadrants layout visually) */}
                    
                    {/* Let's adjust layout to be TRUE 4 quadrants: 
                        Top Left: Text
                        Top Right: God
                        Bottom Left: People
                        Bottom Right: Obedience
                    */}
                </div>
            </div>

          </div>
          {/* Correction: The previous div structure was getting complex. Let's restart the grid part for cleaner 2x2 */}
        </div>
        
        {/* RESTARTING GRID LAYOUT FOR CORRECT 4 QUADRANTS */}
        <div className="absolute top-[72px] bottom-0 left-0 right-0 hidden md:grid grid-cols-2 grid-rows-2">
            
            {/* Q1: Text */}
            <div className="border-r border-b border-gray-200 bg-gray-50/50 flex flex-col overflow-hidden">
                 <div className="p-3 bg-gray-100 border-b border-gray-200 font-bold text-gray-700 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <IconBookOpen className="w-4 h-4" /> 1. O Texto
                 </div>
                 <div className="p-6 overflow-y-auto leading-relaxed text-gray-800 text-lg space-y-4 font-serif">
                    <p><strong>Marcos 2:1-12</strong></p>
                    <p>...Vieram então alguns trazendo um paralítico, carregado por quatro homens... Vendo a fé que eles tinham, Jesus disse: “Filho, os seus pecados estão perdoados”.</p>
                    <p className="italic text-gray-500 text-sm mt-4">(Leia o texto completo na sua Bíblia ou no card anterior)</p>
                 </div>
            </div>

            {/* Q2: God */}
            <div className="border-b border-gray-200 flex flex-col overflow-hidden">
                <div className="p-3 bg-teal-50 border-b border-teal-100 font-bold text-teal-800 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <IconArrowUp className="w-4 h-4" /> 2. Deus
                 </div>
                 <div className="p-6 overflow-y-auto">
                    <ul className="space-y-2 text-sm md:text-base">
                        <li className="p-2 bg-teal-50 rounded text-teal-900">Jesus tem autoridade igual a Deus.</li>
                        <li className="p-2 bg-teal-50 rounded text-teal-900">Ele conhece nossos pensamentos secretos.</li>
                        <li className="p-2 bg-teal-50 rounded text-teal-900">Ele vê nossa fé através das nossas ações.</li>
                    </ul>
                 </div>
            </div>

            {/* Q3: People */}
            <div className="border-r border-gray-200 flex flex-col overflow-hidden">
                <div className="p-3 bg-blue-50 border-b border-blue-100 font-bold text-blue-800 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <IconUsers className="w-4 h-4" /> 3. Pessoas
                 </div>
                 <div className="p-6 overflow-y-auto">
                    <ul className="space-y-2 text-sm md:text-base">
                        <li className="p-2 bg-blue-50 rounded text-blue-900">Precisamos de amigos para nos levar a Jesus.</li>
                        <li className="p-2 bg-blue-50 rounded text-blue-900">Os líderes religiosos podem ser cegos espiritualmente.</li>
                        <li className="p-2 bg-blue-50 rounded text-blue-900">Nossa maior necessidade é perdão, não apenas cura física.</li>
                    </ul>
                 </div>
            </div>

            {/* Q4: Obedience */}
            <div className="flex flex-col overflow-hidden">
                <div className="p-3 bg-orange-50 border-b border-orange-100 font-bold text-orange-800 flex items-center gap-2 uppercase text-xs tracking-wider">
                    <IconArrowRight className="w-4 h-4" /> 4. Obediência ("Eu vou...")
                 </div>
                 <div className="p-6 overflow-y-auto">
                    <div className="space-y-4 text-sm md:text-base">
                        <div>
                            <p className="font-bold text-gray-700 text-xs uppercase mb-1">Aplicação Pessoal</p>
                            <p className="p-3 border-l-4 border-orange-400 bg-orange-50 text-gray-800 italic">
                                "Eu vou parar de julgar as pessoas pela aparência como os mestres da lei faziam."
                            </p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xs uppercase mb-1">Compartilhar</p>
                            <p className="p-3 border-l-4 border-orange-400 bg-orange-50 text-gray-800 italic">
                                "Eu vou contar para o [João] que Jesus tem poder para perdoar os erros do passado dele."
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Mobile View (Scrollable Stack) */}
        <div className="md:hidden flex-1 overflow-y-auto">
             {/* Q1: Text */}
             <div className="p-4 border-b-4 border-gray-100">
                 <div className="font-bold text-gray-800 flex items-center gap-2 uppercase text-sm mb-3">
                    <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs">1</span>
                    O Texto
                 </div>
                 <div className="text-gray-700 leading-relaxed font-serif">
                    {/* Simplified text for mobile preview */}
                    <p className="mb-2">...Trouxeram um paralítico... abriram o teto... Jesus disse: "Filho, os seus pecados estão perdoados"... Disse ao paralítico: "Levante-se, pegue a sua maca e ande". (Marcos 2:1-12)</p>
                 </div>
            </div>

            {/* Q2: God */}
            <div className="p-4 border-b-4 border-gray-100 bg-teal-50/30">
                 <div className="font-bold text-teal-800 flex items-center gap-2 uppercase text-sm mb-3">
                    <IconArrowUp className="w-5 h-5" /> 2. Deus
                 </div>
                 <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Jesus tem autoridade divina.</li>
                    <li>Conhece pensamentos.</li>
                    <li>Prioriza o perdão.</li>
                 </ul>
            </div>

            {/* Q3: People */}
            <div className="p-4 border-b-4 border-gray-100 bg-blue-50/30">
                 <div className="font-bold text-blue-800 flex items-center gap-2 uppercase text-sm mb-3">
                    <IconUsers className="w-5 h-5" /> 3. Pessoas
                 </div>
                 <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Precisamos de amigos na fé.</li>
                    <li>Podemos ser críticos (mestres da lei).</li>
                    <li>Todos precisam de perdão.</li>
                 </ul>
            </div>

            {/* Q4: Obedience */}
            <div className="p-4 bg-orange-50/30">
                 <div className="font-bold text-orange-800 flex items-center gap-2 uppercase text-sm mb-3">
                    <IconArrowRight className="w-5 h-5" /> 4. Obediência
                 </div>
                 <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-orange-100 shadow-sm">
                        <span className="text-xs font-bold text-orange-500 block">EU VOU...</span>
                        Confiar que Jesus perdoa meus erros passados.
                    </div>
                    <div className="bg-white p-3 rounded border border-orange-100 shadow-sm">
                        <span className="text-xs font-bold text-orange-500 block">VOU COMPARTILHAR COM...</span>
                        Meu amigo do trabalho que está ansioso.
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StudyModal;
