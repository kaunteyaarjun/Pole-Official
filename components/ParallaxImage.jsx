'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxImage({ src, alt, className = "" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to a Y translation. 
    // As we scroll down, the image moves slightly up (or down depending on desired effect) 
    // to create depth.
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y, height: "130%", width: "100%", position: "absolute", top: "-15%" }}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}
