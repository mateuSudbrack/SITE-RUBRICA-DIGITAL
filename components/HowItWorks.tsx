import React from 'react';
import { CheckCircleIcon } from './icons';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Compra e Pagamento',
      description: 'Escolha seu certificado e realize o pagamento 100% online e seguro com Cartão de Crédito, Boleto ou PIX.',
    },
    {
      number: '02',
      title: 'Agendamento Online',
      description: 'Após a compra, você receberá um link para agendar sua videoconferência no melhor dia e horário.',
    },
    {
      number: '03',
      title: 'Validação por Vídeo',
      description: 'No horário agendado, um de nossos agentes fará a validação dos seus documentos de forma rápida e segura.',
    },
    {
      number: '04',
      title: 'Emissão Imediata',
      description: 'Logo após a validação, seu certificado digital é emitido e está pronto para ser instalado e utilizado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Tudo Pronto em 4 Passos Simples</h2>
          <p className="text-lg text-gray-400">
            Nosso processo é desenhado para ser o mais rápido e intuitivo possível. Totalmente online, do início ao fim.
          </p>
        </div>
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center">
          {/* Dashed line for desktop */}
          <div className="absolute top-10 left-0 w-full h-0.5 hidden lg:block bg-repeat-x bg-[length:16px_2px]" style={{ backgroundImage: 'linear-gradient(to right, #51A5D3 50%, transparent 50%)' }}></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
              <div className="relative mb-6">
                 <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center ring-4 ring-primary/50 shadow-lg shadow-primary/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-2xl">
                    {step.number}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;