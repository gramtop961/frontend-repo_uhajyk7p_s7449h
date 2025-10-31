const products = [
  {
    name: 'Pearl Millet Flour (Bajra)',
    description:
      'Stone-ground for rich flavor and nutrition. Ideal for rotis, porridges, and rustic breads.',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Gluten-free', 'Stone-ground', 'High Fiber'],
  },
  {
    name: 'Foxtail Millet Grain',
    description:
      'Light, nutty, and quick-cooking. A versatile base for salads, bowls, and pilafs.',
    image:
      'https://images.unsplash.com/photo-1615485737651-6e4f064125a9?q=80&w=1600&auto=format&fit=crop',
    tags: ['Protein-rich', 'Quick-cook', 'Versatile'],
  },
  {
    name: 'Finger Millet Flour (Ragi)',
    description:
      'Deep, earthy taste with a natural calcium boost. Great for dosas, pancakes, and baking.',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop',
    tags: ['Calcium-rich', 'Earthy', 'Heritage grain'],
  },
  {
    name: 'Barnyard Millet Mix',
    description:
      'A hearty mix for wholesome upma, khichdi, or nutrient-dense bowls.',
    image:
      'https://images.unsplash.com/photo-1505575972945-2804b6f8b5a6?q=80&w=1600&auto=format&fit=crop',
    tags: ['Hearty', 'Balanced', 'Family-friendly'],
  },
  {
    name: 'Kodo Millet Grain',
    description:
      'Subtle flavor and fluffy texture. Perfect as a rice alternative in daily meals.',
    image:
      'https://images.unsplash.com/photo-1604908554049-0d661827e4d6?q=80&w=1600&auto=format&fit=crop',
    tags: ['Light', 'Fluffy', 'Everyday'],
  },
  {
    name: 'Proso Millet Granola',
    description:
      'Crunchy, lightly sweetened granola featuring roasted proso millet and nuts.',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    tags: ['Snack', 'Roasted', 'Energy'],
  },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
          Millet Collection
        </h2>
        <p className="mt-2 text-stone-600">
          Heritage grains, modern craft — discover our favorite staples and specials.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.name}
            className="group bg-white rounded-2xl overflow-hidden ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-stone-900">{p.name}</h3>
              <p className="text-sm text-stone-600 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-amber-50 text-amber-900 border border-amber-200 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
