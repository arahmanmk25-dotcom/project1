import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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

interface Connection {
  from: number;
  to: number;
}

const TruckParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 10 : 18;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 24 + 20,
          speedX: (Math.random() - 0.5) * 0.12,
          speedY: (Math.random() - 0.5) * 0.12,
          opacity: Math.random() * 0.5 + 0.15,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.4,
        });
      }

      particlesRef.current = newParticles;
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      particlesRef.current = particlesRef.current.map((particle) => {
        let newSpeedX = particle.speedX;
        let newSpeedY = particle.speedY;

        // Mouse interaction - particles move away from cursor
        if (mouseRef.current) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 20;

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            const angle = Math.atan2(dy, dx);
            newSpeedX += Math.cos(angle) * force * 0.5;
            newSpeedY += Math.sin(angle) * force * 0.5;
          }
        }

        // Apply friction to slow down speed boost from mouse
        newSpeedX *= 0.98;
        newSpeedY *= 0.98;

        // Ensure minimum speed
        const minSpeed = 0.05;
        if (Math.abs(newSpeedX) < minSpeed) {
          newSpeedX = minSpeed * (Math.random() > 0.5 ? 1 : -1);
        }
        if (Math.abs(newSpeedY) < minSpeed) {
          newSpeedY = minSpeed * (Math.random() > 0.5 ? 1 : -1);
        }

        let newX = particle.x + newSpeedX;
        let newY = particle.y + newSpeedY;

        // Bounce off edges
        if (newX <= 0 || newX >= 100) {
          newSpeedX = -newSpeedX;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY <= 0 || newY >= 100) {
          newSpeedY = -newSpeedY;
          newY = Math.max(0, Math.min(100, newY));
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          speedX: newSpeedX,
          speedY: newSpeedY,
          rotation: particle.rotation + particle.rotationSpeed,
        };
      });

      // Calculate connections (connect nearby particles)
      const newConnections: Connection[] = [];
      const connectionDistance = 30;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            newConnections.push({ from: i, to: j });
          }
        }
      }

      setParticles([...particlesRef.current]);
      setConnections(newConnections);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const from = particles[connection.from];
          const to = particles[connection.to];
          if (!from || !to) return null;

          const dx = from.x - to.x;
          const dy = from.y - to.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0, (30 - distance) / 30) * 0.4;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="hsl(43 74% 49%)"
              strokeWidth="1.5"
              strokeOpacity={opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Truck particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: particle.opacity, scale: 1 }}
          transition={{ duration: 0.5, delay: particle.id * 0.08 }}
        >
          <Truck
            className="text-gold"
            style={{
              width: particle.size,
              height: particle.size,
              filter: 'drop-shadow(0 0 10px hsl(43 74% 49% / 0.6))',
            }}
          />
        </motion.div>
      ))}

      {/* Additional floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute rounded-full bg-gold/25 pointer-events-none"
          style={{
            width: 6 + (i % 3) * 2,
            height: 6 + (i % 3) * 2,
            left: `${8 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        />
      ))}
    </div>
  );
};

export default TruckParticles;
