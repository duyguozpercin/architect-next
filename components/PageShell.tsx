// components/PageShell.tsx
"use client";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

import { motion, AnimatePresence } from "motion/react";

export function PageShell() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-black selection:bg-white selection:text-black"
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
