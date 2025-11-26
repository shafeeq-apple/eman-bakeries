import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '../constants';
import { ProductCard } from './ProductCard';
import { Filter } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(CATEGORIES[0].id);
  const activeCategory = CATEGORIES.find(c => c.id === activeTabId);

  return (
    <section id="catalogue" className="py-32 px-4 md:px-6 max-w-[1400px] mx-auto min-h-screen bg-brand-dark relative">
      {/* Section Header with Industrial Decor */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Our Catalogue</h2>
          <p className="text-brand-gold font-sans uppercase tracking-[0.2em] text-xs">Curated for Excellence</p>
        </div>
        <div className="hidden md:flex items-center text-gray-500 text-xs font-mono">
          <span>CAT_ID: {activeTabId.toUpperCase()}</span>
          <span className="mx-4">|</span>
          <span>ITEMS: {activeCategory?.products.length}</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sticky Sidebar Navigation / Tab Controller */}
        <div className="lg:w-56 flex-shrink-0">
          <div className="lg:sticky lg:top-32 space-y-2">
            <div className="flex items-center text-white/40 mb-6 text-sm uppercase tracking-widest">
              <Filter className="w-4 h-4 mr-2" /> Categories
            </div>
            
            <div className="flex flex-wrap lg:flex-col gap-2">
              {CATEGORIES.map((category) => {
                const isActive = activeTabId === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTabId(category.id)}
                    className={`
                      relative group w-full text-left px-4 py-3 text-sm transition-all duration-300 border-l-2
                      ${isActive 
                        ? 'border-brand-gold text-brand-gold bg-white/5' 
                        : 'border-white/10 text-gray-500 hover:text-white hover:border-white/30'}
                    `}
                  >
                    <span className={`font-medium tracking-wide ${isActive ? 'translate-x-2' : 'group-hover:translate-x-1'} transition-transform duration-300 inline-block`}>
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Grid Content */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="mb-8">
                   <p className="text-lg md:text-xl text-gray-300 font-serif italic max-w-2xl">
                    "{activeCategory.description}"
                  </p>
                </div>

                {/* Staggered Grid - Increased density for narrower cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {activeCategory.products.map((product, idx) => (
                    <div 
                      key={product.id} 
                      className="col-span-1"
                    >
                      <ProductCard product={product} index={idx} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};