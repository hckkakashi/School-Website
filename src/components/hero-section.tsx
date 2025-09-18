import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react'; // Added Button import from HeroUI

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imagePath?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imagePath }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800 py-20 md:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">{title}</h1>
            <p className="text-primary-100 text-lg mb-8 max-w-lg">{subtitle}</p>
            <div className="flex gap-3">
              <Button 
                color="primary" 
                variant="solid"
                size="lg"
                className="bg-white text-primary-700 hover:bg-primary-50"
              >
                Apply Now
              </Button>
              <Button 
                variant="bordered" 
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          {imagePath && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10"></div>
              <img 
                src={imagePath} 
                alt="Hero" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;