import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm tracking-[0.18em] text-blue-700/70 uppercase">Creative leadership • Strategy • Story</p>
            <h1 className="text-4xl leading-[1.05] font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              Hi, I am Yentl and I build things that should not work but somehow always do
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-slate-700">
              Creative leader and builder with a knack for turning regulated worlds into irresistible stories. I help pharma and insurance speak human, design narratives that travel, and build teams from zero to trusted.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#contact" className="rounded-full bg-blue-700 px-6 py-3 text-white text-sm font-medium tracking-wide hover:bg-blue-800 transition-colors">Work with me</a>
              <a href="#work" className="text-blue-800 text-sm font-semibold underline-offset-4 hover:underline">See selected work</a>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto aspect-[3/4] w-72 md:w-80 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop"
                alt="Yentl portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">A little editorial. A little chaos. All in focus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
