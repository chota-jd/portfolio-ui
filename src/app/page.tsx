'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import CSSTest from '../components/CSSTest';

export default function Home() {
  const [showTest, setShowTest] = useState(false);

  if (showTest) {
    return (
      <div>
        <button 
          onClick={() => setShowTest(false)}
          className="fixed top-4 right-4 z-50 bg-[#4fc1c6] text-black px-4 py-2 rounded-lg font-semibold"
        >
          Back to Portfolio
        </button>
        <CSSTest />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Test Button */}
      <button 
        onClick={() => setShowTest(true)}
        className="fixed bottom-4 right-4 z-50 bg-[#4fc1c6] text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        🧪 CSS Test
      </button>

      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Chirag. Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
