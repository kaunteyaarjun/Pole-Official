'use client';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Magnetic effect - detect hoverable elements
        const handleMouseMove = (e) => {
            const hoverable = e.target.closest('a, button, [role="button"], .magnetic');

            if (hoverable && !hoverable.classList.contains('no-magnetic')) {
                setIsHovering(true);
                const rect = hoverable.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Magnetic pull effect
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

                if (distance < 100) {
                    const pullStrength = Math.max(0, 1 - distance / 100);
                    cursorX.set(e.clientX - distanceX * pullStrength * 0.3);
                    cursorY.set(e.clientY - distanceY * pullStrength * 0.3);
                } else {
                    cursorX.set(e.clientX);
                    cursorY.set(e.clientY);
                }
            } else {
                setIsHovering(false);
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        backgroundColor: isHovering ? '#EAB308' : '#ffffff',
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 rounded-full"
                />
            </motion.div>

            {/* Cursor trail ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 1,
                        borderColor: isHovering ? '#EAB308' : '#ffffff',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 border-2 rounded-full opacity-50"
                />
            </motion.div>

            {/* Hover glow effect */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="fixed top-0 left-0 pointer-events-none z-[9997]"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    >
                        <div className="w-20 h-20 bg-yellow-500 rounded-full blur-xl" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
