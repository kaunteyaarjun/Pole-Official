/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-mono)'],
            },
            colors: {
                obsidian: '#050505',
                charcoal: '#0a0a0a',
                'tech-blue': '#3b82f6',
                'tech-amber': '#f59e0b',
                'tech-green': '#10b981',
                'lab-gray': '#1f2937',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
                'grid-pattern-small': "linear-gradient(to right, #1f2937 0.5px, transparent 0.5px), linear-gradient(to bottom, #1f2937 0.5px, transparent 0.5px)",
            },
            backgroundSize: {
                'grid': '40px 40px',
                'grid-small': '20px 20px',
            }
        },
    },
    plugins: [],
};
