import React from 'react';
import { resumeData } from '../data/resumeData';
import { Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="text-3xl font-bold text-white mb-2">
            DP<span className="text-emerald-500">.</span>
          </div>
          <p className="text-zinc-500 max-w-xs">
            Building healthier, more effective workplaces through psychological insight and data.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a href={`mailto:${resumeData.basics.email}`} className="p-3 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black transition-all">
              <Mail size={20} />
            </a>
            <a href={resumeData.basics.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black transition-all">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <MapPin size={14} /> {resumeData.basics.location}
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Devashree Pradhan. All rights reserved.
      </div>
    </footer>
  );
};
