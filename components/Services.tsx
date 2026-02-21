"use client";

import { motion } from 'motion/react';
import { Ruler, Building2, Paintbrush, Compass, TreePine, Map } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Creating innovative and functional structural designs that redefine modern living environments.",
    details: ["Concept Development", "3D Visualization", "Technical Documentation"]
  },
  {
    icon: Paintbrush,
    title: "Interior Architecture",
    description: "Curating interior spaces that harmonize with the building's core architectural language.",
    details: ["Space Planning", "Material Selection", "Custom Furniture"]
  },
  {
    icon: TreePine,
    title: "Landscape Design",
    description: "Integrating natural elements into architectural projects for seamless indoor-outdoor living.",
    details: ["Sustainable Landscaping", "Outdoor Structures", "Native Flora Selection"]
  },
  {
    icon: Compass,
    title: "Urban Planning",
    description: "Strategic planning for larger scale developments that prioritize community and sustainability.",
    details: ["Master Planning", "Site Analysis", "Feasibility Studies"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl text-white font-light tracking-tight italic">
              Holistic <span className="not-italic font-bold">Solutions</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-12 lg:p-16 hover:bg-[#0f0f0f] transition-colors group relative overflow-hidden"
            >
              <service.icon className="text-white/20 group-hover:text-white transition-colors duration-500 mb-8" size={40} strokeWidth={1} />
              <h3 className="text-2xl text-white font-light mb-6 tracking-wide">{service.title}</h3>
              <p className="text-white/50 font-light leading-relaxed mb-8 max-w-sm">
                {service.description}
              </p>
              
              <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {service.details.map((detail) => (
                  <li key={detail} className="text-white/70 text-[10px] uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/5 translate-x-6 translate-y-6 rotate-45 group-hover:bg-white/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
