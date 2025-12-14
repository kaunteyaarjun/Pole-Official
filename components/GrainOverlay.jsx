'use client';
export default function GrainOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-20 mix-blend-overlay">
            {/* 
          Using a CSS noise generator pattern via SVG filter or simple CSS 
          For simplicity and performance, we can use a small noise image or SVG.
          Here is a reliable SVG noise filter technique.
       */}
            <svg className="absolute inset-0 w-full h-full">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.80"
                        numOctaves="3"
                        stitchTiles="stitch" />
                </filter>

                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </div>
    );
}
