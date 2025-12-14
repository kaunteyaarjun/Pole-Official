'use client';
import { motion } from 'framer-motion';

export default function Decoration() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Left Side Coordinates */}
            <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden md:flex flex-col gap-8 text-[10px] font-mono text-white/20">
                <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }}>
                    34.052° N <br /> 118.243° W
                </motion.div>
                <div className="w-px h-32 bg-white/10" />
                <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
                    SYS.NOMINAL
                </motion.div>
            </div>

            {/* Right Side Barcode */}
            <div className="absolute right-8 bottom-32 hidden md:block">
                <div className="flex gap-1 h-16 items-end opacity-20">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-white w-1"
                            animate={{ height: ['20%', '100%', '40%'] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, repeatType: "reverse" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
