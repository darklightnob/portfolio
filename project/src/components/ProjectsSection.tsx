import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Database, Globe } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and elegant design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful UI and location-based forecasts.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Management App",
      description: "Productive task manager with drag-and-drop functionality and priority sorting.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Explorer",
      description: "Ethereum blockchain explorer with transaction details and wallet tracking.",
      technologies: ["React", "Web3.js", "Ethers.js", "Chart.js"],
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  const techIcons = {
    "React": Code,
    "TypeScript": Code,
    "JavaScript": Code,
    "HTML": Globe,
    "CSS": Palette,
    "Node.js": Database,
    "MongoDB": Database,
    "Express": Database,
    "Tailwind CSS": Palette,
    "Framer Motion": Palette,
    "Weather API": Globe,
    "Web3.js": Code,
    "Ethers.js": Code,
    "Chart.js": Code
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my creative work and problem-solving adventures
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => {
                    const IconComponent = techIcons[tech as keyof typeof techIcons] || Code;
                    return (
                      <span
                        key={techIndex}
                        className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-700/50 rounded-full text-sm text-purple-300 border border-slate-600"
                      >
                        <IconComponent size={14} />
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};