const services = [
  { name: "Change for transformation", copy: "Less theatre more traction. We make the new normal feel inevitable." },
  { name: "Communications", copy: "Clear words with good taste. No fluff. No panic. Everyone nods." },
  { name: "Events", copy: "Moments that move people. Minimal staging maximal memory." },
  { name: "Workshops", copy: "Sharp, fast and kind. We leave with answers not sticky notes." },
  { name: "Learning", copy: "Design that respects the brain. People finish it then use it." },
  { name: "Pitches", copy: "Narratives that behave like gravity. The room leans in." }
];

function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <h2 className="mb-10 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5">
              <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
              <p className="mt-2 text-slate-600">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
