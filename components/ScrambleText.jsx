'use client';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "XI01[]<>/\\_-+=*^";

export default function ScrambleText({ children, className = "" }) {
    const [text, setText] = useState(children);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const timeoutRef = useRef(null);
    const originalText = children;

    useEffect(() => {
        if (!isInView) return;

        let pos = 0;

        timeoutRef.current = setInterval(() => {
            const scrambled = originalText.split("")
                .map((char, index) => {
                    if (index < pos) {
                        return originalText[index];
                    }
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setText(scrambled);
            pos += 1 / CYCLES_PER_LETTER;

            if (pos > originalText.length) {
                clearInterval(timeoutRef.current);
                setText(originalText);
            }
        }, SHUFFLE_TIME);

        return () => clearInterval(timeoutRef.current);
    }, [isInView, originalText]);

    return (
        <span ref={ref} className={className}>
            {text}
        </span>
    );
}
