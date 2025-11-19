const projects = [
  {
    title: "Serial switch flip",
    line: "Insurance portal turned bingeable. Forms now feel optional (they are not).",
    image: "https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Side effects include belief",
    line: "Pharma data story that quietly became lore at the coffee machine.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Boardroom plot twist",
    line: "Change narrative that made the slide 14 dip notably less awkward.",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Compliance, but make it chic",
    line: "A regulated launch with no panic emails and a few happy tears.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
  }
];

function Work() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Selected work</h2>
          <p className="text-sm text-slate-500">Crisp tiles. Quiet flex.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.line}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
