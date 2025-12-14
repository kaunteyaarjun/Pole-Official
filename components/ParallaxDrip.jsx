'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxDrip() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // EXTREME parallax speeds - much more dramatic movement
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y6 = useTransform(scrollYProgress, [0, 1], [0, 350]);

    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className="relative h-[180vh] overflow-hidden select-none bg-black">
            {/* Layer 1 - MASSIVE "DIGITAL" */}
            <motion.div
                style={{ y: y1, opacity: opacity1 }}
                className="absolute inset-0 flex items-start justify-start pt-32 pl-0"
            >
                <h2 className="text-[28vw] md:text-[35vw] font-black uppercase text-yellow-500/20 leading-none">
                    DIGITAL
                </h2>
            </motion.div>

            {/* Layer 2 - "AGENCY" opposite direction */}
            <motion.div
                style={{ y: y2, opacity: opacity1 }}
                className="absolute inset-0 flex items-center justify-end pr-0"
            >
                <h3 className="text-[25vw] md:text-[32vw] font-black uppercase text-white/15 leading-none -rotate-3">
                    AGENCY
                </h3>
            </motion.div>

            {/* Layer 3 - "STUDIO" center */}
            <motion.div
                style={{ y: y3, opacity: opacity2 }}
                className="absolute inset-0 flex items-end justify-center pb-24"
            >
                <h2 className="text-[30vw] md:text-[38vw] font-black uppercase text-transparent stroke-text-thick opacity-70">
                    STUDIO
                </h2>
            </motion.div>

            {/* Layer 4 - Vertical text "CREATIVE" */}
            <motion.div
                style={{ y: y4, opacity: opacity1 }}
                className="absolute right-12 top-1/4 flex items-center"
            >
                <h3 style={{ writingMode: 'vertical-rl' }} className="text-[15vw] md:text-[20vw] font-black uppercase text-yellow-400/25 leading-none rotate-180">
                    CREATIVE
                </h3>
            </motion.div>

            {/* Layer 5 - "IMMERSIVE" */}
            <motion.div
                style={{ y: y5, opacity: opacity2 }}
                className="absolute top-1/3 left-0 w-full flex justify-center"
            >
                <h2 className="text-[22vw] md:text-[28vw] font-black uppercase text-white/10 tracking-tighter">
                    IMMERSIVE
                </h2>
            </motion.div>

            {/* Layer 6 - Diagonal "EXPERIENCE" */}
            <motion.div
                style={{ y: y6, opacity: opacity1 }}
                className="absolute bottom-1/4 left-1/4 rotate-12"
            >
                <h2 className="text-[18vw] md:text-[24vw] font-black uppercase text-yellow-500/15">
                    EXPERIENCE
                </h2>
            </motion.div>

            {/* Tech Grid Overlay */}
            <motion.div
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="grid grid-cols-3 gap-8 text-center text-white/30 font-mono text-xs md:text-sm">
                    <div className="animate-pulse">WEBGL</div>
                    <div>THREEJS</div>
                    <div className="animate-pulse delay-100">GSAP</div>
                    <div>REACT</div>
                    <div className="animate-pulse delay-200">NEXT</div>
                    <div>FRAMER</div>
                </div>
            </motion.div>

            {/* Coordinates floating */}
            <motion.div
                style={{ y: y2, opacity: opacity1 }}
                className="absolute top-20 right-12 text-yellow-500/40 font-mono text-[10px] md:text-xs text-right"
            >
                <div className="space-y-1">
                    <p>34.052° N</p>
                    <p>118.243° W</p>
                    <p className="mt-3 animate-pulse">ACTIVE</p>
                </div>
            </motion.div>

            {/* Status bar bottom */}
            <motion.div
                style={{ y: y4, opacity: opacity2 }}
                className="absolute bottom-12 left-0 w-full px-8 font-mono text-[10px] md:text-xs text-white/20"
            >
                <div className="flex justify-between">
                    <span>SYSTEM.LIVE</span>
                    <span className="animate-pulse">LAT: 0.002s</span>
                    <span>GPU.RENDER: ON</span>
                </div>
            </motion.div>

            {/* No gradients - let the text fill everything */}
        </div>
    );
}
