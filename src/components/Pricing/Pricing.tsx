import { PropsWithChildren } from "react";
import { pilotMailto } from "@/data/links";

type FeatureCheckProps = PropsWithChildren<unknown>;

const FeatureCheck = ({ children }: FeatureCheckProps) => (
  <div className="flex items-center gap-3 text-slate-200">
    <span className="text-emerald-400 text-2xl">✓</span>
    <span>{children}</span>
  </div>
);

const Pricing = () => {
  return (
    <section id="pilot" className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent mb-12">
          Pilot statt Preisliste
        </h2>

        <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl border-2 border-emerald-500/30 rounded-3xl p-12 md:p-20 shadow-2xl hover:shadow-emerald/40 hover:border-emerald-500/60 transition-all duration-500 max-w-2xl mx-auto group">
          <div className="w-28 h-28 bg-gradient-to-r from-emerald-500 to-blue-600 border-8 border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald/50 group-hover:scale-110 transition-all">
            <span className="text-3xl font-black text-white">MVP</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8">
            Pilot Setup
          </h3>

          <div className="grid grid-cols-1 gap-4 mb-12 text-left max-w-lg mx-auto text-lg">
            <FeatureCheck>sevDesk-kompatibel</FeatureCheck>
            <FeatureCheck>Dry-Run vor Live-Run</FeatureCheck>
            <FeatureCheck>Evidence-Log mit Request-ID</FeatureCheck>
            <FeatureCheck>Perioden-Export (PDF + CSV + Journal)</FeatureCheck>
            <FeatureCheck>Kein Banking-Zugriff erforderlich</FeatureCheck>
          </div>

          <a
            href={pilotMailto}
            className="w-full block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-emerald/50 hover:scale-105 transition-all duration-300 inline-block"
          >
            Pilot anfragen →
          </a>

          <p className="text-slate-500 mt-8 text-sm">
            Keine Preisliste im MVP. Wir starten mit einem klar abgegrenzten Pilot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
