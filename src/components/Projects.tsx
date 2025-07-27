'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Play,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap
} from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Modern analytics dashboard with machine learning insights, real-time data visualization, and predictive analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'MongoDB'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile app for fitness tracking with social features, workout plans, and progress analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      gradient: 'from-pink-500 to-red-600'
    },
    {
      id: 4,
      title: 'Microservices Architecture',
      description: 'Scalable microservices system with Docker, Kubernetes, and event-driven architecture for high-traffic applications.',
      image: '/api/placeholder/600/400',
      technologies: ['Docker', 'Kubernetes', 'Go', 'gRPC', 'PostgreSQL'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat app with file sharing, emoji reactions, and end-to-end encryption for secure communication.',
      image: '/api/placeholder/600/400',
      technologies: ['Socket.io', 'React', 'Express', 'MongoDB', 'WebRTC'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'This very website! Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'Firebase'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
      gradient: 'from-cyan-500 to-teal-600'
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Globe },
    { key: 'fullstack', label: 'Full Stack', icon: Code },
    { key: 'frontend', label: 'Frontend', icon: Globe },
    { key: 'backend', label: 'Backend', icon: Database },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center`}>
            <Code className="text-white" size={32} />
          </div>
        </div>
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#4fc1c6]/50 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#4fc1c6]/50 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#4fc1c6] transition-colors duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <motion.span
              className="px-2 py-1 bg-[#4fc1c6]/20 text-[#4fc1c6] text-xs font-medium rounded-full border border-[#4fc1c6]/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Featured
            </motion.span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gray-800/50 text-[#4fc1c6] text-xs rounded-full border border-gray-700 group-hover:border-[#4fc1c6]/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-[#4fc1c6] transition-colors duration-200"
            whileHover={{ x: 5 }}
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-[#4fc1c6] transition-colors duration-200"
            whileHover={{ x: 5 }}
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      ref={ref}
      id="projects" 
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-10 w-96 h-96 bg-[#4fc1c6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating code symbols */}
        {['<>', '{}', '[]', '//'].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-[#4fc1c6]/10 text-4xl font-mono"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + index * 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my skills and passion for creating innovative solutions.
            Each project represents hours of thoughtful planning, coding, and refinement.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              variants={itemVariants}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-[#4fc1c6] text-black'
                  : 'bg-gray-900/50 text-gray-400 hover:text-[#4fc1c6] hover:bg-gray-800/50 border border-gray-700 hover:border-[#4fc1c6]/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon size={18} />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            className="btn-primary group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <Github size={20} />
              <span>View More on GitHub</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}