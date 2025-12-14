'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import MaskedText from './MaskedText';

const projects = [
    {
        title: "UNREAL ENGINE 5.4 LAUNCH",
        category: "RENDER_TECH",
        src: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=1000",
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1 md:row-span-2"
    },
    {
        title: "AI & GENERATIVE DESIGN",
        category: "INNOVATION",
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        title: "SPATIAL COMPUTING ERA",
        category: "HARDWARE",
        src: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?auto=format&fit=crop&q=80&w=800",
        colSpan: "col-span-1",
        rowSpan: "row-span-1"
    },
    {
        title: "WEBGL PERFORMANCE STUDY",
        category: "OPTIMIZATION",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        colSpan: "col-span-1 md:col-span-3",
        rowSpan: "row-span-1"
    }
];

export default function NewsBento() {
    return (
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-mono text-tech-blue mb-2 tracking-widest">[RESEARCH_ARCHIVE]</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                        Observation Logs
                    </h3>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-xs font-mono text-neutral-500">SYSTEM_STATUS: ONLINE</p>
                    <p className="text-xs font-mono text-neutral-500">LAST_UPDATED: 2025.12.15</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`group relative border border-white/10 bg-white/5 backdrop-blur-sm ${project.colSpan} ${project.rowSpan} hover:border-tech-blue/50 transition-colors`}
                    >
                        {/* Technical Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-tech-blue transition-colors" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-tech-blue transition-colors" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-tech-blue transition-colors" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-tech-blue transition-colors" />

                        {/* Background Image - Desaturated by default, color on hover */}
                        <div className="absolute inset-2 overflow-hidden">
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-80 scale-100 group-hover:scale-105"
                            />
                            {/* Scanline Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]" />
                        </div>

                        {/* Content Header */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[10px] font-mono border border-white/20 px-1 py-0.5 bg-black/50 text-neutral-400">
                                LOC_0{i + 1} // {project.category}
                            </span>
                        </div>

                        {/* Content Footer */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-tight bg-black/50 inline-block px-1 mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-[10px] font-mono text-tech-blue bg-black/50 inline-block px-1">
                                    &gt; CLICK_TO_EXPAND
                                </p>
                            </div>
                            <div className="p-2 bg-black border border-white/20 group-hover:bg-tech-blue group-hover:text-black transition-colors">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
