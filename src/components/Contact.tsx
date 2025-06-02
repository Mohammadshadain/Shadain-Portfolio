import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Send, MessageSquare, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6 
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
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
            className="section-heading text-center"
          >
            Contact Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-10 mt-12">
            <motion.div variants={itemVariants} className="lg:w-2/5">
              <motion.h3 
                className="text-2xl font-bold mb-6"
                variants={itemVariants}
              >
                Get In Touch
              </motion.h3>
              <motion.p 
                className="text-lg mb-8"
                variants={itemVariants}
              >
                Feel free to reach out if you have any questions, project inquiries, or just want to connect. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail size={20} className="text-white" />,
                    title: "Email",
                    content: "shadain044714@gmail.com",
                    href: "mailto:shadain044714@gmail.com",
                    bgColor: "bg-mars-red"
                  },
                  {
                    icon: <Phone size={20} className="text-white" />,
                    title: "Phone",
                    content: "+91-9129801663",
                    href: "tel:+919129801663",
                    bgColor: "bg-mars-orange"
                  },
                  {
                    icon: <Linkedin size={20} className="text-white" />,
                    title: "LinkedIn",
                    content: "www.linkedin.com/in/mohammadshadain",
                    href: "https://www.linkedin.com/in/mohammadshadain",
                    bgColor: "bg-mars-purple"
                  },
                  {
                    icon: <MapPin size={20} className="text-white" />,
                    title: "Location",
                    content: "Lucknow, Uttar Pradesh, India",
                    bgColor: "bg-mars-red"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`mt-1 p-3 ${item.bgColor} rounded-full`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? "_blank" : undefined}
                          rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-white/80 hover:text-mars-orange transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-white/80">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:w-3/5">
              <div className="bg-space-blue/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <motion.div 
                  className="flex items-center gap-2 mb-6"
                  variants={itemVariants}
                >
                  <MessageSquare size={20} className="text-mars-orange" />
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </motion.div>

                <form onSubmit={handleSubmit}>
                  {[
                    { label: "Name", type: "text", name: "name" },
                    { label: "Email", type: "email", name: "email" }
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      className="mb-4"
                      variants={formFieldVariants}
                      initial="visible"
                      animate="visible"
                    >
                      <label htmlFor={field.name} className="block text-white/90 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-space-black/70 border border-white/20 focus:border-mars-orange focus:outline-none text-white"
                        placeholder={`Your ${field.name.toLowerCase()}`}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    className="mb-6"
                    variants={formFieldVariants}
                    initial="visible"
                    animate="visible"
                  >
                    <label htmlFor="message" className="block text-white/90 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-space-black/70 border border-white/20 focus:border-mars-orange focus:outline-none text-white resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="mars-button flex items-center gap-2 w-full justify-center"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitSuccess && (
                    <motion.p
                      className="mt-4 text-center text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Your message has been sent successfully!
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;