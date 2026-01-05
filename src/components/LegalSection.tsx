const LegalSection = () => {
  return (
    <section className="py-20 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <div id="imprint" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h3 className="text-2xl font-semibold text-slate-100 mb-3">Impressum</h3>
          <p className="text-sm leading-relaxed">
            Placeholder &ndash; Unternehmensangaben folgen. Kontakt: pilot@mova-invoice.com
          </p>
        </div>
        <div id="privacy" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h3 className="text-2xl font-semibold text-slate-100 mb-3">Datenschutz</h3>
          <p className="text-sm leading-relaxed">
            Placeholder &ndash; kurze, transparente Datenschutzhinweise folgen. Keine Banking-Zugriffe im MVP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
