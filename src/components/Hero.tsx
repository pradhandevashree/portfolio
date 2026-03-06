import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resumeData';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-wider"
        >
          {resumeData.basics.title}
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
          {resumeData.basics.name}
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {resumeData.basics.summary}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
            <Download size={18} /> Download CV
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex gap-6"
      >
        <a href={`mailto:${resumeData.basics.email}`} className="text-zinc-500 hover:text-emerald-400 transition-colors">
          <Mail size={20} />
        </a>
        <a href={resumeData.basics.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors">
          <Linkedin size={20} />
        </a>
      </motion.div>
    </section>
  );
};
