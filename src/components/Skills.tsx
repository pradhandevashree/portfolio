import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resumeData';
import { Award, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Expertise & Skills</h2>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.technical.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:border-emerald-500/30 hover:text-emerald-400 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe size={20} className="text-emerald-500" /> Languages
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {resumeData.skills.languages.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-white font-medium">{lang.name}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="space-y-4">
            {resumeData.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/20"
              >
                <div className="p-3 rounded-lg bg-emerald-500 text-black">
                  <Award size={20} />
                </div>
                <span className="text-white font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div className="text-white font-bold">{edu.degree}</div>
                  <div className="text-emerald-400 text-sm">{edu.institution}</div>
                  <div className="text-zinc-500 text-xs mt-1">{edu.dates}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
