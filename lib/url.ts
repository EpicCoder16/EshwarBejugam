/** Ensures bare domains like "example.com" become valid absolute URLs. */
export function normalizeExternalUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

/** e.g. "https://instagram.com/aspiraroadmaps" → "@aspiraroadmaps" */
export function instagramHandle(url: string): string {
  const handle = url.replace(/\/$/, "").split("/").pop();
  return handle ? `@${handle}` : "Instagram";
}
