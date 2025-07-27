'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Target, 
  Heart, 
  Coffee,
  Lightbulb,
  Rocket,
  Globe,
  Database
} from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code2, color: 'from-blue-500 to-purple-600' },
    { name: 'Backend Development', level: 90, icon: Database, color: 'from-green-500 to-teal-600' },
    { name: 'UI/UX Design', level: 85, icon: Palette, color: 'from-pink-500 to-red-600' },
    { name: 'Cloud & DevOps', level: 88, icon: Globe, color: 'from-yellow-500 to-orange-600' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Firebase', 'Tailwind CSS',
    'GraphQL', 'Redis', 'Microservices', 'CI/CD'
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing the boundaries of what\'s possible.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely love what I do and it shows in every project I work on.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, efficient, and scalable applications is my specialty.'
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      id="about" 
      className="section-padding-lg bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#4fc1c6]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#4fc1c6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center content-spacing-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold heading-spacing-xl"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate full-stack developer with a love for creating innovative digital experiences.
            I combine technical expertise with creative problem-solving to build solutions that matter.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 grid-gap-2xl content-spacing-2xl">
          {/* Personal Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid-gap-lg"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white heading-spacing">My Journey</h3>
              <div className="grid-gap-sm text-gray-400 leading-relaxed">
                <p>
                  With over 5 years of experience in software development, I've had the privilege of working 
                  on diverse projects ranging from startup MVPs to enterprise-scale applications. My journey 
                  began with a curiosity about how things work under the hood, which led me to pursue 
                  Computer Science.
                </p>
                <p>
                  I specialize in building modern web applications using cutting-edge technologies like 
                  React, Next.js, and Node.js. I'm passionate about creating user experiences that are 
                  not just functional, but delightful and memorable.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community through blogs and speaking 
                  engagements.
                </p>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-xl font-semibold text-white heading-spacing">What Drives Me</h4>
              <div className="grid grid-cols-2 grid-gap-sm">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="card-padding bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <value.icon className="text-[#4fc1c6] content-spacing group-hover:scale-110 transition-transform duration-300" size={24} />
                    <h5 className="text-white font-medium text-spacing">{value.title}</h5>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid-gap-lg"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white heading-spacing">Skills & Expertise</h3>
              <div className="grid-gap-lg">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between text-spacing">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-[#4fc1c6]" size={20} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full"
                          animate={{ x: [-100, 200] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white heading-spacing">Technologies I Love</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-sm text-[#4fc1c6] border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(79, 193, 198, 0.1)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-white heading-spacing-lg"
          >
            Fun Facts About Me
          </motion.h3>
          
          <div className="grid md:grid-cols-3 grid-gap-lg">
            {[
              { icon: Coffee, title: '500+', subtitle: 'Cups of Coffee', delay: 0 },
              { icon: Rocket, title: '50+', subtitle: 'Projects Completed', delay: 0.1 },
              { icon: Code2, title: '100K+', subtitle: 'Lines of Code', delay: 0.2 },
            ].map((fact, index) => (
              <motion.div
                key={fact.title}
                variants={itemVariants}
                className="card-padding-lg bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <fact.icon className="text-[#4fc1c6] mx-auto content-spacing group-hover:scale-110 transition-transform duration-300" size={32} />
                <motion.h4 
                  className="text-3xl font-bold text-white text-spacing"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 + fact.delay }}
                >
                  {fact.title}
                </motion.h4>
                <p className="text-gray-400">{fact.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}