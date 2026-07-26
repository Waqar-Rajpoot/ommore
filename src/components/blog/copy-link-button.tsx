"use client";

import { useState } from "react";
import { LinkIcon } from "./icons";

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#12141B] px-4 py-2 text-sm font-medium text-[#C4C9D4] transition-colors hover:border-[#7C6FF0]/40 hover:text-white"
    >
      <LinkIcon className="h-4 w-4" />
      {copied ? "Link copied" : "Copy link"}
    </button>
  );
}