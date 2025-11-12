
import React from 'react';
import { StarIcon } from './icons';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const Rating: React.FC<{ stars: number }> = ({ stars }) => (
  <div className="flex text-yellow-400 mb-4">
    {Array.from({ length: stars }).map((_, i) => (
      <StarIcon key={i} className="w-5 h-5" filled />
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatarUrl }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col transform transition-transform hover:scale-105">
    <Rating stars={5} />
    <p className="text-gray-700 italic mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatarUrl} alt={`Foto de ${author}, cliente da Rúbrica Digital`} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-bold text-secondary">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Processo incrivelmente rápido e suporte muito atencioso. Fiz tudo por videoconferência em menos de 15 minutos. Recomendo demais!',
      author: 'Juliana Costa',
      role: 'CEO, InovaTech Soluções',
      avatarUrl: 'https://i.pravatar.cc/100?img=1',
    },
    {
      quote: 'Finalmente uma empresa que descomplica a certificação digital. A Rúbrica Digital tornou tudo mais fácil e acessível para o meu escritório.',
      author: 'Marcos Almeida',
      role: 'Contador, Almeida & Associados',
      avatarUrl: 'https://i.pravatar.cc/100?img=3',
    },
    {
      quote: 'Segurança e agilidade definem o serviço. Consegui emitir meu e-CNPJ sem burocracia e com um preço excelente. Muito satisfeita!',
      author: 'Carla Pereira',
      role: 'Diretora, Varejo Total',
      avatarUrl: 'https://i.pravatar.cc/100?img=5',
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Aprovado por quem mais importa: nossos clientes</h2>
          <p className="text-lg text-gray-600">
            A satisfação de quem confia em nosso trabalho é nossa maior recompensa.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
