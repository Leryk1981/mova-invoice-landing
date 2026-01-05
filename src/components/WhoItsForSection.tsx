const WhoItsForSection = () => {
  return (
    <section id="who" className="py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">F&uuml;r wen?</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16">
          Startet bewusst eng &ndash; damit der Workflow sauber bleibt.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 text-left shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">Freelancer &amp; kleine Praxen</h3>
            <p className="text-slate-400">
              Wenig Admin, klarer Ablauf, volle Nachvollziehbarkeit.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 text-left shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">Therapeuten (B2C)</h3>
            <p className="text-slate-400">
              Erinnerungsl&auml;ufe und Perioden-Export f&uuml;r Abrechnungspakete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
