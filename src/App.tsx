/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowRight, 
  Box, 
  Cpu, 
  Github, 
  Globe, 
  Instagram, 
  Layers, 
  Menu, 
  Twitter, 
  Zap,
  Star,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Project Alpha",
    category: "DESIGN SYSTEM",
    description: "A comprehensive toolkit for modern interfaces.",
    tags: ["UI", "UX", "Vite"]
  },
  {
    id: "02",
    title: "Nova Engine",
    category: "DEVELOPMENT",
    description: "Lightning fast runtime for edge computing.",
    tags: ["Rust", "Wasm"]
  },
  {
    id: "03",
    title: "Ethereal",
    category: "CREATIVE",
    description: "AI-powered music generation platform.",
    tags: ["AI", "GenAI"]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="min-h-screen font-sans selection:bg-lime-400 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-black bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-display text-xl leading-none">
              V
            </div>
            <span className="font-display text-xl tracking-tighter uppercase">VersaHub</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-lime-600 transition-colors">Manifesto</a>
            <a href="#" className="hover:text-lime-600 transition-colors">Workspace</a>
            <a href="#" className="hover:text-lime-600 transition-colors">Collective</a>
            <button className="px-4 py-2 border border-black hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 hover:translate-x-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0 active:translate-x-0">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-black bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-48">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-end">
              <motion.div 
                style={{ y: titleY }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-lime-400 border border-black text-[10px] font-bold uppercase tracking-[0.2em] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Live V2.0
                  </span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border border-black bg-neutral-200" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 underline underline-offset-4">
                    Join 12k+ users
                  </span>
                </div>
                <h1 className="font-display text-6xl md:text-[9rem] leading-[0.85] tracking-tighter uppercase mb-12">
                  Space for <br />
                  <span className="text-lime-500 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">Anything.</span>
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                  The modular hub for creators, builders, and visionaries. 
                  Ship local, grow global, and organize everything in between.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8"
              >
                <div className="p-8 border border-black bg-neutral-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
                  <div className="flex justify-between items-start mb-12">
                    <Zap className="w-8 h-8 text-black fill-lime-400" />
                    <span className="font-mono text-xs opacity-50 uppercase">Efficiency Rank</span>
                  </div>
                  <div className="text-4xl font-display uppercase tracking-tight mb-2">99.8%</div>
                  <div className="w-full h-2 bg-neutral-300 border border-black">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99.8%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-lime-400"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 px-8 py-5 bg-black text-white font-display text-lg uppercase tracking-tight hover:bg-neutral-800 transition-colors flex items-center justify-between group">
                    Build Yours <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Marquee */}
          <div className="border-y border-black bg-black py-4 overflow-hidden flex whitespace-nowrap">
            <div className="flex animate-marquee">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-12 px-12">
                  <span className="text-white font-display text-2xl uppercase tracking-widest inline-flex items-center gap-4">
                    <Star className="fill-lime-400 text-lime-400 w-6 h-6" />
                    Modular Systems
                  </span>
                  <span className="text-white font-display text-2xl uppercase tracking-widest inline-flex items-center gap-4">
                    <Star className="fill-white text-white w-6 h-6" />
                    Creative Freedom
                  </span>
                  <span className="text-white font-display text-2xl uppercase tracking-widest inline-flex items-center gap-4">
                    <Star className="fill-lime-400 text-lime-400 w-6 h-6" />
                    Global Scale
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-neutral-50 py-24 border-b border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-lime-600 block mb-4">Core Principles</span>
              <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                Built for the <br />
                Hyper-Focused.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-black">
              {[
                { title: "Universal Stack", icon: Layers, desc: "Connect anything to everything with our extensible API architecture." },
                { title: "Native Speed", icon: Cpu, desc: "Built for sub-millisecond response times across the entire ecosystem." },
                { title: "Global Sync", icon: Globe, desc: "Real-time state synchronization for teams working across continents." }
              ].map((f, i) => (
                <div key={i} className="p-12 border-b md:border-b-0 md:border-r border-black hover:bg-white transition-colors group">
                  <f.icon className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl uppercase mb-4">{f.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Feed */}
        <section className="py-24 bg-white border-b border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
              <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                Featured <br /> Output.
              </h2>
              <button className="font-mono text-xs uppercase tracking-widest flex items-center gap-2 border-b border-black pb-1 hover:text-lime-600 transition-colors">
                View Archive <ExternalLink className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-0 border-t border-black">
              {PROJECTS.map((p) => (
                <motion.div 
                  key={p.id}
                  whileHover={{ backgroundColor: "#F7FEE7" }}
                  className="group grid md:grid-cols-[100px_1fr_400px_48px] items-center p-8 border-b border-black cursor-pointer transition-all"
                >
                  <span className="font-display text-2xl text-neutral-300 group-hover:text-black transition-colors">{p.id}</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-lime-600 mb-1 block">
                      {p.category}
                    </span>
                    <h3 className="font-display text-3xl uppercase tracking-tight">{p.title}</h3>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-neutral-500 text-sm">{p.description}</p>
                    <div className="flex gap-2 mt-2">
                       {p.tags.map(t => (
                         <span key={t} className="text-[9px] font-mono border border-neutral-200 px-1 uppercase">{t}</span>
                       ))}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 group-hover:duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-lime-400 py-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-display text-6xl md:text-9xl uppercase tracking-tighter leading-[0.85] mb-12">
              Ready to <br />
              Accelerate?
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-6 bg-black text-white font-display text-2xl uppercase tracking-tight shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all active:translate-y-0 active:translate-x-0 active:shadow-none">
                Launch System
              </button>
              <button className="px-12 py-6 border-4 border-black font-display text-2xl uppercase tracking-tight hover:bg-black hover:text-white transition-all">
                Read Roadmap
              </button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-black/10 -mr-32 -mt-32 rotate-45" />
          <div className="absolute bottom-0 left-0 w-96 h-96 border-r border-t border-black/10 -ml-48 -mb-48 rotate-12" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-lime-400 flex items-center justify-center text-black font-display text-2xl leading-none">
                  V
                </div>
                <span className="font-display text-2xl tracking-tighter uppercase">VersaHub</span>
              </div>
              <p className="max-w-md text-neutral-500 text-lg leading-relaxed mb-8">
                Defining the next generation of creative infrastructure. 
                Optimized for performance, designed for intent.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-widest mb-8 text-neutral-400 underline underline-offset-8">Resources</h4>
              <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Assets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Kit</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm uppercase tracking-widest mb-8 text-neutral-400 underline underline-offset-8">Status</h4>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime-400">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                System Operational
              </div>
              <p className="mt-4 text-xs font-mono text-neutral-600 uppercase">
                Last Deploy: 12.05.2026
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">
            <span>© 2026 VersaHub Collective. All rights reserved.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
