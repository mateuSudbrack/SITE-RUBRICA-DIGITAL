import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Certificados', href: '#certificados' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
             <a href="#" aria-label="Página inicial da Rúbrica Digital">
               {/* FIX: Replaced img tag with Logo component to fix broken image path. */}
               <Logo className="h-8 w-auto"/>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-primary font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#certificados" className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-6 py-2 rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5">
              Emitir Certificado
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-secondary/95 backdrop-blur-lg`}>
        <div className="px-6 pt-2 pb-4 space-y-2">
           {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-primary font-medium transition-colors py-2">
                {link.name}
              </a>
            ))}
          <a href="#certificados" onClick={() => setIsOpen(false)} className="block text-center w-full mt-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-6 py-3 rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-300 shadow-lg">
            Emitir Certificado
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;