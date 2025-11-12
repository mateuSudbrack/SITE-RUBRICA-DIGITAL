import React from 'react';
import { ShieldIcon } from './icons';

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-secondary-light py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-3">
            <ShieldIcon className="w-8 h-8 text-accent" />
            <p className="text-lg font-semibold text-white">
              Empresa Credenciada pela <span className="font-bold text-accent">ICP-Brasil</span>
            </p>
          </div>
           <div className="hidden md:block h-8 w-px bg-white/20"></div>
           <p className="text-gray-400 text-lg">
              A maior autoridade em certificação digital do país.
            </p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;