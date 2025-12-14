'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [percent, setPercent] = useState(0);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        // Simulate loading
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setComplete(true), 500); // Wait a bit at 100%
                    return 100;
                }
                // Random jump
                return Math.min(prev + Math.floor(Math.random() * 8) + 1, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {!complete && (
                <motion.div
                    className="fixed inset-0 z-[99999] bg-black flex items-end justify-end p-8 md:p-16 overflow-hidden"
                    initial={{ y: 0 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }  // Dramatic "curtain" slide up
                    }}
                >
                    <div className="flex flex-col items-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10vw] md:text-[8vw] font-black text-white leading-none tracking-tighter"
                        >
                            {percent}%
                        </motion.div>
                        <div className="text-sm md:text-base font-mono text-neutral-500 mt-2">
                            LOADING EXPERIENCE...
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
