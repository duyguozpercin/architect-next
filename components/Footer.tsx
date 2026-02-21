"use client";
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center text-black font-bold text-2xl leading-none">A</div>
            <div>
              <span className="text-white text-xl font-light tracking-[0.2em] uppercase block">Studio</span>
              <span className="text-white/30 text-[9px] uppercase tracking-widest">Architectural Excellence</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <a href="#about" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">About</a>
            <a href="#projects" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">Projects</a>
            <a href="#services" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">Services</a>
            <a href="#contact" className="text-white/40 hover:text-white transition-colors text-xs uppercase tracking-widest">Contact</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © {currentYear} Studio Architecture. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
