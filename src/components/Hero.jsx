import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import profilePhoto from '../assets/profile.png';

const ORBIT_ICONS = [ 'JS', 'TW', 'Node',  'HTML', 'CSS', 'React', 'Python', 'Supabase' ];

const TECH_STACK = [
  'Python', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Supabase',
  'HTML', 'CSS', 'React',
];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left: copy */}
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 dark:text-pink-100 sm:text-5xl">
            Hi, I&apos;m <span className="bg-linear-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">Tafadzwa Furamera</span></h1>
          <p className="mt-5 max-w-md text-slate-500 dark:text-pink-200/70">
            I build fast, accessible interfaces with clean architecture turning product
            requirements into interactions people actually enjoy using.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/CV%20FOR%20TAFADZWA%20FURAMERAT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-slate-900 to-slate-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition-transform hover:scale-[1.03]"
            >
              <Eye size={16} /> View Resume
            </a>
            <a
              href="/CV%20FOR%20TAFADZWA%20FURAMERAT.pdf"
              download="Tafadzwa-Furamerat-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:border-pink-200 dark:text-pink-100 dark:hover:bg-white/10"
            >
              <Download size={16} /> Download
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-pink-500 px-6 py-3 text-sm font-semibold text-pink-600 transition-colors hover:bg-pink-50"
            >
              Contact Me <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>

        {/* Right: avatar with orbiting icons */}
        <Reveal delay={0.15} className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full bg-pink-100/60 blur-2xl" />
          <div className="relative grid h-56 w-56 place-items-center overflow-hidden rounded-full border-4 border-pink-400/70 bg-linear-to-b from-pink-100 to-purple-100 shadow-xl sm:h-64 sm:w-64">
            <img
              src={profilePhoto}
              alt="Profile"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {ORBIT_ICONS.map((icon, i) => {
            const angle = (360 / ORBIT_ICONS.length) * i;
            const radius = 150;
            return (
              <motion.div
                key={icon + i}
                className="absolute grid h-11 w-11 place-items-center rounded-2xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark text-sm font-semibold text-slate-600 dark:text-pink-200/80 shadow-md"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: -22,
                  marginLeft: -22,
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos(((angle + 360) * Math.PI) / 180) * radius,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin(((angle + 360) * Math.PI) / 180) * radius,
                  ],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              >
                {icon}
              </motion.div>
            );
          })}
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark py-4 shadow-md">
        <motion.div
          className="flex w-max gap-10 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={tech + i} className="whitespace-nowrap text-sm font-medium text-slate-500 dark:text-pink-200/70">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
