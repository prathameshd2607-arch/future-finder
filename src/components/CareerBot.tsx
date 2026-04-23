import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { botResponses } from "@/data/mockData";
import { cn } from "@/lib/utils";

type Msg = { from: "bot" | "user"; text: string };

export const CareerBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Heyy! 👋 I'm CareerBot. Ask me about streams, exams, or careers!" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    const lower = userMsg.toLowerCase();
    const match = botResponses.find((r) => r.keywords.some((k) => lower.includes(k)));
    const reply = match?.reply ?? "Hmm, I'm a mock bot 🤖 Try keywords like 'science', 'commerce', 'JEE', 'NEET', 'CUET', 'arts' or 'diploma'!";
    setMessages((m) => [...m, { from: "user", text: userMsg }, { from: "bot", text: reply }]);
    setInput("");
  };

  const quickQs = ["I'm confused 😕", "What is CUET?", "Tell me about JEE"];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-glow flex items-center justify-center transition-bounce hover:scale-110",
          open && "scale-0 opacity-0 pointer-events-none"
        )}
        aria-label="Open CareerBot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[32rem] bg-card border border-border rounded-2xl shadow-soft flex flex-col overflow-hidden slide-up">
          <div className="gradient-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary-foreground">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">CareerBot</p>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-success inline-block" /> Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-2.5 rounded-2xl text-sm",
                    m.from === "user"
                      ? "gradient-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickQs.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(send, 50);
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask anything..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={send}
              className="w-10 h-10 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-smooth"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
