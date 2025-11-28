import React from 'react';
import { IconUsers, IconBookOpen, IconCheckCircle } from './Icons';

const WhatIs: React.FC = () => {
  return (
    <section id="what-is" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O que é o DBS?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            O Estudo Bíblico de Descoberta (Discovery Bible Study) é um método simples que permite a qualquer pessoa facilitar um grupo. O foco não é transferir conhecimento intelectual, mas sim a <span className="text-teal-700 font-semibold">obediência prática</span> e a <span className="text-teal-700 font-semibold">reprodutibilidade</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard 
            icon={<IconUsers className="w-8 h-8 text-teal-600" />}
            title="Relacionamentos"
            description="Acontece em pequenos grupos naturais: família, amigos, colegas de trabalho ou vizinhos."
          />
          <FeatureCard 
            icon={<IconBookOpen className="w-8 h-8 text-teal-600" />}
            title="Direto na Fonte"
            description="Sem comentários ou livros extras. O grupo lê o texto bíblico e descobre a verdade juntos."
          />
          <FeatureCard 
            icon={<IconCheckCircle className="w-8 h-8 text-teal-600" />}
            title="Obediência"
            description="O objetivo não é apenas saber mais, mas fazer algo sobre o que aprendemos a cada semana."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 bg-teal-50 rounded-xl border border-teal-100 hover:shadow-md transition-shadow">
    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4 mx-auto md:mx-0">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">{title}</h3>
    <p className="text-gray-600 text-center md:text-left">{description}</p>
  </div>
);

export default WhatIs;