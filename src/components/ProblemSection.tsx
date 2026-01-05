const ProblemSection = () => {
  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-slate-900/80 to-slate-950/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-4 bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text">
          So funktioniert der Workflow
        </h2>

        <p className="text-slate-400 text-lg md:text-xl text-center max-w-3xl mx-auto">
          Drei klare Schritte &ndash; mit Dry-Run, bevor etwas live geht.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-emerald/30 hover:-translate-y-4 transition-all duration-700">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-emerald-400/50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all">
              <span className="text-2xl font-black text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">Create &amp; Send</h3>
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              Erstellung in sevDesk starten &ndash; zuerst im Dry-Run, dann live.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-blue/30 hover:-translate-y-4 transition-all duration-700">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 border-4 border-blue-400/50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all">
              <span className="text-2xl font-black text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">Reminder Schedule</h3>
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              Erinnerungsl&auml;ufe nach Zeitplan &ndash; nachvollziehbar und reproduzierbar.
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-10 shadow-2xl hover:shadow-amber/30 hover:-translate-y-4 transition-all duration-700">
            <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 border-4 border-amber-400/50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all">
              <span className="text-2xl font-black text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-50 mb-6 text-center">Perioden-Export</h3>
            <p className="text-slate-400 text-lg leading-relaxed text-center">
              Quartal/Jahr als Paket &ndash; PDF, CSV und Journal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
