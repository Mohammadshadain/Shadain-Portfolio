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

  const textCharacterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    })
  };

  const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textCharacterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block transform-gpu"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );

  const listItemVariants = {
    hidden: { opacity: 0, x: -20, rotateX: -45 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
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
            <AnimatedText text="Experience" />
          </motion.h2>

          <div className="mt-12">
            <motion.div
              variants={itemVariants}
              className="bg-space-blue/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-mars-red/80 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Briefcase size={24} className="text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">
                      <AnimatedText text="Web Development Trainee" />
                    </h3>
                    <motion.div
                      className="flex items-center gap-2 mt-1 md:mt-0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Calendar size={16} className="text-mars-orange" />
                      <AnimatedText text="June 2024 - Sept 2024" className="text-white/80" />
                    </motion.div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-4 text-white/90">
                    <AnimatedText text="Digipodium, Lucknow" />
                  </h4>
                  
                  <ul className="space-y-3">
                    {[
                      'Acquired expertise in the MERN stack, enabling the development of full-stack web applications.',
                      'Design and implemented a React Library Directory listing website for easy searching of React.js and JavaScript packages.',
                      'Conducted debugging, testing, and deployment of applications.'
                    ].map((detail, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                        className="flex items-start gap-2"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <CheckCircle size={18} className="text-mars-orange mt-1 flex-shrink-0" />
                        </motion.div>
                        <AnimatedText text={detail} />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold mb-6">
                <AnimatedText text="Certifications" />
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'MERN Stack Development-Training', org: 'Digipodium, Lucknow' },
                  { title: 'MySQL', org: 'Traversy Media' }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-mars-purple/40 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg font-medium mb-2">
                      <AnimatedText text={cert.title} />
                    </h4>
                    <p className="text-white/80">
                      <AnimatedText text={cert.org} />
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl font-bold mb-6">
                <AnimatedText text="Positions of Responsibility" />
              </h3>
              
              <motion.div
                className="bg-mars-red/30 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.02, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-lg font-bold mb-2">
                  <AnimatedText text="Member of Literary Club, AMC IU" />
                </h4>
                <p className="text-white/90">
                  <AnimatedText text="As an active member of the Literary Club, I participated in organizing events, collaborated with a dynamic team, and contributed to workshops aimed at enhancing member's literary skills. These experiences helped me develop strong leadership, communication, and teamwork abilities while gaining valuable insights into event management." />
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;