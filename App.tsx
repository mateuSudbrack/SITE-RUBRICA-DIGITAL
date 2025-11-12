
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Certificates from './components/Certificates';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-secondary text-gray-300 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Certificates />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
