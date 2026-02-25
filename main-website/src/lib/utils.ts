import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Use for dynamic hrefs (e.g. from props/CMS) to prevent javascript:/data: etc. */
export function safeHref(url: string): string {
  if (!url || typeof url !== "string") return "#"
  const t = url.trim().toLowerCase()
  if (t.startsWith("javascript:") || t.startsWith("data:") || t.startsWith("vbscript:")) return "#"
  return url
}
