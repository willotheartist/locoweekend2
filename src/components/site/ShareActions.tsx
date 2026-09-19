"use client";

import { useState } from "react";
import { Link as LinkIcon, Mail } from "lucide-react";

export function ShareActions({ url, title }: { url: string; title: string }) {
  const [message, setMessage] = useState("");
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setMessage("Link copied");
    } catch {
      setMessage("Copy the address from your browser to share this story.");
    }
  }
  return (
    <div className="share-actions">
      <span className="eyebrow">Share</span>
      <button type="button" onClick={copyLink} aria-label="Copy article link">
        <LinkIcon size={16} />
      </button>
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        aria-label="Share article by email"
      >
        <Mail size={17} />
      </a>
      <span className="share-status" role="status">
        {message}
      </span>
    </div>
  );
}
