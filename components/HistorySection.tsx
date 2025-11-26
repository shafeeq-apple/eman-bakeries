import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Award, Wheat } from 'lucide-react';

export const HistorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-32 bg-[#121212] text-brand-text overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
         <div className="absolute -right-[10%] top-[10%] w-[50%] h-[50%] bg-brand-gold rounded-full blur-[120px]" />
         <div className="absolute -left-[10%] bottom-[10%] w-[30%] h-[30%] bg-brand-red rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-brand-gold/50" />
            <span className="text-brand-gold text-xs font-bold tracking-[0.3em] uppercase">Est. 2007</span>
            <div className="h-[1px] w-8 bg-brand-gold/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">The Legacy of Grain</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            From a single stone oven to a kingdom-wide provider. The journey of Eman Bakeries is written in flour and flame.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Main Image */}
            <div className="relative h-[600px] w-full overflow-hidden rounded-sm border border-white/5">
               <div className="absolute inset-0 bg-brand-dark/20 z-10 group-hover:bg-transparent transition-all duration-700" />
               <img 
                 src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
                 alt="Baker Hands Kneading Dough" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
            </div>
            
            {/* Floating Quote Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 md:-right-10 bg-brand-surface p-8 border border-brand-gold/20 shadow-2xl max-w-xs hidden md:block"
            >
              <Wheat className="w-6 h-6 text-brand-gold mb-4" />
              <p className="font-serif italic text-white text-lg leading-relaxed">
                "Bread is not merely sustenance; it is the silent language of hospitality that binds us together."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative */}
          <div className="space-y-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 border-l border-brand-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-gold" />
              <h3 className="text-2xl text-white font-serif mb-3 flex items-center">
                The Spark
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                Founded in 2007 in the vibrant heart of Jeddah, Eman Bakeries began with a singular, unyielding vision: to master the alchemy of baking. What started as a modest passion project to perfect the traditional Lebanese loaf has evolved into a symbol of reliability. We didn't just want to bake bread; we wanted to set the standard for it.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative pl-8 border-l border-brand-gold/20"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-gold" />
              <h3 className="text-2xl text-white font-serif mb-3 flex items-center">
                Artisan Scale
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                There is a paradox in our industry: quality usually suffers as quantity rises. We defied this. By integrating state-of-the-art automated European lines with the soulful recipes of the Levant, we achieved "Artisan Scale." Our facility produces tens of thousands of units hourly, yet every single bun, loaf, and rusk retains the texture of home-baked goods.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative pl-8 border-l border-brand-gold/20"
            >
               <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-gold" />
              <h3 className="text-2xl text-white font-serif mb-3 flex items-center">
                A Pillar of Trust
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                Today, our "Single Wrapped" technology services the most critical sectors of the Kingdom. From prestigious hospitals requiring absolute hygiene to luxury hotels demanding consistency, Eman Bakeries delivers. We are not just a bakery; we are a partner in the nation's food security and hospitality infrastructure.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};