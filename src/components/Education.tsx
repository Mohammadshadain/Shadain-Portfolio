import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
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

  const educationItems = [
    {
      school: 'Integral University, Lucknow,  India',
      degree: 'Bachelors of Engineering in Computer Science',
      period: 'Oct 2021 - June 2025',
      score: 'CGPA: 8.7',
      icon: <GraduationCap size={24} className="text-mars-orange" />,
    },
    {
      school: 'Exon Montessori Inter College',
      degree: 'Senior Secondary (Class XII)',
      period: 'March 2019 – June 2020',
      score: '',
      icon: <Award size={24} className="text-mars-orange" />,
    },
    {
      school: 'Exon Montessori Inter College',
      degree: 'Secondary (Class X)',
      period: 'March 2017 – June 2018',
      score: '',
      icon: <Award size={24} className="text-mars-orange" />,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            <AnimatedText text="Education" />
          </motion.h2>

          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-mars-red via-mars-orange to-mars-purple rounded-full"></div>

            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                } ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-5/12`}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute left-[-40px] md:left-auto md:right-[-56px] top-0 w-12 h-12 rounded-full bg-space-blue border-4 border-mars-orange flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3, type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  className="bg-space-blue/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                >
                  <h3 className="text-xl font-bold mb-2">
                    <AnimatedText text={item.school} />
                  </h3>
                  <p className="text-lg font-medium mb-3 text-white/90">
                    <AnimatedText text={item.degree} />
                  </p>
                  
                  <motion.div
                    className="flex items-center gap-2 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                  >
                    <Calendar size={16} className="text-mars-orange" />
                    <AnimatedText text={item.period} className="text-white/80" />
                  </motion.div>
                  
                  <motion.div
                    className="inline-block bg-mars-red/60 px-3 py-1 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <AnimatedText text={item.score} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;