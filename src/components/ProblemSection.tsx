const ProblemSection = () => {
  return (
    <section id="problem" className="py-32 bg-gradient-to-b from-slate-900/80 to-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-4 bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text">
          SMB Battery Makers Face <span className="text-amber-400">€1M</span>
          <span className="text-red-400"> Compliance Nightmare</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-amber/30 hover:-translate-y-4 transition-all duration-700 cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 border-4 border-amber-400/50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all">
              <span className="text-2xl font-black text-white">€</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">Catena-X Lockout</h3>
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              €100K+ for enterprise giants only.
              <br /><strong>SMBs completely excluded.</strong>
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-amber-500/20 to-red-500/20 border-4 border-amber-400/60 rounded-3xl p-12 shadow-2xl hover:shadow-red/40 hover:-translate-y-4 transition-all duration-700 z-10 mx-auto max-w-sm">
            <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-red-500 border-6 border-amber-500/60 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-3xl font-black text-white drop-shadow-2xl">14m</span>
            </div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent mb-6 text-center">
              Feb 2027 Deadline
            </h3>
            <p className="text-slate-200 text-xl font-semibold text-center">
              LMT Batteries mandatory
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-emerald/30 hover:-translate-y-4 transition-all duration-700 cursor-pointer">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 border-4 border-red-400/50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110">
              <span className="text-2xl font-black text-white">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">Manual Development</h3>
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              6+ months custom dev.
              <br /><strong>No guaranteed audit trail.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
