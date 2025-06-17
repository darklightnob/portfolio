import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Code, MapPin, GraduationCap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl"
            >
              <span className="text-white">CC</span>
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            🌟 Hello World!
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-2 space-y-2"
          >
            <p>I'm a curious mind from <span className="text-purple-400 font-semibold">Guruvayur, Thrissur</span></p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <GraduationCap className="text-purple-400" size={20} />
              <span>Currently in 2nd Year at</span>
            </div>
            <p className="text-purple-400 font-semibold">Cochin University College of Engineering, Kuttanad 🎓</p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            I love crafting creative digital experiences and solving real-world problems with code.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
          >
            <span>View My Projects</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
          >
            <Download size={18} />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Code, href: "#", label: "LeetCode" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};