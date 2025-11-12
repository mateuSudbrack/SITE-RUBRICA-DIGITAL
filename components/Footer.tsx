import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/40 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <a href="#" className="mb-4 inline-block" aria-label="Página inicial da Rúbrica Digital">
               {/* FIX: Replaced img tag with Logo component to fix broken image path. */}
               <Logo className="h-9 w-auto"/>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplificando a identidade digital do Brasil com tecnologia, segurança e um atendimento que faz a diferença.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#certificados" className="text-gray-400 hover:text-primary transition-colors">Certificados</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#vantagens" className="text-gray-400 hover:text-primary transition-colors">Vantagens</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">contato@rubricadigital.com.br</li>
              <li className="text-gray-400">(11) 99999-8888</li>
              <li className="text-gray-400">Seg. a Sex. 09h-18h</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rúbrica Digital. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;