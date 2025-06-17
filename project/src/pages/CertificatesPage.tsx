import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, MapPin, Clock, Zap, Terminal, Code } from 'lucide-react';

export const CertificatesPage: React.FC = () => {
  const certificates = [
    {
      title: "Cloud Computing Internship",
      organization: "Spectrum Company, Kochi",
      description: "Explored real-world applications of cloud infrastructure and deployment strategies.",
      date: "2024",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      position: "top",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Linux Administration",
      organization: "Linux Professional Institute",
      description: "Mastered basic shell scripting, file systems, and system management.",
      date: "2024",
      icon: Terminal,
      color: "from-green-500 to-emerald-500",
      position: "left",
      skills: ["Shell Scripting", "System Admin", "Security", "Networking"]
    },
    {
      title: "Ethereum Blockchain Development",
      organization: "Blockchain Academy",
      description: "Learned decentralized app development and smart contract basics.",
      date: "2024",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      position: "right",
      skills: ["Solidity", "Web3.js", "Smart Contracts", "DApps"]
    },
    {
      title: "Typing Speed Certification",
      organization: "Typing Institute",
      description: "Certified fast and accurate typing — a coder's silent superpower.",
      date: "2023",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      position: "bottom",
      skills: ["75+ WPM", "99% Accuracy", "Touch Typing", "Productivity"]
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["C++ (Beginner)", "C (Beginner)", "Python (Beginner)", "JavaScript (Beginner)", "HTML (Beginner)", "CSS (Beginner)"]
    },
    {
      category: "Emerging Technologies",
      items: ["Prompt Engineering", "AI/ML Basics", "Blockchain Fundamentals"]
    },
    {
      category: "Tools & Technologies",
      items: ["Linux", "Git", "Docker", "AWS", "Web3.js", "Solidity"]
    }
  ];

  const getPositionClasses = (position: string, index: number) => {
    const positions = {
      top: "col-span-2 md:col-span-1 md:col-start-2",
      left: "col-span-2 md:col-span-1",
      right: "col-span-2 md:col-span-1",
      bottom: "col-span-2 md:col-span-1 md:col-start-2"
    };
    return positions[position as keyof typeof positions] || "";
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            🏆 Certificates & Achievements
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of my learning journey and professional milestones
          </p>
        </motion.div>

        {/* Triangle Formation Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.25)"
              }}
              className={`${getPositionClasses(cert.position, index)} group relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
              
              <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-4`}>
                  <cert.icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center space-x-2 mb-3 text-gray-400">
                  <MapPin size={16} />
                  <span className="text-sm">{cert.organization}</span>
                </div>

                <div className="flex items-center space-x-2 mb-4 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-2 py-1 bg-slate-700/50 rounded-full text-xs text-purple-300 border border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white rounded-lg transition-all duration-200 border border-purple-500/30 hover:border-purple-500"
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            💻 Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "4+", label: "Certificates" },
            { number: "2+", label: "Years Learning" },
            { number: "15+", label: "Skills Acquired" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};