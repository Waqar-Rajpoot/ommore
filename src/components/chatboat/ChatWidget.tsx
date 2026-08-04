"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FALLBACK_TEXT =
  "I don't have that information. Please contact us directly for details on this.";

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi — I can answer questions about our services, process, and policies. What do you want to know?",
};

const SESSION_STORAGE_KEY = "ommore_chat_session_id";

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  } catch {
    // localStorage unavailable (e.g. private browsing) — use an in-memory id for this tab session
    return crypto.randomUUID();
  }
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Lazy initializer: computed once on mount, no effect/setState cascade needed.
  const [sessionId, setSessionId] = useState<string>(() => getOrCreateSessionId());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
        body: JSON.stringify({ question, sessionId }),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = await res.json();

      // The backend may hand back a fresh sessionId (e.g. very first message) — keep it in sync.
      if (data.sessionId && data.sessionId !== sessionId) {
        setSessionId(data.sessionId);
        try {
          window.localStorage.setItem(SESSION_STORAGE_KEY, data.sessionId);
        } catch {
          // ignore
        }
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.answer || FALLBACK_TEXT },
      ]);
    } catch {
      setError("Couldn't reach the assistant. Please try again.");
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function startNewConversation() {
    const newId = crypto.randomUUID();
    setSessionId(newId);
    try {
      window.localStorage.setItem(SESSION_STORAGE_KEY, newId);
    } catch {
      // ignore
    }
    setMessages([WELCOME_MESSAGE]);
    setError(null);
  }

  return (
    <div className="glass-card flex h-[640px] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border-glass bg-glass shadow-glass backdrop-blur-glass backdrop-saturate-180">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-border-glass bg-surface-raised/80 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-medium tracking-tight text-text-primary">
              Ommore Assistant
            </p>
            <p className="text-xs text-text-secondary">Answers sourced from our knowledge base</p>
          </div>
        </div>

        <button
          type="button"
          onClick={startNewConversation}
          className="rounded-lg border border-border-glass px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-border-glow hover:text-text-primary"
        >
          New chat
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="chat-scroll flex-1 space-y-4 overflow-y-auto px-5 py-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-surface-raised) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <span className="mb-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-surface-raised text-[10px] font-semibold text-primary ring-1 ring-border-glass">
                AI
              </span>
            )}

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-glass ${
                msg.role === "user"
                  ? "rounded-br-sm bg-primary text-base"
                  : "rounded-bl-sm border border-border-glass bg-surface-raised text-text-primary"
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
                        <strong className="font-semibold text-text-primary">{children}</strong>
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
          <div className="flex items-end justify-start gap-2">
            <span className="mb-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-surface-raised text-[10px] font-semibold text-primary ring-1 ring-border-glass">
              AI
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border-glass bg-surface-raised px-4 py-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        {error && <p className="text-xs text-error">{error}</p>}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center gap-2 border-t border-border-glass bg-surface-raised/80 px-4 py-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our services, process, pricing..."
          disabled={isLoading}
          className="flex-1 rounded-lg border border-border-glass bg-surface px-3 py-2.5 text-sm text-text-primary placeholder-text-muted outline-none transition-colors focus:border-border-glow disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-base shadow-glow-sm transition-all hover:shadow-glow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          Send
        </button>
      </form>

      <style jsx global>{`
        .chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary-muted) transparent;
        }
        .chat-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background-color: var(--color-primary-muted);
          border-radius: 999px;
        }
        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-primary-dark);
        }
      `}</style>
    </div>
  );
}