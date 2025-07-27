'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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
