'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();

    // Fade out when scrolling down
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToContent = () => {
        if (typeof window !== 'undefined') {
            // Hero is 200vh tall, so scroll to exactly that to land at ParallaxDrip
            window.scrollTo({
                top: window.innerHeight * 2,
                behavior: 'smooth'
            });
        }
    };

    // Don't render until mounted on client to avoid hydration errors
    if (!mounted) return null;

    return (
        <motion.button
            onClick={scrollToContent}
            style={{ opacity }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 group cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, duration: 0.5 }
            }}
            whileHover={{ scale: 1.2 }}
        >
            {/* Outer glow ring */}
            <motion.div
                className="absolute inset-0 rounded-full bg-tech-blue/20 blur-xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Main arrow container */}
            <motion.div
                className="relative flex flex-col items-center gap-2"
                animate={{
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Text hint */}
                <span className="text-[10px] font-mono text-tech-blue uppercase tracking-widest group-hover:text-white transition-colors">
                    SCROLL
                </span>

                {/* Arrow icon with border */}
                <div className="relative">
                    <div className="absolute inset-0 bg-tech-blue/30 rounded-full blur-md group-hover:bg-tech-blue/50 transition-colors" />
                    <div className="relative w-12 h-12 rounded-full border border-tech-blue/30 group-hover:border-tech-blue flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                        <ChevronDown className="text-tech-blue group-hover:text-white transition-colors" size={20} />
                    </div>
                </div>
            </motion.div>
        </motion.button>
    );
}
