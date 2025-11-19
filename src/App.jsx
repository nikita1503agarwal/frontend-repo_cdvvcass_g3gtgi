import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Photography from './components/Photography';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-extrabold tracking-tight text-blue-800">Yentl</a>
          <nav className="hidden gap-6 md:flex text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-blue-800">About</a>
            <a href="#work" className="hover:text-blue-800">Work</a>
            <a href="#services" className="hover:text-blue-800">Services</a>
            <a href="#photography" className="hover:text-blue-800">Photography</a>
            <a href="#testimonials" className="hover:text-blue-800">Testimonials</a>
            <a href="#contact" className="hover:text-blue-800">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Photography />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Yentl — built with care and a smirk
        </div>
      </footer>
    </div>
  );
}

export default App;
