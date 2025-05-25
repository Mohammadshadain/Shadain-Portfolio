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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="bg-glass rounded-2xl p-8 border border-white/10"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            About Me
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <motion.div variants={itemVariants} className="md:w-2/3">
              <p className="text-lg mb-6">
                I'm a Full Stack Developer with hands-on expertise in React.js, Next.js, Node.js, and MongoDB, 
                driven by a passion for developing innovative and user-centric web applications.
              </p>
              <p className="text-lg mb-6">
                Eager to learn and grow while contributing effectively to team success, I combine technical 
                skills with creativity to build engaging digital experiences.
              </p>
              <p className="text-lg">
                Completed my Bachelor's degree in Computer Engineering, I'm constantly exploring new 
                technologies and approaches to enhance my development skills.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:w-1/3">
              <div className="bg-mars-purple/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-mars-red rounded-full">
                      <Globe size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Web Development</h4>
                      <p className="text-white/80">Building responsive and accessible web applications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-mars-orange rounded-full">
                      <Cpu size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Full Stack Solutions</h4>
                      <p className="text-white/80">End-to-end development from backend to frontend</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-mars-purple rounded-full">
                      <Rocket size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Project Management</h4>
                      <p className="text-white/80">Leading projects from concept to deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;