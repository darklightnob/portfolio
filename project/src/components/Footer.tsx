import React from 'react';
import { Github, Linkedin, Code, Heart, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-300">Built with</span>
            <Heart size={16} className="text-purple-400" />
            <span className="text-gray-300">&</span>
            <Coffee size={16} className="text-purple-400" />
            <span className="text-gray-300">by Curious Coder</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};