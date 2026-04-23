import { useState } from "react";
import { Link } from "react-router-dom";
import { quizQuestions, streamResults } from "@/data/mockData";
import { ArrowLeft, ArrowRight, Download, Sparkles, RefreshCw, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Phase = "quiz" | "loading" | "result";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [phase, setPhase] = useState<Phase>("quiz");
  const [result, setResult] = useState<{ primary: string; secondary: string } | null>(null);

  const current = quizQuestions[step];
  const progress = ((step + (answers[current?.id] ? 1 : 0)) / quizQuestions.length) * 100;

  const select = (optId: string) => {
    setAnswers({ ...answers, [current.id]: optId });
    setTimeout(() => {
      if (step < quizQuestions.length - 1) setStep(step + 1);
      else finish({ ...answers, [current.id]: optId });
    }, 350);
  };

  const finish = (final: Record<number, string>) => {
    setPhase("loading");
    setTimeout(() => {
      const tally: Record<string, number> = {};
      quizQuestions.forEach((q) => {
        const ans = q.options.find((o) => o.id === final[q.id]);
        ans?.tags.forEach((t) => (tally[t] = (tally[t] || 0) + 1));
      });
      const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
      setResult({ primary: sorted[0]?.[0] ?? "pcm", secondary: sorted[1]?.[0] ?? "arts" });
      setPhase("result");
    }, 2200);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setPhase("quiz");
    setResult(null);
  };

  if (phase === "loading") {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-4">
        <div className="relative">
          <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-50 glow-pulse" />
          <Loader2 className="w-20 h-20 text-primary animate-spin relative" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center">Calculating your future... ✨</h2>
        <p className="text-muted-foreground text-center">Reading your vibes, matching streams, decoding your dreams 🔮</p>
      </div>
    );
  }

  if (phase === "result" && result) {
    const primary = streamResults[result.primary];
    const secondary = streamResults[result.secondary];
    return (
      <div className="container py-12 max-w-3xl mx-auto fade-in">
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Your Personalized Career Report
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            You're a <span className="text-gradient">{primary.tagline}</span>
          </h1>
        </div>

        <div className="rounded-3xl gradient-hero p-8 text-primary-foreground shadow-glow mb-6">
          <div className="text-7xl mb-3">{primary.emoji}</div>
          <p className="text-sm opacity-90 uppercase tracking-wider mb-1">Your Best Match</p>
          <h2 className="text-3xl font-extrabold mb-3">{primary.name}</h2>
          <p className="opacity-95 leading-relaxed">{primary.description}</p>
        </div>

        <div className="rounded-2xl gradient-card border border-border p-6 mb-8 shadow-card">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Alternative Path 🔁</p>
          <div className="flex items-start gap-4">
            <div className="text-4xl">{secondary.emoji}</div>
            <div>
              <h3 className="font-bold text-lg">{secondary.name}</h3>
              <p className="text-sm text-muted-foreground">{secondary.description}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => alert("Mock: Your report PDF would download here 📄")}
            className="px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-glow hover:scale-105 transition-bounce"
          >
            <Download className="w-5 h-5" /> Download Report
          </button>
          <Link
            to={`/streams`}
            className="px-6 py-3 rounded-xl bg-muted hover:bg-muted/70 font-semibold flex items-center justify-center gap-2 transition-smooth"
          >
            Explore Streams <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-muted hover:bg-muted/70 font-semibold flex items-center justify-center gap-2 transition-smooth"
          >
            <RefreshCw className="w-4 h-4" /> Retake
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12 max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span className="font-medium">Question {step + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary transition-all duration-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div key={current.id} className="fade-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 float">{current.emoji}</div>
          <h2 className="text-2xl md:text-3xl font-extrabold">{current.question}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {current.options.map((opt) => {
            const selected = answers[current.id] === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => select(opt.id)}
                className={cn(
                  "group relative p-6 rounded-2xl border-2 text-left transition-bounce hover:-translate-y-1",
                  selected
                    ? "border-primary bg-primary/10 shadow-glow scale-[1.02]"
                    : "border-border bg-card hover:border-primary/50 shadow-card"
                )}
              >
                <div className="text-4xl mb-3">{opt.emoji}</div>
                <p className="font-semibold">{opt.text}</p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            disabled={step === 0}
            className="px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/70 font-medium flex items-center gap-2 disabled:opacity-40 transition-smooth"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <p className="text-sm text-muted-foreground self-center">Tap a card to continue ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
