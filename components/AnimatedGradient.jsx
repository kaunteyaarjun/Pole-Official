'use client';

export default function AnimatedGradient() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[1]">
            {/* Primary animated gradient */}
            <div className="absolute inset-0 animate-gradient-shift opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-yellow-500/20" />
            </div>

            {/* Secondary gradient layer */}
            <div className="absolute inset-0 animate-gradient-shift-reverse opacity-5">
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 via-blue-500/20 to-purple-600/20" />
            </div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-radial-gradient opacity-20" />
        </div>
    );
}
