import { Link } from "react-router-dom";
import { Sparkles, Brain, Map, GraduationCap, Compass, ArrowRight, Rocket } from "lucide-react";

const features = [
  { icon: Brain, title: "Interest Quiz", desc: "Discover your strengths in 7 fun questions.", color: "primary" },
  { icon: Map, title: "Interactive Roadmaps", desc: "See your full path from 11th → career.", color: "secondary" },
  { icon: GraduationCap, title: "Top Colleges", desc: "Mock cutoffs, locations and rankings.", color: "accent" },
  { icon: Compass, title: "Alternative Careers", desc: "Diplomas, ITI, design — beyond the usual.", color: "success" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Built for Class 10 students 🚀</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] slide-up">
              Discover Your <br />
              <span className="text-gradient">Perfect Path</span> <br />
              After 10th
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
              Confused between Science, Commerce, Arts or something cooler? Take our quiz, explore streams, and meet your future-self in 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 slide-up">
              <Link
                to="/quiz"
                className="group relative px-8 py-4 rounded-2xl gradient-primary text-primary-foreground font-bold text-lg shadow-glow glow-pulse hover:scale-105 transition-bounce flex items-center gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                Take the Career Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link
                to="/streams"
                className="px-8 py-4 rounded-2xl bg-muted hover:bg-muted/70 font-semibold text-lg transition-smooth"
              >
                Explore Streams
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-12">
              {[
                { n: "10K+", l: "Students" },
                { n: "5", l: "Streams" },
                { n: "20+", l: "Careers" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-gradient">{s.n}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Everything you need, <span className="text-gradient">in one place</span>
          </h2>
          <p className="text-muted-foreground text-lg">No more random Google searches at 2 AM 😴</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-6 rounded-2xl gradient-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-bounce"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl gradient-${f.color === "primary" ? "primary" : f.color === "secondary" ? "secondary" : f.color === "accent" ? "accent" : "primary"} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA strip */}
      <section className="container pb-20">
        <div className="rounded-3xl gradient-hero p-8 md:p-12 text-center text-primary-foreground shadow-glow">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Ready to find your path?</h2>
          <p className="opacity-90 mb-6 max-w-xl mx-auto">7 questions. 2 minutes. Zero pressure. Pure clarity. ✨</p>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold hover:scale-105 transition-bounce"
          >
            Start Quiz Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
