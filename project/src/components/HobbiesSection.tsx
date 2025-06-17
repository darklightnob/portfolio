import React from 'react';
import { motion } from 'framer-motion';
import { Puzzle, RssIcon as Chess, BookOpen, Play } from 'lucide-react';

export const HobbiesSection: React.FC = () => {
  const hobbies = [
    {
      icon: Puzzle,
      title: "Solving Rubik's Cubes",
      description: "Twisting logic into color harmony.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Chess,
      title: "Playing Chess",
      description: "Tactics, strategy, and elegance — all in 64 squares.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: BookOpen,
      title: "Reading Web Novels",
      description: "Worlds within words.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Play,
      title: "Watching Anime/Movies/Series",
      description: "Imagination without boundaries.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            💜 Beyond the Code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
              <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${hobby.color} mb-4`}>
                  <hobby.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-gray-300 text-lg italic">
                  "{hobby.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};