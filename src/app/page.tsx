import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";

const HomePage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_800px_at_20%_20%,rgba(16,185,129,0.35),transparent),radial-gradient(circle_900px_at_80%_0%,rgba(59,130,246,0.3),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            Annex XIII Validated • Battery Pass Ready
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Battery Pass <span className="text-amber-400 drop-shadow-lg">2027</span>-Ready
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 max-w-3xl mb-12 leading-relaxed opacity-95">
            EU Annex XIII passports generated in <span className="text-emerald-400 font-semibold">5 minutes</span>.
            <span className="text-blue-400"> No code required.</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 mb-16 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform">5 min</div>
              <div className="text-slate-400 text-lg">Setup time</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-slate-400 text-lg">Annex XIII</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform">Feb 2027</div>
              <div className="text-slate-400 text-lg">Ready</div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <SolutionSection />
      <Pricing />
      <FAQ />
    </>
  );
};

export default HomePage;
