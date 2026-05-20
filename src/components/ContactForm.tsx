"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#F7F5F0] px-6 py-28 md:py-32">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-8 py-12 shadow-[0_24px_120px_rgba(15,23,42,0.08)] sm:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Private Viewing
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Reserve a bespoke appointment.
          </h2>
        </div>

        <form className="grid gap-8">
          <label className="block">
            <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
              Full Name
            </span>
            <input
              type="text"
              placeholder="E.g. Alexander Duval"
              className="mt-4 w-full border-b border-slate-300 bg-transparent px-0 pb-3 text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
              Credentials / Email
            </span>
            <input
              type="email"
              placeholder="E.g. alex@apexproperty.com"
              className="mt-4 w-full border-b border-slate-300 bg-transparent px-0 pb-3 text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
              Preferred Viewing Date
            </span>
            <input
              type="date"
              className="mt-4 w-full border-b border-slate-300 bg-transparent px-0 pb-3 text-slate-950 focus:border-slate-950 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-slate-950 hover:text-white"
          >
            Request Private Viewing
          </button>
        </form>
      </div>
    </section>
  );
}
