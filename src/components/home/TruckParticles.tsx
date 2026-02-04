import { useEffect, useRef, useCallback } from 'react';
import { Truck } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const TruckParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    const particleCount = window.innerWidth < 768 ? 12 : 20;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 18,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.15,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
      });
    }

    particlesRef.current = newParticles;
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Draw connections on canvas
  const drawConnections = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    const connectionDistance = 25;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (connectionDistance - distance) / connectionDistance * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = `hsla(43, 74%, 49%, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particles[i].x / 100 * canvas.width, particles[i].y / 100 * canvas.height);
          ctx.lineTo(particles[j].x / 100 * canvas.width, particles[j].y / 100 * canvas.height);
          ctx.stroke();
        }
      }
    }
  }, []);

  // Animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67; // Normalize to 60fps
      lastTime = currentTime;

      particlesRef.current = particlesRef.current.map((particle) => {
        let newSpeedX = particle.speedX;
        let newSpeedY = particle.speedY;

        // Mouse repulsion
        if (mouseRef.current) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 25;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            const angle = Math.atan2(dy, dx);
            newSpeedX += Math.cos(angle) * force * 0.8 * deltaTime;
            newSpeedY += Math.sin(angle) * force * 0.8 * deltaTime;
          }
        }

        // Apply friction
        newSpeedX *= 0.995;
        newSpeedY *= 0.995;

        // Ensure minimum speed
        const minSpeed = 0.15;
        const maxSpeed = 0.8;
        if (Math.abs(newSpeedX) < minSpeed) {
          newSpeedX = minSpeed * (newSpeedX >= 0 ? 1 : -1);
        }
        if (Math.abs(newSpeedY) < minSpeed) {
          newSpeedY = minSpeed * (newSpeedY >= 0 ? 1 : -1);
        }
        // Cap max speed
        newSpeedX = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedX));
        newSpeedY = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedY));

        let newX = particle.x + newSpeedX * deltaTime;
        let newY = particle.y + newSpeedY * deltaTime;

        // Bounce off edges
        if (newX <= 2 || newX >= 98) {
          newSpeedX = -newSpeedX;
          newX = Math.max(2, Math.min(98, newX));
        }
        if (newY <= 2 || newY >= 98) {
          newSpeedY = -newSpeedY;
          newY = Math.max(2, Math.min(98, newY));
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: particle.rotation + particle.rotationSpeed * deltaTime,
        };
      });

      drawConnections();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [drawConnections]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      {/* Canvas for connection lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Truck particles with CSS animations */}
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none transition-all duration-75 ease-linear"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
          }}
        >
          <Truck
            className="text-gold"
            style={{
              width: particle.size,
              height: particle.size,
              filter: 'drop-shadow(0 0 8px hsl(43 74% 49% / 0.5))',
            }}
          />
        </div>
      ))}

      {/* Floating dots animation */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full bg-gold/30 animate-pulse"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            left: `${5 + i * 10}%`,
            top: `${10 + (i % 5) * 18}%`,
            animationDuration: `${2 + i * 0.3}s`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TruckParticles;
