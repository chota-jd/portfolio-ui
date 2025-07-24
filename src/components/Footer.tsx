'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              YourName
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer building the future of web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 hover:bg-accent text-white hover:text-black rounded-lg transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} YourName. All rights reserved.
            </p>

            {/* Made with love */}
            <motion.p 
              className="text-gray-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              and lots of ☕
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;