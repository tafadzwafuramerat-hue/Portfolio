import { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import Reveal from './Reveal';
import contactIllustration from '../assets/illustration.jpg';

// lucide-react v1 dropped brand/logo icons, so GitHub and LinkedIn are small inline SVGs.
function GithubIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/tafadzwafuramerat-hue', display: 'tafadzwafuramerat-hue' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tafadzwa-furamerat', display: 'Tafadzwa Furamerat' },
  { icon: Phone, label: 'Phone', href: 'tel:+263787716043', display: '+263 78 771 6043' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service of choice.
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark p-8 shadow-xl shadow-slate-200/40 sm:p-10 md:grid-cols-[240px_1fr]">
          <div className="mx-auto grid h-56 w-40 place-items-center overflow-hidden rounded-[999px] border-4 border-pink-200 bg-pink-50">
            <img
              src={contactIllustration}
              alt="Person using a phone"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-pink-100 sm:text-3xl">
              Contact <span className="text-pink-500">Me</span>
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-pink-200/70">
              Have a project in mind? Send a note and I&apos;ll get back to you within a day or two.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-pink-200 dark:border-purple-800/50 bg-pink-50 dark:bg-white/5 px-4 py-2 text-xs font-medium text-slate-600 dark:text-pink-200/80 transition-colors hover:border-pink-400 hover:text-pink-600"
                >
                  <Icon size={14} />
                  {display}
                </a>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 dark:border-purple-800/50 bg-slate-50/60 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink-400 focus:bg-white dark:focus:bg-white/10"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-xl border border-slate-200 dark:border-purple-800/50 bg-slate-50/60 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink-400 focus:bg-white dark:focus:bg-white/10"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-xl border border-slate-200 dark:border-purple-800/50 bg-slate-50/60 dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-pink-400 focus:bg-white dark:focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-transform hover:scale-[1.01]"
              >
                Send Message <Send size={15} />
              </button>
              {sent && (
                <p className="text-center text-xs font-medium text-pink-600">
                  Thanks — your message has been noted.
                </p>
              )}
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
