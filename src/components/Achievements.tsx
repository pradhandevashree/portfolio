import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resumeData';
import { Trophy, Target, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  const icons = [<Trophy />, <Target />, <Users />];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Strategic Impact</h2>
          <p className="text-zinc-500">Measurable contributions and research highlights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                {React.cloneElement(icons[idx % icons.length] as React.ReactElement, { size: 64 })}
              </div>
              
              <div className="relative z-10">
                <div className="text-emerald-400 font-mono text-sm mb-2 uppercase tracking-widest">{ach.metric}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{ach.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{ach.context}</p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
