import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : ''} section-divider pb-6 relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-default-600 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;