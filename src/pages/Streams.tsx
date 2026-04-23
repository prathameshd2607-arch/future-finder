import { useState } from "react";
import { streams } from "@/data/mockData";
import { ChevronRight, BookOpen, Gauge, Sparkles, ArrowLeft, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Streams = () => {
  const [active, setActive] = useState<string | null>(null);
  const stream = streams.find((s) => s.id === active);

  if (stream) {
    return (
      <div className="container py-8 md:py-12 fade-in">
        <button
          onClick={() => setActive(null)}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all streams
        </button>

        {/* Header */}
        <div className="rounded-3xl gradient-hero p-8 md:p-10 text-primary-foreground shadow-glow mb-8">
          <div className="text-6xl mb-3">{stream.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2">{stream.name}</h1>
          <p className="opacity-90 text-lg">{stream.tagline}</p>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" /> Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl gradient-card border border-border shadow-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Core Subjects</p>
              <ul className="space-y-1 text-sm">
                {stream.overview.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl gradient-card border border-border shadow-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Difficulty</p>
              <div className="flex items-center gap-2">
                <Gauge className="w-8 h-8 text-warning" />
                <span className="text-2xl font-bold">{stream.overview.difficulty}</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl gradient-card border border-border shadow-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Skills Needed</p>
              <ul className="space-y-1 text-sm">
                {stream.overview.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-accent" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">🗺️ Your Roadmap</h2>
          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 gradient-primary rounded-full" />
            {stream.roadmap.map((r, i) => (
              <div key={i} className="relative mb-6 last:mb-0">
                <div className="absolute -left-8 md:-left-12 w-7 h-7 md:w-11 md:h-11 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-glow text-sm md:text-base">
                  {i + 1}
                </div>
                <div className="p-5 rounded-2xl gradient-card border border-border shadow-card hover:shadow-glow transition-smooth">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{r.emoji}</span>
                    <h3 className="font-bold text-lg">{r.stage}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exams */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">📝 Major Entrance Exams</h2>
          <div className="rounded-2xl border border-border overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="gradient-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold">Exam</th>
                    <th className="text-left p-4 font-semibold">Eligibility</th>
                    <th className="text-left p-4 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {stream.exams.map((e, i) => (
                    <tr key={e.name} className={cn("border-t border-border", i % 2 === 0 ? "bg-card" : "bg-muted/30")}>
                      <td className="p-4 font-bold text-primary">{e.name}</td>
                      <td className="p-4 text-muted-foreground">{e.eligibility}</td>
                      <td className="p-4">{e.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Colleges */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">🏛️ Top Colleges</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stream.colleges.map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-2xl gradient-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-bounce"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold whitespace-nowrap">
                    {c.tag}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" /> {c.location}
                </p>
                <div className="inline-block px-3 py-1.5 rounded-lg gradient-accent text-accent-foreground text-xs font-bold">
                  Cutoff: {c.cutoff}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Pick Your <span className="text-gradient">Stream</span>
        </h1>
        <p className="text-muted-foreground text-lg">Tap any stream to explore everything inside ✨</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {streams.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className="group text-left p-6 rounded-3xl gradient-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-bounce"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-bounce">{s.emoji}</div>
            <h3 className="text-xl font-bold mb-1">{s.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{s.tagline}</p>
            <div className="inline-flex items-center gap-1 text-sm text-primary font-semibold group-hover:gap-2 transition-smooth">
              Explore <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Streams;
