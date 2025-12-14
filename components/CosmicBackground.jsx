"use client";

import React, { useEffect, useRef } from "react";

export default function CosmicBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // Mouse tracking for parallax
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // ============ GRID SYSTEM ============
        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 50;
            const offsetX = (time * 0.5) % gridSize;
            const offsetY = (time * 0.5) % gridSize;

            for (let x = offsetX; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = offsetY; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        // ============ PARTICLE SYSTEM ============
        class DataPoint {
            constructor(layer = 1) {
                this.reset();
                this.layer = layer;
                this.baseSpeed = 0.05 * layer;
                this.parallaxFactor = layer * 0.5;
                this.hoverOffset = { x: 0, y: 0 };
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() < 0.1 ? 2.5 : 1.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.twinkleSpeed = Math.random() * 0.05 + 0.02;
                this.twinklePhase = Math.random() * Math.PI * 2;
                this.vx = (Math.random() - 0.5) * 0.2; // Slow drift
                this.vy = (Math.random() - 0.5) * 0.2;
            }

            update(time) {
                // Drift
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                // Digital Pulse effect
                this.twinklePhase += this.twinkleSpeed;
                this.currentOpacity = this.opacity * (0.8 + Math.sin(this.twinklePhase) * 0.2);

                // Parallax based on mouse
                const parallaxX = (mouseX - canvas.width / 2) * this.parallaxFactor * 0.02;
                const parallaxY = (mouseY - canvas.height / 2) * this.parallaxFactor * 0.02;

                // Hover interaction - subtle attraction
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const hoverRadius = 250;

                if (distance < hoverRadius && distance > 0) {
                    const force = (hoverRadius - distance) / hoverRadius;
                    const angle = Math.atan2(dy, dx);
                    this.hoverOffset.x += Math.cos(angle) * force * -5;
                    this.hoverOffset.y += Math.sin(angle) * force * -5;
                    this.hoverBrightness = force * 0.5;
                } else {
                    this.hoverBrightness = 0;
                }

                // Damping
                this.hoverOffset.x *= 0.9;
                this.hoverOffset.y *= 0.9;

                this.renderX = this.x + parallaxX + this.hoverOffset.x;
                this.renderY = this.y + parallaxY + this.hoverOffset.y;
            }

            draw() {
                const finalOpacity = Math.min(1, this.currentOpacity + this.hoverBrightness);
                ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
                ctx.fillRect(this.renderX, this.renderY, this.size, this.size);
            }
        }

        // Create particles
        const particles = [];
        const particleCounts = { 1: 80, 2: 50, 3: 30 };
        for (let layer in particleCounts) {
            for (let i = 0; i < particleCounts[layer]; i++) {
                particles.push(new DataPoint(parseInt(layer)));
            }
        }

        // ============ ANIMATION LOOP ============
        let animationFrameId;
        let time = 0;

        function animate() {
            time++;

            // Clear canvas 
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Background Grid
            drawGrid();

            // connect close particles
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                p1.update(time);
                p1.draw();

                // Connect to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.renderX - p2.renderX;
                    const dy = p1.renderY - p2.renderY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p1.renderX, p1.renderY);
                        ctx.lineTo(p2.renderX, p2.renderY);
                        ctx.stroke();
                    }
                }
            }

            // Draw cursor crosshair
            if (mouseX > 0 || mouseY > 0) {
                ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
                ctx.lineWidth = 1;

                // Horizontal line
                ctx.beginPath();
                ctx.moveTo(0, mouseY);
                ctx.lineTo(canvas.width, mouseY);
                ctx.stroke();

                // Vertical line
                ctx.beginPath();
                ctx.moveTo(mouseX, 0);
                ctx.lineTo(mouseX, canvas.height);
                ctx.stroke();

                // Coordinates text
                ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
                ctx.font = '10px monospace';
                ctx.fillText(`X: ${mouseX} // Y: ${mouseY}`, mouseX + 10, mouseY - 10);
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            resizeCanvas();
            particles.forEach(p => {
                p.x = Math.random() * canvas.width;
                p.y = Math.random() * canvas.height;
            });
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
