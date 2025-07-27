'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      style={{ y, opacity, scale }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4fc1c6]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4fc1c6]/15 rounded-full blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4fc1c6]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Interactive gradient follow mouse */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-[#4fc1c6]/20 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative lg:w-1/3 flex justify-center"
          >
            <div className="relative">
              {/* Animated rings around profile */}
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-[#4fc1c6]/30 border-dashed"></div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 -m-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-[#4fc1c6]/20 border-dotted"></div>
              </motion.div>

              {/* Profile image with glow effect */}
              <motion.div
                className="relative w-80 h-80 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4fc1c6] to-[#3a9ca1] rounded-full p-1 glow">
                  <div className="w-full h-full bg-black rounded-full p-2">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <svg 
                        width="100%" 
                        height="100%" 
                        viewBox="0 0 400 400" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full object-cover"
                      >
                        <rect width="400" height="400" fill="#1a1a1a"/>
                        <circle cx="200" cy="160" r="60" fill="#4fc1c6"/>
                        <circle cx="200" cy="160" r="45" fill="#1a1a1a"/>
                        <circle cx="185" cy="150" r="3" fill="#4fc1c6"/>
                        <circle cx="215" cy="150" r="3" fill="#4fc1c6"/>
                        <path d="M185 170 C195 180, 205 180, 215 170" stroke="#4fc1c6" strokeWidth="2" fill="none"/>
                        <rect x="170" y="240" width="60" height="80" fill="#4fc1c6" rx="8"/>
                        <rect x="175" y="245" width="50" height="70" fill="#1a1a1a" rx="4"/>
                        <text x="200" y="350" textAnchor="middle" fill="#4fc1c6" fontFamily="Arial" fontSize="16" fontWeight="bold">YOUR PHOTO</text>
                        <text x="200" y="370" textAnchor="middle" fill="#666" fontFamily="Arial" fontSize="12">Replace this placeholder</text>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Floating icons around profile */}
                {[
                  { icon: '⚡', angle: 0 },
                  { icon: '🚀', angle: 90 },
                  { icon: '💡', angle: 180 },
                  { icon: '🎯', angle: 270 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-2xl"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-200px) rotate(-${item.angle}deg)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: index * 2,
                      ease: "linear"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <motion.p
                className="text-[#4fc1c6] text-lg sm:text-xl font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋 Hello, I'm
              </motion.p>
              
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="text-gradient block">Chirag</span>
                <motion.span
                  className="block text-white mt-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Developer
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl sm:text-2xl text-gray-300 min-h-[3rem] flex items-center justify-center lg:justify-start"
            >
              <motion.span
                key="typing-text"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 3, delay: 1.5 }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-[#4fc1c6] pr-1"
              >
                Passionate • Curious • Innovative
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting world-class digital experiences with cutting-edge technologies. 
              I transform ideas into powerful, scalable solutions that make a difference.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Let's Connect</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#3a9ca1] to-[#4fc1c6]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>View Resume</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#4fc1c6]/30 flex items-center justify-center text-[#4fc1c6] hover:border-[#4fc1c6] hover:bg-[#4fc1c6]/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-[#4fc1c6] hover:text-white transition-colors duration-300 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown size={24} className="group-hover:scale-110 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}