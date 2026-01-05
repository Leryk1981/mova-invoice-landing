const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Integrationen</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16">
          sevDesk ist der erste Provider. Weitere folgen sp&auml;ter &ndash; ohne Versprechen.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-10 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">sevDesk</h3>
            <p className="text-slate-300">
              Kompatibel als Provider. Du beh&auml;ltst dein gewohntes Rechnungs-Tool.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-700/60 bg-slate-900/60 p-10 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-100 mb-3">Weitere Anbieter</h3>
            <p className="text-slate-400">
              Geplant, sobald der sevDesk-Workflow stabil ist. Kein Banking-Zugriff erforderlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
