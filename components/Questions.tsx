import React from 'react';
import { IconDownload } from './Icons';

interface QuestionsProps {
    onOpenGuide?: () => void;
}

const Questions: React.FC<QuestionsProps> = ({ onOpenGuide }) => {
  return (
    <section id="questions" className="py-20 bg-teal-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">As Perguntas de Descoberta</h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Após ler o texto, não explique. Apenas faça estas perguntas e deixe o grupo descobrir as respostas no texto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/50">
            <h3 className="text-orange-300 font-bold uppercase tracking-wider mb-2 text-sm">Descoberta (Olhar para Cima)</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-4xl font-bold text-white/20">1</span>
                <div>
                  <p className="text-xl font-semibold">O que este texto diz sobre Deus?</p>
                  <p className="text-teal-200 text-sm mt-1">(Seu caráter, ações, poder)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-4xl font-bold text-white/20">2</span>
                <div>
                  <p className="text-xl font-semibold">O que este texto diz sobre as pessoas?</p>
                  <p className="text-teal-200 text-sm mt-1">(Nossa natureza, erros, necessidades)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/50">
            <h3 className="text-orange-300 font-bold uppercase tracking-wider mb-2 text-sm">Aplicação (Olhar para Frente)</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-4xl font-bold text-white/20">3</span>
                <div>
                  <p className="text-xl font-semibold">Se isso é verdade, como vou obedecer?</p>
                  <p className="text-teal-200 text-sm mt-1">Crie uma frase: "Essa semana, eu vou..."</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-4xl font-bold text-white/20">4</span>
                <div>
                  <p className="text-xl font-semibold">Com quem vou compartilhar isso?</p>
                  <p className="text-teal-200 text-sm mt-1">Nomeie uma pessoa específica.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onOpenGuide}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-3"
          >
            <IconDownload className="w-5 h-5" />
            Baixar PDF (Guia de Bolso)
          </button>
          <p className="mt-4 text-teal-200 text-sm">Imprima e leve para sua reunião.</p>
        </div>
      </div>
    </section>
  );
};

export default Questions;