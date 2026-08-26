import { motion } from 'framer-motion';

// Shared fade-in / slide-up wrapper for scroll-triggered reveals.
export default function Reveal({ children, delay = 0, className = '', y = 20 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
