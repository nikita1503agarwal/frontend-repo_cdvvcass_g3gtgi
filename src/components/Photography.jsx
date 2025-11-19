const photos = [
  "https://images.unsplash.com/photo-1520975682031-a4b3a9e608d3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1479660656269-197ebb83b540?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478479405421-ce83c92fb2b1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
];

function Photography() {
  return (
    <section id="photography" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Photography</h2>
          <p className="text-sm text-slate-500">Analog energy. Leica mood.</p>
        </div>
        {/* Masonry columns */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 [column-fill:_balance]">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Analog photograph"
              loading="lazy"
              className="mb-4 w-full break-inside-avoid rounded-xl border border-slate-200 shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Photography;
