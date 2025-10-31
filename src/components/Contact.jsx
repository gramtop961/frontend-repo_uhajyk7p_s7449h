import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const API_BASE = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/+$/, '');

function saveLeadLocal(lead) {
  try {
    const raw = localStorage.getItem('leads');
    const arr = raw ? JSON.parse(raw) : [];
    arr.push({ ...lead, createdAt: new Date().toISOString() });
    localStorage.setItem('leads', JSON.stringify(arr));
    return true;
  } catch {
    return false;
  }
}

async function createLeadRemote(lead) {
  if (!API_BASE) throw new Error('No backend configured');
  const res = await fetch(`${API_BASE}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Request failed');
  }
  return res.json();
}

async function fetchRecentLeads() {
  if (!API_BASE) return null;
  const res = await fetch(`${API_BASE}/leads?limit=3`);
  if (!res.ok) return null;
  return res.json();
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [recent, setRecent] = useState([]);

  const loadRecent = async () => {
    // Try backend first
    const remote = await fetchRecentLeads();
    if (remote && Array.isArray(remote)) {
      setRecent(remote);
      return;
    }
    // Fallback to local
    const raw = localStorage.getItem('leads');
    const arr = raw ? JSON.parse(raw) : [];
    setRecent(arr.slice(-3).reverse());
  };

  useEffect(() => {
    loadRecent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    if (!emailOk) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Try remote first, fallback to local
    try {
      if (API_BASE) {
        await createLeadRemote({ name, email, message, source: 'website' });
        setStatus({ type: 'success', message: 'Thanks! Your message has been received.' });
        setForm({ name: '', email: '', message: '' });
        loadRecent();
        return;
      }
      throw new Error('No backend configured');
    } catch (err) {
      const ok = saveLeadLocal({ name, email, message });
      if (ok) {
        setStatus({ type: 'success', message: 'Saved locally. Backend not reachable.' });
        setForm({ name: '', email: '', message: '' });
        loadRecent();
      } else {
        setStatus({ type: 'error', message: 'Could not save your message. Please try again.' });
      }
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
            Get in touch
          </h2>
          <p className="mt-2 text-stone-600">
            Questions, wholesale, or collaborations — we’d love to hear from you.
          </p>

          <form onSubmit={onSubmit} className="mt-8 bg-white rounded-2xl p-6 ring-1 ring-stone-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-stone-700">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-stone-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label className="text-sm text-stone-700">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-[120px] rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                placeholder="Tell us what you’re looking for..."
                required
              />
            </div>

            {status.type !== 'idle' && (
              <div
                className={`mt-4 rounded-md px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-amber-700 text-white px-5 py-2.5 font-medium shadow-sm hover:bg-amber-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>

          {recent.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-stone-900">Recent messages</h3>
              <ul className="mt-3 space-y-3">
                {recent.map((r, idx) => (
                  <li key={r.id || idx} className="rounded-xl bg-stone-100 p-4">
                    <div className="text-sm font-medium text-stone-900">{r.name}</div>
                    <div className="text-xs text-stone-600">{r.email}</div>
                    <div className="text-sm text-stone-700 mt-1">{r.message}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">
            <div className="flex items-center gap-3 text-amber-900">
              <Mail size={18} />
              <span className="font-medium">hello@goldengrain.co</span>
            </div>
          </div>
          <div className="rounded-2xl bg-stone-100 p-6 ring-1 ring-stone-200">
            <div className="flex items-center gap-3 text-stone-800">
              <Phone size={18} />
              <span className="font-medium">+1 (555) 012-3456</span>
            </div>
          </div>
          <div className="rounded-2xl bg-stone-100 p-6 ring-1 ring-stone-200">
            <div className="flex items-center gap-3 text-stone-800">
              <MapPin size={18} />
              <span className="font-medium">Nashville, TN</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
