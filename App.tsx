import React from 'react';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { ProductShowcase } from './components/ProductShowcase';
import { DistributorsSection } from './components/DistributorsSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <HistorySection />
        <ProductShowcase />
        <DistributorsSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;