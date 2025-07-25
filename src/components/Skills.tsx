'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Svelte', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 90 },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Authentication', level: 90 },
        { name: 'Real-time Data', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 85 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Testing', level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-black" ref={ref}>
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-accent mx-auto mb-8"
          />
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-accent to-primary-400 rounded-full relative progress-bar"
                      >
                        <motion.div
                          animate={{ x: [-10, 10, -10] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute right-0 top-0 w-1 h-full bg-primary-300 opacity-75"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'Next.js', 'React', 'Angular', 'Svelte', 'TypeScript', 
              'Tailwind', 'Firebase', 'MySQL', 'Node.js', 'Git'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 20px rgba(79, 193, 198, 0.5)"
                }}
                className="bg-gray-800 px-4 py-2 rounded-lg text-accent font-medium border border-gray-700 hover:border-accent/50 transition-all duration-300 cursor-default pulse-glow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;