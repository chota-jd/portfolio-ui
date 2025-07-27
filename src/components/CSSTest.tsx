'use client';

import { motion } from 'framer-motion';

export default function CSSTest() {
  return (
    <div className="p-8 space-y-8 bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">CSS & Tailwind Test Page</h1>
      
      {/* Text Gradient Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Text Gradient</h2>
        <p className="text-gradient text-2xl font-bold">This text should have a gradient effect</p>
      </div>

      {/* Button Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Buttons</h2>
        <div className="flex space-x-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Glow Effects</h2>
        <div className="glow p-4 bg-gray-800 rounded-lg">
          <p className="text-white">This div should have a glow effect</p>
        </div>
        <p className="glow-text text-lg">This text should have a glow effect</p>
      </div>

      {/* Form Elements */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Form Elements</h2>
        <input 
          className="form-input max-w-md" 
          placeholder="Test input field"
        />
        <textarea 
          className="form-textarea max-w-md" 
          placeholder="Test textarea"
          rows={3}
        />
      </div>

      {/* Card Hover */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Card Hover</h2>
        <div className="card-hover p-6 bg-gray-800 rounded-lg max-w-md">
          <p className="text-white">Hover over this card to see the effect</p>
        </div>
      </div>

      {/* Animations */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Animations</h2>
        <div className="flex space-x-4">
          <div className="pulse-glow p-4 bg-gray-800 rounded-lg">
            <p className="text-white">Pulse Glow</p>
          </div>
          <div className="float p-4 bg-gray-800 rounded-lg">
            <p className="text-white">Float Animation</p>
          </div>
        </div>
      </div>

      {/* Backdrop Blur */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Backdrop Blur</h2>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg">
          <div className="backdrop-blur-glass p-4 rounded-lg">
            <p className="text-white">This should have a glass effect</p>
          </div>
        </div>
      </div>

      {/* Gradient Backgrounds */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Gradient Backgrounds</h2>
        <div className="gradient-bg p-6 rounded-lg">
          <p className="text-white">Gradient background</p>
        </div>
        <div className="gradient-border p-1 rounded-lg max-w-md">
          <div className="gradient-border-content p-4">
            <p className="text-white">Gradient border effect</p>
          </div>
        </div>
      </div>

      {/* Tailwind Classes Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Tailwind Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-500 p-4 rounded-lg text-white">Red Background</div>
          <div className="bg-green-500 p-4 rounded-lg text-white">Green Background</div>
          <div className="bg-blue-500 p-4 rounded-lg text-white">Blue Background</div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <div className="w-16 h-16 bg-[#4fc1c6] rounded-full"></div>
          <div className="w-16 h-16 bg-accent rounded-full"></div>
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Typography</h2>
        <p className="text-sm text-gray-400">Small text</p>
        <p className="text-base text-gray-300">Base text</p>
        <p className="text-lg text-gray-200">Large text</p>
        <p className="text-xl text-white">Extra large text</p>
        <p className="text-2xl font-bold text-[#4fc1c6]">Accent color text</p>
      </div>

      {/* Motion Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Framer Motion Test</h2>
        <motion.div
          className="bg-[#4fc1c6] p-4 rounded-lg text-black font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          This should animate on load and scale on hover
        </motion.div>
      </div>
    </div>
  );
}