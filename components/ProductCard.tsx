import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Product } from '../types';
import { ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-500 flex flex-col shadow-lg rounded-sm"
    >
      {/* Image Container */}
      <div className="relative h-32 w-full overflow-hidden bg-black/20">
        <div className="absolute inset-0 bg-brand-dark/10 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        
        <motion.div className="w-full h-full p-2" style={{ y }}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-2xl"
          />
        </motion.div>
        
        {product.isHospitalSafe && (
          <div className="absolute top-2 right-2 z-20 bg-brand-red/90 text-white text-[8px] uppercase font-bold px-1.5 py-0.5 tracking-widest flex items-center shadow-lg backdrop-blur-md pointer-events-none rounded-sm">
            <ShieldCheck className="w-2.5 h-2.5 mr-1" /> Safe
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow relative z-20 border-t border-white/5">
        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-brand-gold transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[10px] leading-snug flex-grow line-clamp-2 mb-2">
          {product.description}
        </p>
        
        {/* Decorative Line */}
        <div className="w-8 h-[1px] bg-brand-gold/50 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};