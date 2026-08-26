import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import dbmsLearnImage from '../assets/Dbms learn.png';
import vividHorizonImage from '../assets/vivd.png';
import superfetImage from '../assets/Superfet.png';
import contactFormImage from '../assets/contactform.png';
import plannerImage from '../assets/my planner app.png';
import skillBridgeImage from '../assets/SkillBridge.png';

const PROJECTS = [
  {
    title: 'DBMS-Learn',
    summary: 'A quiz platform that helps students revise syllabus topics, such as Python fundamentals, before examinations.',
    tags: ['SQL', 'Node.js', 'React'],
    demo: 'https://db-ms-learn.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/DBMs-Learn',
    image: dbmsLearnImage,
  },
  {
    title: 'Vivid Horizon',
    summary: 'A landing page for Vivid Horizon, a premier luxury travel company in Zimbabwe.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demo: 'https://landing-page-rho-azure-57.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/landing-page',
    image: vividHorizonImage,
  },
  {
    title: 'SuperFert Website',
    summary: 'A polished website for SuperFert, a company selling agricultural products including fertilizers, seeds, and chemicals, with a clear path for customers to get in touch.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://superfert-mu.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/Superfert',
    image: superfetImage,
  },
  {
    title: 'Contact Form',
    summary: 'A contact form built with React hooks and connected to Supabase for storing submissions.',
    tags: ['React', 'Hooks', 'Supabase'],
    demo: 'https://contact-form-ebon-eight.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/Contact-form',
    image: contactFormImage,
  },
  {
    title: 'Planner App',
    summary: 'An app that helps people add tasks, track their progress, and mark tasks as completed when they are done.',
    tags: ['React', 'Tailwind'],
    demo: 'https://planner-s-app.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/My-Planner-s-APP',
    image: plannerImage,
  },
  {
    title: 'SkillBridge',
    summary: 'A platform that connects people looking for internships or jobs with available opportunities.',
    tags: ['React', 'Supabase'],
    demo: 'https://skills-bridge-tan.vercel.app/',
    code: 'https://github.com/tafadzwafuramerat-hue/SkillsBridge',
    image: skillBridgeImage,
  },
];

export default function Work() {
  const [page, setPage] = useState(0);

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="rounded-3xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark p-8 shadow-xl shadow-slate-200/40 sm:p-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-pink-100 sm:text-3xl">
              My <span className="text-pink-500">Recent Work</span>
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-purple-800/50 text-slate-500 dark:text-pink-200/70 hover:bg-slate-50"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(PROJECTS.length - 1, p + 1))}
                className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-purple-800/50 text-slate-500 dark:text-pink-200/70 hover:bg-slate-50"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 dark:bg-white/5 shadow-sm"
              >
                <div className="h-36 overflow-hidden bg-pink-50 dark:bg-white/5">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="grid h-full place-items-center bg-linear-to-br from-pink-100 to-slate-100 text-center dark:from-pink-500/20 dark:to-purple-500/20">
                      <span className="font-display text-2xl font-bold text-pink-500">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900 dark:text-pink-100">{project.title}</p>
                  {project.summary && (
                    <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500 dark:text-pink-200/70">{project.summary}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <div className="mt-4 flex items-center gap-4 text-sm font-semibold">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700">
                        Live demo <ArrowUpRight size={15} />
                      </a>
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-600 dark:text-pink-200/70">
                        Source code
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {PROJECTS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? 'w-5 bg-pink-500' : 'w-1.5 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
