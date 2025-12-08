const solutions = [
  {
    icon: "⚡",
    title: "AI Schema Generator",
    desc: "Parses Battery Regulation Annex XIII → generates production-ready JSON Schema",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: "🔗",
    title: "QR Passport Flow",
    desc: "QR scan → MOVA envelope → full passport + episode audit trail",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "🔄",
    title: "Full Lifecycle",
    desc: "Manufacturer → Verifier → Recycler complete workflow",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: "✅",
    title: "100% Compliance",
    desc: "Annex XIII + Battery Pass Content Guidance validated",
    color: "from-green-500 to-emerald-600",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">MOVA Battery DPP Solution</h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16">
          Ship EU-ready battery passports without Catena-X pricing or months of custom development.
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
