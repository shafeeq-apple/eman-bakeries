import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { LOGO_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger transition after scrolling past most of the hero section
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; // Fixed header offset
      // Using pageYOffset is often more reliable than scrollY in some frames
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
           <img 
            src={LOGO_URL} 
            alt="Eman Bakeries" 
            className={`object-contain transition-all duration-500 ${isScrolled ? 'h-16' : 'h-[100px]'}`}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12 text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
          <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Our Story</a>
          <a href="#catalogue" onClick={(e) => scrollToSection(e, 'catalogue')} className="hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Catalogue</a>
          <a href="#distributors" onClick={(e) => scrollToSection(e, 'distributors')} className="hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Distributors</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:flex items-center text-brand-gold border border-brand-gold/30 px-5 py-2 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 text-xs uppercase tracking-widest font-bold">
            <ShoppingBag className="w-3 h-3 mr-2" />
            <span>B2B Login</span>
          </button>
          
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-white hover:text-brand-gold transition-colors z-50 relative">
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl pt-32 overflow-y-auto"
          >
            <div className="flex flex-col p-8 space-y-8 items-center">
               <a href="#story" onClick={(e) => scrollToSection(e, 'story')} className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">Our Story</a>
               <a href="#catalogue" onClick={(e) => scrollToSection(e, 'catalogue')} className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">Catalogue</a>
               <a href="#distributors" onClick={(e) => scrollToSection(e, 'distributors')} className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">Distributors</a>
               <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-2xl font-serif text-white hover:text-brand-gold transition-colors">Contact</a>
               <button className="mt-8 text-brand-gold border border-brand-gold px-8 py-3 uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all">
                  Partner Login
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};