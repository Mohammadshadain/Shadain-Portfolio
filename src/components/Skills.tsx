import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Database, GitBranch, LayoutGrid, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 },
    },
  };

  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <Code className="text-mars-orange" size={24} />,
      skills: ['C++', 'Java', 'JavaScript'],
    },
    {
      name: 'Frontend Technologies',
      icon: <LayoutGrid className="text-mars-orange" size={24} />,
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js'],
    },
    {
      name: 'Backend Technologies',
      icon: <Server className="text-mars-orange" size={24} />,
      skills: ['Node.js', 'Express.js'],
    },
    {
      name: 'Database',
      icon: <Database className="text-mars-orange" size={24} />,
      skills: ['MongoDB', 'SQL'],
    },
    {
      name: 'Version Control',
      icon: <GitBranch className="text-mars-orange" size={24} />,
      skills: ['Git', 'GitHub'],
    },
    {
      name: 'Soft Skills',
      icon: <Cpu className="text-mars-orange" size={24} />,
      skills: ['Critical thinking', 'Data-driven decision making', 'Project ownership'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 variants={categoryVariants} className="section-heading text-center">
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                className="bg-space-blue/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-mars-orange/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillItemVariants}
                      className="skill-pill"
                      style={{ 
                        backgroundColor: `rgba(var(--color-mars-red), ${0.7 + (skillIndex * 0.1)})`,
                        animationDelay: `${skillIndex * 0.2}s` 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;