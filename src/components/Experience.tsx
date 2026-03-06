import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resumeData';
import { Briefcase, ChevronDown, MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Professional Journey</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative rounded-2xl border transition-all duration-500 ${
              expandedIdx === idx 
                ? 'bg-white/5 border-emerald-500/30' 
                : 'bg-transparent border-white/10 hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl transition-colors ${
                  expandedIdx === idx ? 'bg-emerald-500 text-black' : 'bg-white/5 text-emerald-400'
                }`}>
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 font-medium">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.dates}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${expandedIdx === idx ? 'rotate-180' : ''}`} 
                />
              </div>
            </button>

            <AnimatePresence>
              {expandedIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-8 md:px-24 md:pb-10 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                        {exp.impact}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-400 text-xs font-mono border border-white/10">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-3 text-zinc-400 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
