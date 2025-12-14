'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    // Scale from huge to small
    // Scale from huge to small
    const scale = useTransform(scrollYProgress, [0, 0.5], [12, 1]);

    // Move from center to top-left corner
    const xVw = useTransform(scrollYProgress, [0, 0.5], [0, -47]);
    const yVh = useTransform(scrollYProgress, [0, 0.5], [0, -28]);

    // Fade out hero prompt (faster fade out)
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    return (
        <div ref={targetRef} className="h-[200vh] relative">
            {/* Logo - starts centered, moves to corner */}
            <div className="sticky top-0 h-screen w-full flex items-start pt-[30vh] justify-center overflow-hidden">
                {/* HUD Elements - Fixed corners */}
                <div className="absolute top-8 left-8 z-30 font-mono text-[10px] text-neutral-600 tracking-widest hidden md:block mix-blend-difference">
                    <p>34.052° N</p>
                    <p>118.243° W</p>
                    <div className="h-12 w-[1px] bg-neutral-800 mt-4" />
                </div>
                <div className="absolute top-8 right-8 z-30 font-mono text-[10px] text-neutral-600 tracking-widest hidden md:block mix-blend-difference text-right">
                    <p>EST. 2024</p>
                    <p>SECTOR_07</p>
                    <div className="h-12 w-[1px] bg-neutral-800 mt-4 ml-auto" />
                </div>
                <div className="absolute bottom-8 left-8 z-30 font-mono text-[10px] text-neutral-600 tracking-widest hidden md:block mix-blend-difference">
                    <div className="h-12 w-[1px] bg-neutral-800 mb-4" />
                    <p>SYS.NOMINAL</p>
                </div>
                <div className="absolute bottom-8 right-8 z-30 hidden md:block mix-blend-difference">
                    {/* Audio Visualizer Graphic */}
                    <div className="flex items-end gap-[2px] h-8 opacity-50">
                        {[40, 60, 30, 80, 50, 90, 40, 70].map((h, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [h + '%', (h * 0.5) + '%', h + '%'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                                className="w-[2px] bg-neutral-600"
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    style={{
                        scale,
                        x: useTransform(xVw, (v) => `${v}vw`),
                        y: useTransform(yVh, (v) => `${v}vh`)
                    }}
                    className="z-50 pointer-events-none mix-blend-difference"
                >
                    <div className="relative w-32 h-12">
                        <Image
                            src="/polelogo.png"
                            alt="POLE"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Hero prompt text */}
                <motion.div style={{ opacity }} className="absolute top-[60vh] left-0 w-full flex flex-col items-center justify-center z-40 pointer-events-none">
                    <div className="text-center space-y-4 pointer-events-auto">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-xs font-mono text-tech-blue tracking-[0.2em] border border-tech-blue/30 px-3 py-1 bg-tech-blue/5 glow-tech text-glow">
                                SYSTEM_READY // V.2.0.25
                            </h2>
                            <p className="text-neutral-500 uppercase tracking-[0.3em] text-xs font-mono">
                                &lt; AWAITING_MANUAL_INPUT /&gt;
                            </p>
                        </div>

                        {/* Technical Separator */}
                        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />

                        <motion.button
                            onClick={() => {
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="group relative px-8 py-3 bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-tech-blue hover:text-tech-blue transition-all pointer-events-auto glow-tech"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 text-glow">Initialize_Contact()</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-1 h-1 bg-white group-hover:bg-tech-blue transition-colors" />
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-white group-hover:bg-tech-blue transition-colors" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
