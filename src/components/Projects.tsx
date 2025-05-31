import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Calendar, Layers } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Vox-Market',
      period: 'Nov 2024 – Present',
      description: 'A voice-enabled eCommerce platform that allows users to navigate and shop using voice commands.',
      technologies: [
        'Next.js', 'React', 'Node.js', 'Express.js', 'Tailwind CSS', 'React Speech Recognition'
      ],
      details: [
        'Developing a voice-enabled eCommerce platform that allows users to navigate and shop using voice commands.',
        'Responsible for implementing the frontend functionalities.',
        'Collaborating with a team of 4 to ensure seamless integration of the React Speech Recognition library and other technologies.',
        'Utilizing Next.js for client-side rendering and optimized performance, along with Tailwind CSS for responsive design.'
      ],
      image: 'https://images.pexels.com/photos/7661466/pexels-photo-7661466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'React Library Directory',
      period: 'July 2024 – Sept 2024',
      description: 'A web application designed to help developers easily find and explore React and JavaScript libraries.',
      technologies: [
        'Next.js', 'Node.js', 'Express.js', 'Axios', 'Mongoose', 'JWT'
      ],
      details: [
        'The React Library Directory is a web application designed to help developers easily find and explore React and JavaScript libraries.',
        'Built with Modern Stack: Developed using React, Axios, Node.js, Mongoose, and JWT to ensure smooth performance and secure data handling.',
        'Developer-Friendly Interface: Designed with an intuitive and user-friendly interface, making it easy for developers to navigate and find the right libraries quickly.'
      ],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            <AnimatedText text="Projects" />
          </motion.h2>

          <div className="mt-12 space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col lg:flex-row gap-8 project-card p-6"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="lg:w-2/5 h-[240px] overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </motion.div>

                <div className="lg:w-3/5">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h3 className="text-2xl font-bold">
                      <AnimatedText text={project.title} />
                    </h3>
                    <motion.div 
                      className="flex items-center text-white/80"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Calendar size={16} className="text-mars-orange mr-1" />
                      <AnimatedText text={project.period} />
                    </motion.div>
                  </div>

                  <p className="text-lg mb-4">
                    <AnimatedText text={project.description} />
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Code size={18} className="text-mars-orange" />
                      </motion.div>
                      <h4 className="font-medium">
                        <AnimatedText text="Technologies" />
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="bg-mars-purple/60 px-3 py-1 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                        >
                          <AnimatedText text={tech} />
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Layers size={18} className="text-mars-orange" />
                      </motion.div>
                      <h4 className="font-medium">
                        <AnimatedText text="Key Features" />
                      </h4>
                    </div>
                    <ul className="space-y-2 mt-2">
                      {project.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex} 
                          className="text-white/90 flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.2 }}
                          whileHover={{ x: 10 }}
                        >
                          <span className="text-mars-orange mt-1">•</span>
                          <AnimatedText text={detail} />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div 
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <button className="inline-flex items-center gap-2 text-mars-orange hover:text-white border border-mars-orange hover:bg-mars-orange/20 transition-all duration-300 px-4 py-2 rounded-lg">
                      <ExternalLink size={16} />
                      <AnimatedText text="View Project" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;