import React from 'react';
import { Leaf, Menu } from 'lucide-react';

export default function Navigation() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-900/10 bg-[rgba(243,239,232,0.75)]/70 backdrop-blur-md shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-emerald-50">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-semibold tracking-tight text-emerald-900">Millet Atelier</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-emerald-900/80 hover:text-emerald-900 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-medium text-emerald-50 shadow-sm hover:bg-emerald-900 transition-colors"
              >
                Get in touch
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-900"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-emerald-900/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-emerald-900/80 hover:text-emerald-900"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-medium text-emerald-50 shadow-sm hover:bg-emerald-900"
                >
                  Get in touch
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
