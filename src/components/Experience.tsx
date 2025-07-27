'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, 
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Users,
  Code,
  Rocket,
  Star,
  Building
} from 'lucide-react';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting microservices solutions.',
      achievements: [
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers on a critical project',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Architected microservices handling 1M+ daily requests'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      color: 'from-blue-500 to-purple-600',
      icon: Rocket
    },
    {
      id: 2,
      company: 'Startup Dynamics',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'Remote',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects, from MVP prototypes to production applications. Worked closely with clients to understand requirements and deliver solutions.',
      achievements: [
        'Built 15+ web applications from scratch',
        'Reduced client onboarding time by 50%',
        'Implemented real-time features using WebSockets',
        'Achieved 99.9% uptime across all applications'
      ],
      technologies: ['Next.js', 'MongoDB', 'Firebase', 'Stripe', 'Vercel'],
      color: 'from-green-500 to-teal-600',
      icon: Code
    },
    {
      id: 3,
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Focused on creating responsive, accessible web interfaces using modern frontend technologies. Collaborated with UX/UI designers to implement pixel-perfect designs.',
      achievements: [
        'Improved website accessibility score to 98%',
        'Reduced page load times by 35%',
        'Implemented responsive design for 20+ projects',
        'Created reusable component library'
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Webpack', 'Jest'],
      color: 'from-pink-500 to-red-600',
      icon: Building
    },
    {
      id: 4,
      company: 'FreelanceHub',
      position: 'Freelance Developer',
      period: '2018 - 2019',
      location: 'Various',
      type: 'Contract',
      description: 'Worked with multiple clients on diverse projects ranging from e-commerce platforms to portfolio websites. Gained experience in client communication and project management.',
      achievements: [
        'Completed 25+ successful projects',
        'Maintained 5-star rating across all platforms',
        'Generated $50k+ in revenue',
        'Built long-term relationships with 10+ clients'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
      color: 'from-yellow-500 to-orange-600',
      icon: Users
    },
  ];

  const stats = [
    { icon: Briefcase, value: '5+', label: 'Years Experience', color: 'text-blue-400' },
    { icon: Code, value: '50+', label: 'Projects Completed', color: 'text-green-400' },
    { icon: Users, value: '100+', label: 'Clients Served', color: 'text-purple-400' },
    { icon: Award, value: '15+', label: 'Awards Won', color: 'text-yellow-400' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const ExperienceCard = ({ experience, index, isLast }: { 
    experience: typeof experiences[0], 
    index: number,
    isLast: boolean 
  }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-20 w-0.5 h-32 bg-gradient-to-b from-[#4fc1c6] to-transparent transform -translate-x-1/2 hidden lg:block" />
      )}
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 top-8 w-4 h-4 bg-[#4fc1c6] rounded-full transform -translate-x-1/2 hidden lg:block z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-[#4fc1c6] rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </motion.div>

      {/* Content Card */}
      <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm rounded-2xl card-padding-lg border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-500 group relative overflow-hidden"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          {/* Company Icon */}
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${experience.color} rounded-2xl flex items-center justify-center content-spacing group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            <experience.icon className="text-white" size={24} />
          </motion.div>

          {/* Header */}
          <div className="content-spacing">
            <h3 className="text-xl font-bold text-white group-hover:text-[#4fc1c6] transition-colors duration-300 text-spacing">
              {experience.position}
            </h3>
            <p className="text-[#4fc1c6] font-medium text-spacing">{experience.company}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
              <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed content-spacing">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="content-spacing">
            <h4 className="text-white font-medium text-spacing flex items-center gap-2">
              <TrendingUp size={16} className="text-[#4fc1c6]" />
              <span>Key Achievements</span>
            </h4>
            <ul className="grid-gap-sm">
              {experience.achievements.map((achievement, achIndex) => (
                <motion.li
                  key={achIndex}
                  className="flex items-start gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + achIndex * 0.1 + 0.8 }}
                >
                  <Star size={12} className="text-[#4fc1c6] mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 text-[#4fc1c6] text-xs rounded-full border border-gray-700 group-hover:border-[#4fc1c6]/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 + 1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section 
      ref={ref}
      id="experience" 
      className="section-padding bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-20 w-80 h-80 bg-[#4fc1c6]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
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
          className="text-center content-spacing-xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold heading-spacing-lg"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A timeline of my professional growth, key achievements, and the incredible projects 
            I've had the privilege to work on throughout my career.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 grid-gap-lg content-spacing-xl"
        >
          {stats.map((stat, index) => (
                      <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center card-padding-lg bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-[#4fc1c6]/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <stat.icon className={`${stat.color} mx-auto content-spacing group-hover:scale-110 transition-transform duration-300`} size={32} />
            <motion.h3 
              className="text-3xl font-bold text-white text-spacing"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="grid-gap-xl">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-block p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="flex items-center space-x-2">
                <Briefcase size={20} />
                <span>Get In Touch</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}