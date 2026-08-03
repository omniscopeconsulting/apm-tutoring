import type { ReactNode } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Subjects", "/subjects"], ["Pricing", "/pricing"], ["Reading", "/reading"], ["Practice", "/practice"], ["Contact", "/contact"]];

export function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <div className="min-h-screen bg-slate-50">
    <header className="border-b border-slate-200 bg-white"><nav className="container-page flex min-h-20 flex-wrap items-center justify-between gap-4 py-4" aria-label="Main navigation"><a href="/" className="flex items-center gap-2 font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-950 text-xs text-white">APM</span><span>APM <span className="text-brand-600">Tutoring</span></span></a><div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">{links.map(([label, href]) => <a className="text-sm font-semibold text-slate-600 hover:text-brand-700" key={href} href={href}>{label}</a>)}</div></nav></header>
    <main><section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20"><div className="container-page"><p className="eyebrow">{eyebrow}</p><h1 className="section-title max-w-3xl">{title}</h1><p className="section-copy">{intro}</p></div></section><div className="container-page py-14 sm:py-20">{children}</div></main>
    <footer className="bg-navy-950 py-10 text-white"><div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-extrabold">APM Tutoring</p><p className="mt-1 text-sm text-slate-400">Helping students build stronger math and reading skills.</p></div><div className="text-sm text-slate-300"><a href="mailto:APMTutorings@gmail.com" className="hover:text-white">APMTutorings@gmail.com</a><span className="mx-3">•</span><a href="tel:+14692341396" className="hover:text-white">469-234-1396</a><span className="mx-3">•</span>Remote</div></div></footer>
  </div>;
}

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"><h2 className="text-xl font-extrabold">{title}</h2><div className="mt-3 leading-7 text-slate-600">{children}</div></article>;
}
