const MONTHS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

/** « 2026-10-01 » → « 1 octobre 2026 » (indépendant du fuseau horaire) */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d === 1 ? "1" : d} ${MONTHS[m - 1]} ${y}`;
}

export function readingMinutes(content: string): number {
  const words = content.replace(/[#>*\-\[\]()]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function extractHeadings(content: string): { id: string; text: string }[] {
  return content
    .split(/\n{2,}/)
    .filter((b) => b.startsWith("## "))
    .map((b) => {
      const text = b.replace(/^##\s+/, "").trim();
      return { id: slugifyHeading(text), text };
    });
}
