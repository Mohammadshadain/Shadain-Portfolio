import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="bg-glass rounded-2xl p-6 border border-white/10 relative">
          <div className="absolute -top-5 right-5">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-mars-red rounded-full hover:bg-mars-orange transition-all duration-300 shadow-lg"
            >
              <ArrowUp size={20} className="text-white" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">Mohammad Shadain</h3>
              <p className="text-white/80">Full Stack Developer</p>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-space-blue/80 rounded-full hover:bg-mars-red transition-all duration-300"
              >
                <Github size={20} className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohammadshadain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-space-blue/80 rounded-full hover:bg-mars-red transition-all duration-300"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="mailto:shadain044714@gmail.com"
                className="p-2 bg-space-blue/80 rounded-full hover:bg-mars-red transition-all duration-300"
              >
                <Mail size={20} className="text-white" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="mt-6 pt-6 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-white/70 flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Created with 
              <Heart size={16} className="text-mars-red" fill="currentColor" /> 
              by Mohammad Shadain
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;