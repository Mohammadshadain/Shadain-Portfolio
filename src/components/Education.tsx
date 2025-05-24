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
      
      icon: <Award size={24} className="text-mars-orange" />,
    },
    {
      school: 'Exon Montessori Inter College',
      degree: 'Secondary (Class X)',
      period: 'March 2017 – June 2018',
     
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
            Education
          </motion.h2>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-mars-red via-mars-orange to-mars-purple rounded-full"></div>

            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                } ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-5/12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-40px] md:left-auto md:right-[-56px] top-0 w-12 h-12 rounded-full bg-space-blue border-4 border-mars-orange flex items-center justify-center z-10">
                  {item.icon}
                </div>

                <div className="bg-space-blue/60 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.school}</h3>
                  <p className="text-lg font-medium mb-3 text-white/90">{item.degree}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} className="text-mars-orange" />
                    <p className="text-white/80">{item.period}</p>
                  </div>
                  
                  <div className="inline-block bg-mars-red/60 px-3 py-1 rounded-full text-sm font-medium">
                    {item.score}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;