import "./globals.css";
import { Inter, JetBrains_Mono } from 'next/font/google';
import CustomCursor from "../components/CustomCursor";
import GrainOverlay from "../components/GrainOverlay";
import Decoration from "../components/Decoration";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
    title: "POLE | Strategic Research & Design",
    description: "Advanced digital solutions and strategic design.",
    icons: {
        icon: '/polelogo.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
            <body className="font-sans antialiased bg-[#050505] text-white">
                <CustomCursor />
                <GrainOverlay />
                <Decoration />
                {children}
            </body>
        </html>
    );
}

