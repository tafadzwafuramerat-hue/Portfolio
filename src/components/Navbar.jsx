import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const LINKS = ['Home', 'About', 'Experience','Work', 'Contact'];

export default function Navbar({ dark, onToggleDark }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-full border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark/80 px-4 py-3 shadow-lg shadow-slate-200/50 backdrop-blur-md sm:px-6"
    >
      <a href="#home" className="font-display text-lg font-bold text-slate-900 dark:text-pink-100">
        Portfolio<span className="text-pink-500">.</span>
      </a>

      <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 dark:text-pink-200/80 md:flex">
        {LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="transition-colors hover:text-pink-600"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleDark}
          aria-label="Toggle dark mode"
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-pink-200 transition-colors hover:bg-pink-100 hover:text-pink-600"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-pink-200 md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-16 flex w-full flex-col gap-1 rounded-3xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark p-4 text-sm font-medium text-slate-600 dark:text-pink-200/80 shadow-xl md:hidden"
        >
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2 hover:bg-pink-50 hover:text-pink-600"
            >
              {link}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
