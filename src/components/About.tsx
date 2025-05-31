import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const serviceCardVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 
            variants={fadeInUpVariant} 
            className="section-heading text-center"
          >
            About Me
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <motion.div 
              className="md:w-2/3 space-y-6"
              variants={fadeInUpVariant}
            >
              <motion.p 
                className="text-lg"
                variants={fadeInUpVariant}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I'm a Full Stack Developer with hands-on expertise in React.js, Next.js, Node.js, and MongoDB, driven by a passion for developing innovative and user-centric web applications.
              </motion.p>
              <motion.p 
                className="text-lg"
                variants={fadeInUpVariant}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Eager to learn and grow while contributing effectively to team success, I combine technical skills with creativity to build engaging digital experiences.
              </motion.p>
              <motion.p 
                className="text-lg"
                variants={fadeInUpVariant}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Completed my Bachelor's degree in Computer Engineering, I'm constantly exploring new technologies and approaches to enhance my development skills.
              </motion.p>
            </motion.div>

            <motion.div 
              className="md:w-1/3"
              variants={cardVariant}
            >
              <motion.div 
                className="bg-mars-purple/40 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-4"
                  variants={fadeInUpVariant}
                >
                  What I Do
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start gap-3 group"
                    variants={serviceCardVariant}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="mt-1 p-2 bg-mars-red rounded-full group-hover:rotate-12 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Globe size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-medium">Web Development</h4>
                      <p className="text-white/80">Building responsive and accessible web applications</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 group"
                    variants={serviceCardVariant}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="mt-1 p-2 bg-mars-orange rounded-full group-hover:rotate-12 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Cpu size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-medium">Full Stack Solutions</h4>
                      <p className="text-white/80">End-to-end development from backend to frontend</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-3 group"
                    variants={serviceCardVariant}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="mt-1 p-2 bg-mars-purple rounded-full group-hover:rotate-12 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Rocket size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-medium">Project Management</h4>
                      <p className="text-white/80">Leading projects from concept to deployment</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;