import { pilotMailto, proofLink } from "@/data/links";

const EnglishSection = () => {
  return (
    <section id="en" className="py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">English (short)</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10">
          Invoices as a workflow layer for sevDesk &ndash; no banking access required.
        </p>

        <div className="grid gap-4 text-left max-w-3xl mx-auto text-slate-200 mb-10">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-6 py-4">
            Works with sevDesk &ndash; we don&apos;t replace your accounting tool.
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-6 py-4">
            No banking connection required (MVP).
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-6 py-4">
            Deterministic evidence log + period export pack.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={pilotMailto}
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-emerald/40 transition-all"
          >
            Request pilot
          </a>
          <a
            href={proofLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-slate-600 text-slate-100 hover:text-white hover:border-slate-400 px-8 py-4 rounded-2xl text-lg font-semibold transition-all"
          >
            View proof (GitHub)
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnglishSection;
