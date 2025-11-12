import React from 'react';
import { ShieldIcon, ZapIcon, HeadsetIcon, AwardIcon, MonitorIcon, DollarSignIcon } from './icons';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string; className?: string }> = ({ icon, title, description, className = '' }) => (
  <div className={`relative text-left p-6 bg-secondary-light rounded-xl overflow-hidden group ${className}`}>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div 
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,_#0D1B36_0%,_#51A5D3_50%,_#0D1B36_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
    ></div>
    <div className="relative z-10">
        <div className="inline-block text-primary mb-4 bg-secondary p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
  </div>
);


const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldIcon className="w-7 h-7" />,
      title: 'Segurança de Ponta',
      description: 'Seus dados são protegidos com criptografia e processos validados pela ICP-Brasil, garantindo máxima segurança.',
      className: 'lg:col-span-2',
    },
    {
      icon: <ZapIcon className="w-7 h-7" />,
      title: 'Emissão Expressa',
      description: 'Processo otimizado para que você tenha seu certificado digital ativo no menor tempo possível.',
      className: '',
    },
    {
      icon: <MonitorIcon className="w-7 h-7" />,
      title: 'Conforto Total',
      description: 'Realize todo o processo por videoconferência, de onde estiver, usando apenas seu computador ou celular.',
      className: '',
    },
    {
      icon: <HeadsetIcon className="w-7 h-7" />,
      title: 'Suporte Humanizado',
      description: 'Nossa equipe está pronta para te ajudar em todas as etapas, da compra à instalação do seu certificado.',
      className: 'lg:col-span-2',
    },
    {
      icon: <DollarSignIcon className="w-7 h-7" />,
      title: 'O Melhor Custo-Benefício',
      description: 'Oferecemos certificados de alta qualidade com preços justos e condições que cabem no seu bolso.',
      className: '',
    },
     {
      icon: <AwardIcon className="w-7 h-7" />,
      title: 'Validade Jurídica Plena',
      description: 'Assine documentos e realize transações com a mesma validade de uma assinatura reconhecida em cartório.',
      className: 'lg:col-span-3',
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Por que a Rúbrica Digital é a Melhor Escolha?</h2>
          <p className="text-lg text-gray-400">
            Combinamos tecnologia, segurança e um atendimento excepcional para oferecer a melhor experiência em certificação digital.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;