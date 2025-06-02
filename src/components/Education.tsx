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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const educationItems = [
    {
      school: 'Integral University, Lucknow, India',
      degree: 'Bachelors of Engineering in Computer Engineering',
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
          <motion.h2
            variants={itemVariants}
            className="section-heading text-center mb-12 text-3xl font-bold text-white"
          >
            Education
          </motion.h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-mars-red via-mars-orange to-mars-purple rounded-full"></div>

            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 flex ${isEven ? 'justify-start' : 'justify-end'} group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Icon Dot */}
                  <motion.div
                    className={`absolute top-0 ${isEven ? 'left-[calc(50%-42px)]' : 'right-[calc(50%-42px)]'} w-12 h-12 rounded-full bg-space-blue border-4 border-mars-orange flex items-center justify-center z-10`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.3, type: 'spring', stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="max-w-md bg-space-blue/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                  >
                    <motion.h3
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.25 }}
                    >
                      {item.school}
                    </motion.h3>

                    <motion.p
                      className="text-lg font-medium mb-3 text-white/90"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.3 }}
                    >
                      {item.degree}
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.35 }}
                    >
                      <Calendar size={16} className="text-mars-orange" />
                      <span className="text-white/80">{item.period}</span>
                    </motion.div>

                    {/* Right-aligned Score */}
                    <motion.div
                      className="flex justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.4 }}
                    >
                      <span className="inline-block bg-mars-red/60 px-3 py-1 rounded-full text-sm font-medium">
                        {item.score}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
