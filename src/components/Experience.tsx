import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Experience
          </motion.h2>

          <div className="mt-12">
            <motion.div
              variants={itemVariants}
              className="bg-space-blue/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mars-red/80 rounded-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">Web Development Trainee</h3>
                    <div className="flex items-center gap-2 mt-1 md:mt-0">
                      <Calendar size={16} className="text-mars-orange" />
                      <span className="text-white/80">June 2024 - Aug 2024</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-4 text-white/90">Digipodium, Lucknow</h4>
                  
                  <ul className="space-y-3">
                    <motion.li variants={listItemVariants} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-mars-orange mt-1 flex-shrink-0" />
                      <p>Acquired expertise in the MERN stack, enabling the development of full-stack web applications.</p>
                    </motion.li>
                    <motion.li variants={listItemVariants} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-mars-orange mt-1 flex-shrink-0" />
                      <p>Design and implemented a React Library Directory listing website for easy searching of React.js and JavaScript packages.</p>
                    </motion.li>
                    <motion.li variants={listItemVariants} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-mars-orange mt-1 flex-shrink-0" />
                      <p>Conducted debugging, testing, and deployment of applications.</p>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-mars-purple/40 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-mars-orange/50 transition-all duration-300">
                  <h4 className="text-lg font-medium mb-2">MERN Stack Development-Training</h4>
                  <p className="text-white/80">Digipodium, Lucknow</p>
                </div>
                
                <div className="bg-mars-purple/40 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-mars-orange/50 transition-all duration-300">
                  <h4 className="text-lg font-medium mb-2">MySQL</h4>
                  <p className="text-white/80">Traversy Media</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold mb-6">Positions of Responsibility</h3>
              
              <div className="bg-mars-red/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-bold mb-2">Member of Literary Club, AMC IU</h4>
                <p className="text-white/90">
                  As an active member of the Literary Club, I participated in organizing events, collaborated with a dynamic team,
                  and contributed to workshops aimed at enhancing member's literary skills. These experiences helped me develop
                  strong leadership, communication, and teamwork abilities while gaining valuable insights into event management.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;