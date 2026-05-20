export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F7F5F0] px-6 py-8 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="uppercase tracking-[0.45em] text-slate-500">
          © 2026 Apex Property Showcase. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.35em] text-slate-600">
          <a
            href="#"
            className="transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-slate-950"
          >
            Instagram
          </a>
          <span className="text-slate-300">/</span>
          <a
            href="#"
            className="transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-slate-950"
          >
            LinkedIn
          </a>
          <span className="text-slate-300">/</span>
          <a
            href="#"
            className="transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-slate-950"
          >
            Journal
          </a>
        </div>
      </div>
    </footer>
  );
}
