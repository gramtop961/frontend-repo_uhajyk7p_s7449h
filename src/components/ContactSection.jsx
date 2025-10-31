import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thank you, ${name}. We will get back to you shortly.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-900/10 bg-white/70 p-8 shadow-sm backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-emerald-900">Let’s create something wholesome</h3>
            <p className="mt-2 text-sm text-emerald-900/70">
              Share your ideas, wholesale inquiries, or collaborations. We’ll respond within 1–2 business days.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-emerald-900/80">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/80 px-3 py-2 text-sm text-emerald-900 placeholder-emerald-900/40 outline-none ring-0 focus:border-emerald-700"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-emerald-900/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/80 px-3 py-2 text-sm text-emerald-900 placeholder-emerald-900/40 outline-none focus:border-emerald-700"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-emerald-900/80">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/80 px-3 py-2 text-sm text-emerald-900 placeholder-emerald-900/40 outline-none focus:border-emerald-700"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-emerald-900/80">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white/80 px-3 py-2 text-sm text-emerald-900 placeholder-emerald-900/40 outline-none focus:border-emerald-700"
                  placeholder="Tell us what you have in mind"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-emerald-800 px-5 py-3 text-sm font-medium text-emerald-50 shadow-sm transition-colors hover:bg-emerald-900"
                >
                  Send message
                </button>
                {status && (
                  <p className="text-xs text-emerald-900/70">{status}</p>
                )}
              </div>
            </form>
          </div>
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 via-amber-50 to-stone-50 p-8">
              <h4 className="text-sm font-semibold text-emerald-900">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-emerald-900/80">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-800" /> hello@milletatelier.co</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-emerald-800" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-800" /> 21 Orchard Lane, Green District</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-900/10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 60\"><path d=\"M0,40 C30,10 60,70 120,20 L120,60 L0,60 Z\" fill=\"%23cbd5bd\" opacity=\"0.35\"/></svg>')] bg-stone-50 p-8">
              <p className="text-sm text-emerald-900/80">
                We source from smallholder farms with regenerative practices. Every purchase supports a healthier soil future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
