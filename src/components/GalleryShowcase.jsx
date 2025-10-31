import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Stoneground Ragi Flour',
    accent: 'from-emerald-700 to-emerald-900',
    note: 'Deep, toasty, iron-rich',
  },
  {
    name: 'Foxtail Millet Granola',
    accent: 'from-amber-400 to-amber-600',
    note: 'Crunchy, gently sweet',
  },
  {
    name: 'Barnyard Millet Pasta',
    accent: 'from-stone-300 to-stone-500',
    note: 'Delicate, al dente bite',
  },
  {
    name: 'Proso Millet Crackers',
    accent: 'from-lime-300 to-emerald-600',
    note: 'Light, savory finish',
  },
  {
    name: 'Little Millet Cookies',
    accent: 'from-amber-300 to-amber-500',
    note: 'Buttery, balanced sweet',
  },
  {
    name: 'Kodo Millet Cereal',
    accent: 'from-emerald-400 to-emerald-700',
    note: 'Comforting morning ritual',
  },
];

function TiltCard({ name, note, accent }) {
  const ref = React.useRef(null);
  const [style, setStyle] = React.useState({ transform: 'rotateX(0) rotateY(0) scale(1)' });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y / rect.height) - 0.5) * 6; // rotateX
    const ry = ((x / rect.width) - 0.5) * 8; // rotateY
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)` });
  };

  const onLeave = () => setStyle({ transform: 'rotateX(0) rotateY(0) scale(1)' });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
      style={style}
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl transition-opacity group-hover:opacity-50`} />
      <div className="relative z-10">
        <h3 className="text-lg font-semibold tracking-tight text-emerald-900">{name}</h3>
        <p className="mt-1 text-sm text-emerald-900/70">{note}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(87,66,38,0.12)_1px,transparent_1px)] bg-[length:18px_18px]" />
    </motion.div>
  );
}

export default function GalleryShowcase() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-emerald-900">Interactive Product Showcase</h2>
            <p className="mt-2 text-sm text-emerald-900/70">Move your cursor to feel the subtle tilt—modern, tactile, and inviting.</p>
          </div>
          <div className="hidden text-xs text-emerald-900/60 md:block">Curated with care</div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <TiltCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
