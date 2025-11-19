function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Say hi</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
          If you have a knot that needs a clean line let us talk. I will bring the questions and the calm. You bring the thing that is supposedly impossible.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <a href="mailto:hello@yentl.studio" className="text-sm font-semibold text-blue-800 hover:underline underline-offset-4">hello@yentl.studio</a>
          <span className="text-slate-300">•</span>
          <a href="#" className="text-sm font-semibold text-blue-800 hover:underline underline-offset-4">LinkedIn</a>
        </div>
        <div className="mt-8">
          <a href="#" className="rounded-full bg-blue-700 px-6 py-3 text-white text-sm font-medium tracking-wide hover:bg-blue-800 transition-colors">Introduce your challenge</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
