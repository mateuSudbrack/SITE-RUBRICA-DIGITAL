
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDownIcon
          className={`w-6 h-6 text-primary flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O que é um Certificado Digital?',
      answer: 'É sua identidade eletrônica para pessoas (e-CPF) e empresas (e-CNPJ). Permite assinar documentos com validade jurídica, acessar sistemas do governo e realizar transações online com segurança.',
    },
    {
      question: 'A validação por videoconferência é segura?',
      answer: 'Sim, 100% segura. O processo segue os rigorosos padrões da ICP-Brasil. Seus dados são criptografados e a validação é conduzida por um agente de registro treinado para garantir sua identidade.',
    },
    {
        question: 'O que é a ICP-Brasil?',
        answer: 'A Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) é o sistema nacional que regulamenta e audita a emissão de certificados digitais no país. Estar credenciado à ICP-Brasil, como a Rúbrica Digital, garante que seu certificado tem validade jurídica em todo o território nacional.',
    },
    {
      question: 'Qual a diferença entre os certificados A1 e A3?',
      answer: 'O A1 é um software instalado no seu computador, com validade de 1 ano. É mais prático para o dia a dia. O A3 é armazenado em uma mídia física (token ou cartão), tem validade maior (até 5 anos) e precisa ser conectado ao computador para uso.',
    },
    {
        question: 'Posso instalar o certificado A1 em mais de um computador?',
        answer: 'Sim! Essa é uma das grandes vantagens do A1. Você pode instalar o arquivo em múltiplos computadores e dispositivos, como notebooks e sistemas em nuvem, oferecendo muito mais flexibilidade.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-400">
            Tire suas dúvidas sobre certificação digital de forma rápida e direta.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
