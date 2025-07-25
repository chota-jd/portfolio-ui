import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Complete #4fc1c6 color palette
        primary: {
          50: '#f0fdfe',
          100: '#ccfbf1', 
          200: '#99f6e4',
          300: '#5eead4',
          400: '#26d0ce',
          500: '#4fc1c6',  // Main color
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Accent color - our main theme color
        accent: {
          DEFAULT: '#4fc1c6',
          50: '#f0fdfe',
          100: '#ccfbf1',
          200: '#99f6e4', 
          300: '#5eead4',
          400: '#26d0ce',
          500: '#4fc1c6',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Theme color shortcuts
        theme: '#4fc1c6',
        'theme-light': '#26d0ce',
        'theme-dark': '#0891b2',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(79, 193, 198, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(79, 193, 198, 0.6)' },
        },
      },
      boxShadow: {
        'theme': '0 0 20px rgba(79, 193, 198, 0.3)',
        'theme-lg': '0 0 40px rgba(79, 193, 198, 0.5)',
        'theme-xl': '0 0 60px rgba(79, 193, 198, 0.7)',
      },
      textShadow: {
        'theme': '0 0 15px #4fc1c6',
        'theme-lg': '0 0 25px #4fc1c6',
      },
    },
  },
  plugins: [],
}

export default config