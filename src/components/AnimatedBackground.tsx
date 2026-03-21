import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Static gradient fallback
      ctx.fillStyle = 'rgba(15, 15, 30, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const isMobile = () => window.innerWidth < 768;

    const initParticles = () => {
      const particleCount = isMobile() ? 30 : 60;
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const drawGradientMesh = (time: number) => {
      // Base gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.0001) * 200,
        canvas.height / 2 + Math.cos(time * 0.0001) * 200,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      );

      gradient.addColorStop(0, 'rgba(30, 20, 50, 0.95)');
      gradient.addColorStop(0.5, 'rgba(15, 15, 30, 0.98)');
      gradient.addColorStop(1, 'rgba(10, 10, 20, 1)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Overlay subtle mesh pattern
      const overlayGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      overlayGradient.addColorStop(0, 'rgba(100, 80, 200, 0.02)');
      overlayGradient.addColorStop(0.5, 'rgba(140, 100, 220, 0.03)');
      overlayGradient.addColorStop(1, 'rgba(80, 60, 180, 0.02)');
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 180, 255, 0.15)';
        ctx.fill();
      });
    };

    const drawConnections = () => {
      const connectionDistance = isMobile() ? 100 : 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(180, 160, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = (time: number) => {
      drawGradientMesh(time);
      updateParticles();
      drawParticles();
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
