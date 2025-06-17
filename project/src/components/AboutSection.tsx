import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            🧠 About Me
          </h2>
          <p className="text-xl text-purple-400 font-semibold mb-4">
            "Not just a student — a dreamer, a creator, a problem solver."
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate learner in Computer Science 💻 with a spark of creativity and an eye for detail. 
            My journey is defined by curiosity — whether it's learning Linux commands, exploring blockchain tech, 
            or building intuitive UIs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "Curious Mind",
              description: "Always eager to learn and explore new technologies and concepts."
            },
            {
              icon: Code,
              title: "Problem Solver",
              description: "Love breaking down complex problems into elegant solutions."
            },
            {
              icon: Lightbulb,
              title: "Creative Thinker",
              description: "Bringing innovative ideas to life through code and design."
            },
            {
              icon: Target,
              title: "Detail Oriented",
              description: "Focused on crafting polished, user-friendly experiences."
            }
          ].map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">
                <trait.icon size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{trait.title}</h3>
              <p className="text-gray-300">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};