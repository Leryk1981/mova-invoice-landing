import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import WhoItsForSection from "@/components/WhoItsForSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import EnglishSection from "@/components/EnglishSection";
import LegalSection from "@/components/LegalSection";
import { pilotMailto, proofLink } from "@/data/links";

const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_800px_at_20%_20%,rgba(16,185,129,0.35),transparent),radial-gradient(circle_900px_at_80%_0%,rgba(59,130,246,0.3),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            Workflow-Layer f&uuml;r sevDesk
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Rechnungen als Workflow &ndash; mit sevDesk, ohne Banking-Zugriff.
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-4xl mb-10 leading-relaxed opacity-95">
            Automatisiere Erstellung, Versand, Erinnerungen und Perioden-Export &ndash; mit nachvollziehbarem Evidence-Log.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start mb-10">
            <a
              href={pilotMailto}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-emerald/40 transition-all"
            >
              Pilot anfragen
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-left max-w-4xl">
            {[
              "Works with sevDesk",
              "No banking connection required",
              "Deterministic + auditable",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-4 text-slate-200 text-sm sm:text-base"
              >
                <span className="text-emerald-400 text-lg">●</span>
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 mt-8 text-sm">
            Kein Banking-Zugriff. Kein Ersatz f&uuml;r sevDesk.
          </p>
        </div>
      </section>

      <ProblemSection />
      <SolutionSection />
      <WhoItsForSection />
      <IntegrationsSection />
      <Pricing />
      <FAQ />
      <EnglishSection />
      <LegalSection />
    </>
  );
};

export default HomePage;
