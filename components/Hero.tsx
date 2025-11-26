import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';
import { ArrowDown, Wheat } from 'lucide-react';
import { HERO_IMAGE_URL } from '../constants';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToCatalogue = () => {
    const element = document.getElementById('catalogue');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-20 pointer-events-none mix-blend-overlay" />
        
        <img 
          src={HERO_IMAGE_URL} 
          alt="Eman Bakeries Hero" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
      </motion.div>

      {/* Floating Badge - Rotating */}
      <motion.div 
        className="absolute top-[20%] right-[10%] md:right-[15%] z-20 hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-brand-gold/30 backdrop-blur-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
          <text className="text-[10px] uppercase font-bold tracking-widest fill-brand-gold">
            <textPath href="#curve">
              Premium Quality • Est. 2007 • Industrial •
            </textPath>
          </text>
        </svg>
        <Wheat className="absolute text-brand-gold w-6 h-6" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-30 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center md:items-end justify-between"
      >
        <div className="flex flex-col mb-12 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-brand-gold" />
            <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-semibold">
              The Premium Quality
            </span>
          </motion.div>

          <h1 className="flex flex-col font-serif">
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl text-white leading-[1.1] tracking-tight mix-blend-screen"
            >
              The Taste of Tradition
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-8xl text-stroke leading-[0.85] tracking-tight opacity-50 mt-2 md:mt-4"
            >
              EMAN BAKERY
            </motion.span>
          </h1>
        </div>

        <div className="md:max-w-md text-left md:text-right flex flex-col items-start md:items-end">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 font-light text-lg mb-8 leading-relaxed"
          >
            Merging the soul of traditional baking with the precision of modern industry. Serving the region's finest hotels and hospitals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="primary" onClick={scrollToCatalogue}>Explore Catalogue</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-20" />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToCatalogue}
      >
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
        <ArrowDown className="w-4 h-4 text-brand-gold" />
      </motion.div>
    </div>
  );
};