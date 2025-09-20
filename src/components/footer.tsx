import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10">
      <div className="bg-dots bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-1 md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-1.5 rounded-md">
                  <Icon icon="lucide:book-open" width={20} height={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-lg serif-font tracking-wide text-white">E.P.E.S</p>
                  <p className="text-[10px] text-primary-200 -mt-1 tracking-widest uppercase">Est. 2058 B.S</p>
                </div>
              </div>
              <p className="text-primary-100 text-sm mt-2 mb-6">
                Empowering young minds and shaping futures through quality education since 2058 B.S.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                  <Icon icon="lucide:facebook" width={18} height={18} className="text-white" />
                </a>
                <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                  <Icon icon="lucide:twitter" width={18} height={18} className="text-white" />
                </a>
                <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                  <Icon icon="lucide:instagram" width={18} height={18} className="text-white" />
                </a>
                <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                  <Icon icon="lucide:linkedin" width={18} height={18} className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-medium text-white text-base mb-4 pb-2 border-b border-primary-800">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Home</Link></li>
                <li><Link to="/about" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />About Us</Link></li>
                <li><Link to="/admissions" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Admissions</Link></li>
                <li><Link to="/student-life" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Student Life</Link></li>
                <li><Link to="/contact" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <h3 className="font-medium text-white text-base mb-4 pb-2 border-b border-primary-800">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Academic Calendar</a></li>
                <li><a href="#" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Library</a></li>
                <li><a href="#" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Student Portal</a></li>
                <li><a href="#" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Career Services</a></li>
                <li><a href="#" className="text-primary-100 hover:text-white text-sm transition-colors flex items-center gap-2"><Icon icon="lucide:chevron-right" width={14} />Alumni</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <h3 className="font-medium text-white text-base mb-4 pb-2 border-b border-primary-800">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-800 p-2 rounded-md mt-0.5">
                    <Icon icon="lucide:map-pin" className="text-primary-100" width={16} />
                  </div>
                  <span className="text-primary-100 text-sm">Su.Na.Pa-03, Boudhadham</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary-800 p-2 rounded-md">
                    <Icon icon="lucide:phone" className="text-primary-100" width={16} />
                  </div>
                  <span className="text-primary-100 text-sm">+977 9818992887</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary-800 p-2 rounded-md">
                    <Icon icon="lucide:mail" className="text-primary-100" width={16} />
                  </div>
                  <span className="text-primary-100 text-sm">info@epes.edu.np</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-200 text-sm">
              © {new Date().getFullYear()} EPES. All rights reserved.
            </p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="#" className="text-primary-300 hover:text-white text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-300 hover:text-white text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-300 hover:text-white text-xs transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;