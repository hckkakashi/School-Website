import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 z-0"></div>
      
      <Header />
      <motion.main 
        className="flex-grow relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;