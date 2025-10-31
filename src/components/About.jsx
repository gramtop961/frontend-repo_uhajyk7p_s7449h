export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
            Our Story
          </h2>
          <p className="mt-4 text-stone-700 leading-relaxed">
            Golden Grain Millet Co. began with a simple belief: good food should be honest,
            nourishing, and beautifully made. We partner directly with smallholder farms to
            source heritage millets, then stone-grind and craft them with care. Each product
            is a tribute to nature’s quiet abundance and the culinary traditions that inspire us.
          </p>
          <p className="mt-4 text-stone-700 leading-relaxed">
            From morning porridges to artisan bakes, our millets bring depth, nutrition, and
            comfort to everyday cooking. We keep our ingredient lists short and our standards high.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: 'Farms', v: '12+' },
              { k: 'Products', v: '24' },
              { k: 'Years', v: '7' },
            ].map((stat) => (
              <div key={stat.k} className="rounded-xl bg-stone-100 p-4 text-center">
                <div className="text-2xl font-bold text-stone-900">{stat.v}</div>
                <div className="text-xs text-stone-600">{stat.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow ring-1 ring-stone-200">
            <img
              src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=1600&auto=format&fit=crop"
              alt="Warm-toned kitchen scene with grains and natural textures"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1526312426976-593c2b99968f?q=80&w=1600&auto=format&fit=crop"
                alt="Close-up of grains and flour on a wooden table"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow ring-1 ring-stone-200">
              <img
                src="https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1600&auto=format&fit=crop"
                alt="Rustic bread and grains showcasing earthy textures"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
