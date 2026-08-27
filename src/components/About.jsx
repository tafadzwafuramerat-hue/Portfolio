import Reveal from './Reveal';
import profilePhoto from '../assets/profile.png';

const STATS = [
  { value: '2026', label: 'Uncommon.org' },
  { value: '6+', label: 'Projects Completed' },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark p-8 shadow-xl shadow-slate-200/40 sm:p-10 md:grid-cols-[280px_1fr]">
         <div className="relative grid h-56 w-56 place-items-center overflow-hidden rounded-full border-4 border-pink-400/70 bg-linear-to-b from-pink-100 to-purple-100 shadow-xl sm:h-64 sm:w-64">
                     <img
                       src={profilePhoto}
                       alt="Profile"
                       className="h-full w-full object-cover object-top"
                     />
                   </div>
         

          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-pink-100 sm:text-3xl">
              About <span className="text-pink-500">Me</span>
            </h2>
            <p className="mt-4 max-w-xl text-slate-500 dark:text-pink-200/70">
              Aspiring Software Developer currently training at Uncommon.org, with hands-on
              experience building web applications using React.js, Node.js, Express.js,
              PostgreSQL, and Supabase. I am passionate about learning new technologies,
              solving real-world problems, and writing clean, efficient code.
            </p>

            <div className="mt-6 border-l-2 border-pink-400 pl-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-pink-100">Software Development &amp; Product Design</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-pink-200/70">Uncommon.org, Mufakose Innovation Hub, Zimbabwe | 2026</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-slate-900 dark:text-pink-100">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-pink-200/70">{s.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-full bg-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-pink-200 transition-transform hover:scale-[1.03]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
