"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const navItems = ["Home", "About", "Subjects", "Pricing", "Contact"];
const subjects = [
  ["01", "Elementary Math", "Build strong number sense and foundational problem-solving skills."],
  ["02", "Middle School Math", "Strengthen core concepts and prepare for higher-level coursework."],
  ["03", "Pre-Algebra", "Make variables, expressions, and equations feel approachable."],
  ["04", "Algebra I", "Master linear equations, functions, graphing, and more."],
  ["05", "Geometry", "Understand proofs, shapes, measurement, and spatial reasoning."],
  ["06", "Algebra II", "Grow confidence with advanced equations and functions."],
  ["07", "Precalculus", "Prepare for calculus with functions, trigonometry, and analysis."],
  ["08", "Homework Help", "Work through assignments with guidance—not just answers."],
  ["09", "Test Preparation", "Review strategically, practice effectively, and test confidently."],
];
const benefits = [
  ["$", "Affordable pricing", "Straightforward sessions that make quality support accessible."],
  ["★", "Experienced tutors", "More than five years of experience helping students succeed."],
  ["✦", "Personalized lessons", "Instruction shaped around each learner’s needs and goals."],
  ["1–12", "Multiple grade levels", "Math support from elementary school through high school."],
  ["=", "Clear explanations", "Patient, step-by-step guidance that makes concepts click."],
  ["↑", "Confidence building", "Encouragement and practice that create lasting progress."],
];
const faqs = [
  ["What grade levels do you tutor?", "We support students in elementary, middle, and high school, adapting instruction to each learner’s current level."],
  ["What subjects do you cover?", "We cover foundational math through precalculus, including algebra, geometry, homework help, and test preparation. Ask us about additional courses."],
  ["How much does tutoring cost?", "Group tutoring is $10 per student per session, and one-on-one tutoring is $20 per session. There are no subscriptions or extra fees."],
  ["Are sessions online or in person?", "Online or in-person availability can be discussed when booking so we can find an option that works for you."],
  ["How do I schedule a session?", "Complete the booking request form below with your course, tutoring preference, and preferred date. We’ll contact you to confirm details."],
  ["What should students bring?", "Students should bring relevant assignments, notes, textbooks, a calculator if needed, and any questions or topics they want to review."],
];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return <a href="#home" className={`flex items-center gap-2.5 font-extrabold tracking-tight ${inverted ? "text-white" : "text-navy-950"}`} aria-label="APM Tutoring home"><span className={`grid h-10 w-10 place-items-center rounded-xl text-sm text-white shadow-md ${inverted ? "bg-brand-600" : "bg-navy-950"}`}>APM</span><span className="text-lg">APM <span className="text-brand-600">Tutoring</span></span></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect Formspree, Resend, or another form service here when a backend is selected.
    if (event.currentTarget.checkValidity()) { setSubmitted(true); event.currentTarget.reset(); }
  }

  return <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <Brand />
        <div className="hidden items-center gap-8 md:flex">{navItems.map(item => <a key={item} className="text-sm font-semibold text-slate-600 transition hover:text-brand-700" href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        <a href="#contact" className="btn-primary hidden md:inline-flex">Book a Session <span className="ml-2">→</span></a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 md:hidden" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation menu"><span className="text-2xl">{menuOpen ? "×" : "☰"}</span></button>
      </nav>
      {menuOpen && <div id="mobile-menu" className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 shadow-lg md:hidden">{navItems.map(item => <a onClick={() => setMenuOpen(false)} key={item} className="block border-b border-slate-100 py-3 font-semibold" href={`#${item.toLowerCase()}`}>{item}</a>)}<a onClick={() => setMenuOpen(false)} href="#contact" className="btn-primary mt-5 w-full">Book a Session</a></div>}
    </header>

    <main>
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 to-white pb-20 pt-32 sm:pt-40 lg:pb-28">
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative z-10 animate-fadeup">
            <p className="eyebrow"><span className="h-2 w-2 rounded-full bg-gold-400" /> Math support that adds up</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">Build Confidence.<br/><span className="text-brand-600">Improve Grades.</span><br/>Master Math.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">Affordable, personalized math tutoring for elementary, middle, and high school students.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href="#contact">Book a Session <span className="ml-2">→</span></a><a className="btn-secondary" href="#pricing">View Pricing</a></div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600"><span>✓ Qualified tutors</span><span>✓ Flexible support</span><span>✓ No extra fees</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg animate-float" aria-label="Decorative math learning illustration">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-brand-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-navy-950 p-7 text-white shadow-2xl sm:p-10">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="mb-8 flex items-center justify-between"><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-gold-400"/><span className="h-3 w-3 rounded-full bg-emerald-400"/></div><span className="text-xs font-bold uppercase tracking-widest text-brand-100">Today’s lesson</span></div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur"><p className="text-sm text-brand-100">Solve for x</p><p className="mt-4 text-center text-4xl font-bold sm:text-5xl">3x + 5 = 20</p><div className="mx-auto mt-6 h-px w-3/4 bg-white/20"/><p className="mt-5 text-center text-2xl text-gold-400">x = 5 <span className="ml-2 text-base text-emerald-300">✓</span></p></div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-white/10 p-3 text-xl">π</div><div className="rounded-xl bg-brand-500 p-3 text-xl">∑</div><div className="rounded-xl bg-white/10 p-3 text-xl">√</div></div>
            </div>
            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">Progress</p><p className="mt-1 font-extrabold text-navy-950"><span className="text-brand-600">↑</span> One step at a time</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white"><div className="container-page grid grid-cols-2 divide-x divide-y divide-slate-100 lg:grid-cols-4 lg:divide-y-0">{[["5+","Years of Experience"],["50+","Students Helped"],["K–12","Elementary Through High School"],["$10+","Affordable Sessions"]].map(([num,label]) => <div key={label} className="px-3 py-10 text-center"><p className="text-3xl font-black text-brand-600 sm:text-4xl">{num}</p><p className="mt-2 text-xs font-bold uppercase tracking-wide text-slate-500 sm:text-sm">{label}</p></div>)}</div></section>

      <section id="about" className="section-pad"><div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div><p className="eyebrow">About APM Tutoring</p><h2 className="section-title">Patient guidance. Personalized learning. Real progress.</h2><p className="section-copy">APM Tutoring provides patient, personalized, and affordable math instruction that helps students understand the “why,” not just memorize the steps.</p><p className="mt-5 leading-7 text-slate-600">Our tutors include experienced college students and professionals who adjust every lesson to each student’s learning style, pace, and academic goals. Whether a student needs to catch up, keep up, or get ahead, we meet them where they are.</p><a href="#contact" className="mt-8 inline-flex items-center font-bold text-brand-700 hover:text-brand-600">Meet your next math goal <span className="ml-2">→</span></a></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-3xl bg-brand-600 p-7 text-white shadow-card sm:translate-y-6"><p className="text-4xl">∞</p><h3 className="mt-10 text-xl font-bold">Learning without limits</h3><p className="mt-3 text-sm leading-6 text-brand-50">A comfortable place to ask questions, practice skills, and grow.</p></div><div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-card"><p className="text-4xl text-gold-500">✦</p><h3 className="mt-10 text-xl font-bold">Lessons that fit</h3><p className="mt-3 text-sm leading-6 text-slate-600">Every student learns differently. Our instruction reflects that.</p></div></div>
      </div></section>

      <section id="subjects" className="section-pad bg-slate-50"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Subjects we tutor</p><h2 className="section-title">Support for every stage of the math journey</h2><p className="section-copy mx-auto">From first fundamentals to advanced functions, we make challenging concepts clearer.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{subjects.map(([n,title,desc]) => <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-200"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-sm font-extrabold text-brand-700">{n}</span><span className="text-xl text-slate-300 transition group-hover:text-gold-400">＋</span></div><h3 className="mt-6 text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p></article>)}</div><p className="mt-8 text-center text-sm font-semibold text-slate-500">Looking for something else? Additional math courses may be available upon request.</p></div></section>

      <section className="section-pad"><div className="container-page"><div className="text-center"><p className="eyebrow">How it works</p><h2 className="section-title">A simple path to stronger skills</h2></div><div className="relative mt-14 grid gap-8 md:grid-cols-3"><div className="absolute left-[17%] right-[17%] top-8 hidden border-t-2 border-dashed border-brand-200 md:block"/>{[["1","Choose your tutoring option","Select collaborative group support or focused one-on-one instruction."],["2","Schedule a session","Tell us about the student, their course, and a preferred date."],["3","Learn and improve","Meet with a tutor, master concepts, and build lasting confidence."]].map(([n,t,d]) => <div key={n} className="relative text-center"><span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-navy-950 text-xl font-black text-white shadow-lg">{n}</span><h3 className="mt-6 text-xl font-extrabold">{t}</h3><p className="mx-auto mt-3 max-w-sm leading-7 text-slate-600">{d}</p></div>)}</div></div></section>

      <section id="pricing" className="section-pad bg-navy-950 text-white"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow !text-brand-100">Simple, transparent pricing</p><h2 className="section-title !text-white">Quality tutoring within reach</h2><p className="section-copy mx-auto text-slate-300">Pay per session. No monthly subscriptions. No extra fees.</p></div><div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-2">
        <article className="rounded-3xl border border-white/15 bg-white/5 p-8"><p className="font-bold text-brand-100">Group Tutoring</p><p className="mt-5 flex items-end gap-2"><span className="text-5xl font-black">$10</span><span className="pb-1 text-slate-300">per student / session</span></p><ul className="mt-8 space-y-4">{["Collaborative learning","Small-group instruction","Guided practice","Affordable support"].map(x=><li key={x} className="flex gap-3 text-slate-200"><span className="text-emerald-400">✓</span>{x}</li>)}</ul><a href="#contact" className="mt-9 flex min-h-12 items-center justify-center rounded-full border border-white/30 font-bold transition hover:bg-white hover:text-navy-950">Choose Group Tutoring</a></article>
        <article className="relative rounded-3xl bg-white p-8 text-navy-950 shadow-2xl"><span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-gold-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-navy-950">Most Personalized</span><p className="font-bold text-brand-700">One-on-One Tutoring</p><p className="mt-5 flex items-end gap-2"><span className="text-5xl font-black">$20</span><span className="pb-1 text-slate-500">per session</span></p><ul className="mt-8 space-y-4">{["Personalized instruction","Individual learning plan","Focused homework help","Flexible pacing"].map(x=><li key={x} className="flex gap-3 text-slate-700"><span className="text-brand-600">✓</span>{x}</li>)}</ul><a href="#contact" className="btn-primary mt-9 w-full">Choose One-on-One</a></article>
      </div></div></section>

      <section className="section-pad"><div className="container-page grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Why choose APM</p><h2 className="section-title">Tutoring centered on the student</h2><p className="section-copy">Great tutoring is more than working through problems. It’s creating the clarity and confidence to tackle the next one independently.</p></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(([icon,title,desc])=><div key={title} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 font-black text-brand-700">{icon}</span><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p></div></div>)}</div></div></section>

      <section className="section-pad bg-brand-50/70"><div className="container-page"><div className="text-center"><p className="eyebrow">Testimonials</p><h2 className="section-title">Student stories coming soon</h2><p className="section-copy mx-auto">This space is ready to feature verified feedback from the APM Tutoring community.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{["Parent testimonial coming soon.","Student testimonial coming soon.","Parent testimonial coming soon."].map((x,i)=><article key={i} className="rounded-2xl border border-brand-100 bg-white p-7 shadow-card"><div className="text-gold-400" aria-hidden="true">☆ ☆ ☆ ☆ ☆</div><p className="mt-6 text-lg font-bold leading-7 text-navy-900">“{x}”</p><p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">Placeholder — replace with verified feedback</p></article>)}</div></div></section>

      <section className="section-pad"><div className="container-page grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Frequently asked questions</p><h2 className="section-title">Answers before you begin</h2><p className="section-copy">Still have a question? Send us a message below and we’ll be happy to help.</p></div><div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a],i)=><details key={q} className="group py-5" open={i===0}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold"><span>{q}</span><span className="text-xl text-brand-600 group-open:rotate-45">＋</span></summary><p className="max-w-2xl pt-3 leading-7 text-slate-600">{a}</p></details>)}</div></div></section>

      <section id="contact" className="section-pad bg-slate-50"><div className="container-page grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Book a session</p><h2 className="section-title">Let’s make math feel manageable</h2><p className="section-copy">Tell us what support you’re looking for. We’ll follow up to discuss availability and confirm your session.</p><div className="mt-9 space-y-4 rounded-2xl bg-navy-950 p-7 text-white"><p><span className="mr-3 text-brand-100">✉</span><span className="text-slate-400">Email</span><br/><span className="ml-8 font-bold">YOUR_EMAIL_HERE</span></p><p><span className="mr-3 text-brand-100">☎</span><span className="text-slate-400">Phone</span><br/><span className="ml-8 font-bold">YOUR_PHONE_HERE</span></p><p><span className="mr-3 text-brand-100">⌖</span><span className="text-slate-400">Location</span><br/><span className="ml-8 font-bold">YOUR_CITY_HERE</span></p></div></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-9">{submitted ? <div className="grid min-h-[500px] place-items-center text-center" role="status"><div><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</span><h3 className="mt-6 text-2xl font-extrabold">Thank you!</h3><p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">Your request has been received. APM Tutoring will contact you soon.</p><button className="btn-secondary mt-7" onClick={()=>setSubmitted(false)}>Send another request</button></div></div> : <form onSubmit={submitForm} className="grid gap-5 sm:grid-cols-2">
          <Field label="Parent or student name" name="name" required placeholder="Full name"/><Field label="Email" name="email" type="email" required placeholder="you@example.com"/><Field label="Phone number" name="phone" type="tel" required placeholder="(555) 555-5555"/><Field label="Student grade" name="grade" required placeholder="e.g., 8th grade"/><Field label="Math course" name="course" required placeholder="e.g., Algebra I"/><label className="text-sm font-bold">Tutoring option<span className="text-red-600"> *</span><select name="option" required defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"><option value="" disabled>Select an option</option><option>Group tutoring</option><option>One-on-one tutoring</option></select></label><Field label="Preferred date" name="date" type="date" required/><label className="text-sm font-bold sm:col-span-2">Message<span className="text-red-600"> *</span><textarea name="message" required rows={5} placeholder="Tell us about the student’s goals, current challenges, and scheduling needs." className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100" /></label><p className="text-xs leading-5 text-slate-500 sm:col-span-2">By submitting, you’re requesting a follow-up. Your session is not confirmed until APM Tutoring contacts you.</p><button type="submit" className="btn-primary sm:col-span-2">Send Booking Request <span className="ml-2">→</span></button>
        </form>}</div>
      </div></section>
    </main>

    <footer className="bg-navy-950 py-12 text-white"><div className="container-page"><div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3"><div><Brand inverted/><p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">Helping students build stronger math skills.</p></div><div><p className="font-bold">Quick links</p><div className="mt-4 grid grid-cols-2 gap-3">{navItems.map(x=><a key={x} href={`#${x.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white">{x}</a>)}</div></div><div><p className="font-bold">Contact</p><div className="mt-4 space-y-2 text-sm text-slate-400"><p>YOUR_EMAIL_HERE</p><p>YOUR_PHONE_HERE</p><p>YOUR_CITY_HERE</p></div></div></div><div className="flex flex-col gap-2 pt-7 text-xs text-slate-500 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} APM Tutoring. All rights reserved.</p><p>Affordable support. Stronger skills. Greater confidence.</p></div></div></footer>
  </>;
}

function Field({label, name, type="text", required=false, placeholder}: {label:string; name:string; type?:string; required?:boolean; placeholder?:string}) {
  return <label className="text-sm font-bold">{label}{required && <span className="text-red-600"> *</span>}<input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-slate-300 px-4 font-normal outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100" /></label>;
}
