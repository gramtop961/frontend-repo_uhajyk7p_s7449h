import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const links = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'contact', label: 'Contact' },
];

export default function Navigation({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const LinkItem = ({ item }) => (
    <button
      onClick={() => {
        onNavigate(item.key);
        setOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active === item.key
          ? 'text-amber-900 bg-amber-100'
          : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
      }`}
    >
      {item.label}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-stone-50/80 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-amber-100 text-amber-900">
            <Leaf size={18} />
          </div>
          <span className="font-semibold tracking-tight text-stone-900">
            Golden Grain Millet Co.
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((item) => (
            <LinkItem key={item.key} item={item} />
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-stone-100 text-stone-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {links.map((item) => (
              <LinkItem key={item.key} item={item} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
