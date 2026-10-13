import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function prettyUrl(url: string) {
  return decodeURIComponent(url)
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
}
