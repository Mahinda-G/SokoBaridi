"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Page() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [lead, setLead] = useState({ org: "", email: "", type: "", note: "" });
  const [sent, setSent] = useState(false);
  const [leadSent, setLeadSent] = useState(false);

  const submitContact = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(contact) });
    setSent(true);
  };

  const submitLead = async (e) => {
    e.preventDefault();
    await fetch("/api/eligibility", { method: "POST", body: JSON.stringify(lead) });
    setLeadSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Bar */}
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Soko Baridi" width={36} height={36} className="rounded-xl" />
              <div className="font-bold text-lg tracking-tight">Soko Baridi</div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#programs" className="hover:text-emerald-700">Services</a>
              <a href="#impact" className="hover:text-emerald-700">Impact</a>
              <a href="#how" className="hover:text-emerald-700">How it works</a>
              <a href="#who" className="hover:text-emerald-700">Who we serve</a>
              <a href="#resources" className="hover:text-emerald-700">Resources</a>
              <a href="#contact" className="hover:text-emerald-700">Contact</a>
              <a href="#book" className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Book storage</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200">
                Solar Cold Storage • Kenya
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Keep produce fresh. Grow farmer incomes. Cut food waste.
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-prose">
                Soko Baridi builds and operates <strong>solar-powered cold rooms</strong> that give rural farmers and market
                traders affordable access to reliable cooling for fruits, vegetables, dairy, and fish. Our network reduces
                post-harvest losses, protects nutrition, and extends shelf life from farm to market.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book" className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
                  Book storage
                </a>
                <a href="https://wa.me/254711295022" className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-6 text-xs text-gray-500">Fast responses • Same-day onboarding at most hubs</div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-sm grid place-items-center p-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600" />
                  <h3 className="mt-6 text-xl font-bold">Solar-Powered Cold Storage Hubs</h3>
                  <p className="mt-2 text-gray-600 max-w-sm mx-auto">
                    Affordable, off-grid cooling for rural farmers. Real-time temperature monitoring keeps produce within safe
                    ranges to reduce spoilage and protect value.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                This week: <strong>28 tonnes preserved</strong> across rural hubs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section className="py-10 border-y bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest">Trusted by farmers, cooperatives & partners</div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-10 bg-white rounded-md border grid place-items-center text-xs text-gray-500">Logo</div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Mission & Vision */}
      <section className="py-16" id="mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Empower smallholder farmers with clean, dependable cooling that reduces post-harvest losses, preserves food
                quality, and improves earnings—powered by the sun.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A resilient cold-chain across rural Africa where nutritious food reaches markets fresh, incomes grow, and
                communities thrive sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Services */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Programs & Services</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Practical, sustainable cold storage solutions for rural farmers, cooperatives, and fresh-produce traders. Our
              services combine solar technology, efficient logistics, and community partnerships to keep food fresh and
              profitable from farm to market.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Solar Cold Room Leasing",
                desc:
                  "Pay-as-you-store access to solar-powered cold rooms for fruits, vegetables, dairy and fish—cutting spoilage and boosting earnings."
              },
              {
                title: "Mobile Cooling Units",
                desc:
                  "Portable solar-chilled units bring cold storage to remote farms and open-air markets for on-the-spot preservation."
              },
              {
                title: "Monitoring & Alerts",
                desc:
                  "Smart sensors track temperature and humidity in real time and send alerts to maintain safe storage conditions."
              },
              {
                title: "Farmer Training & Support",
                desc:
                  "Hands-on training in post-harvest handling, sorting, packaging, and cold-chain best practices."
              },
              {
                title: "Community Partnerships",
                desc:
                  "Working with cooperatives, county departments and NGOs to expand reliable, affordable cold storage."
              },
              {
                title: "Sustainability & Impact",
                desc:
                  "Transparent reporting on energy use, CO₂ savings, and food-waste reduction for every hub."
              }
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.desc}</p>
                <a href="#book" className="mt-4 inline-block text-emerald-700 font-semibold">Get started →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              A simple, auditable 4-step flow—from booking to cooling to delivery.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "Book", text: "Reserve space via WhatsApp or phone—same-day confirmation at most hubs." },
              { step: 2, title: "Drop-off", text: "Bring produce to the hub; we weigh, record, and assign a storage slot." },
              { step: 3, title: "Cool", text: "Solar-powered cooling with continuous temperature monitoring and alerts." },
              { step: 4, title: "Collect/Sell", text: "Pick up for transport or sell fresher at market with higher returns." }
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border p-6 bg-white">
                <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-bold">{s.step}</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Farmers served", value: "2,800+" },
              { label: "Tonnes preserved", value: "6,500+" },
              { label: "Average shelf-life gain", value: "2–4×" },
              { label: "CO₂e avoided", value: "1.9k t" }
            ].map((i) => (
              <div key={i.label} className="rounded-2xl border bg-white p-6 text-center">
                <div className="text-4xl font-extrabold tracking-tight">{i.value}</div>
                <div className="mt-2 text-sm text-gray-600">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve (replacing “Eligibility”) */}
      <section id="who" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Who we serve</h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Smallholder farmers & cooperatives",
                  "Market vendors and aggregators",
                  "Dairy & fish traders",
                  "County programs and NGO partners",
                  "Cold-chain logistics partners"
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a href="#book" className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
                Book a slot
              </a>
            </div>

            <div>
              <div className="rounded-2xl border p-6 bg-white shadow-sm">
                <h3 className="font-semibold text-lg">Quick Booking Request</h3>
                <form className="mt-4 grid gap-4" onSubmit={submitLead}>
                  <input className="rounded-xl border px-4 py-3" placeholder="Name / Organization" value={lead.org} onChange={e=>setLead({...lead, org:e.target.value})} />
                  <input className="rounded-xl border px-4 py-3" placeholder="Contact email" type="email" value={lead.email} onChange={e=>setLead({...lead, email:e.target.value})} />
                  <select className="rounded-xl border px-4 py-3" value={lead.type} onChange={e=>setLead({...lead, type:e.target.value})}>
                    <option>Type of user</option>
                    <option>Farmer</option>
                    <option>Cooperative</option>
                    <option>Market vendor</option>
                    <option>Trader/Logistics</option>
                    <option>County/NGO</option>
                  </select>
                  <textarea className="rounded-xl border px-4 py-3" placeholder="What produce and how much (approx.)?" rows={3} value={lead.note} onChange={e=>setLead({...lead, note:e.target.value})} />
                  <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
                    {leadSent ? "Submitted" : "Submit"}
                  </button>
                  <p className="text-xs text-gray-500">We’ll confirm availability and pricing within one business day.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Resources</h2>
            <p className="mt-3 text-gray-600">
              Guides and tools to reduce losses and keep produce market-ready.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cold-Chain Basics for Farmers (PDF)", tag: "Download" },
              { title: "Post-Harvest Handling & Packaging", tag: "Best Practice" },
              { title: "Solar Cooling & Sustainability Impact", tag: "Insights" }
            ].map((r) => (
              <article key={r.title} className="rounded-2xl border bg-white p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">{r.tag}</div>
                <h3 className="mt-2 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Practical, field-tested guidance from our hub operations.</p>
                <a href="#" className="mt-3 inline-block text-emerald-700 font-semibold">View →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section id="book" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-emerald-600 text-white px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to book storage?</h3>
              <p className="mt-1 text-emerald-100">Tell us your produce and quantity—most hubs confirm same day.</p>
            </div>
            <a href="https://wa.me/254711295022" className="rounded-xl bg-white px-5 py-3 text-emerald-700 font-semibold hover:bg-emerald-50">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { q: "What produce can you store?", a: "Most fruits and vegetables, dairy, and fish. We’ll advise on packaging and ideal temperatures." },
              { q: "How is pricing calculated?", a: "Pay-as-you-store by crate, bag, or kilo, depending on the hub and product." },
              { q: "Do hubs run at night?", a: "Yes. Solar plus battery storage power our hubs 24/7 to keep produce safe." },
              { q: "Do you offer training?", a: "Yes—regular farmer sessions on sorting, packaging, and post-harvest handling." }
            ].map((f, idx) => (
              <details key={idx} className="rounded-2xl border p-5 bg-white">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-600 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact us</h2>
              <p className="mt-3 text-gray-600">Reach us on email or WhatsApp for quick booking and support.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li><span className="font-semibold">Email:</span> victorwachira@gmail.com</li>
                <li><span className="font-semibold">Phone/WhatsApp:</span> +254711295022</li>
                <li><span className="font-semibold">Office:</span> Nairobi, Kenya</li>
              </ul>
            </div>
            <div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">Send a message</h3>
                <form className="mt-4 grid gap-4" onSubmit={submitContact}>
                  <input className="rounded-xl border px-4 py-3" placeholder="Full name" value={contact.name} onChange={e=>setContact({...contact, name: e.target.value})} />
                  <input className="rounded-xl border px-4 py-3" placeholder="Email address" type="email" value={contact.email} onChange={e=>setContact({...contact, email: e.target.value})} />
                  <textarea className="rounded-xl border px-4 py-3" placeholder="Tell us about your produce and quantity" rows={4} value={contact.message} onChange={e=>setContact({...contact, message: e.target.value})} />
                  <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">{sent ? "Sent" : "Send"}</button>
                  <p className="text-xs text-gray-500">We respond within one business day.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-lg">Soko Baridi</div>
              <p className="mt-3 text-gray-600 text-sm">
                Solar-powered cold storage for rural farmers—reducing losses, preserving nutrition, and growing incomes.
              </p>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#mission" className="hover:text-emerald-700">Mission & Vision</a></li>
                <li><a href="#programs" className="hover:text-emerald-700">Programs</a></li>
                <li><a href="#impact" className="hover:text-emerald-700">Impact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-700">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Newsletter</div>
              <p className="mt-3 text-sm text-gray-600">Cold-chain tips and hub updates.</p>
              <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
                <input className="flex-1 rounded-xl border px-4 py-3" placeholder="Email address" type="email" />
                <button className="rounded-xl bg-emerald-600 px-4 py-3 text-white font-semibold hover:bg-emerald-700">Join</button>
              </form>
            </div>
          </div>
          <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Soko Baridi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
