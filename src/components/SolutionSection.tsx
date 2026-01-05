const solutions = [
  {
    icon: "🧾",
    title: "Evidence-Log",
    desc: "Jeder Schritt ist nachvollziehbar: wer/was/wann inkl. Request-ID.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "🧭",
    title: "Deterministische Outputs",
    desc: "Gleiche Eingabe, gleiches Ergebnis &ndash; auditierbar und reproduzierbar.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "📦",
    title: "Perioden-Export Pack",
    desc: "Quartal/Jahr als Paket (PDF + CSV + Journal).",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🔒",
    title: "Gateway Security",
    desc: "Closed kitchen: Domain-Worker nur &uuml;ber das Gateway.",
    color: "from-purple-500 to-pink-500",
  },
];

const SolutionSection = () => {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Was du bekommst</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16">
          Ein deterministischer Workflow-Layer, der sevDesk erg&auml;nzt &ndash; ohne Banking-Zugriff.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative bg-gradient-to-b from-slate-900/70 to-slate-800/60 border border-slate-700/50 rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition-transform duration-500"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg bg-gradient-to-r ${solution.color}`}
              >
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">{solution.title}</h3>
              <p className="text-slate-400 leading-relaxed">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
