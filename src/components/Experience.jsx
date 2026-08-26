import { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';
import Reveal from './Reveal';

const CERTIFICATES = [
  {
    title: 'Python Crash Course Certificate',
    org: 'Google',
    files: [
      { title: 'Coursera Certificate', file: '/Coursera%20HV6EU4Q1K7MV.pdf' },
    ],
  },
  {
    title: 'UI/UX Design Certificate',
    org: 'Certified Program',
    files: [
      { title: 'UX Design Foundations', file: '/UX%20Design%20Foundations%20OL6S6650XEQ3.pdf' },
      { title: 'UX Research', file: '/UX%20Research%20BRS1P8HRVHKZ.pdf' },
      { title: 'Color Psychology for UX/UI Design', file: '/Color%20Psychology%20for%20UX%20UI%20Design%20QYCIL8RRJRD6.pdf' },
      { title: 'Design Composition', file: '/Design%20Composition%20G7CULWLKZME6.pdf' },
    ],
  },
];

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Reveal>
        <div className="rounded-3xl border border-slate-100 bg-white dark:border-purple-900/40 dark:bg-surface-dark p-8 shadow-xl shadow-slate-200/40 sm:p-10">
          <h2 className="text-center font-display text-2xl font-bold text-slate-900 dark:text-pink-100 sm:text-3xl">
            My <span className="text-pink-500">Certificates</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-slate-500 dark:text-pink-200/70">
            Courses and programs I&apos;ve completed.
          </p>

          <div className="mx-auto mt-8 grid max-w-xl gap-5 sm:grid-cols-2">
            {CERTIFICATES.map((cert) => (
              <button
                type="button"
                key={cert.title}
                onClick={() => cert.files && setSelectedCertificate(cert)}
                aria-haspopup={cert.files ? 'dialog' : undefined}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 dark:bg-white/5 p-5 transition-shadow hover:shadow-md"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-500/20">
                  <Award size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-pink-100">{cert.title}</p>
                  <p className="text-xs text-slate-500 dark:text-pink-200/70">{cert.org}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-dialog-title"
            className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl dark:border-purple-900/40 dark:bg-surface-dark"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="certificate-dialog-title" className="font-display text-xl font-bold text-slate-900 dark:text-pink-100">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-pink-200/70">Select a certificate to view it.</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificates"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-pink-100 hover:text-pink-600 dark:bg-white/10 dark:text-pink-200"
              >
                <X size={17} />
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              {selectedCertificate.files.map((certificate) => (
                <a
                  key={certificate.file}
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-pink-300 hover:text-pink-600 dark:border-purple-800/50 dark:bg-white/5 dark:text-pink-100"
                >
                  {certificate.title}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
