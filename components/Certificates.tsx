import React from 'react';
import { UserIcon, BuildingIcon, FileTextIcon } from './icons';

interface CertificateCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  validity: string;
  isPopular?: boolean;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ icon, title, description, price, validity, isPopular }) => {
  const popularClasses = 'border-transparent bg-gradient-to-br from-secondary-light to-secondary ring-2 ring-primary';
  const standardClasses = 'border-white/10 bg-secondary-light hover:border-primary/50';

  return (
    <div className={`relative border rounded-xl p-8 flex flex-col text-center transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 ${isPopular ? popularClasses : standardClasses}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">MAIS POPULAR</div>
      )}
      <div className="mb-6 mx-auto p-4 rounded-full bg-black/20 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 flex-grow">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        <span className="text-gray-400">/12 meses</span>
      </div>
      <a href="#" className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${isPopular ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary shadow-primary/30' : 'bg-white/10 text-primary border border-primary hover:bg-primary hover:text-white'}`}>
        Comprar Agora
      </a>
    </div>
  );
};


const Certificates: React.FC = () => {
  const certificates = [
    {
      icon: <UserIcon className="w-8 h-8" />,
      title: 'e-CPF A1',
      description: 'Ideal para pessoas físicas. Assine documentos e acesse serviços do governo como o e-CAC da Receita Federal.',
      price: 'R$ 149',
      validity: 'Válido por 12 meses',
      isPopular: false,
    },
    {
      icon: <BuildingIcon className="w-8 h-8" />,
      title: 'e-CNPJ A1',
      description: 'Essencial para empresas. Emita notas fiscais, cumpra obrigações fiscais e represente seu negócio digitalmente.',
      price: 'R$ 229',
      validity: 'Válido por 12 meses',
      isPopular: true,
    },
    {
      icon: <FileTextIcon className="w-8 h-8" />,
      title: 'NF-e A1',
      description: 'Específico para a emissão de Notas Fiscais Eletrônicas, garantindo autenticidade e validade jurídica para suas vendas.',
      price: 'R$ 219',
      validity: 'Válido por 12 meses',
      isPopular: false,
    },
  ];

  return (
    <section id="certificados" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">O Certificado Digital Certo para Você</h2>
          <p className="text-lg text-gray-400">
            Soluções completas para pessoas físicas e jurídicas. Emissão 100% online por videoconferência com total segurança.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;