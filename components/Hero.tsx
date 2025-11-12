import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary text-white pt-24 pb-28 md:pt-40 md:pb-40 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[100rem] h-[50rem] rounded-full bg-primary/10 blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary font-semibold text-lg mb-3 animate-fade-in-up [animation-delay:200ms]">CERTIFICAÇÃO DIGITAL SEM COMPLICAÇÃO</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 animate-fade-in-up [animation-delay:400ms] [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
            Seu Certificado Digital em Minutos, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300">100% Online</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:600ms]">
            Emita seu e-CPF, e-CNPJ ou NF-e por videoconferência com total segurança e a agilidade que seu negócio precisa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up [animation-delay:800ms]">
            <a href="#certificados" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-8 py-4 rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 text-lg">
              Emitir meu Certificado
            </a>
            <a href="#como-funciona" className="w-full sm:w-auto bg-secondary-light/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-secondary-light transition-all duration-300 backdrop-blur-sm border border-white/10">
              Ver como funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;