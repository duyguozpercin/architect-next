"use client";
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Mock implementation)');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4 block">Let's Connect</span>
            <h2 className="text-5xl md:text-7xl text-white font-light mb-12 italic">Get in <span className="not-italic font-bold">Touch</span></h2>
            
            <div className="space-y-12 mt-16">
              <div className="group cursor-pointer">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">Email</p>
                <a href="mailto:studio@arch.com" className="text-2xl md:text-3xl text-white font-light group-hover:text-white/70 transition-colors">
                  studio@arch.com
                </a>
              </div>
              
              <div className="group cursor-pointer">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">Office</p>
                <p className="text-2xl md:text-3xl text-white font-light group-hover:text-white/70 transition-colors">
                  124 Modernist Way, <br />Zurich, Switzerland
                </p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">Phone</p>
                <a href="tel:+41441234567" className="text-2xl md:text-3xl text-white font-light group-hover:text-white/70 transition-colors">
                  +41 44 123 4567
                </a>
              </div>
            </div>

            <div className="mt-20 flex gap-8">
              {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                <a key={social} href="#" className="text-white/40 text-xs uppercase tracking-widest hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] p-10 lg:p-16 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder=" "
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light focus:outline-none focus:border-white transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-4 peer-not-placeholder-shown:-top-4 peer-focus:text-white">
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  required
                  placeholder=" "
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light focus:outline-none focus:border-white transition-colors peer"
                />
                <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-4 peer-not-placeholder-shown:-top-4 peer-focus:text-white">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  placeholder=" "
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white font-light focus:outline-none focus:border-white transition-colors peer resize-none"
                />
                <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-[10px] pointer-events-none transition-all peer-focus:-top-4 peer-not-placeholder-shown:-top-4 peer-focus:text-white">
                  Project Details
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-6 uppercase tracking-[0.3em] text-xs font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-4 group"
              >
                Send Inquiry
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
