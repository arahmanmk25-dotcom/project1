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

  // Initialize particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 8 : 15;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 16,
          speedX: (Math.random() - 0.5) * 0.15,
          speedY: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.4 + 0.1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
        });
      }

      particlesRef.current = newParticles;
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      particlesRef.current = particlesRef.current.map((particle) => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;
        let newSpeedX = particle.speedX;
        let newSpeedY = particle.speedY;

        // Bounce off edges
        if (newX <= 0 || newX >= 100) {
          newSpeedX = -particle.speedX;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY <= 0 || newY >= 100) {
          newSpeedY = -particle.speedY;
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
      const connectionDistance = 35;

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
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((connection, index) => {
          const from = particles[connection.from];
          const to = particles[connection.to];
          if (!from || !to) return null;

          const dx = from.x - to.x;
          const dy = from.y - to.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0, (35 - distance) / 35) * 0.3;

          return (
            <motion.line
              key={`connection-${index}`}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="hsl(43 74% 49%)"
              strokeWidth="1"
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
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: particle.opacity, scale: 1 }}
          transition={{ duration: 0.5, delay: particle.id * 0.1 }}
        >
          <Truck
            className="text-gold"
            style={{
              width: particle.size,
              height: particle.size,
              filter: 'drop-shadow(0 0 8px hsl(43 74% 49% / 0.5))',
            }}
          />
        </motion.div>
      ))}

      {/* Additional floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gold/20"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default TruckParticles;
