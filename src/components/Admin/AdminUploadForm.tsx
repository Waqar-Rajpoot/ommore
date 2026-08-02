"use client";

import { useRef, useState } from "react";

interface UploadRecord {
  fileName: string;
  chunksIndexed: number;
  status: "success" | "error";
  detail?: string;
}

export default function AdminUploadForm() {
  const [secret, setSecret] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );
  const [history, setHistory] = useState<UploadRecord[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!secret.trim()) {
      setMessage({ type: "error", text: "Enter the admin secret first." });
      return;
    }
    if (!file) {
      setMessage({ type: "error", text: "Choose a PDF file to upload." });
      return;
    }
    if (file.type !== "application/pdf") {
      setMessage({ type: "error", text: "Only PDF files are accepted." });
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/ingest", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret.trim()}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        const errText = data?.error === "Unauthorized"
          ? "Wrong admin secret."
          : data?.detail || data?.error || "Upload failed.";
        setMessage({ type: "error", text: errText });
        setHistory((prev) => [
          { fileName: file.name, chunksIndexed: 0, status: "error", detail: errText },
          ...prev,
        ]);
        return;
      }

      setMessage({
        type: "success",
        text: `Indexed "${data.sourceFile}" — ${data.chunksIndexed} chunks added.`,
      });
      setHistory((prev) => [
        { fileName: data.sourceFile, chunksIndexed: data.chunksIndexed, status: "success" },
        ...prev,
      ]);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setMessage({ type: "error", text: "Network error — couldn't reach the server." });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-[#1E2733] bg-[#0E1420] p-6 shadow-2xl">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#4FD1C5]" />
        <div>
          <p className="font-mono text-sm tracking-tight text-[#E8ECEF]">
            ommore // knowledge base admin
          </p>
          <p className="text-xs text-[#5B6472]">Upload a PDF to add it to the assistant&apos;s knowledge</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-xs font-medium text-[#8A94A0]">
            Admin secret
          </label>
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter INGEST_SECRET"
            disabled={isUploading}
            className="w-full rounded-md border border-[#1E2733] bg-[#0B0F14] px-3 py-2 text-sm text-[#E8ECEF] placeholder-[#5B6472] outline-none focus:border-[#4FD1C5] disabled:opacity-50"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-[#8A94A0]">
            PDF file
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            disabled={isUploading}
            className="w-full rounded-md border border-[#1E2733] bg-[#0B0F14] px-3 py-2 text-sm text-[#D5DBE1] file:mr-3 file:rounded file:border-0 file:bg-[#4FD1C5] file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-[#08110F] disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className="w-full rounded-md bg-[#4FD1C5] px-4 py-2 text-sm font-medium text-[#08110F] transition disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isUploading ? "Uploading & indexing..." : "Upload and index"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm ${
            message.type === "success" ? "text-[#4FD1C5]" : "text-[#E5837A]"
          }`}
        >
          {message.text}
        </p>
      )}

      {history.length > 0 && (
        <div className="mt-6 border-t border-[#1E2733] pt-4">
          <p className="mb-2 text-xs font-medium text-[#8A94A0]">Recent uploads (this session)</p>
          <ul className="space-y-2">
            {history.map((h, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-md border border-[#1E2733] bg-[#0B0F14] px-3 py-2 text-xs"
              >
                <span className="truncate text-[#D5DBE1]">{h.fileName}</span>
                <span className={h.status === "success" ? "text-[#4FD1C5]" : "text-[#E5837A]"}>
                  {h.status === "success" ? `${h.chunksIndexed} chunks` : "failed"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}