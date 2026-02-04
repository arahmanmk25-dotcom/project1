import { useEffect, useRef, useState, useCallback } from 'react';
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
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    const particleCount = window.innerWidth < 768 ? 18 : 30;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 28 + 24,
        speedX: (Math.random() - 0.5) * 1.2, // Much faster: was 0.4
        speedY: (Math.random() - 0.5) * 1.2, // Much faster: was 0.4
        opacity: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 4, // Faster rotation
      });
    }

    particlesRef.current = newParticles;
    setParticles(newParticles);
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
  const drawConnections = useCallback((currentParticles: Particle[]) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const connectionDistance = 30;

    for (let i = 0; i < currentParticles.length; i++) {
      for (let j = i + 1; j < currentParticles.length; j++) {
        const dx = currentParticles[i].x - currentParticles[j].x;
        const dy = currentParticles[i].y - currentParticles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = (connectionDistance - distance) / connectionDistance * 0.6;
          ctx.beginPath();
          ctx.strokeStyle = `hsla(43, 74%, 49%, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.moveTo(currentParticles[i].x / 100 * canvas.width, currentParticles[i].y / 100 * canvas.height);
          ctx.lineTo(currentParticles[j].x / 100 * canvas.width, currentParticles[j].y / 100 * canvas.height);
          ctx.stroke();
        }
      }
    }
  }, []);

  // Animation loop
  useEffect(() => {
    if (particles.length === 0) return;

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 3); // Cap delta to prevent jumps
      lastTime = currentTime;

      const updatedParticles = particlesRef.current.map((particle) => {
        let newSpeedX = particle.speedX;
        let newSpeedY = particle.speedY;

        // Mouse repulsion
        if (mouseRef.current) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 20;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            const angle = Math.atan2(dy, dx);
            newSpeedX += Math.cos(angle) * force * 0.6 * deltaTime;
            newSpeedY += Math.sin(angle) * force * 0.6 * deltaTime;
          }
        }

        // Apply friction
        newSpeedX *= 0.995;
        newSpeedY *= 0.995;

        // Ensure minimum/maximum speed
        const minSpeed = 0.5; // Faster minimum: was 0.2
        const maxSpeed = 2.5; // Faster maximum: was 1
        if (Math.abs(newSpeedX) < minSpeed) {
          newSpeedX = minSpeed * (newSpeedX >= 0 ? 1 : -1);
        }
        if (Math.abs(newSpeedY) < minSpeed) {
          newSpeedY = minSpeed * (newSpeedY >= 0 ? 1 : -1);
        }
        newSpeedX = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedX));
        newSpeedY = Math.max(-maxSpeed, Math.min(maxSpeed, newSpeedY));

        let newX = particle.x + newSpeedX * deltaTime;
        let newY = particle.y + newSpeedY * deltaTime;

        // Bounce off edges
        if (newX <= 3 || newX >= 97) {
          newSpeedX = -newSpeedX;
          newX = Math.max(3, Math.min(97, newX));
        }
        if (newY <= 3 || newY >= 97) {
          newSpeedY = -newSpeedY;
          newY = Math.max(3, Math.min(97, newY));
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

      particlesRef.current = updatedParticles;
      setParticles([...updatedParticles]);
      drawConnections(updatedParticles);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length, drawConnections]);

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

      {/* Truck particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            opacity: particle.opacity,
            transition: 'left 0.05s linear, top 0.05s linear',
          }}
        >
          <Truck
            className="text-gold"
            style={{
              width: particle.size,
              height: particle.size,
              filter: 'drop-shadow(0 0 12px hsl(43 74% 49% / 0.7))',
            }}
          />
        </div>
      ))}

      {/* Floating glowing dots */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full bg-gold/40 animate-pulse"
          style={{
            width: 5 + (i % 4) * 2,
            height: 5 + (i % 4) * 2,
            left: `${3 + i * 6.5}%`,
            top: `${8 + (i % 6) * 15}%`,
            animationDuration: `${1.5 + i * 0.2}s`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TruckParticles;
