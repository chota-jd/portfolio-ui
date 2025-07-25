'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component with Spectacular Effects
const AnimatedCounter = ({ 
  target, 
  isInView, 
  delay = 0 
}: { 
  target: number; 
  isInView: boolean; 
  delay?: number; 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const duration = 2500;
      const steps = 100;
      const increment = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, isInView, delay]);

  return (
    <motion.span 
      className="font-bold text-lg"
      style={{ color: '#eab308' }}
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.5,
        rotateY: isInView ? 0 : -180
      }}
      transition={{ 
        delay: delay / 1000,
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.2,
        textShadow: "0 0 20px #eab308",
        transition: { duration: 0.2 }
      }}
    >
      <motion.span
        animate={{
          textShadow: [
            "0 0 0px #eab308",
            "0 0 10px #eab308",
            "0 0 0px #eab308"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {count}
      </motion.span>
      <motion.span
        animate={{ 
          opacity: [1, 0.5, 1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="ml-1"
      >
        %
      </motion.span>
    </motion.span>
  );
};

// Floating Particle Component
const FloatingParticle = ({ delay = 0, index = 0 }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0,
        x: Math.random() * 400 - 200,
        y: Math.random() * 200 - 100
      }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: [
          Math.random() * 400 - 200,
          Math.random() * 400 - 200,
          Math.random() * 400 - 200
        ],
        y: [
          Math.random() * 200 - 100,
          Math.random() * 200 - 100,
          Math.random() * 200 - 100
        ],
        rotate: [0, 360, 720]
      }}
      transition={{ 
        duration: 6 + (index % 3),
        repeat: Infinity,
        delay: delay + (index * 0.5),
        ease: "easeInOut"
      }}
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, #eab308, transparent)`,
        filter: 'blur(1px)'
      }}
    />
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
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
      icon: '⚡',
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
      icon: '🛠️',
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

  return (
    <section id="skills" className="py-12 bg-black relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} index={i} />
        ))}
        
        {/* Large Background Orbs */}
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, #eab308, transparent 70%)`
          }}
        />
        
        <motion.div
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 100, -100, 0],
            scale: [1, 0.8, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-5"
          style={{
            background: `radial-gradient(circle, #eab308, transparent 70%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 100%' }}
            >
              My Skills
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-2 text-2xl"
            >
              ⚡
            </motion.span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Technologies and tools I use to bring ideas to life with passion and precision
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0
              } : { 
                opacity: 0, 
                y: 100,
                rotateX: -90
              }}
              transition={{ 
                duration: 1.2, 
                delay: categoryIndex * 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-6 rounded-xl border-2 border-gray-700 hover:border-accent/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                perspective: '1000px'
              }}
            >
              {/* Card Background Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl"
              />
              
              {/* Floating Icon */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center mb-8"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    textShadow: "0 0 20px #eab308"
                  }}
                  className="text-3xl mb-3 inline-block"
                >
                  {category.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#eab308"
                  }}
                >
                  {category.title}
                </motion.h3>
              </motion.div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: (categoryIndex * 0.3) + (skillIndex * 0.1) + 0.5
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <motion.span 
                        className="text-gray-300 font-semibold text-sm"
                        whileHover={{ 
                          color: "#eab308",
                          scale: 1.05,
                          x: 10
                        }}
                      >
                        {skill.name}
                      </motion.span>
                      <AnimatedCounter 
                        target={skill.level}
                        isInView={isInView}
                        delay={(categoryIndex * 300) + (skillIndex * 150)}
                      />
                    </div>
                    
                    {/* Spectacular Progress Bar */}
                    <div className="relative">
                      <motion.div 
                        className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden border border-gray-600/50 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.02,
                          borderColor: "#eab308"
                        }}
                      >
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={isInView ? { 
                            width: `${skill.level}%`,
                            opacity: 1
                          } : { 
                            width: 0,
                            opacity: 0
                          }}
                          transition={{ 
                            duration: 2.5, 
                            delay: (categoryIndex * 0.3) + (skillIndex * 0.15),
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background: `linear-gradient(90deg, #eab308, #facc15, #eab308)`,
                            boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)'
                          }}
                        >
                          {/* Moving Shine Effect */}
                          <motion.div
                            animate={{ x: [-100, 300] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                            className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                          
                          {/* Pulsing End Cap */}
                          <motion.div
                            animate={{ 
                              opacity: [0.5, 1, 0.5],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity
                            }}
                            className="absolute right-0 top-0 w-4 h-full rounded-full"
                            style={{
                              background: 'radial-gradient(circle, #ffffff, #eab308)',
                              filter: 'blur(1px)'
                            }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Skill Level Indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { 
                          opacity: 1, 
                          scale: 1,
                          x: `${skill.level * 0.8}%`
                        } : { 
                          opacity: 0, 
                          scale: 0
                        }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.3) + (skillIndex * 0.15) + 2
                        }}
                        className="absolute -top-2 w-4 h-4 rounded-full border-2 border-white"
                        style={{
                          backgroundColor: '#eab308',
                          boxShadow: '0 0 10px #eab308'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-10 text-center"
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-6"
            animate={{ 
              textShadow: [
                "0 0 0px #eab308",
                "0 0 20px #eab308", 
                "0 0 0px #eab308"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Technologies I Master
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              'Next.js', 'React', 'Angular', 'Svelte', 'TypeScript', 
              'Tailwind', 'Firebase', 'MySQL', 'Node.js', 'Git'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0
                } : { 
                  opacity: 0, 
                  scale: 0,
                  rotateY: -180
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: [0, 10, -10, 0],
                  boxShadow: "0 0 30px rgba(79, 193, 198, 0.8)",
                  y: -10
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 px-6 py-4 rounded-xl text-accent font-bold text-lg border-2 border-gray-700 hover:border-accent/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                  animate={{ x: [-100, 100] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                />
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