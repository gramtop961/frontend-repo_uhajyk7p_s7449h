import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const routes = ['home', 'about', 'gallery', 'contact'];

export default function App() {
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const initial = window.location.hash.replace('#', '');
    if (routes.includes(initial)) {
      setRoute(initial);
    }
    const onHashChange = () => {
      const r = window.location.hash.replace('#', '');
      if (routes.includes(r)) setRoute(r);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to) => {
    if (!routes.includes(to)) return;
    if (window.location.hash.replace('#', '') !== to) {
      window.location.hash = to;
    } else {
      setRoute(to);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-amber-200 selection:text-stone-900">
      <Navigation active={route} onNavigate={navigate} />
      <main className="pt-20">
        {route === 'home' && <Hero onNavigate={navigate} />}
        {route === 'about' && <About />}
        {route === 'gallery' && <Gallery />}
        {route === 'contact' && <Contact />}
      </main>
      <footer className="mt-16 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-500">
          © {new Date().getFullYear()} Golden Grain Millet Co. Crafted with care.
        </div>
      </footer>
    </div>
  );
}
