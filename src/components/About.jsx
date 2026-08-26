import Reveal from './Reveal';
import profilePhoto from '../assets/profile.png';

const STATS = [
  { value: '1', label: 'Year Experience' },
  { value: '4+', label: 'Projects Completed' },
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
              I'm a frontend engineer who cares as much about interaction
              detail as system design. I partner with product and design teams to ship
              interfaces that feel considered, from the first frame to the last pixel.
            </p>

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
