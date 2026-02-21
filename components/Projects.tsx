"use client";
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Concrete Monolith',
    category: 'Residential',
    location: 'Zurich, Switzerland',
    image: 'https://images.unsplash.com/photo-1549791084-5f78368b208b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29uY3JldGUlMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzAxMTU4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'large'
  },
  {
    id: 2,
    title: 'Crystal Plaza',
    category: 'Commercial',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1762271458610-5f402f8dedf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwbmlnaHQlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMTE1ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small'
  },
  {
    id: 3,
    title: 'Ether Gallery',
    category: 'Cultural',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1759935282381-4b108c64a707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwMTE1ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'small'
  },
  {
    id: 4,
    title: 'Silence Pavilion',
    category: 'Public',
    location: 'Oslo, Norway',
    image: 'https://images.unsplash.com/photo-1763888597245-324fd312d723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGF2aWxpb24lMjBmb3Jlc3QlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwMTE1ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: 'large'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-7xl text-white font-light tracking-tight italic">Portfolio</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <button className="text-white text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 group">
              View All Projects 
              <span className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${project.size === 'large' ? 'md:col-span-1' : 'md:col-span-1'}`}
            >
              <div className="overflow-hidden aspect-[4/5] bg-[#111] border border-white/10 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />
                
                {/* Project Info Overlay - Visible on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-white/60 text-[10px] uppercase tracking-widest">{project.category}</span>
                        <h3 className="text-2xl text-white font-light mt-1">{project.title}</h3>
                        <p className="text-white/40 text-xs mt-2 uppercase tracking-widest">{project.location}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Static Info Below Card for Mobile/Always Visible */}
              <div className="mt-6 flex justify-between items-start md:hidden group-hover:md:flex">
                <div>
                   <h3 className="text-white text-lg font-light tracking-wide">{project.title}</h3>
                   <span className="text-white/40 text-[9px] uppercase tracking-widest">{project.category} — {project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
