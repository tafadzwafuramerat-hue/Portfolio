import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Soft floating bokeh circles used as an ambient backdrop.
// count/seed kept small and deterministic-ish so sections don't feel noisy.
export default function Particles({ count = 14, className = '' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: 18 + Math.random() * 46,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 12,
      delay: Math.random() * 4,
      opacity: 0.25 + Math.random() * 0.3,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-particle dark:bg-particle-dark"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -22, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
