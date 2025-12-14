'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const shapes = [
    { id: 1, type: 'cube', x: '10%', y: '20%', size: 60, delay: 0 },
    { id: 2, type: 'sphere', x: '85%', y: '15%', size: 80, delay: 0.5 },
    { id: 3, type: 'pyramid', x: '70%', y: '60%', size: 50, delay: 1 },
    { id: 4, type: 'cube', x: '20%', y: '75%', size: 70, delay: 1.5 },
    { id: 5, type: 'sphere', x: '50%', y: '40%', size: 40, delay: 2 },
];

export default function FloatingShapes() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className="absolute"
                    style={{
                        left: shape.x,
                        top: shape.y,
                        width: shape.size,
                        height: shape.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                        x: mousePosition.x * 0.5,
                    }}
                    transition={{
                        y: {
                            duration: 3 + shape.id,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: shape.delay,
                        },
                        rotate: {
                            duration: 10 + shape.id * 2,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                        x: {
                            duration: 0.3,
                            ease: 'easeOut',
                        },
                    }}
                >
                    {shape.type === 'cube' && (
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 backdrop-blur-sm border border-yellow-500/20 rounded-lg transform rotate-45"
                                style={{ boxShadow: '0 0 30px rgba(250, 204, 21, 0.1)' }}
                            />
                        </div>
                    )}
                    {shape.type === 'sphere' && (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20"
                            style={{ boxShadow: '0 0 30px rgba(168, 85, 247, 0.1)' }}
                        />
                    )}
                    {shape.type === 'pyramid' && (
                        <div className="w-full h-full relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 backdrop-blur-sm border border-cyan-500/20"
                                style={{
                                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.1)',
                                }}
                            />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
