export function toSafeExternalLink(url: string, fallback: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return url;
    }
    return fallback;
  } catch {
    return fallback;
  }
}
