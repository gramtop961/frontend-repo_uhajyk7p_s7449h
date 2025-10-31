import React from 'react';
import Navigation from './components/Navigation.jsx';
import HeroShowcase from './components/HeroShowcase.jsx';
import GalleryShowcase from './components/GalleryShowcase.jsx';
import ContactSection from './components/ContactSection.jsx';

export default function App() {
  React.useEffect(() => {
    // Smooth scroll behavior for anchor links
    const onClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(243,239,232)] text-emerald-900">
      <Navigation />
      <main>
        <HeroShowcase />
        <GalleryShowcase />
        <ContactSection />
      </main>
      <footer className="border-t border-emerald-900/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-emerald-900/60">© {new Date().getFullYear()} Millet Atelier — Crafted with warmth and modernity.</p>
            <div className="text-xs text-emerald-900/60">Sustainably made</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
