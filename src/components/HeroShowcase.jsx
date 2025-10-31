import React from 'react';
import { motion } from 'framer-motion';

export default function HeroShowcase() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background gradients and grain */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-200/60 via-amber-100/40 to-stone-100 blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"%238c7a5b\" opacity=\"0.15\"/></svg>')] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-36 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl font-semibold tracking-tight text-emerald-900 sm:text-5xl"
            >
              Modern millet, reimagined with minimalist elegance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-base leading-relaxed text-emerald-900/80"
            >
              We craft nutrient-dense millet products with a design-first mindset. Warm, natural, and distinctly modern—our collection brings a new aesthetic to wholesome food.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#gallery"
                className="rounded-full bg-emerald-800 px-5 py-3 text-sm font-medium text-emerald-50 shadow-sm transition-colors hover:bg-emerald-900"
              >
                Explore the collection
              </a>
              <a
                href="#about"
                className="rounded-full border border-emerald-900/20 bg-white/70 px-5 py-3 text-sm font-medium text-emerald-900/90 backdrop-blur-sm hover:bg-white"
              >
                Our story
              </a>
            </motion.div>
          </div>

          {/* Abstract product stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-stone-50 via-emerald-50 to-amber-50 shadow-xl">
              {/* Floating chips */}
              <motion.div
                className="absolute left-6 top-8 rounded-full bg-emerald-900/90 px-3 py-1 text-xs font-medium text-emerald-50 shadow-sm"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Gluten-free
              </motion.div>
              <motion.div
                className="absolute right-6 top-20 rounded-full bg-amber-700/90 px-3 py-1 text-xs font-medium text-amber-50 shadow-sm"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                Ancient grains
              </motion.div>

              {/* Stylized "product" blocks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 -rotate-6 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 shadow-2xl"></div>
                  <div className="absolute inset-0 translate-x-8 translate-y-8 rotate-3 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-2xl mix-blend-multiply"></div>
                  <div className="absolute inset-0 -translate-x-6 translate-y-10 rotate-12 rounded-2xl bg-gradient-to-br from-stone-200 to-stone-400 shadow-xl"></div>
                </div>
              </div>

              {/* Grain dots overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(87,66,38,0.12)_1px,transparent_1px)] bg-[length:18px_18px]" />
            </div>
          </motion.div>
        </div>

        {/* About block */}
        <div id="about" className="mt-24 grid gap-8 rounded-3xl border border-emerald-900/10 bg-white/70 p-8 backdrop-blur-sm md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-emerald-900">Our Story</h2>
            <p className="mt-2 text-sm text-emerald-900/70">Rooted in tradition, designed for today.</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-emerald-900/80 text-sm leading-relaxed">
            <p>
              We started with a belief: wholesome can be beautiful. Our millet-based creations celebrate sustainable agriculture while embracing a refined, modern aesthetic. Each product honors the grain’s earthy character with clean, contemporary design.
            </p>
            <p>
              From farm relationships to minimal packaging, we focus on what matters—purity, texture, and balance. The result is a collection that feels fresh, grounded, and quietly luxurious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
