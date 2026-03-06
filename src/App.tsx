import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      <AnimatePresence>
        {loading ? (
          <SplashScreen key="splash" onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <AnimatedBackground />
            
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-white/5">
              <div className="text-2xl font-bold tracking-tighter">
                DP<span className="text-emerald-500">.</span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </div>
              <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Hire Me
              </button>
            </nav>

            <Hero />
            
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-mono text-xs mb-1 uppercase">Focus</div>
                  <div className="text-lg font-bold">People Analytics</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-mono text-xs mb-1 uppercase">Specialty</div>
                  <div className="text-lg font-bold">Workforce Wellbeing</div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-mono text-xs mb-1 uppercase">Expertise</div>
                  <div className="text-lg font-bold">Organisational Psych</div>
                </div>
              </div>
            </div>

            <Experience />
            <Achievements />
            <div id="skills">
              <Skills />
            </div>
            <div id="contact">
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
