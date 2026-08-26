export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-slate-400 sm:px-6">
      © {new Date().getFullYear()} Portfolio. Built with React, Tailwind CSS & Framer Motion.
    </footer>
  );
}
