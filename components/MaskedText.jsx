'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MaskedText({ children, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: 0.8 // added for cleaner effect if spring is too bouncy
            },
        },
        hidden: {
            opacity: 0,
            y: "110%", // Pushes it fully out of the masked area
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    // If children is a string, split words? Or just animate the whole block?
    // For "Masked Text Reveals", usually per-line or per-word is best.
    // Let's assume passed as a simple string or single element for now, 
    // but to be safe and "Awwwards-y", let's wrap the content in a span that slides up.

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                variants={child}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="block"
            >
                {children}
            </motion.div>
        </div>
    );
}
