"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    {
        id: 1,
        title: "Home",
        href: "#home",
        description: "Back to top",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Services",
        href: "#services",
        description: "What we offer",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Projects",
        href: "#projects",
        description: "Our case studies",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "News",
        href: "#news",
        description: "Latest insights",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Contact",
        href: "#contact",
        description: "Get in touch",
        image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&auto=format&fit=crop&q=80"
    }
];

const socials = [
    { name: "Instagram", url: "https://instagram.com/thepolestudios" },
    { name: "LinkedIn", url: "https://linkedin.com/company/thepolestudios" },
    { name: "Email", url: "mailto:polestudios@mail.ru" }
];

export default function NavigationOverlay({ isOpen, onClose }) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleNavClick = (href) => {
        onClose();
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (href === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Fullscreen Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-black z-[90]"
                    >
                        {/* Split Screen Layout */}
                        <div className="h-full flex">
                            {/* Left Side - Menu Items */}
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 relative z-10"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-yellow-500 flex items-center justify-center transition-all group"
                                >
                                    <X className="text-white group-hover:rotate-90 transition-transform" size={24} />
                                </button>

                                {/* Navigation Items */}
                                <nav className="space-y-6">
                                    {menuItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                                            onMouseEnter={() => setHoveredItem(item)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                            onClick={() => handleNavClick(item.href)}
                                            className="group cursor-pointer border-b border-white/10 pb-6"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-xs font-mono text-yellow-500 opacity-60">
                                                            0{item.id}
                                                        </span>
                                                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300">
                                                            {item.title}
                                                        </h2>
                                                    </div>
                                                    <p className="mt-2 ml-12 text-white/60 text-sm md:text-base group-hover:text-white/80 transition-colors">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <ArrowRight
                                                    className="text-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all"
                                                    size={32}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Bottom Section - Social & Contact */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-16 space-y-8"
                                >
                                    {/* Social Links */}
                                    <div className="flex flex-wrap gap-6">
                                        {socials.map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-white/60 hover:text-yellow-400 font-mono text-sm uppercase tracking-wider transition-colors"
                                            >
                                                {social.name}
                                            </a>
                                        ))}
                                    </div>

                                    {/* Contact Info */}
                                    <div className="flex flex-col gap-3 text-white/40 text-sm font-mono">
                                        <div className="flex items-center gap-2">
                                            <Mail size={16} />
                                            <a href="mailto:polestudios@mail.ru" className="hover:text-white transition-colors">polestudios@mail.ru</a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Side - Preview Image */}
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="hidden md:block w-1/2 relative overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {hoveredItem && (
                                        <motion.div
                                            key={hoveredItem.id}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url(${hoveredItem.image})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                            {/* Preview Text */}
                                            <div className="absolute bottom-12 left-12 right-12">
                                                <h3 className="text-4xl font-black uppercase text-white mb-4">
                                                    {hoveredItem.title}
                                                </h3>
                                                <p className="text-white/80 text-lg">
                                                    {hoveredItem.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Default State */}
                                {!hoveredItem && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-900/20 to-black"
                                    >
                                        <div className="text-center space-y-4">
                                            <h3 className="text-6xl font-black uppercase text-transparent stroke-text opacity-20">
                                                POLE
                                            </h3>
                                            <p className="text-white/40 font-mono text-sm">
                                                Hover to preview sections
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
