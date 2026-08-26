import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FLOWERS = ['🌸', '🌷', '🌺', '💮', '🌼'];

// Gentle falling flower petals used as ambient decoration.
export default function FallingFlowers({ count = 12, className = '' }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      emoji: FLOWERS[i % FLOWERS.length],
      left: Math.random() * 100,
      size: 16 + Math.random() * 14,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 80,
      rotate: 180 + Math.random() * 180,
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-40px] select-none"
          style={{ left: `${p.left}%`, fontSize: p.size }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, p.drift],
            rotate: [0, p.rotate],
            opacity: [0, 0.9, 0.9, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}
