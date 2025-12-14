"use client";

import { useState, useEffect } from "react";
// import { ReactLenis } from '@studio-freight/react-lenis';
import NavigationOverlay from "../components/Navigation";
import CosmicBackground from "../components/CosmicBackground";
import Hero from "../components/Hero";
import VelocityMarquee from "../components/VelocityMarquee";
import NewsBento from "../components/NewsBento";
import MaskedText from "../components/MaskedText";
import ScrambleText from "../components/ScrambleText";
import Preloader from "../components/Preloader";
import ParallaxDrip from "../components/ParallaxDrip";
import ScrollIndicator from "../components/ScrollIndicator";
import ProjectShowcase from "../components/ProjectShowcase";
import ParallaxText from "../components/ParallaxText";
import { ArrowRight, Menu } from 'lucide-react';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            number: "01",
            title: "Video Editing",
            description: "Cinematic storytelling and visual excellence.",
            features: ["Color Grading", "VFX & Motion", "Sound Design"],
            videoSrc: ""
        },
        {
            number: "02",
            title: "Web Development",
            description: "Immersive digital experiences built for performance.",
            features: ["React / Next.js", "WebGL", "Creative Coding"],
            videoSrc: ""
        },
        {
            number: "03",
            title: "Brand Strategy",
            description: "Defining your voice in a crowded digital universe.",
            features: ["Positioning", "Identity", "Growth"],
            videoSrc: ""
        },
        {
            number: "04",
            title: "Motion Graphics",
            description: "Bringing static concepts to life with fluid animation.",
            features: ["3D Animation", "Logo Reveals", "Social Assets"],
            videoSrc: ""
        }
    ];

    return (
        <>
            <Preloader />
            <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-yellow-500 selection:text-black">
                <CosmicBackground />

                {/* Fixed Header Elements */}
                <div className="fixed top-0 left-0 w-full z-40 p-8 flex justify-between items-start pointer-events-none mix-blend-difference">
                    <div />

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="pointer-events-auto group flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
                    >
                        <span className="uppercase tracking-widest text-sm font-bold hidden md:block">Menu</span>
                        <Menu size={24} />
                    </button>
                </div>

                <NavigationOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

                <Hero />

                {/* <ScrollIndicator /> */}

                <ParallaxDrip />

                <div className="relative z-10 bg-black/50 backdrop-blur-sm md:backdrop-blur-none">

                    {/* INTRO TEXT */}
                    <section className="min-h-[50vh] flex flex-col justify-center items-center py-24 px-4 text-center">
                        <ParallaxText speed={0.2}>
                            <div className="mb-4 text-[10px] font-mono text-tech-blue border border-tech-blue/30 px-2 py-1 bg-tech-blue/5 inline-block">
                                // MISSION_STATEMENT
                            </div>
                        </ParallaxText>
                        <MaskedText className="mb-6">
                            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">
                                <ScrambleText>Constructing</ScrambleText> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-green">Future</span>
                            </h2>
                        </MaskedText>
                        <ParallaxText speed={-0.1}>
                            <MaskedText>
                                <p className="max-w-3xl text-lg md:text-2xl text-neutral-400 font-light leading-relaxed mx-auto">
                                    POLE is a research-driven design facility.
                                    We architect digital infrastructure where technical precision meets artistic volatility.
                                    From experimental interfaces to robust platforms, we engineer the unseen.
                                </p>
                            </MaskedText>
                        </ParallaxText>
                    </section>

                    {/* MARQUEE */}
                    <VelocityMarquee />

                    {/* SERVICES GRID */}
                    <section id="services" className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left border-l-2 border-tech-blue pl-6">
                            <ParallaxText speed={0.3}>
                                <h2 className="text-xs md:text-sm font-mono text-tech-blue mb-4">
                                    <ScrambleText>001 // SYSTEM CAPABILITIES</ScrambleText>
                                </h2>
                            </ParallaxText>
                            <MaskedText>
                                <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                    Core <br />
                                    <span className="text-transparent stroke-text">Modules</span>
                                </h3>
                            </MaskedText>
                            <ParallaxText speed={0.15}>
                                <div className="mt-6 max-w-xl text-neutral-500 font-mono text-sm">
                                    <p>&gt; DEPLOYING HIGH-FIDELITY VISUALS AND LOGIC. WE ARCHITECT THE UNSEEN.</p>
                                </div>
                            </ParallaxText>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="group p-8 md:p-12 border border-white/10 bg-black/20 hover:bg-white/5 transition-colors relative overflow-hidden h-[350px] flex flex-col justify-between"
                                >
                                    {/* Tech Corners */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20 group-hover:border-tech-blue transition-colors" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20 group-hover:border-tech-blue transition-colors" />

                                    {/* Background Video Reveal */}
                                    {service.videoSrc && (
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                                            <video
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="object-cover w-full h-full grayscale opacity-40"
                                            >
                                                <source src={service.videoSrc} type="video/mp4" />
                                            </video>
                                            <div className="absolute inset-0 bg-[#050505]/60" />
                                        </div>
                                    )}

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div className="flex justify-between items-start border-b border-white/10 pb-4">
                                            <h4 className="text-2xl font-bold uppercase tracking-tight group-hover:text-tech-blue transition-colors">{service.title}</h4>
                                            <div className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors">
                                                ID_0{service.number}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-neutral-400 mb-6 text-sm font-mono leading-relaxed">{service.description}</p>
                                            <ul className="space-y-1">
                                                {service.features.map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-center text-xs font-mono text-neutral-600 group-hover:text-tech-blue transition-colors">
                                                        <span className="mr-2 text-tech-blue/50">+</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PROJECT SHOWCASE */}
                    <ProjectShowcase />

                    {/* NEWS SECTION */}
                    <section id="news" className="py-24">
                        <MaskedText className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                            <h2 className="text-xs font-mono text-tech-blue mb-2">002 // DATA_STREAMS</h2>
                        </MaskedText>
                        <NewsBento />
                    </section>

                    {/* CONTACT */}
                    <section id="contact" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tech-blue/5 to-transparent pointer-events-none" />

                        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                            <div className="inline-block border border-tech-blue/30 px-3 py-1 mb-8">
                                <p className="text-xs font-mono text-tech-blue tracking-widest animate-pulse">CONNECTION_AVAILABLE</p>
                            </div>

                            <h2 className="text-5xl md:text-9xl font-black uppercase mb-8 tracking-tighter">
                                <ScrambleText>Collaborate</ScrambleText>
                            </h2>

                            <p className="text-neutral-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                                Ready to initialize your next directive?
                                <br />Our frequencies are open.
                            </p>

                            <button className="group relative px-16 py-6 border border-white/20 bg-transparent text-white text-xl font-bold uppercase tracking-widest overflow-hidden hover:border-tech-blue hover:text-tech-blue transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-4">
                                    [ Initiate_Protocol ] <ArrowRight size={20} />
                                </span>
                                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>

                            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                <a href="https://instagram.com/thepolestudios" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_01</span>
                                    Instagram
                                </a>
                                <a href="https://linkedin.com/company/thepolestudios" target="_blank" rel="noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_02</span>
                                    LinkedIn
                                </a>
                                <a href="mailto:polestudios@mail.ru" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_03</span>
                                    Email
                                </a>
                            </div>

                            <div className="mt-24 flex justify-between w-full border-t border-white/10 pt-8 text-xs font-mono text-neutral-600">
                                <span>POLE SYSTEM © 2025</span>
                                <span>SECURE_CONNECTION</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
