"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FALLBACK_TEXT =
  "I don't have that information. Please contact us directly for details on this.";

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I can answer questions about our services, process, and policies. What do you want to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setError(null);
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || FALLBACK_TEXT },
      ]);
    } catch (err) {
      setError("Couldn't reach the assistant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-[640px] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-[#1E2733] bg-[#0B0F14] shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[#1E2733] bg-[#0E1420] px-5 py-4">
        <span className="h-2 w-2 rounded-full bg-[#4FD1C5]" />
        <div>
          <p className="font-mono text-sm tracking-tight text-[#E8ECEF]">ommore // assistant</p>
          <p className="text-xs text-[#5B6472]">Answers sourced from our knowledge base</p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto px-5 py-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #151C26 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-md px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#4FD1C5] text-[#08110F]"
                  : "border border-[#1E2733] bg-[#101722] text-[#D5DBE1]"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="markdown-message space-y-2">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="leading-relaxed">{children}</p>,
                      ul: ({ children }) => (
                        <ul className="list-disc space-y-1 pl-4">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal space-y-1 pl-4">{children}</ol>
                      ),
                      li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                      strong: ({ children }) => (
                        <strong className="font-semibold text-[#E8ECEF]">{children}</strong>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-md border border-[#1E2733] bg-[#101722] px-4 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FD1C5]" />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FD1C5]"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4FD1C5]"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        {error && <p className="text-xs text-[#E5837A]">{error}</p>}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center gap-2 border-t border-[#1E2733] bg-[#0E1420] px-4 py-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our services, process, pricing..."
          disabled={isLoading}
          className="flex-1 rounded-md border border-[#1E2733] bg-[#0B0F14] px-3 py-2 text-sm text-[#E8ECEF] placeholder-[#5B6472] outline-none focus:border-[#4FD1C5] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-md bg-[#4FD1C5] px-4 py-2 text-sm font-medium text-[#08110F] transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}