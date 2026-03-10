import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

interface StatsBarProps {
  stats: StatItem[];
  variant?: 'light' | 'dark';
}

const StatsBar = ({ stats, variant = 'light' }: StatsBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const isDark = variant === 'dark';

  return (
    <section
      ref={ref}
      className={`py-16 relative overflow-hidden ${
        isDark ? 'bg-primary' : 'bg-secondary'
      }`}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'white' : 'hsl(var(--primary))'} 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow effect behind number */}
                <div
                  className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full ${
                    isDark ? 'bg-gold' : 'bg-primary'
                  }`}
                />
                <div
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 relative ${
                    isDark ? 'text-gold' : 'text-primary'
                  }`}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
              </div>
              <div
                className={`text-sm md:text-base font-medium ${
                  isDark ? 'text-white/70' : 'text-muted-foreground'
                }`}
              >
                {stat.label}
              </div>
              {/* Bottom accent line */}
              <motion.div
                className={`h-0.5 mx-auto mt-3 rounded-full ${
                  isDark ? 'bg-gold/40' : 'bg-primary/20'
                }`}
                initial={{ width: 0 }}
                animate={isInView ? { width: '40%' } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.12 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
