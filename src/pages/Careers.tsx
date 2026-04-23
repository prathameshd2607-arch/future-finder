import { Link } from "react-router-dom";
import { Briefcase, ArrowRight } from "lucide-react";

const careers = [
  { title: "Software Engineer", stream: "PCM", emoji: "💻", salary: "₹6-30 LPA", growth: "🔥 High" },
  { title: "Doctor (MBBS)", stream: "PCB", emoji: "🩺", salary: "₹8-50 LPA", growth: "📈 Stable" },
  { title: "Chartered Accountant", stream: "Commerce", emoji: "📊", salary: "₹7-25 LPA", growth: "📈 High" },
  { title: "UX / Product Designer", stream: "Arts / Vocational", emoji: "🎨", salary: "₹5-25 LPA", growth: "🔥 Very High" },
  { title: "Lawyer", stream: "Arts", emoji: "⚖️", salary: "₹6-40 LPA", growth: "📈 Stable" },
  { title: "Data Scientist", stream: "PCM", emoji: "📈", salary: "₹8-35 LPA", growth: "🔥 Very High" },
  { title: "Investment Banker", stream: "Commerce", emoji: "💼", salary: "₹12-50 LPA", growth: "🔥 High" },
  { title: "Animator / VFX Artist", stream: "Vocational", emoji: "🎬", salary: "₹4-20 LPA", growth: "📈 Growing" },
  { title: "Psychologist", stream: "Arts", emoji: "🧠", salary: "₹4-15 LPA", growth: "📈 Growing" },
  { title: "Civil Servant (IAS)", stream: "Any", emoji: "🏛️", salary: "₹7-25 LPA", growth: "👑 Prestige" },
  { title: "Biotech Researcher", stream: "PCB", emoji: "🧪", salary: "₹5-20 LPA", growth: "📈 Growing" },
  { title: "Entrepreneur", stream: "Any", emoji: "🚀", salary: "Unlimited", growth: "🔥 Endless" },
];

const Careers = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <Briefcase className="w-4 h-4" /> 12+ futures to explore
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Real <span className="text-gradient">Careers</span>, Real Paths
        </h1>
        <p className="text-muted-foreground text-lg">Salaries are mock data — actual ranges vary by skill, city & company.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {careers.map((c, i) => (
          <div
            key={c.title}
            className="group p-6 rounded-2xl gradient-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-bounce"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-4xl group-hover:scale-110 transition-bounce">{c.emoji}</div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                {c.stream}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-3">{c.title}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Avg Salary</span>
                <span className="font-bold text-success">{c.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Growth</span>
                <span className="font-semibold">{c.growth}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl gradient-hero p-8 md:p-12 text-center text-primary-foreground shadow-glow">
        <h2 className="text-3xl font-extrabold mb-3">Not sure which fits you?</h2>
        <p className="opacity-90 mb-6">Take the quiz — get matched in under 2 minutes.</p>
        <Link
          to="/quiz"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold hover:scale-105 transition-bounce"
        >
          Take Quiz <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Careers;
