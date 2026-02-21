"use client";

import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 bg-black overflow-hidden">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 text-[12rem] font-bold text-white/5 select-none z-0">01</div>
            <div className="relative z-10 aspect-[4/5] overflow-hidden border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765371512336-99c2b1c6975f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3QlMjBvZmZpY2UlMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3IlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMTE1ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Architecture Studio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#111] -z-1 border border-white/5"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4 block">About the Studio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-12 leading-tight">
              Crafting <span className="font-bold">timeless</span> structures for the modern era.
            </h2>
            
            <div className="space-y-8 text-white/60 font-light leading-relaxed">
              <p className="text-lg">
                Founded in 2010, our studio has been at the forefront of architectural innovation, 
                blending classical principles with contemporary technology to create spaces that inspire.
              </p>
              <p>
                We believe that every structure has a story to tell. Our approach is deeply rooted in 
                sustainability, functionality, and aesthetic harmony. We don't just build walls; 
                we design environments that enhance human connection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16">
              <div>
                <div className="text-3xl text-white font-bold mb-2 tracking-tighter">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl text-white font-bold mb-2 tracking-tighter">12</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Design Awards</div>
              </div>
              <div>
                <div className="text-3xl text-white font-bold mb-2 tracking-tighter">25</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Global Experts</div>
              </div>
              <div>
                <div className="text-3xl text-white font-bold mb-2 tracking-tighter">14</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
