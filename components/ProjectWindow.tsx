"use client";

import { normalizeExternalUrl } from "@/lib/url";

type ProjectWindowProps = {
  liveUrl?: string;
  name: string;
  imagePath?: string;
  aspect?: string;
  dark?: boolean;
  interactive?: boolean;
  compact?: boolean;
};

/**
 * Renders a live, interactive "window" onto the project's real site when
 * liveUrl is set — otherwise shows a cover screenshot when imagePath is set,
 * or a labeled placeholder so nothing looks broken. Note: some sites send
 * X-Frame-Options / CSP frame-ancestors headers that block embedding entirely;
 * if that happens the frame will render blank and there's no workaround from
 * this side other than linking out instead.
 */
export default function ProjectWindow({
  liveUrl,
  name,
  imagePath,
  aspect = "aspect-[16/9]",
  dark = false,
  interactive = true,
  compact = false,
}: ProjectWindowProps) {
  const borderClass = dark ? "border-white/10" : "border-border";
  const bgClass = dark ? "bg-white/[0.03]" : "bg-bg-secondary";
  const textClass = dark ? "text-white/40" : "text-muted";

  const chromeBar = (
    <div
      className={`flex shrink-0 items-center justify-between border-b ${borderClass} ${bgClass} px-3 py-1.5`}
    >
      <span
        className={`font-mono ${compact ? "text-[8px]" : "text-[9px]"} tracking-widest ${textClass}`}
      >
        {liveUrl ? `LIVE — ${name.toUpperCase()}` : name.toUpperCase()}
      </span>
    </div>
  );

  if (liveUrl) {
    const src = normalizeExternalUrl(liveUrl);

    return (
      <div
        className={`flex w-full flex-col overflow-hidden border ${borderClass} ${bgClass}`}
      >
        {chromeBar}
        <div className={`relative w-full overflow-hidden ${aspect}`}>
          <iframe
            src={src}
            title={`Live preview of ${name}`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 h-full w-full ${interactive ? "" : "pointer-events-none"}`}
          />
        </div>
      </div>
    );
  }

  if (imagePath) {
    return (
      <div
        className={`flex w-full flex-col overflow-hidden border ${borderClass} ${bgClass}`}
      >
        {chromeBar}
        <div className={`relative w-full overflow-hidden ${aspect}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imagePath}
            alt={`${name} preview`}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col overflow-hidden border ${borderClass} ${bgClass}`}
    >
      {chromeBar}
      <div
        className={`flex w-full items-center justify-center ${aspect}`}
      >
        <span
          className={`px-3 text-center font-mono ${compact ? "text-[9px]" : "text-[11px]"} tracking-widest ${textClass}`}
        >
          {name.toUpperCase()} VISUAL
          <br />
          (ADD A COVER IMAGE OR LIVE URL IN lib/projects.ts)
        </span>
      </div>
    </div>
  );
}
