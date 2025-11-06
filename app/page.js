
"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Page() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [elig, setElig] = useState({ org: "", email: "", type: "", note: "" });
  const [sent, setSent] = useState(false);
  const [eligSent, setEligSent] = useState(false);

  const submitContact = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(contact) });
    setSent(true);
  };

  const submitElig = async (e) => {
    e.preventDefault();
    await fetch("/api/eligibility", { method: "POST", body: JSON.stringify(elig) });
    setEligSent(true);
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
              <a href="#programs" className="hover:text-indigo-700">Programs</a>
              <a href="#impact" className="hover:text-indigo-700">Impact</a>
              <a href="#how" className="hover:text-indigo-700">How it works</a>
              <a href="#eligibility" className="hover:text-indigo-700">Eligibility</a>
              <a href="#resources" className="hover:text-indigo-700">Resources</a>
              <a href="#contact" className="hover:text-indigo-700">Contact</a>
              <a href="#apply" className="rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Apply</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold ring-1 ring-emerald-200">Government Grants • Kenya</span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Access and manage government grants with clarity, speed, and full compliance.
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-prose">
                We help SMEs, cooperatives, NGOs, and county programs secure funding, stay compliant, and deliver measurable impact. Our team handles eligibility, application strategy, documentation, disbursement tracking, and reporting—end‑to‑end.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#apply" className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">Check eligibility</a>
                <a href="#contact" className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">Talk to an expert</a>
              </div>
              <div className="mt-6 text-xs text-gray-500">Fast response via WhatsApp • Turnaround for screening under 24h*</div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-sm grid place-items-center p-6">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600" />
                  <h3 className="mt-6 text-xl font-bold">Grant Portfolio Dashboard</h3>
                  <p className="mt-2 text-gray-600 max-w-sm mx-auto">Live status across applications, disbursements, milestones, and audits. Export-ready reports for agencies and boards.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block">
                <div className="rounded-2xl border bg-white shadow-md p-4 w-56">
                  <div className="text-xs text-gray-500">This week</div>
                  <div className="mt-1 font-semibold">KES 12.4M approved</div>
                  <div className="text-xs text-emerald-600">+2 projects cleared</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-gray-500 text-xs uppercase tracking-widest">Trusted by programs & partners</div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-10 bg-white rounded-md border grid place-items-center text-xs text-gray-500">Logo</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" id="mission">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Expand equitable access to government funding by simplifying the end‑to‑end grant journey and ensuring transparent, auditable delivery of impact for communities and businesses.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A resilient ecosystem where public funds reach the right beneficiaries quickly, outcomes are measured, and every shilling is traceable—from application to evaluation.
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
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Tailored support for applicants, implementing partners, and county departments—built on compliance, transparency, and delivery.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Eligibility & Readiness Check", desc: "Verify program fit, assess documentation readiness, and map required evidence."},
              { title: "Application Advisory", desc: "Craft winning narratives, budgets, M&E frameworks, and risk registers."},
              { title: "Document Packaging", desc: "Assemble compliant annexes—certificates, board resolutions, financials, policies."},
              { title: "Disbursement Management", desc: "Milestone planning, drawdown requests, and treasury‑aligned reporting."},
              { title: "Compliance & Audit Prep", desc: "Internal controls, procurement trails, beneficiary registers, and audit rooms."},
              { title: "Training & Capacity Building", desc: "Workshops on governance, safeguarding, anti‑fraud, and data protection."}
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-gray-600">{c.desc}</p>
                <a href="#apply" className="mt-4 inline-block text-indigo-700 font-semibold">Get started →</a>
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
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">A simple, auditable 4‑step flow from first call to final report.</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: "Screening", text: "5‑minute intake + document checklist." },
              { step: 2, title: "Strategy", text: "Scope programs, budget, and timelines." },
              { step: 3, title: "Submission", text: "Compile application and file on portals." },
              { step: 4, title: "Delivery", text: "Track disbursements, milestones, audits." },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border p-6 bg-white">
                <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold">{s.step}</div>
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
              { label: "Applicants served", value: "1,250+" },
              { label: "Funds approved", value: "KES 1.2B" },
              { label: "Average approval time", value: "42 days" },
              { label: "Audit findings", value: "<1%" },
            ].map((i) => (
              <div key={i.label} className="rounded-2xl border bg-white p-6 text-center">
                <div className="text-4xl font-extrabold tracking-tight">{i.value}</div>
                <div className="mt-2 text-sm text-gray-600">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Who is eligible?</h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Registered business, cooperative, NGO, or CBO",
                  "Tax compliant (KRA PIN & recent returns)",
                  "Active bank account & signatories",
                  "Audited accounts or management financials",
                  "Safeguarding & AML policies (we help craft)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500"/><span>{t}</span></li>
                ))}
              </ul>
              <a href="#apply" className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">Run quick check</a>
            </div>
            <div>
              <div className="rounded-2xl border p-6 bg-white shadow-sm">
                <h3 className="font-semibold text-lg">Quick Eligibility Check</h3>
                <form className="mt-4 grid gap-4" onSubmit={submitElig}>
                  <input className="rounded-xl border px-4 py-3" placeholder="Organization name" value={elig.org} onChange={e=>setElig({...elig, org:e.target.value})} />
                  <input className="rounded-xl border px-4 py-3" placeholder="Contact email" type="email" value={elig.email} onChange={e=>setElig({...elig, email:e.target.value})} />
                  <select className="rounded-xl border px-4 py-3" value={elig.type} onChange={e=>setElig({...elig, type:e.target.value})}>
                    <option>Organization type</option>
                    <option>SME</option>
                    <option>Cooperative</option>
                    <option>NGO/CBO</option>
                    <option>County department</option>
                  </select>
                  <textarea className="rounded-xl border px-4 py-3" placeholder="What funding are you targeting?" rows={3} value={elig.note} onChange={e=>setElig({...elig, note:e.target.value})} />
                  <button className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">{eligSent ? "Submitted" : "Submit"}</button>
                  <p className="text-xs text-gray-500">By submitting, you agree to our privacy policy. We’ll respond within one business day.</p>
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
            <p className="mt-3 text-gray-600">Guides, templates, and policy checklists for grant readiness.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Grant Readiness Checklist (PDF)", tag: "Download" },
              { title: "Budget & M&E Templates", tag: "Templates" },
              { title: "Procurement & Safeguarding Policies", tag: "Policy pack" },
            ].map((r) => (
              <article key={r.title} className="rounded-2xl border bg-white p-6">
                <div className="text-xs uppercase tracking-widest text-gray-500">{r.tag}</div>
                <h3 className="mt-2 font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-600">Practical tools to help you comply with public funding rules from day one.</p>
                <a href="#" className="mt-3 inline-block text-indigo-700 font-semibold">View →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section id="apply" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-indigo-600 text-white px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to start your application?</h3>
              <p className="mt-1 text-indigo-100">We’ll run a free 15‑minute screening and send you a tailored plan.</p>
            </div>
            <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-indigo-700 font-semibold hover:bg-indigo-50">Schedule a call</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center">Frequently asked questions</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { q: "Do you work with national and county grants?", a: "Yes. We support national ministries, SAGAs, and county‑level programs, plus select international instruments routed through government."},
              { q: "What are your fees?", a: "We offer fixed‑fee packages for readiness and application, then milestone‑based support for delivery and audits."},
              { q: "How fast is the process?", a: "Screening in 24h, standard application cycles 30–90 days depending on program and completeness."},
              { q: "Can you set up our policies?", a: "Yes. We provide policy drafting templates and training (safeguarding, AML/CFT, data protection, procurement)."},
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
              <p className="mt-3 text-gray-600">Reach us on email or WhatsApp for a quick start.</p>
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
                  <textarea className="rounded-XL border px-4 py-3" placeholder="Tell us about your project" rows={4} value={contact.message} onChange={e=>setContact({...contact, message: e.target.value})} />
                  <button className="rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700">{sent ? "Sent" : "Send"}</button>
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
              <p className="mt-3 text-gray-600 text-sm">Transparent grant onboarding, disbursement, and reporting for public funds.</p>
            </div>
            <div>
              <div className="font-semibold">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#mission" className="hover:text-indigo-700">Mission & Vision</a></li>
                <li><a href="#programs" className="hover:text-indigo-700">Programs</a></li>
                <li><a href="#impact" className="hover:text-indigo-700">Impact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-indigo-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-700">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Newsletter</div>
              <p className="mt-3 text-sm text-gray-600">Get funding alerts and templates.</p>
              <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
                <input className="flex-1 rounded-xl border px-4 py-3" placeholder="Email address" type="email" />
                <button className="rounded-xl bg-indigo-600 px-4 py-3 text-white font-semibold hover:bg-indigo-700">Join</button>
              </form>
            </div>
          </div>
          <div className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Soko Baridi. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
