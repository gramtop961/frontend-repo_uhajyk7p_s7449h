export default function Hero({ onNavigate }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1200px 600px at -10% -10%, rgba(217, 119, 6, 0.15), transparent 60%), radial-gradient(900px 400px at 110% 10%, rgba(168, 85, 7, 0.12), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Nourish with Nature: Millet Reimagined
            </h1>
            <p className="mt-4 text-stone-700 text-lg leading-relaxed">
              We craft wholesome millet products that celebrate earthy flavors and time-honored
              grains — thoughtfully sourced, gently processed, and beautifully packaged.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center rounded-md bg-amber-700 text-white px-5 py-2.5 font-medium shadow-sm hover:bg-amber-800 transition-colors"
              >
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center rounded-md border border-stone-300 text-stone-800 px-5 py-2.5 font-medium hover:bg-stone-100 transition-colors"
              >
                Our Story
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1603048297172-c92544798c3a?q=80&w=1600&auto=format&fit=crop"
                alt="Millet grains and rustic ingredients arranged on a table"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow ring-1 ring-stone-200">
                <p className="text-sm text-stone-700">
                  100% Whole Grain • Sustainably Sourced • Stone-Ground
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Wholesome Staples',
              text: 'Everyday grains for balanced living.',
              img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Artisan Flours',
              text: 'Fine textures for bread, rotis, and bakes.',
              img: 'https://images.unsplash.com/photo-1604908177453-c7e86fbf88a4?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Ready-to-Cook',
              text: 'Quick mixes with honest ingredients.',
              img: 'https://images.unsplash.com/photo-1617090108856-28cd9dcfe9fa?q=80&w=1600&auto=format&fit=crop',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl overflow-hidden bg-white ring-1 ring-stone-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-900">{card.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
