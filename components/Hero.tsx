"use client";

import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 z-0 scale-110"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758957701419-2c6e266f7988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzAxMTU4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-1 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <span className="inline-block text-white/50 text-[10px] uppercase tracking-[0.4em] mb-6">
            Architecture • Interior • Design
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] text-white leading-[0.9] font-light tracking-tighter mb-8 italic">
            Refining <br />
            <span className="font-bold not-italic">Spaces</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <p className="text-sm md:text-base text-white/60 max-w-xs text-center md:text-left leading-relaxed font-light tracking-wide uppercase">
              Creating timeless architectural experiences through minimalist precision and structural integrity.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                <span className="text-white group-hover:text-black text-[10px] uppercase tracking-widest font-medium">Explore</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 group"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] group-hover:text-white transition-colors">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        <ArrowDown className="text-white/40 group-hover:text-white group-hover:translate-y-1 transition-all" size={14} />
      </motion.button>

      {/* Vertical Side Lines */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>
    </section>
  );
}
