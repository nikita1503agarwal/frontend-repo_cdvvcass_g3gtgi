const quotes = [
  { q: "She turns corporate spaghetti into a clean line you actually want to follow.", a: "Head of Strategy, Insurance" },
  { q: "Ridiculously calm in chaos. Deadline whisperer.", a: "VP Brand, Pharma" },
  { q: "The work feels inevitable and somehow surprising. That is the trick.", a: "Founder, Healthtech" },
  { q: "She made the board laugh on slide one and sign on slide twenty.", a: "COO, Enterprise" }
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <h2 className="mb-10 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xl leading-8 text-slate-900">“{t.q}”</p>
              <p className="mt-4 text-sm text-slate-500">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
