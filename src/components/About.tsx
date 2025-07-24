'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Coffee, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Award, number: '5+', label: 'Years Experience' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-accent mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate developer driven by curiosity and a love for innovation. 
                My journey in web development started with a simple fascination for how 
                things work on the internet, and it has evolved into a deep expertise in 
                modern web technologies.
              </p>
              
              <p className="text-lg">
                I specialize in building                 <span className="text-accent font-semibold">responsive, 
                high-performance web applications</span> using cutting-edge frameworks like 
                Next.js, React.js, Angular, and Svelte. My focus is always on crafting 
                seamless user experiences through clean, maintainable code and scalable architecture.
              </p>
              
              <p className="text-lg">
                On the backend, I work extensively with <span className="text-accent font-semibold">Firebase</span> for 
                real-time data, authentication, and hosting, as well as <span className="text-accent font-semibold">MySQL</span> for 
                efficient database management. I believe in continuous learning and staying 
                updated with the latest industry trends.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6"
            >
              <blockquote className="border-l-4 border-accent pl-6 italic text-gray-300">
                "Always learning, always evolving—I'm excited to collaborate, share ideas, 
                and help shape the future of tech."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary-400 p-1"
              >
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-6xl text-accent">👨‍💻</div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-400/15 rounded-full blur-xl"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-6 rounded-xl text-center border border-gray-700/50 hover:border-accent/50 transition-all duration-300 card-hover"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4"
                  >
                    <stat.icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-2">{stat.number}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;