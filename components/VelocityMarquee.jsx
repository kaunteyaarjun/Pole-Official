'use client';
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="flex whitespace-nowrap text-nowrap flex-nowrap" style={{ x }}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <span key={i} className="block mr-12">{children}</span>
                ))}
            </motion.div>
        </div>
    );
}

export default function VelocityMarquee() {
    return (
        <section className="py-24 overflow-hidden relative z-10 select-none">
            <ParallaxText baseVelocity={2}>
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8 text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default font-mono opacity-50">
                    POLE.SYSTEM // VISUAL_ENGINEERING // DATA_VIS //
                </span>
            </ParallaxText>
            <div className="h-8 md:h-16" />
            <ParallaxText baseVelocity={-2}>
                <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8 text-neutral-800 hover:text-tech-blue transition-colors duration-500 cursor-default">
                    STRATEGY_CORE * DESIGN_LAB * DEV_OPS * R&D *
                </span>
            </ParallaxText>
        </section>
    );
}
