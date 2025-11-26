import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "relative px-8 py-3 overflow-hidden font-medium tracking-wide uppercase text-sm transition-all duration-300 group";
  
  const variants = {
    primary: "bg-brand-gold text-brand-dark hover:bg-white hover:text-brand-dark",
    secondary: "border border-brand-text text-brand-text hover:border-brand-gold hover:text-brand-gold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
      )}
    </motion.button>
  );
};