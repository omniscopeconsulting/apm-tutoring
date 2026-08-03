"use client";

import { useMemo, useState } from "react";
import { PageShell } from "../../components/PageShell";

type Question = { prompt: string; choices: string[]; answer: number; explanation: string };
const questions: Record<string, Record<string, Question[]>> = {
  "Elementary (3–5)": {
    Math: [
      { prompt: "A library has 864 books. Three-eighths are nonfiction. How many books are fiction?", choices: ["324", "432", "540", "648"], answer: 2, explanation: "3/8 of 864 is 324 nonfiction books. Subtract: 864 − 324 = 540." },
      { prompt: "Which value makes 7 × (□ + 4) = 91 true?", choices: ["7", "9", "11", "13"], answer: 1, explanation: "Divide 91 by 7 to get 13, then subtract 4. The missing value is 9." },
    ],
    English: [
      { prompt: "Mina packed an umbrella although the sky was clear. By lunch, dark clouds covered the sun. What can you infer?", choices: ["Mina lost her umbrella", "Mina expected the weather to change", "Lunch was canceled", "The forecast promised sunshine"], answer: 1, explanation: "Packing an umbrella before clouds arrive suggests Mina anticipated changing weather." },
      { prompt: "Which sentence uses the most precise verb?", choices: ["The eagle went through the air.", "The eagle was in the sky.", "The eagle soared above the canyon.", "The eagle moved over it."], answer: 2, explanation: "“Soared” precisely describes how the eagle moved." },
    ],
  },
  "Middle School (6–8)": {
    Math: [
      { prompt: "A line passes through (−2, 5) and (4, −7). What is its slope?", choices: ["−2", "−1/2", "2", "1/2"], answer: 0, explanation: "Slope = (−7 − 5) ÷ (4 − (−2)) = −12 ÷ 6 = −2." },
      { prompt: "After a 20% discount, a jacket costs $68. What was its original price?", choices: ["$81.60", "$82", "$85", "$88"], answer: 2, explanation: "$68 represents 80% of the price. 68 ÷ 0.8 = 85." },
    ],
    English: [
      { prompt: "An author describes a silent, abandoned playground just after sunset. Which mood is most strongly created?", choices: ["Celebratory", "Uneasy", "Humorous", "Hopeful"], answer: 1, explanation: "Silence, abandonment, and fading light combine to create an uneasy mood." },
      { prompt: "Which evidence best supports a claim that urban trees reduce summer heat?", choices: ["Trees appear in many city logos.", "A survey says residents like parks.", "Shaded blocks averaged 6°F cooler than nearby unshaded blocks.", "Some trees lose leaves in winter."], answer: 2, explanation: "The measured temperature comparison directly supports the heat-reduction claim." },
    ],
  },
  "High School (9–12)": {
    Math: [
      { prompt: "If f(x) = x² − 6x + 11, what is the minimum value of f?", choices: ["−2", "1", "2", "11"], answer: 2, explanation: "Complete the square: f(x) = (x − 3)² + 2, so the minimum is 2." },
      { prompt: "For x > 0, simplify (x^(3/2) · x^(−1/3)) ÷ x^(1/6).", choices: ["x", "x^(2/3)", "x^(4/3)", "x²"], answer: 0, explanation: "Combine exponents: 3/2 − 1/3 − 1/6 = 9/6 − 2/6 − 1/6 = 1." },
    ],
    English: [
      { prompt: "A narrator praises a ‘brilliant’ plan immediately after describing its obvious failure. Which device is used?", choices: ["Alliteration", "Verbal irony", "Foreshadowing", "Onomatopoeia"], answer: 1, explanation: "Calling an obviously failed plan brilliant communicates the opposite of the literal words: verbal irony." },
      { prompt: "Which revision is most concise?", choices: ["Due to the fact that rain fell, the game was canceled.", "The game was canceled on account of rain falling.", "Rain canceled the game.", "The game, because there was rain, became canceled."], answer: 2, explanation: "“Rain canceled the game” conveys the full idea directly without redundant wording." },
    ],
  },
};

export default function PracticePage() {
  const [grade, setGrade] = useState("Middle School (6–8)");
  const [subject, setSubject] = useState("Math");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const set = useMemo(() => questions[grade][subject], [grade, subject]);
  const question = set[index];
  function changeFilters(nextGrade: string, nextSubject: string) { setGrade(nextGrade); setSubject(nextSubject); setIndex(0); setSelected(null); setScore(0); }
  function answer(choice: number) { if (selected !== null) return; setSelected(choice); if (choice === question.answer) setScore(s => s + 1); }
  function next() { setIndex(i => (i + 1) % set.length); setSelected(null); }

  return <PageShell eyebrow="Practice platform" title="Challenge yourself with advanced practice" intro="Choose a grade band and subject, solve a multiple-choice problem, and receive immediate feedback with a clear explanation.">
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-2"><label className="text-sm font-bold">Grade level<select value={grade} onChange={e=>changeFilters(e.target.value, subject)} className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal">{Object.keys(questions).map(x=><option key={x}>{x}</option>)}</select></label><label className="text-sm font-bold">Subject<select value={subject} onChange={e=>changeFilters(grade, e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 font-normal"><option>Math</option><option>English</option></select></label></div>
      <section className="mt-6 rounded-3xl bg-navy-950 p-6 text-white shadow-2xl sm:p-9" aria-live="polite"><div className="flex items-center justify-between text-sm text-brand-100"><span>{grade} • {subject}</span><span>Score: {score}/{index + (selected === null ? 0 : 1)}</span></div><h2 className="mt-6 text-xl font-extrabold leading-8 sm:text-2xl">{question.prompt}</h2><div className="mt-7 grid gap-3">{question.choices.map((choice, i) => { const state = selected === null ? "border-white/20 hover:border-brand-500 hover:bg-white/10" : i === question.answer ? "border-emerald-400 bg-emerald-500/20" : selected === i ? "border-red-400 bg-red-500/20" : "border-white/10 opacity-60"; return <button key={choice} onClick={()=>answer(i)} disabled={selected !== null} className={`rounded-xl border p-4 text-left font-semibold transition ${state}`}><span className="mr-3 text-brand-100">{String.fromCharCode(65+i)}.</span>{choice}</button>; })}</div>{selected !== null && <div className="mt-6 rounded-xl bg-white/10 p-5"><p className={`font-extrabold ${selected === question.answer ? "text-emerald-300" : "text-red-300"}`}>{selected === question.answer ? "Correct!" : "Not quite."}</p><p className="mt-2 leading-7 text-slate-200">{question.explanation}</p><button onClick={next} className="btn-primary mt-5">Next challenge →</button></div>}</section>
      <p className="mt-5 text-center text-sm text-slate-500">Practice results stay on this device and are not saved. Need help with a problem? <a className="font-bold text-brand-700" href="/contact">Ask a tutor.</a></p>
    </div>
  </PageShell>;
}
