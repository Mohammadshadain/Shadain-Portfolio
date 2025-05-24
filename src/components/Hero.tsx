import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const smoothY1 = useSpring(y1, springConfig);
  const smoothY2 = useSpring(y2, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - width / 2) / width;
      const y = (clientY - height / 2) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 30}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 30}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <MouseParallaxContainer
      className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden"
      containerStyles={{ overflow: 'visible' }}
      globalFactorX={0.3}
      globalFactorY={0.3}
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: smoothY1 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/60 to-space-black"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <MouseParallaxChild
            factorX={0.5}
            factorY={0.5}
            className="md:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
                transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
              }}
              className="perspective-1000"
            >
              <div className="bg-gradient-mars rounded-2xl p-6 backdrop-blur-sm transform-gpu hover:scale-105 transition-transform duration-300">
                <motion.h1 
                  className="text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Mohammad <span className="text-mars-orange">Shadain</span>
                </motion.h1>
                
                <motion.h2 
                  className="text-2xl md:text-3xl font-medium mb-6 text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Full Stack Developer
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-white/80 mb-8 max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Driven by a passion for developing innovative and user-centric web applications 
                  with expertise in React.js, Next.js, Node.js, and MongoDB.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <a 
                    href="#contact" 
                    className="mars-button flex items-center gap-2 hover:scale-110 transform-gpu"
                  >
                    <Mail size={18} />
                    Contact Me
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mohammadshadain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-mars-orange transition-all duration-300 hover:scale-110 transform-gpu"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-mars-orange transition-all duration-300 hover:scale-110 transform-gpu"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </MouseParallaxChild>
          
          <MouseParallaxChild
            factorX={0.8}
            factorY={0.8}
            className="md:w-1/2 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ y: smoothY2, scale }}
            >
              <div className="relative hover:scale-105 transition-transform duration-500 transform-gpu">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-mars-red via-mars-orange to-mars-purple blur-lg opacity-70 animate-pulse-slow"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-mars-orange/50 h-64 w-64 md:h-80 md:w-80">
                  <img 
                    src="/me.jpg" 
                    alt="Profile" 
                    
                    className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </MouseParallaxChild>
        </div>
        
        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 flex flex-col items-center"
        >
          <p className="mb-2 text-sm">Explore</p>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;